<template>
  <v-container>
    <v-row justify="center" style="margin-top: 50px">
      <v-col cols="auto">
        <img ref="picture" class="camera-picture hidden" />
      </v-col>
    </v-row>

    <v-row justify="start">
      <v-col v-for="item in photos" :key="item.filename" cols="6">
        <img class="gallery-img" :src="getUrl(item.filename)" />
      </v-col>
    </v-row>

    <v-btn color="primary" to="/camera" class="take-picture-button" fab>
      <v-icon>mdi-camera</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data: () => ({
    photos: []
  }),
  components: {},
  async mounted() {
    if (this.$store.state.photoBlob) {
      this.$refs.picture.src = URL.createObjectURL(this.$store.state.photoBlob)
      this.$refs.picture.classList.remove('hidden')
    }

    const response = await axios.get(`${process.env.VUE_APP_API_URL}/photo`)
    this.photos = response.data
  }
}
</script>

<style scoped>
.take-picture-button {
  position: fixed;
  right: 24px;
  bottom: 90px;
  z-index: 5;
}

.camera-picture {
  width: 300px;
  height: auto;
  border: 1px solid red;
}

.hidden {
  display: none;
}

.gallery-img {
  width: 100%;
}
</style>
