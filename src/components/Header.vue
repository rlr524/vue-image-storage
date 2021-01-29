<template>
  <div id="header" class="ui secondary menu">
    <div class="header-logo">
      <a href="/" class="item">
        <img class="logo" src="../assets/waifu_logo.svg" alt="Site logo" />
      </a>
    </div>
    <a href="/messages" class="item">Messages</a>
    <a href="/friends" class="item">Friends</a>
    <div class="right menu rightmen">
      <div class="item">
        <div class="ui icon input">
          <input type="text" name="" id="" placeholder="Search..." />
          <i class="search link icon"></i>
        </div>
      </div>
      <a href="/logout" class="ui item">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style scoped>
.header-logo {
  margin-left: 2em;
}
.logo {
  height: 8em;
  margin: 2em 2em;
  text-decoration: none;
}
.rightmen {
  padding-right: 2em;
}
</style>