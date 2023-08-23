import Footer from '@/components/footer'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Xquisite',
  description: 'Xquisite e-commerce services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
