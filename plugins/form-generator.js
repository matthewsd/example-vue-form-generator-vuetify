import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
// Import fields
import DhTextField from '~/components/fields/dh-text-field'
import DhPassword from '~/components/fields/dh-password'
import DhSelect from '~/components/fields/dh-select'
import DhAutocomplete from '~/components/fields/dh-autocomplete'

// Add the form components to Vue (Register)
Vue.component('field-v-text-field', DhTextField)
Vue.component('fieldDhPassword', DhPassword)
Vue.component('fieldDhSelect', DhSelect)
Vue.component('fieldDhAutocomplete', DhAutocomplete)

Vue.use(VueFormGenerator)
