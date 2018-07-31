<template>
    <v-layout>
        <v-flex xs10>
            <v-btn @click="showModel = !showModel">Toggle Model</v-btn>
            <template v-if="showModel">
                <v-card color="blue lighten-3" hover>
                    <pre>{{model}}</pre>
                </v-card>
                <br/>
            </template>

            <v-btn @click="stage = 0">close Stepper</v-btn>

            <v-card color="grey lighten-2">

                <v-card-title primary-title hover>
                    <div>
                        <div class="display-3">{{schema.title}}</div>
                        <span class="grey--text" v-if="schema.description" v-html="schema.description"></span>
                    </div>
                </v-card-title>

                <v-card-text>

                    <v-stepper v-model="stage" vertical>
                        <template v-for="(group, key) in schema.groups">
                            <v-stepper-step :step="group.id" editable complete
                                            :color="(stage === group.id ? 'success' : 'primary')">
                                {{group.title}}
                                <small v-if="group.description">{{group.description}}</small>
                            </v-stepper-step>

                            <v-stepper-content :step="group.id">
                                <v-card color="grey lighten-3" class="mb-5">
                                    <v-card-text>
                                        <vue-form-generator :schema="group" :model="model"
                                                            border="0"></vue-form-generator>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="primary" v-if="group.id > 1" @click="previousStage">back</v-btn>
                                        <v-spacer/>
                                        <v-btn color="primary" v-if="group.id < schema.groups.length"
                                               @click="nextStage">
                                            Continue
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-stepper-content>
                        </template>
                    </v-stepper>

                </v-card-text>
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
        // schema: 'forms/risk-assessment/getSchema',
        items: 'forms/risk-assessment/getItems'
      }),
      schema: function () {
        return {
          '@id': 1,
          '@name': '',
          'title': 'Risk Assessment',
          'description': 'Some description, both the title and the description are set in the schema',
          groups: [{
            id: 1,
            name: 'stage 1',
            title: 'Client Specific Fields',
            description: '',
            legend: null,
            fields: [{
              '@id': 1,
              '@label': '',
              model: 'stage1.project',
              name: 'Project Title',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.startDate',
              name: 'Start Date',
              type: 'v-date-picker-menu',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.duration',
              name: 'Duration',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.clientContact',
              name: 'Client Contact',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.reviewDate',
              name: 'Review Date',
              type: 'v-date-picker-menu',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.location',
              name: 'Location',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.firstAider',
              name: 'First Aider',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.jobNumber',
              name: 'Job Number',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.description',
              name: 'Description',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.equipment',
              name: 'Equipment',
              type: 'v-text-field',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {counter: 10, maxlength: 10}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.mainContractor',
              name: 'Main Contractor',
              type: 'v-textarea',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {}
            }, {
              '@id': 1,
              '@label': '',
              model: 'stage1.siteAddress',
              name: 'Site Address',
              type: 'v-textarea',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              attributes: {}
            }]
          }, {
            id: 2,
            name: 'stage 2',
            title: 'Persons and Groups affected',
            description: 'who is at risk?',
            legend: null,
            fields: [{
              '@id': 18,
              '@label': '',
              model: 'stage2.groups',
              name: 'Groups Affected',
              type: 'v-combobox',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: false,
              items: this.items.groupsAffected,
              attributes: {'item-value': 'id', 'item-text': 'name'}
            }, {
              '@id': 19,
              '@label': '',
              model: 'stage2.persons',
              name: 'Persons Affected',
              type: 'v-combobox',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: false,
              items: this.items.personsAffected,
              attributes: {}
            }]
          }, {
            id: 3,
            name: 'stage 3',
            title: 'Hazards and controls',
            description: '',
            legend: null,
            fields: [{
              '@id': 18,
              '@label': '',
              model: 'stage3.hazards',
              name: 'Hazards / Controls / Ranking',
              type: 'sh-hazard-controls',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: false,
              hazardItems: this.items.hazard
            }]
          }, {
            id: 4,
            name: 'Stage 4',
            title: 'Personal Protective Equipment',
            description: 'PPE',
            legend: null,
            fields: [{
              '@id': 18,
              '@label': '',
              model: 'stage4.ppe',
              name: 'Standard PPE',
              type: 'sh-multi-checkbox-image',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: false,
              attributes: {hover: true, tile: true},
              items: this.items.ppe
            }, {
              '@id': 158,
              '@label': '',
              model: 'stage4.ppe',
              name: 'Your Specific PPE',
              type: 'sh-multi-checkbox-image',
              placeholder: '',
              hint: 'These are PPEs specific to your company',
              required: true,
              rules: [],
              readonly: true,
              items: this.items.customPpe
            }]
          }, {
            id: 5,
            name: 'stage 5',
            title: 'Reason',
            description: 'Reason for the review and date of next review',
            legend: null,
            fields: []
          }, {
            id: 6,
            name: 'stage 6',
            title: 'just some tests',
            description: '',
            legend: null,
            fields: [{
              '@id': 2,
              '@label': '',
              model: 'nested.date',
              name: 'Date menu',
              type: 'v-date-picker-menu',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: true,
              attributes: {type: 'date'}
            }, {
              '@id': 3,
              '@label': '',
              model: 'nested.date',
              name: 'Date Dialog',
              type: 'v-date-picker-dialog',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: true,
              attributes: {type: 'date'}
            }, {
              '@id': 4,
              '@label': '',
              model: 'nested.time',
              name: 'time menu',
              type: 'v-time-picker-menu',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: false,
              attributes: {type: 'date', color: 'green'}
            }, {
              '@id': 5,
              '@label': '',
              model: 'nested.time',
              name: 'time dialog',
              type: 'v-time-picker-dialog',
              placeholder: '',
              hint: '',
              required: true,
              rules: [],
              readonly: false,
              attributes: {type: 'date', color: 'green'}
            }, {
              '@id': 6,
              '@label': '',
              model: 'nested.slider',
              name: 'Slider',
              type: 'v-slider',
              required: true,
              rules: [],
              readonly: false,
              attributes: {color: 'green', 'thumb-label': 'always', min: 0, max: 100, ticks: 'always', step: 10}
            }]
          }]
        }
      }
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
                'hazardId': 1,
                'group': 'access',
                'title': 'Walking Suits',
                'probability': 1,
                'severity': 1,
                'controls': [
                  {
                    'id': 2,
                    'title': 'control 2 for walking suits'
                  }
                ]
              },
              {
                'hazardId': 2,
                'group': 'access',
                'title': 'Confined Spaces',
                'probability': 1,
                'severity': 4,
                'controls': [
                  {
                    'id': 1,
                    'title': 'control 1 for confined spaces'
                  },
                  {
                    'id': 2,
                    'title': 'control 2 for confined spaces'
                  }
                ]
              }
            ]
          },
          stage4: {
            ppe: ['2', '22']
          },
          select: 5,
          autocomplete: 1,
          password: 'Secret'
        }
      }
    }
  }
</script>
<style>
    fieldset {
        border: 0 !important;
    }
</style>