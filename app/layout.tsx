import type { Metadata } from 'next'
import 'src/components/Product/Product.css'
import 'src/components/Cart/Cart.css'

export const metadata: Metadata = {
  title: 'I could not find the title',
  description: 'I could not find the description meta data in this file.',
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