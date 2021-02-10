<template>
  <div id="app">
    <app-header></app-header>
    <div class="ui container">
      <router-view></router-view>
    </div>
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
#app {
  font-family: "Roboto", sans-serif;
}
</style>
