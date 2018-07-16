export const strict = false
export const state = () => (
  [
    {text: 'County a', value: 1},
    {text: 'County b', value: 2},
    {text: 'County c', value: 3}
  ]
)
export const getters = {
  get (state) {
    return state
  }
}
