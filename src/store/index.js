import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoBlob: undefined
  },
  mutations: {},
  actions: {
    setPhotoBlob({ state }, payload) {
      state.photoBlob = payload
    }
  },
  modules: {}
})
