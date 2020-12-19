import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoBlob: undefined,
    alertShow: false,
    alertTitle: undefined,
    alertMessage: undefined,
    alertYesAction: undefined,
    alertNoAction: undefined
  },
  mutations: {},
  actions: {
    setPhotoBlob({ state }, payload) {
      state.photoBlob = payload
    },
    showAlert({ state }, payload) {
      state.alertShow = true
      state.alertTitle = payload.title
      state.alertMessage = payload.message
      state.alertYesAction = payload.yes,
      state.alertNoAction = payload.no
    }
  },
  modules: {}
})
