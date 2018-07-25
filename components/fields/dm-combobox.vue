<template>
    <v-combobox
            v-model="value"
            :items="schema.items"
            :search-input.sync="search"
            hide-selected
            :hint="schema.hint"
            :label="schema.name"
            :required="schema.required"
            :readonly="schema.readonly"
            :disabled="schema.disabled"
            multiple
            persistent-hint
            small-chips
            v-bind="schema.attributes"
    >
        <template slot="no-data">
            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>
                        No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new
                        one
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-combobox>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dm-combobox',
    mixins: [abstractField],
    watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      }
    },
    data: () => ({
      search: null
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