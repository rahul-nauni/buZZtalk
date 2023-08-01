import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

import ToasrterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

const font = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'buZZtalk',
  description: 'Messaging web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthContext>
          <ToasrterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
