<template>
  <div id="home" class="home">
    <app-image-list v-if="isLoggedIn"></app-image-list>
    <app-main v-else></app-main>
  </div>
</template>

<script>
import ImageList from "@/components/ImageList.vue";
import Main from "@/components/Main.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    appImageList: ImageList,
    appMain: Main,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
