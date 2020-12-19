<template>
  <v-app id="app">
    <v-app-bar app color="primary" v-show="!$route.meta.hideNav" dark>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      <span class="title">{{ $route.name }}</span>
      <v-spacer></v-spacer>
      <v-btn v-if="$store.state.photoBlob" @click="savePhoto" text>
        Save Photo
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <v-dialog v-model="$store.state.alertShow">
        <v-card>
          <v-card-title>{{ $store.state.alertTitle }}</v-card-title>
          <v-card-text>{{ $store.state.alertMessage }}</v-card-text>
        </v-card>
        <v-card-action>
          <v-btn v-if="$store.state.alertYesAction" color="primary" text
            >Yes</v-btn
          >
          <v-btn v-if="$store.state.alertNoAction" color="danger lighten-1" text
            >No</v-btn
          >
        </v-card-action>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    async savePhoto() {
      const formData = new FormData()
      formData.append('photo', this.$store.state.photoBlob)

      try {
        await axios.post(`${process.env.VUE_APP_API_URL}/photo`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data;'
          }
        })
        alert('Success!')
        this.$router.go()
      } catch (error) {
        console.log(error.meesage)
        alert('Something went wrong :/')
      }
    }
  }
}
</script>
>

<style></style>
