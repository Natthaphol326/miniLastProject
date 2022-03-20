<template>
  <v-container>
    <div>
      <v-responsive>
        <table class="table table-striped table-hover">
          <thead class="table-primary">
            <tr align="center">
              <th scope="col">No.</th>
              <th scope="col">Image</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Wrtier</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in csDoc" :key="index" align="center">
              <td>{{ index + 1 }}</td>
              <td>
                <img :src="item.data.image" alt="" width="40px" height="40px" />
              </td>
              <td>{{ item.id }}</td>
              <td>{{ item.data.name }}</td>
              <td>{{ item.data.writer }}</td>
              <td>
                <button class="btns btn2" @click="DataSet(item.id)">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
              <td>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ma-2"
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="checkEdit = index"
                    >
                      Edit
                    </v-btn>
                  </template>
                  <!-- ------------------------------------------Menu Admin-------------------------------------------- -->
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Edit</span>
                    </v-card-title>
                    <v-container>
                      <div class="setForm">
                        <h1>Edit</h1>
                        <v-textarea
                          col-6
                          filled
                          auto-grow
                          label="ชื่อบทความ"
                          rows="1"
                          v-model="name"
                        ></v-textarea>

                        <v-textarea
                          filled
                          label="บทนำ"
                          rows="1"
                          v-model="Topic"
                        ></v-textarea>
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
                    </v-container>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        Close
                      </v-btn>
                      <v-btn
                        text
                        color="success"
                        @click="EditData(csDoc[checkEdit].id)"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </v-responsive>
    </div>
  </v-container>
</template>

<script>
import {
  collection,
  query,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      csDoc: [],
      name: "",
      Topic: "",
      Content: "",
      summarize: "",
      writer: "",
      image: "",
      seeID: "",
      checkid: "",
      checkEdit: "",
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
    async DataSet(i) {
      this.csDoc = [];
      console.log("Waiting for delete data...");
      await deleteDoc(doc(db, "dataStore", i));
      console.log("Deleted...");
    },
    async EditData(i) {
      this.csDoc = [];
      this.dialog = false;
      try {
        const docData = {
          name: this.name,
          Topic: this.Topic,
          Content: this.Content,
          ummarize: this.summarize,
          writer: this.writer,
          image: this.image,
        };
        await setDoc(doc(db, "dataStore", i), docData);
        console.log("Data Updated...");
        this.$router.replace("/items");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
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
