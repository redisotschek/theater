<template>
  <div>
    <v-icon>
      mdi-map-marker
    </v-icon>
    <a :href="`https://maps.google.com/?q=${location}`" target="_blank">{{location}}</a>
  </div>
</template>

<script>
export default {
  name: "LocationMarker",
  props: {
    location: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
