<template>
  <v-app>
    <v-app-bar
      app
      dense
      dark
    >
      <div class="d-flex align-center">
        <v-btn depressed to="/">
          <strong>Performance61</strong>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        class="mr-3"
        to="/"
        text
      >
        <span>{{$t("tickets")}}</span>
      </v-btn>

      <v-btn
        class="mr-3"
        to="/"
        text
      >
        <span>{{$t("gallery")}}</span>
      </v-btn>

      <v-btn
        to="/"
        text
      >
        <span>{{$t("contacts")}}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Performance61</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch('getEventsList');
  }
};
</script>
