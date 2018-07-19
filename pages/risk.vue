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
        schema: 'forms/risk-assessment/getSchema',
        items: 'items/get'
      })
    },
    components: {
      'vue-form-generator': VueFormGenerator.component
    },
    data () {
      return {
        model: {
          nested: {
            textField: 'A name',
            date: '1988-03-18',
            time: null,
            slider: 50
          },
          stage1: {
            project: '',
            startDate: null,
            duration: '',
            clientContact: '',
            reviewDate: null,
            location: '',
            firstAider: '',
            jobNumber: '',
            description: '',
            equipment: '',
            maincontractor: '',
            siteAddress: ''
          },
          stage2: {
            groups: [],
            persons: []
          },
          select: 5,
          autocomplete: 1,
          password: 'Secret'
        }
      }
    }
  }
</script>