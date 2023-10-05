import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rendezvous',
  description: 'Personal Journaling & Social Media App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={inter.className}>
            <Navbar/>
            <div>
              {children}
            </div>
          </body>
      </html>
    </ClerkProvider>
  )
}
