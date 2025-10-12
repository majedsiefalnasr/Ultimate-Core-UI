import {setup} from '@storybook/vue3'
import {createVuetify} from 'vuetify'
import 'vuetify/styles'
import '../src/styles/index.scss'

const vuetify = createVuetify()

setup(app => {
  app.use(vuetify)
})
