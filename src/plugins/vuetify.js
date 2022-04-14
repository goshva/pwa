import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import { fa } from 'vuetify/lib/iconsets/fa'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#110030',
          surface: '#3e007a',
          primary: '#ac5de7',
          secondary: '#1c9eea',
          accent: '#FFFFFF',
          error: '#FFFFFF'
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi, fa
      }
    }
  }
})
