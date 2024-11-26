import { en } from '@/lib/locales/en'
import { ua } from '@/lib/locales/ua'
import { ru } from '@/lib/locales/ru'

import { useRouter as detailedRouter } from 'next/router'

export function getLocale() {
  const router = detailedRouter()
  switch (router.locale) {
    case 'ru':
      return ru
    case 'ua':
      return ua

    case 'en':
      return en
    default:
      return en
  }
}
