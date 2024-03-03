import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fit Recipes',
  description: 'Next with Contentful Project',
}

export default async function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}