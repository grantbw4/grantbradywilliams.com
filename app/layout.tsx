import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://grantbradywilliams.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Grant Brady Williams - Data Scientist',
    template: '%s | Grant Brady Williams',
  },
  description: 'Data scientist at the intersection of econometrics, statistics, and machine learning',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">😎</text></svg>',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Grant Brady Williams',
    title: 'Grant Brady Williams - Data Scientist',
    description: 'Data scientist at the intersection of econometrics, statistics, and machine learning',
    images: [
      {
        url: '/images/headshot.jpg',
        width: 300,
        height: 300,
        alt: 'Grant Brady Williams',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Grant Brady Williams - Data Scientist',
    description: 'Data scientist at the intersection of econometrics, statistics, and machine learning',
    images: ['/images/headshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Grant Brady Williams',
              url: siteUrl,
              jobTitle: 'Data Scientist',
              worksFor: {
                '@type': 'Organization',
                name: 'Tesla',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Harvard University',
              },
              sameAs: [
                'https://www.linkedin.com/in/grantbradywilliams/',
                'https://github.com/grantbw4',
                'https://substack.com/@grantbradywilliams',
              ],
              image: `${siteUrl}/images/headshot.jpg`,
              description: 'Data scientist at the intersection of econometrics, statistics, and machine learning',
            }),
          }}
        />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
