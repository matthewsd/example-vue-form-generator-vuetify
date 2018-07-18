export const strict = false
export const state = () => (
  {
    model: {},
    schema: {},
    options: {},
    salutations: ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']
  }
)
export const mutations = {
  async setSchema (state, payload) {
    state.schema = {
      '@id': 1,
      '@name': 'accident-book',
      title: 'Accident Book',
      subTitle: null,
      description: 'A little description regarding the details requested on this stage. It should be helpfull and light',
      groups: [
        {
          name: 'You & Org',
          title: 'You & Organisation',
          subTitle: 'Details about you and your organisation',
          description: 'A little description regarding the details requested on this stage. It should be helpfull and light.',
          legend: null,
          fields: [
            { '@id': 'contact_title', '@label': 'Title', model: 'contact.title', items: state.salutations, type: 'v-select', placeholder: null, hint: null, required: false, rules: null, attributes: '' },
            { '@id': 'contact_forename', '@label': 'Forename', model: 'contact.forename', type: 'v-text-field', placeholder: null, hint: null, required: true, rules: [], attributes: { minlength: 5, maxlength: 30 } }
          ]
        }
        // ,
        // {
        //   name: 'stage 1',
        //   title: '',
        //   description: '',
        //   legend: null,
        //   fields: [
        //     { '@id': 1, '@label': '', model: '', type: '', placeholder: null, hint: '', required: '', rules: [], attributes: '' }
        //   ]
        // }
      ]
    }
  }
}
export const getters = {
  async getSchema ({state, context}) {
    await context.commit('setSchema')
    return state.schema
  },
  getModel (state) {
    return state.model
  }
}
