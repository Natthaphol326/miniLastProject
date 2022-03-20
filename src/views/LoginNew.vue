<template>
  <v-layout row wrap justify-center class="text-center" id="home">
    <v-flex xs6>
      <div class="mb-5">
        <h1 class="Dso">Login</h1>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          type="password"
          required
        ></v-text-field>
        <div id="Now">
          <v-btn depressed @click="login()" color="primary"> Login </v-btn>
          <v-btn depressed @click="googlelogin()" color="error"
            >Google Login</v-btn
          >
          <v-btn depressed @click="register()"> Register </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
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
      this.$router.push("/reGis");
    },
    googlelogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          this.$router.replace("/");
          console.log("Google Token =" + token);
          console.log(user);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          // The email of the user's account used.
          //const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    login() {
      //const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User = " + user);
          // ...
          this.LoginActive = false;
          this.$router.replace("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
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
