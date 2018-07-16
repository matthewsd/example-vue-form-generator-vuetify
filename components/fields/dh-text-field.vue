<template>
    <v-text-field
            v-model="value"
            :label="schema.name"
            :readonly="schema.readonly"
            :disabled="schema.disabled"
            :placeholder="schema.placeholder"
            :counter="schema.counter"
            :hint="schema.hint"
            v-bind="schema.attributes"
            @blur="onBlur"
            @change="onChange"
            @focus="onFocus"
            @input="onInput"
    ></v-text-field>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dh-text-field',
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