<template>
  <v-container>
    <div class="setForm">
      <h1 class="text-center" style="margin-bottom: 10px">Add Data</h1>
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

      <v-btn class="success" elevation="2" @click="EditData()">Edit</v-btn>
    </div>
  </v-container>
</template>

<script>
import { setDoc, doc } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
export default {
  data() {
    return {};
  },

  methods: {
    async EditData() {
      this.dialog = false;
      try {
        const docData = {
          name: this.name,
          Topics: this.Topics,
          Contents: this.Contents,
          summarizes: this.summarizes,
          writers: this.writers,
          images: this.images,
        };
        window.location.reload();
        await setDoc(doc(db, "dataStore", this.id), docData);
        console.log("Data Updated...");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style scoped>
.setsty {
  padding: 0;
  margin: 0;
}
</style>
