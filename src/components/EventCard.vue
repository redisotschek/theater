<template>
  <v-card
    class="my-3 pa-5"
  >
    <v-card-title class="text-h5 pa-0 mb-2">
      {{name}}
    </v-card-title>
    <v-row class="pa-0 ma-0">
      <calendar-page :date="date"></calendar-page>
      <img :src="imgUrl" class="show-img mx-3" />

      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn
            color="primary"
            to="/"
            text>
          Tickets
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
  import {getAttributesFromBody} from "@/utils";

  import CalendarPage from "@/components/CalendarPage";
  export default {
    name: 'EventCard',
    components: {CalendarPage},
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
      price: {
        type: Number,
        required: true
      },
      image: {
        type: Object,
        required: true
      },
      tickets_available: {
        type: String,
        required: true
      }
    },
    data: (() => {
      return {
      }
    }),
    computed: {
      baseUrl() {
        return this.$store.getters.baseUrl;
      },
      imgUrl() {
        return this.baseUrl + getAttributesFromBody(this.image).url;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .show-img {
    width: 10em;
    height: auto;
    object-fit: cover;
  }
</style>
