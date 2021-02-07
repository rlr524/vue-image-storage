<template>
  <div id="home" class="home">
    <span>This is the home page</span>
    <app-image-list v-if="isLoggedIn"></app-image-list>
  </div>
</template>

<script>
import ImageList from "@/components/ImageList.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    appImageList: ImageList,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
