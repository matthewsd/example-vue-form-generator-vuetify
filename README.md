## Issue
Within /pages/index.vue I'm trying to use vue-form-generator whilst supplying Vuetify style fields which are being added as components within /plugins/vuetify.js


``` javascript
// pages/index.vue
<script>
  import VueFormGenerator from 'vue-form-generator'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        counties: 'counties/get'
      })
    },
    components: {
      'vue-form-generator': VueFormGenerator.component
    },
    data () {
      return {
        model: {
          select: null
        },
        schema: {
          fields: [
            {
              type: 'DhSelect',
              name: 'Select Type',
              model: 'select',
              items: this.counties
            }
          ]
        }
      }
    }
  }
</script>

```
``` javascript
// plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueFormGenerator from 'vue-form-generator'
import DhSelect from '~/components/fields/dh-select'

Vue.use(Vuetify)
Vue.component('fieldDhSelect', DhSelect)
Vue.use(VueFormGenerator)
```

Text fields are working fine, however the select is causing greif when trying to dynamically supply it with items (which would be required for this to work as intented),

Currently supplying items hard coded from a Vuex store, however when complete this will most likely be coming from the database.

The error given is:

```$xsltvue.runtime.esm.js:587
 [Vue warn]: The client-side rendered virtual DOM tree is not matching 
 server-rendered content. This is likely caused by incorrect HTML markup, 
 for example nesting block-level elements inside <p>, or missing <tbody>. 
 Bailing hydration and performing full client-side render.
```

If, instead of trying to use the computed property, I supply the Array directly to the property, this error does not occur. But this isn't a sufficient fix.



## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [Vuetify.js](https://vuetifyjs.com/) documentation.
