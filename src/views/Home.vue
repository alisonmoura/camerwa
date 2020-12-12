<template>
  <div>
    <v-btn color="primary" to="/camera" class="take-picture-button" fab>
      <v-icon>mdi-camera</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.take-picture-button {
  position: fixed;
  right: 24px;
  bottom: 90px;
  z-index: 5;
}
</style>
