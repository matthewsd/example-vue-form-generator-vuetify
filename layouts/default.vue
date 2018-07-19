<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        Vutify-Vue-Form-Generator Example
      </v-toolbar-title>
      <v-spacer/>
      <v-btn flat nuxt to="/">Initial Example</v-btn>
      <v-btn flat nuxt to="/risk">Risk Example</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
