<template>
    <v-autocomplete
            v-model="value"
            :items="schema.items"
            :label="schema.name"
            :required="schema.required"
            :readonly="schema.readonly"
            :disabled="schema.disabled"
            :item-text="schema.itemText"
            :item-value="schema.itemValue"
            single-line
            bottom
            auto
    ></v-autocomplete>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dh-autocomplete',
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