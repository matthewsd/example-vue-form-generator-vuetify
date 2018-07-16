<template>
    <v-layout>
        <v-flex xs10>
            <v-card>
                <v-card-title class="headline">Vue-Form-Generator with Vuetify</v-card-title>
                <v-card-text>
                    <vue-form-generator :schema="schema" :model="model"></vue-form-generator>
                </v-card-text>
                <v-card-text>
                    <pre><strong>Schema:</strong>{{ schema }}</pre>
                    <pre><strong>Model:</strong>{{ model }}</pre>
                    <pre><strong>Counties:</strong>{{ counties }}</pre>
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
    },
    methods: {
      getCounties () {
        return this.counties
      }
    }
  }
</script>