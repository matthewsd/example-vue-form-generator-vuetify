<template>
    <v-layout>
        <v-flex xs10>
            <v-card>
                <v-card-title class="headline">Vue-Form-Generator with Vuetify</v-card-title>
                <v-card-text>
                    <vue-form-generator :schema="schema" :model="model"></vue-form-generator>
                </v-card-text>
                <v-card-text>
                    <!--<pre><strong>Schema:</strong>{{ schema }}</pre>-->
                    <pre><strong>Model:</strong>{{ model }}</pre>
                    <!--<pre><strong>Counties:</strong>{{ counties }}</pre>-->
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  import VueFormGenerator from 'vue-form-generator'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        items: 'items/get'
      }),
      schema () {
        return {
          fields: [
            {
              type: 'v-text-field',
              name: 'Text Field Type',
              model: 'nested.textField', // An example of a nested model property being reactive,
              attributes:
                { counter: 10, maxlength: 5 }
            },
            {
              type: 'DhPassword',
              name: 'Password Field Type',
              model: 'password'
            },
            {
              type: 'DhSelect',
              name: 'Select Type',
              model: 'select',
              items: this.items,
              itemText: 'name', // If these fields are not provided, it will fall back the the default Value/Text combo
              itemValue: 'id' // As above
            },
            {
              type: 'DhAutocomplete',
              name: 'Autocomplete Type',
              model: 'autocomplete',
              items: this.items
            }
          ]
        }
      }
    },
    components: {
      'vue-form-generator': VueFormGenerator.component
    },
    data () {
      return {
        model: {
          nested: {
            textField: 'A name'
          },
          select: 5,
          autocomplete: 1,
          password: 'Secret'
        }
      }
    }
  }
</script>