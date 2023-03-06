<template>
  <article>
    <v-container>
      <div class="d-flex">
        <calendar-page class="date-text" :date="event.date"></calendar-page>
        <h1 class="text-left name-text my-3 px-3">{{event.name}}</h1>
      </div>
      <v-row align-content="center" class="mt-3">
        <v-col sm="12" lg="4">
          <v-img
            :src="baseUrl + event.img"
            :alt="event.name"
            max-width="100%"
            contain
          ></v-img>
          <div class="my-4">
            <calendar-page class="date-text" :date="event.date" :length="event.length" plain></calendar-page>
            <location-marker class="location-text" :location="event.location"/>
          </div>
        </v-col>
        <v-col class="mb-3">
          <pre class="description-text" v-html="event.description"></pre>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-container>
  </article>
</template>
<script>
import LocationMarker from "@/components/LocationMarker";
import CalendarPage from "@/components/CalendarPage";
export default {
  name: 'EventView',
  components: {LocationMarker, CalendarPage},
  data() {
    return {
      eventId: '',
    }
  },
  mounted() {
    this.eventId = this.$route.params.id;
  },
  computed: {
    event() {
      return this.$store.getters.event(this.eventId);
    },
    baseUrl() {
      return this.$store.getters.baseUrl;
    },
  },
};
</script>

<style scoped>
.date-text, .location-text {
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
}
.name-text {
  font-size: 2rem;
  font-weight: 500;
}
.description-text {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
</style>
