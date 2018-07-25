<template>
    <v-layout>
        <v-flex xs10>
            <v-btn @click="showModel = !showModel">Toggle Model</v-btn>
            <template v-if="showModel">
                <v-card>
                    <pre>{{model}}</pre>
                </v-card>
                <br/>
            </template>

            <v-btn @click="stage = 0">close Stepper</v-btn>

            <v-card>

                <v-stepper v-model="stage" vertical>
                    <template v-for="(group, key) in schema.groups">
                        <v-stepper-step :step="group.id" editable>
                            {{group.title}}
                            <small v-if="group.description">{{group.description}}</small>
                        </v-stepper-step>

                        <v-stepper-content :step="group.id">
                            <v-card color="grey lighten-1" class="mb-5">
                                <vue-form-generator :schema="group" :model="model"></vue-form-generator>
                            </v-card>
                            <v-card>
                                <v-card-actions>
                                    <v-btn color="primary" v-if="group.id > 1" @click="previousStage">back</v-btn>
                                    <v-spacer/>
                                    <v-btn color="primary" v-if="group.id < schema.groups.length" @click="nextStage">
                                        Continue
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-stepper-content>
                    </template>
                </v-stepper>

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
    methods: {
      previousStage: function () {
        if (this.stage > 1) {
          this.stage--
        }
      },
      nextStage: function () {
        if (this.stage < this.schema.groups.length) {
          this.stage++
        }
      }
    },
    data () {
      return {
        showModel: false,
        stage: 1,
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
          stage3: {
            hazards: [
              {
                probability: 0,
                severity: 0,
                controls: []
              }
            ]
          },
          stage4: {
            ppe: []
          },
          select: 5,
          autocomplete: 1,
          password: 'Secret'
        }
      }
    }
  }
</script>