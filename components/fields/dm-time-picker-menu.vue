<template>
    <v-menu
            ref="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="value"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
            v-model="menu"
    >
        <v-text-field
                slot="activator"
                v-model="value"
                readonly
                :label="schema.name"
                :disabled="schema.disabled"
                :placeholder="schema.placeholder"
                :hint="schema.hint"

                @change="onChange"
                @focus="onFocus"
                @input="onInput"

        ></v-text-field>
        <v-time-picker
                v-if="menu"
                v-model="value"
                @change="$refs.menu.save(value)"
                v-bind="schema.attributes"
                :readonly="schema.readonly"
        ></v-time-picker>
    </v-menu>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dm-time-picker-menu',
    mixins: [abstractField],
    data: () => ({
      menu: false
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