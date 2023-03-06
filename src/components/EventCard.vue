<template>
  <v-card
    class="my-3 pa-5"
  >
    <v-row class="pa-0 ma-0">
      <calendar-page :date="date"></calendar-page>
      <v-img
         :alt="name + ' image'"
         class="shrink mx-3"
         contain
         :src="imgUrl"
         transition="scale-transition"
         width="100"
      ></v-img>
      <v-col>
        <v-card-title class="text-h5 pa-0 mb-2">
          <router-link class="text-decoration-none card-title" :to="`/event/${id}`">{{name}}</router-link>
        </v-card-title>

        <v-card-subtitle
            class="pa-0 mt-1"
        >
          <location-marker :location="location"/>
        </v-card-subtitle>
      </v-col>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn
          color="primary"
          :to="`/event/${id}`"
        >
          {{ $t('tickets') }}
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>

  import CalendarPage from "@/components/CalendarPage";
  import LocationMarker from "@/components/LocationMarker";
  export default {
    name: 'EventCard',
    components: {LocationMarker, CalendarPage},
    props: {
      id: {
        type: Number,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required: true
      },
      tickets_available: {
        type: String,
        required: true
      }
    },
    computed: {
      baseUrl() {
        return this.$store.getters.baseUrl;
      },
      imgUrl() {
        return this.baseUrl + this.img;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card-title {
    color: black;
  }
</style>
