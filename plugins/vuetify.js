import Vue from 'vue'
import Vuetify from 'vuetify'
import VueFormGenerator from 'vue-form-generator'
// Register my awesome field
import DhTextField from '~/components/fields/dh-text-field'
import DhPassword from '~/components/fields/dh-password'
import DhSelect from '~/components/fields/dh-select'

Vue.use(Vuetify)
Vue.component('fieldDhTextField', DhTextField)
Vue.component('fieldDhPassword', DhPassword)
Vue.component('fieldDhSelect', DhSelect)
Vue.use(VueFormGenerator)
