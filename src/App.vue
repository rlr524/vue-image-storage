<template>
  <div id="app">
    <app-header></app-header>
    <router-link></router-link>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    appHeader: Header,
  },
};
</script>


<style>
</style>
