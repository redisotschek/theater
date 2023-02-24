import Vue from 'vue'
import Vuex from 'vuex'
import {getEventsList} from "@/api/eventsClient";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    baseUrl: process.env.VUE_APP_BASE_URL,
  },
  getters: {
    events: state => state.events,
    baseUrl: state => state.baseUrl,
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setBaseUrl(state, baseUrl) {
      state.baseUrl = baseUrl;
    }
  },
  actions: {
    async getEventsList({commit}) {
      const res = (await getEventsList()).data;
      console.log(res)
      commit('setEvents', res.data);
      return res.data;
    },
  },
  modules: {
  }
})
