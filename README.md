# Vuetify From Generator

This isn't ready yet, but it's getting there.

If you look in `/pages/index.vue` you can see the for generator working. And the way I'm adding to the fields if by first creating a template in `/components/fields/**.vue` and then within `/plugins/vuetify.js` I'm adding them to the compilation. 

It may not e the cleanest way to do this, but It at least is working.

If you wish to add to the fields feel free, I'm currently playing with the idea of defining the common properties on the template eg `Label, Hint, Placeholder etc.` and the others such as `max, min` we'll store inside an attributes property. You can see an example of this working on the DhTextField

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [Vuetify.js](https://vuetifyjs.com/) documentation.
