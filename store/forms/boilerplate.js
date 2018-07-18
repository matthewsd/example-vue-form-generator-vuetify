export const strict = false
export const state = () => (
  {
    model: {},
    schema: {
      '@id': 1,
      '@name': '',
      title: '',
      subTitle: '',
      description: '',
      groups: [
        {
          name: 'stage 1',
          title: '',
          description: '',
          legend: null,
          fields: [
            { '@id': 1, '@label': '', model: '', type: '', placeholder: null, hint: '', required: '', rules: [], attributes: '' }
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
