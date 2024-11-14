import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Link from "next/link"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "Front-end JS engineer test assessment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <header className="border-b-2 border-indigo-600">
          <div className="container mx-auto p-4">
          <Link href="/" className='text-3xl font-bold'>
            Car Dealing 🚙
          </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
