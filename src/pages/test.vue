<template>
  <div>
    <!-- <Index /> -->

    <!-- <button @click="navigate()">Route</button> -->
    <center>
      <v-card width="400px" height="400px" elevation="8">
        <v-btn color="red" elevation="12" @click="navigate()">Next</v-btn>
      </v-card>
      <br /><br />
      <v-sheet width="400px" height="200px" elevation="10"
        ><p class="pt-8">hello</p></v-sheet
      >

      <!-- grid view -->

      <br /><br />
      <div class="mt-10"></div>
      <div class="mt-10"></div>
      <div class="mt-10"></div>
      <div class="mt-10"></div>

      <!-- grid view -->
      <v-container>
        <v-row>
          <v-col lg="3" cols="12" >
            <v-sheet color="red" elevation="20">hello</v-sheet>
          </v-col>
          <v-col lg="3" cols="12">
            <v-sheet color="red" elevation="20">hello</v-sheet>
          </v-col>
          <v-col lg="3" cols="12">
            <v-sheet color="red" elevation="20">hello</v-sheet>
          </v-col>
          <v-col lg="3" cols="12">
            <v-sheet color="red" elevation="20">hello</v-sheet>
          </v-col>
        </v-row>
      </v-container>




    </center>
  </div>
</template>

<script>
import Index from "@/pages/index.vue";

export default {
  components: {
    Index,
  },

  beforeCreate() {
    console.log("beforecreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("before loading");
  },

  mounted() {
    console.log("loaded");
  },

  beforeUpdate() {
    console.log("before update");
  },

  updated() {
    console.log("updated");
  },

  methods: {
    navigate() {
      this.$router.push("/");
    },
  },
};
</script>
