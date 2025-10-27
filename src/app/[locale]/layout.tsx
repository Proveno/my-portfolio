import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Toaster } from 'react-hot-toast'

import '../globals.css'

export const metadata: Metadata = {
  title: 'Maksym Riznyk',
  description: 'Portfolio website of full stack developer Maksym Riznyk. Enjoy :)',
  icons: {
    icon: '/icon.png?v=3',
    apple: '/icon.png?v=3',
  },
  openGraph: {
    title: 'Maksym Riznyk - Full Stack Developer',
    description: 'Portfolio website of full stack developer Maksym Riznyk. Enjoy :)',
    url: 'https://my-portfolio-sepia-mu-37.vercel.app/',
    siteName: 'Maksym Riznyk Portfolio',
    images: [
      {
        url: '/assets/MyImage.png',
        width: 1200, // Рекомендуемая ширина
        height: 630, // Рекомендуемая высота
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Toaster
            position='top-center'
            reverseOrder={false}
            toastOptions={{
              style: {
                background: '#2e2e4d',
                color: '#d1d5db',
                border: '1px solid #374151',
              },

              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#34d399',
                  secondary: '#1f1f2e',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#1f1f2e',
                },
              },
            }}
          />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
