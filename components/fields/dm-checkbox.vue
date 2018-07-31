<template>
    <v-checkbox
            :label="schema.name"
            v-model="value"
            @blur="onBlur"
            @change="onChange"
            @focus="onFocus"
            @input="onInput"
            v-bind="schema.attributes"
    ></v-checkbox>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dm-checkbox',
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