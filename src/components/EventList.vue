<template>
  <v-col cols="12">
    <event-card
        v-for="event in events"
        :key="event.id"
        v-bind="event"
    />
  </v-col>
</template>
<script>
import EventCard from "@/components/EventCard"
export default {
  name: 'EventList',
  components: {EventCard},
  computed: {
    events() {
      return this.$store.getters.events;
    },
  },
};
</script>
<style scoped></style>
