export const strict = false
export const state = () => (
  {
    model: {},
    schema: {
      '@id': 1,
      '@name': '',
      'title': 'hhh',
      'description': 'jjj',
      groups: [
        {
          name: 'stage 1',
          title: '',
          description: '',
          legend: null,
          fields: [
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            }
          ]
        },
        {
          name: 'stage 2',
          title: '',
          description: '',
          legend: null,
          fields: [
            {
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
              items: ['Staff Members', 'Members Of Public'],
              attributes: {}
            },
            {
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
              items: ['Dave Warren', 'Jordan Wright', 'Doug Hayward', 'Gareth Hopkins'],
              attributes: {}
            }
          ]
        },
        {
          name: 'stage 3',
          title: '',
          description: '',
          legend: null,
          fields: [
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
              '@id': 6,
              '@label': '',
              model: 'nested.slider',
              name: 'Slider',
              type: 'v-slider',
              required: true,
              rules: [],
              readonly: false,
              attributes: {color: 'green', 'thumb-label': 'always', min: 0, max: 100, ticks: 'always', step: 10}
            }
          ]
        }
      ]
    },
    options: {}
  }
)
export const mutations = {
  set (state, payload) {
    state.all = payload
  }
}
export const getters = {
  getSchema (state) {
    return state.schema
  },
  getModel (state) {
    return state.model
  }
}
