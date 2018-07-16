<template>
    <v-text-field
            v-model="value"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :rules="schema.rules"
            :type="show ? 'text' : 'password'"
            :label="schema.name"
            :hint="schema.hint"
            v-on:click:append="show = !show"
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
    name: 'dh-password',
    mixins: [abstractField],
    data () {
      return {
        show: false
      }
    },
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