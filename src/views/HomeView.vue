<template>
  <div class="home">
    <v-carousel
      class="mt-3"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
      >
        <v-sheet
            :color="colors[i]"
            height="100%"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div>
      <h1 class="text-4xl mt-5 mb-5">{{ $t('events.upcoming_events') }}</h1>
      <v-col cols="12">
        <event-card
          v-for="event in events"
          :key="event.id"
          :id="event.id"
          v-bind="event.attributes"
        />
      </v-col>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard";
export default {
  name: "HomeView",
  components: {EventCard},
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  computed: {
    events() {
      return this.$store.getters.events;
    },
  },
  created() {
    this.$store.dispatch('getEventsList');
  },
};
</script>
