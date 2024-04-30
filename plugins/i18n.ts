import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
import { Locale } from 'vant'

export default defineNuxtPlugin(() => {
  // 载入 vant 语言包
  Locale.use('zh-CN', zhCN)
  Locale.use('en-US', enUS)

  if (import.meta.client) {
    const i18n = useNuxtApp().$i18n
    const { setLocale } = i18n

    const lang = localStorage.getItem('lang')

    if (lang) {
      setLocale(lang)
      Locale.use(lang)
    }
    else {
      setLocale(i18n.locale.value)
      Locale.use(i18n.locale.value)
    }
  }
})
