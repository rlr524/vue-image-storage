<template>
  <div>
    <p>The current number of images is: {{ getImages.length }}</p>
    <img
      v-for="image in getImages"
      :key="image.id"
      :src="image.link"
      alt="An image"
    />
    <ul>
      <li v-for="image in getImages" :key="image.id">
        {{ image.id }} - {{ image.description }}
      </li>
    </ul>
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
</style>