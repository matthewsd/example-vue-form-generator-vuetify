import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
// Import fields
import DhTextField from '~/components/fields/dh-text-field'
import DhPassword from '~/components/fields/dh-password'
import DhSelect from '~/components/fields/dh-select'
import DhAutocomplete from '~/components/fields/dh-autocomplete'
import DmDatePickerMenu from '~/components/fields/dm-date-picker-menu'
import DmDatePickerDialog from '~/components/fields/dm-date-picker-dialog'
import DmTimePickerMenu from '~/components/fields/dm-time-picker-menu'
import DmTimePickerDialog from '~/components/fields/dm-time-picker-dialog'
import DmSlider from '~/components/fields/dm-slider'
import DmTextarea from '~/components/fields/dm-textarea'
import DmCombobox from '~/components/fields/dm-combobox'
import DmCheckbox from '~/components/fields/dm-checkbox'
import DmMultiCheckboxImage from '~/components/fields/dm-multi-checkbox-image'
import DmHazardControls from '~/components/fields/dm-hazard-controls'

// Add the form components to Vue (Register)
Vue.component('field-v-text-field', DhTextField)
Vue.component('fieldDhPassword', DhPassword)
Vue.component('fieldDhSelect', DhSelect)
Vue.component('fieldDhAutocomplete', DhAutocomplete)
Vue.component('field-v-date-picker-menu', DmDatePickerMenu)
Vue.component('field-v-date-picker-dialog', DmDatePickerDialog)
Vue.component('field-v-time-picker-menu', DmTimePickerMenu)
Vue.component('field-v-time-picker-dialog', DmTimePickerDialog)
Vue.component('field-v-slider', DmSlider)
Vue.component('field-v-textarea', DmTextarea)
Vue.component('field-v-combobox', DmCombobox)
Vue.component('field-v-checkbox', DmCheckbox)
Vue.component('field-sh-multi-checkbox-image', DmMultiCheckboxImage)
Vue.component('field-sh-hazard-controls', DmHazardControls)

Vue.use(VueFormGenerator)
