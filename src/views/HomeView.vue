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
      <event-list></event-list>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import EventList from "@/components/EventList";
export default {
  name: "HomeView",
  components: {EventList},
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
};
</script>
