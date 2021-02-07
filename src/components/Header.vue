<template>
  <div id="header" class="ui secondary menu">
    <div class="header-logo">
      <router-link to="/" class="item header-logo">
        <img class="logo" src="../assets/waifu_logob.svg" alt="Site logo" />
      </router-link>
    </div>
    <div class="right menu rightmen">
      <div class="item">
        <div class="ui icon input">
          <input type="text" name="" id="" placeholder="Search..." />
          <i class="search link icon"></i>
        </div>
      </div>
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="gallery" class="ui item header-text"
          >Gallery</router-link
        >
        <router-link to="upload" class="ui item header-text"
          >Upload</router-link
        >
        <a class="ui item header-text" @click="logout">Logout</a>
      </div>
      <a href="#" class="ui item header-text" @click="login" v-else>Log In</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["login", "logout"]),
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
/*TODO: Need to fix this so logo doesn't shadow on hover */
.header-logo > a:hover {
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
}
.rightmen {
  padding-right: 2em;
}
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>