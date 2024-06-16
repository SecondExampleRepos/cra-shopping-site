import type { Metadata } from 'next'
import 'node_modules/sanitize.css/sanitize.css'
import 'node_modules/sanitize.css/typography.css'

export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}