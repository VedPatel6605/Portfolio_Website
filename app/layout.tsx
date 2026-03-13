import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ved-Patel_Portfolio',
  description: 'Created by Ved Patel',
  generator: 'vedpatel.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
