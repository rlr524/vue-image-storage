<template>
  <div id="image-list" class="image-container">
    <img
      v-for="image in getImages"
      :key="image.id"
      :src="image.link"
      alt="An image"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: {
    ...mapGetters(["getImages"]),
  },
  methods: {
    ...mapActions(["useImages"]),
  },
  created() {
    this.useImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>