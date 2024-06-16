import type { Metadata } from 'next'
import 'src/components/Product/Product.css'
import 'src/components/Cart/Cart.css'

export const metadata: Metadata = {
  title: 'React Shop',
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