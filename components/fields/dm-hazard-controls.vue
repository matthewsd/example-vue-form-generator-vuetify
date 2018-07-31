<template>
    <v-flex>
        <span class="headline">{{schema.name}}</span>


        <div>
            <v-toolbar color="white" class="elevation-1">
                <v-toolbar-title>Hazards and Controls</v-toolbar-title>
                <v-divider
                        class="mx-2"
                        inset
                        vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark class="mb-2" @click="newItem()">New Item</v-btn>
                <v-dialog v-model="dialog" max-width="500px">
                    <!--<v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>-->
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-md>

                                <v-autocomplete
                                        label="Hazard"
                                        v-model="hazardValue"
                                        :items="hazards"
                                        item-text="title"
                                        item-value="id"
                                        :disabled="isDisabled()"
                                        hide-selected
                                        :clearable="!isDisabled()"
                                        bottom
                                        auto
                                />
                                <v-autocomplete
                                        label="Controls"
                                        v-model="editedItem.controls"
                                        :items="controls"
                                        item-text="title"

                                        hide-selected
                                        clearable
                                        multiple
                                        small-chips
                                        bottom
                                        return-object
                                        auto
                                />

                                <v-select
                                        label="Probability"
                                        v-model="editedItem.probability"
                                        :items="probability"

                                        item-text="title"
                                        item-value="id"

                                        clearable
                                        bottom
                                        auto
                                />
                                <v-select
                                        label="Severity"
                                        v-model="editedItem.severity"
                                        :items="severity"

                                        item-text="title"
                                        item-value="id"

                                        clearable
                                        bottom
                                        auto


                                />

                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                            <v-btn
                                    color="blue darken-1"
                                    flat
                                    :disabled="
                                        !hazardValue ||
                                        editedItem.controls.length < 1 ||
                                        editedItem.probability < 1 ||
                                        editedItem.severity < 1"
                                    @click.native="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-data-table
                    :headers="[
                    {
                        text: 'Hazard Group',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                      {text: 'Hazard', value: 'title'},
                      {text: 'Probability', value: 'probability'},
                      {text: 'Severity', value: 'severity'},
                      {text: 'Number of Controls', value: 'controls.length'},
                      {text: 'Actions', value: 'name', sortable: false, align: 'right'}
                  ]"
                    :items="value"
                    hide-actions
                    class="elevation-2"
                    item-key="hazardId"
            >
                <template slot="items" slot-scope="props">
                    <tr>
                        <td @click="props.expanded = !props.expanded">{{ props.item.group }}</td>
                        <td @click="props.expanded = !props.expanded" class="">{{ props.item.title }}</td>
                        <td @click="props.expanded = !props.expanded" class="">{{
                            probability[props.item.probability].title }}
                        </td>
                        <td @click="props.expanded = !props.expanded" class="">{{ severity[props.item.severity].title
                            }}
                        </td>
                        <td @click="props.expanded = !props.expanded" class="">{{ props.item.controls.length }}</td>
                        <td class="text-xs-right">
                            <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(props.item)"
                            >
                                edit
                            </v-icon>
                            <v-icon
                                    small
                                    @click="deleteItem(props.item)"
                            >
                                delete
                            </v-icon>
                        </td>
                    </tr>
                </template>
                <template slot="expand" slot-scope="props">
                    <v-card flat>


                        <v-data-table
                                class="elevation-4"
                                :headers="[
                                    {text: `${props.item.text} control`, value: 'text', class: 'grey lighten-2'},
                                ]"
                                :items="props.item.controls"
                                hide-actions
                        >
                            <template slot="items" slot-scope="props">
                                <tr>
                                    <td>{{ props.item.title }}</td>
                                </tr>
                            </template>
                        </v-data-table>

                    </v-card>
                </template>
            </v-data-table>
        </div>
    </v-flex>
</template>

<script>
  import {abstractField} from 'vue-form-generator'

  export default {
    name: 'dm-hazard-controls',
    mixins: [abstractField],
    data () {
      return {
        dialog: false,
        hazardValue: null,
        hazards: [],
        controls: [],
        editedIndex: -1,
        editedItem: {
          hazardId: 0,
          group: null,
          title: null,
          probability: 0,
          severity: 0,
          controls: []
        },
        defaultItem: {
          hazardId: 0,
          group: null,
          title: null,
          probability: 0,
          severity: 0,
          controls: []
        },
        probability: [
          {id: 0, title: 'please Select a Probability'},
          {id: 1, title: '1: Highly Unlikely'},
          {id: 2, title: '2: Unlikely'},
          {id: 3, title: '3: Possible'},
          {id: 4, title: '4: Probable'},
          {id: 5, title: '5: Certain'}
        ],
        severity: [
          {id: 0, title: 'please Select a Severity'},
          {id: 1, title: '1: Trivial'},
          {id: 2, title: '2: Minor'},
          {id: 3, title: '3: Over 3 Day Injury'},
          {id: 4, title: '4: Major Injury'},
          {id: 5, title: '5: Incapacity or Death'}
        ]
      }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      hazardValue: function () {
        this.setHazard()
      }
    },
    methods: {
      newItem: function () {
        this.hazards = []
        if (this.editedIndex === -1) {
          this.hazardValue = null
          this.editedItem = Object.assign({}, this.defaultItem)
        }
        let selected = []
        for (let i = 0; i < this.value.length; i++) {
          selected.push(this.value[i].hazardId)
        }

        for (let x = 0; x < this.schema.hazardItems.length; x++) {
          let item = this.schema.hazardItems[x]
          if (selected.indexOf(item.id) === -1) {
            this.hazards.push(item)
          }
        }
        this.dialog = true
      },
      isDisabled () {
        return (this.editedIndex >= 0)
      },
      setHazard: function () {
        this.editedItem.hazardId = this.hazardValue
        this.editedItem.group = this.hazardValue
        for (let i = 0; i < this.schema.hazardItems.length; i++) {
          let item = this.schema.hazardItems[i]
          if (item.id === this.hazardValue) {
            this.controls = item.controls
            this.editedItem.group = item.group
            this.editedItem.title = item.title
          }
        }
      },
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
      editItem (item) {
        this.hazards = this.schema.hazardItems
        this.editedIndex = this.value.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.hazardValue = item.hazardId
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.value.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.value.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        this.setHazard()
        if (this.editedIndex > -1) {
          Object.assign(this.value[this.editedIndex], this.editedItem)
        } else {
          this.value.push(this.editedItem)
        }
        this.close()
        this.onInput()
      }
    }
  }
</script>

<style scoped>
</style>