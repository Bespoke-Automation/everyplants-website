import './globals.css'
import { VisualEditing } from 'next-sanity/visual-editing'
import { draftMode } from 'next/headers'

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
