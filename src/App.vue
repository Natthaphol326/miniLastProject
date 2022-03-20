<template>
  <v-app>
    <div id="app">
      <admin-bar />
      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import adminBar from "../src/components/adminBar.vue";
export default {
  components: {
    adminBar,
  },
};
</script>

<style lang="scss" scpoed>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
  box-sizing: border-box;
}
</style>
