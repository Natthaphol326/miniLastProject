<template>
  <v-layout row wrap justify-center class="text-center" id="home">
    <v-flex xs6>
      <div class="mb-5">
        <h1 class="mb-5">Register</h1>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          type="password"
          required
        ></v-text-field>
        <v-btn @click="register()">Register</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.uid = user.uid;
          console.log(this.uid);
          this.$router.replace("/");
          // this.$router.replace("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          // ..
        });
    },
  },
};
</script>

<style scoped>
.mb-5 {
  padding: 50px;
  color: #fff;
  background-color: gray;
  margin-top: 50px;
  padding-top: 20px;
}
#home {
  height: 100vh;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
