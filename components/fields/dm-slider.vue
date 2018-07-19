<template>
     <v-slider
            v-model="value"
            label="Label"
            :label="schema.name"
            :readonly="schema.readonly"
            :disabled="schema.disabled"
            :hint="schema.hint"
            @blur="onBlur"
            @change="onChange"
            @focus="onFocus"
            @input="onInput"
            v-bind="schema.attributes"
    ></v-slider>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dm-slider',
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