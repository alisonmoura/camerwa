<template>
  <div class="camera-modal">
    <v-app-bar app color="primary" dark>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      <span class="title">{{ $route.name }}</span>
      <v-spacer></v-spacer>
      <v-btn @click="takePhoto" text>Take Foto</v-btn>
    </v-app-bar>
    <video ref="video" class="camera-stream" />
  </div>
</template>

<script>
export default {
  data: () => ({
    track: undefined
  }),
  methods: {
    async takePhoto() {
      const blob = await new ImageCapture(this.track).takePhoto()
      this.$store.dispatch('setPhotoBlob', blob)
      this.track.stop()
      this.$router.push('/')
    }
  },
  mounted() {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(mediaStream => {
        this.track = mediaStream.getVideoTracks()[0]
        this.$refs.video.srcObject = mediaStream
        try {
          this.$refs.video.play()
        } catch (error) {
          console.error('getUserMedia() error:', error)
          alert(`getUserMedia() error:' ${error}`)
          // alert("Sorry, we couldn't access your camera")
        }
      })
      .catch(error => {
        console.error('getUserMedia() error:', error)
        alert(`getUserMedia() error:' ${error}`)
        // alert("Sorry, we couldn't access your camera")
      })
  }
}
</script>

<style scoped>
.camera-modal {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: white;
  z-index: 10;
}
.camera-stream {
  width: 100%;
  max-height: 100%;
}
</style>
