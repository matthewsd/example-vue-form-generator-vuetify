<template>
    <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="value"
            persistent
            lazy
            full-width
            width="290px"
    >
        <v-text-field
                slot="activator"
                v-model="value"
                readonly
                :label="schema.name"
                :readonly="schema.readonly"
                :disabled="schema.disabled"
                :placeholder="schema.placeholder"
                :hint="schema.hint"
                @change="onChange"
                @focus="onFocus"
                @input="onInput"
        ></v-text-field>
        <v-date-picker v-model="value" scrollable v-bind="schema.attributes" :readonly="schema.readonly">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(value)">OK</v-btn>
        </v-date-picker>
    </v-dialog>

</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dm-date-picker-dialog',
    mixins: [abstractField],
    data: () => ({
      modal: false
    }),
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