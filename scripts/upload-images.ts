import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

config({ path: '.env.local' })

const client = createClient({
  projectId: 'honhpkms',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const contentDir = './content'

// Image assignments based on visual content
const imageAssignments = {
  // Hero image - use a nice greenhouse overview
  hero: 'Pro-Capture One 0111.JPG',

  // About section image - another greenhouse shot
  about: 'Pro-Capture One 0059.JPG',

  // Value props images (3 diensten)
  valueProps: [
    'Pro-Capture One 0150.JPG', // Groothandel - Monstera
    'Pro-Capture One 0196.JPG', // Assortiment - Ficus
    'Pro-Capture One 0123.JPG', // E-Fulfilment
  ],

  // How it works steps (4 stappen)
  howItWorks: [
    'Pro-Capture One 0061.JPG',
    'Pro-Capture One 0069.JPG',
    'Pro-Capture One 0071.JPG',
    'Pro-Capture One 0074.JPG',
  ],

  // Assortment categories (5 categorieën)
  categories: [
    'Pro-Capture One 0077.JPG',  // Kamerplanten
    'Pro-Capture One 0089.JPG',  // Mediterrane planten
    'Pro-Capture One 0115.JPG',  // Kunstplanten
    'Pro-Capture One 0120.JPG',  // Kunstbloemen
    'Pro-Capture One 0125.JPG',  // Potten
  ],
}

async function uploadImage(filename: string): Promise<{ _type: string; asset: { _type: string; _ref: string } }> {
  const filepath = path.join(contentDir, filename)
  console.log(`  Uploading ${filename}...`)

  const imageBuffer = fs.readFileSync(filepath)
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: filename,
  })

  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id,
    },
  }
}

async function uploadAllImages() {
  console.log('Starting image upload...\n')

  try {
    // Upload hero image
    console.log('Uploading Hero image...')
    const heroImage = await uploadImage(imageAssignments.hero)

    // Upload about image
    console.log('Uploading About image...')
    const aboutImage = await uploadImage(imageAssignments.about)

    // Upload value props images
    console.log('Uploading Value Props images...')
    const valuePropImages = []
    for (const filename of imageAssignments.valueProps) {
      valuePropImages.push(await uploadImage(filename))
    }

    // Upload how it works images
    console.log('Uploading How It Works images...')
    const howItWorksImages = []
    for (const filename of imageAssignments.howItWorks) {
      howItWorksImages.push(await uploadImage(filename))
    }

    // Upload category images
    console.log('Uploading Category images...')
    const categoryImages = []
    for (const filename of imageAssignments.categories) {
      categoryImages.push(await uploadImage(filename))
    }

    console.log('\nAll images uploaded! Now updating homepage...\n')

    // Update homepage with images
    await client.patch('homepage')
      .set({
        'hero.heroImage': heroImage,
        'about.image': aboutImage,
        'valueProps.items[0].image': valuePropImages[0],
        'valueProps.items[1].image': valuePropImages[1],
        'valueProps.items[2].image': valuePropImages[2],
        'howItWorks.steps[0].image': howItWorksImages[0],
        'howItWorks.steps[1].image': howItWorksImages[1],
        'howItWorks.steps[2].image': howItWorksImages[2],
        'howItWorks.steps[3].image': howItWorksImages[3],
        'assortment.categories[0].image': categoryImages[0],
        'assortment.categories[1].image': categoryImages[1],
        'assortment.categories[2].image': categoryImages[2],
        'assortment.categories[3].image': categoryImages[3],
        'assortment.categories[4].image': categoryImages[4],
      })
      .commit()

    console.log('✓ Homepage updated with all images!')
    console.log('\n' + '='.repeat(50))
    console.log('Image upload complete!')
    console.log('='.repeat(50))

  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

uploadAllImages()
