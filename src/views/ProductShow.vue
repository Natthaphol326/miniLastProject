<template>
  <v-container>
    <v-responsive>
      <div class="row">
        <div class="col-sm-4">
          <h3 align="center">Preview</h3>
          <router-view :key="$route.path"></router-view>
        </div>
        <div class="col-sm-8">
          <h3 align="center">Article</h3>
          <v-card-actions>
            <v-container class="d-flex flex-wrap"
              ><v-card
                class="mx-auto mb-5"
                max-width="200"
                v-for="(i, index) in csDoc"
                :key="index"
              >
                <v-img
                  class="green--text align-end"
                  height="200px"
                  :src="i.data.image"
                >
                </v-img>
                <v-card-text class="text--primary">
                  <div>ชื่อบทความ : {{ i.data.name }}</div>
                  <div>ผู้เขียน : {{ i.data.writer }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="warning"
                    :to="{
                      name: 'productdetail',
                      params: {
                        image: i.data.image,
                        name: i.data.name,
                        topPic: i.data.Topic,
                        conTent: i.data.Content,
                        summarize: i.data.summarize,
                        wRiter: i.data.writer,
                      },
                    }"
                    >อ่านบทความ</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-container>
          </v-card-actions>
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      dialog2: false,
      dialog: false,
      csDoc: [],
      name: "",
      Topic: "",
      Content: "",
      summarize: "",
      writer: "",
      image: "",
    };
  },
  beforeMount() {
    this.readData();
  },
  methods: {
    readData() {
      this.csDoc = [];
      const q = query(collection(db, "dataStore"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.csDoc.push({ id: doc.id, data: doc.data() });
        });
        // console.log("Current cities in CA: ", this.csDoc.join(", "));
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.temp {
  margin: 10px 10px;
}
</style>
