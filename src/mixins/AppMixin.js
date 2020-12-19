export default {
  methods: {
    getUrl(filename) {
      return `${process.env.VUE_APP_API_URL}/uploads/${filename}`
    }
  }
}
