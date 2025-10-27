'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, target: string, params?: { [key: string]: any }) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export const GoogleAnalytics = () => {
  const pathname = usePathname()
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') {
      return
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
    })
  }, [pathname])

  if (process.env.NODE_ENV !== 'production' || !GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Инициализируем gtag, но отключаем автоматический pageview,
            // так как мы будем отправлять его вручную через useEffect
            gtag('config', '${GA_MEASUREMENT_ID}', {
               send_page_view: false
            });
          `,
        }}
      />
    </>
  )
}
