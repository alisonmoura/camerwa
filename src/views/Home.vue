<template>
  <div>
    <img ref="picture" class="camera-picture hidden" />

    <v-btn color="primary" to="/camera" class="take-picture-button" fab>
      <v-icon>mdi-camera</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  mounted() {
    if(this.$store.state.photoBlob) {
      this.$refs.picture.src = URL.createObjectURL(this.$store.state.photoBlob)
      this.$refs.picture.classList.remove('hidden')
    }
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
</style>
