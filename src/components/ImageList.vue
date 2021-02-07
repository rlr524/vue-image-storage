<template>
  <div>
    <span>Image List</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ImageList",
  methods: {
    ...mapActions(["useImages"]),
  },
  created() {
    this.useImages();
  },
};
</script>

<style scoped>
</style>