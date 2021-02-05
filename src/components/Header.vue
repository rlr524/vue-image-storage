<template>
  <div id="header" class="ui secondary menu">
    <div class="header-logo">
      <a href="/" class="item logo-link">
        <img class="logo" src="../assets/waifu_logob.svg" alt="Site logo" />
      </a>
    </div>
    <div class="right menu rightmen">
      <div class="item">
        <div class="ui icon input">
          <input type="text" name="" id="" placeholder="Search..." />
          <i class="search link icon"></i>
        </div>
      </div>
      <a href="/gallery" class="ui item header-text" v-if="isLoggedIn"
        >Gallery</a
      >
      <a href="/upload" class="ui item header-text" v-if="isLoggedIn">Upload</a>
      <a href="#" class="ui item header-text" @click="login" v-if="!isLoggedIn"
        >Log In</a
      >
      <a href="/logout" class="ui item header-text" v-if="isLoggedIn">Logout</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
  components: {},
};
</script>

<style scoped>
#header {
  font-size: 1.25rem;
  background-color: rgb(243, 117, 117);
}
.header-logo {
  margin-left: 2em;
  height: 8rem;
}
/* Need to fix this so logo doesn't shadow on hover */
.header-logo > a:hover {
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
}
.rightmen {
  padding-right: 2em;
}
</style>