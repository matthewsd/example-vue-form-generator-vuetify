<template>
    <v-select
            v-model="value"
            :items="schema.items"
            :label="schema.name"
            :required="schema.required"
            :readonly="schema.readonly"
            :disabled="schema.disabled"
            single-line
            bottom
            auto
    ></v-select>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dh-select',
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