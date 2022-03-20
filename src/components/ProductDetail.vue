<template>
  <v-container>
    <v-card class="mx-auto" max-width="800px">
      <v-container>
        <v-img height="330px" :src="image"> </v-img>
      </v-container>
      <v-container>
        <div>
          <h3>{{ name }}</h3>
          <p>&nbsp;{{ Topic }}</p>
          <p>&nbsp;{{ Content }}</p>
          <p>&nbsp;{{ summarize }}</p>
          <p>ผู้เขียน : {{ writer }}</p>
        </div>
      </v-container>
      <v-btn @click="go()" color="warning"> Exit </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image: this.$route.params.image,
      name: this.$route.params.name,
      Topic: this.$route.params.topPic,
      Content: this.$route.params.conTent,
      summarize: this.$route.params.summarize,
      writer: this.$route.params.wRiter,
    };
  },
  methods: {
    go() {
      this.$router.replace("/proUser");
    },
  },
};
</script>

<style></style>
