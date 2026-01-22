import './globals.css'
import { VisualEditing } from 'next-sanity/visual-editing'
import { draftMode } from 'next/headers'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  return (
    <html lang="nl">
      <body>
        {children}
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
