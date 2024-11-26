import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import '../globals.css'

export const metadata: Metadata = {
  title: 'Maksym Riznyk',
  description: 'Portfolio website of full stack developer Maksym Riznyk. Enjoy :)',
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
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
