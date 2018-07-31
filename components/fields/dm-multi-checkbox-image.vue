<template>
    <v-flex>
        <span class="headline">{{schema.name}}</span>
        <!--<small v-if="schema.hint"> - {{schema.hint}}</small>-->
        <v-layout align-center justify-left row fill-height wrap>

            <template v-for="(item, key) in schema.items">
                <v-tooltip top>

                    <v-card slot="activator" style="margin: 10px;" v-bind="schema.attributes">
                        <div @click="clickImage(item.value)"
                             :class="(isSelected(item.value)  ? 'item itemsel ' : 'item'  )">
                            <img :src="item.image"/>

                            <v-icon color="warning" class="status-readonly" v-if="schema.readonly">lock</v-icon>
                            <v-icon color="green darken-4" class="status-selected" v-if="isSelected(item.value)">done</v-icon>
                            <br/>
                            {{item.name}}
                        </div>
                    </v-card>

                    <span>{{item.name}} <small v-if="schema.readonly"> - readonly</small></span>
                </v-tooltip>
            </template>
        </v-layout>
    </v-flex>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dm-multi-checkbox-image',
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
      },
      isSelected: function (searchTerm) {
        let itemIndex = this.value.indexOf(searchTerm)
        return (itemIndex !== -1)
      },
      clickImage: function (searchTerm) {
        if (!this.schema.readonly) {
          let itemIndex = this.value.indexOf(searchTerm)
          if (itemIndex === -1) {
            this.value.push(searchTerm)
          } else {
            this.value.splice(itemIndex, 1)
          }
          this.onBlur()
          this.onChange()
          this.onFocus()
          this.onInput()
        }
      }
    }
  }
</script>

<style scoped>
    .item {
        min-height: 50px;
        min-width: 140px;
        max-width: 140px;
        width: 140px;
        padding: 4px;
        text-align: center;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .item img{
        padding:25px 0 15px 0;
    }

    .item, .item * {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .itemsel:after {
        content: " ";
        display: block;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 255, 0, 0.35);
    }

    .status-selected {
        position: absolute;
        top: 0px;
        right: 0;
    }

    .status-readonly {
        position: absolute;
        top: 0px;
        left: 0;
    }
</style>