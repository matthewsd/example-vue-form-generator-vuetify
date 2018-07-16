export const strict = false
export const state = () => (
  [
    {text: 'Item a', value: 1, name: 'ITEM A', id: 4},
    {text: 'Item b', value: 2, name: 'ITEM B', id: 5},
    {text: 'Item c', value: 3, name: 'ITEM C', id: 6}
  ]
)
export const getters = {
  get (state) {
    return state
  }
}
