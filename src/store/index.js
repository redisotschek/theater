import Vue from 'vue'
import Vuex from 'vuex'
import {getEventsList} from "@/api/eventsClient";
import {getAttributesFromBody} from "@/utils";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    baseUrl: process.env.VUE_APP_BASE_URL,
  },
  getters: {
    events: state => state.events,
    baseUrl: state => state.baseUrl,
    event: (state) => (id) => {
      return state.events.find(event => event.id == id)
    },
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
      const events = res.data.map(event => {
        const image = getAttributesFromBody(event.attributes.image).url;
        return ({id: event.id, img: image, ...event.attributes})
      })
      commit('setEvents', events);
      return events;
    },
  },
  modules: {
  }
})
