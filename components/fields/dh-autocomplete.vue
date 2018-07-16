<template>
    <v-autocomplete
            v-model="value"
            :items="schema.items"
            persistent-hint
            prepend-icon="mdi-city"
    ></v-autocomplete>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dh-autcomplete',
    mixins: [abstractField],
    methods: {
      onBlur: function () {
        this.$emit('blur')
      },
      onChange: function () {
        this.$emit('change')
      },
      onFocus: function () {
        this.$emit('focus')
      },
      onInput: function () {
        this.$emit('input')
      }
    }
  }
</script>