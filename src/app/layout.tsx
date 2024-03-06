import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MyNavbar } from './components/navbar/MyNavbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rendezvous',
  description: 'Personal Journaling & Social Media App',
}

export default function RootLayout({children,}: {children: React.ReactNode
}) {

  return (
      <html lang="en">
          <body className={inter.className}>
            <MyNavbar/>
            {children}
          </body>
      </html>
  )
}
