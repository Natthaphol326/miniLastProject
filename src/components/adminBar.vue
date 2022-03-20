<template>
  <div class="app">
    <v-app-bar class="nav-app">
      <v-app-bar-nav-icon
        @click="drawer = true"
        v-show="chID"
      ></v-app-bar-nav-icon>
      <a href="/">Home Page</a>
      <v-spacer></v-spacer>
      <a href="/proUser">Store</a>
      <a v-show="!LoginActive" href="/artiCle">Write</a>
      <a href="/loginD" v-show="LoginActive">Login</a>
      <a v-show="!LoginActive" href="/" @click="logout()">Logout</a>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item href="/items">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item>

          <v-list-item href="/artiCle">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Write</v-list-item-title>
          </v-list-item>

          <v-list-item href="/proUser">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User View</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { auth } from "../plugins/firebaseInit";
import { onAuthStateChanged, signOut } from "firebase/auth";
export default {
  namme: "navigation",
  data() {
    return {
      uid: "",
      chID: false,
      drawer: false,
      group: null,
      LoginActive: true,
      mobileNav: true,
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    this.checkUserID();
    this.checkUserOnline();
  },
  methods: {
    checkUserID() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          this.uid = uid;
          if (this.uid == "Q7pnUAmpNFRyEDlBKiYZS2lT5gY2") {
            this.chID = true;
          }
        }
      });
    },
    toggle() {
      this.mobileNav = !this.mobileNav;
    },
    checkUserOnline() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.LoginActive = false;
        } else {
          this.LoginActive = true;
        }
      });
    },
    logout() {
      signOut(auth)
        .then(() => {
          this.$router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
  box-sizing: border-box;
}
.nav-app {
  background-color: rgba(rgb(15, 209, 96));
}
.app a {
  color: black;
  font-size: 15px;
  font-weight: 500;
  margin-left: 30px;
  transition: 0.2s linear;
}

.app a:hover {
  color: #71a71a !important;
}
</style>
