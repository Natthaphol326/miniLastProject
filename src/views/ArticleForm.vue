<template>
  <v-container>
    <div class="setForm">
      <h1 class="text-center" style="margin-bottom: 10px">เขียนบทความ</h1>
      <div class="setsty">
        <v-textarea
          col-6
          filled
          auto-grow
          label="ชื่อบทความ"
          rows="1"
          v-model="name"
        ></v-textarea>
        <v-textarea filled label="บทนำ" rows="1" v-model="Topic"></v-textarea>
        <v-textarea
          filled
          name="input-7-4"
          label="เนื้อหา"
          v-model="Content"
        ></v-textarea>
        <v-textarea
          filled
          label="สรุป"
          rows="2"
          v-model="summarize"
        ></v-textarea>
        <v-textarea
          col-6
          filled
          auto-grow
          label="ผู้แต่ง"
          rows="1"
          v-model="writer"
        ></v-textarea>
        <v-textarea
          col-6
          filled
          auto-grow
          label="url รูปปก"
          rows="1"
          v-model="image"
        ></v-textarea>
      </div>
      <v-btn class="success" elevation="2" @click="add()">Add</v-btn>
    </div>
  </v-container>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      name: "",
      Topic: "",
      Content: "",
      summarize: "",
      writer: "",
      image: "",
    };
  },

  methods: {
    async add() {
      try {
        const docRef = await addDoc(collection(db, "dataStore"), {
          name: this.name,
          Topic: this.Topic,
          Content: this.Content,
          summarize: this.summarize,
          writer: this.writer,
          image: this.image,
        });
        //await this.readData();
        this.$router.replace("/");
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style scoped></style>
