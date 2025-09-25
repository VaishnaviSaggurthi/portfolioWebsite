import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Professional portfolio showcasing full-stack development skills and projects',
  keywords: 'full stack developer, web development, react, node.js, portfolio',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development skills',
    url: 'https://yourportfolio.com',
    siteName: 'Your Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development skills',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}