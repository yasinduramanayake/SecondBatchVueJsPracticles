<template>
  <div class="pa-4">
    {{ test }}
    <v-row>
      <v-col
        lg="4"
        cols="12"
        md="6"
        sm="6"
        v-for="item in cardarray"
        :key="item"
      >
        <v-sheet color="#D9D9D9">
          <v-img src="@/assets/images/ss2 1.png"></v-img>
          {{ item.key1 }}
          <p class="pl-2 pt-4 pb-4">
            Butterflies are winged insects from the lepidopteran suborder
            Rhopalocera, characterized by large, often brightly coloured wings
            that often fold together when at rest, and a conspicuous, fluttering
            flight. The group comprises the superfamilies Hedyloidea and
            Papilionoidea.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-btn @click="testMethod()">Test</v-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cardarray: [],
      dataArray: [],
      message: "jhgfdsdfdjhg",
    };
  },

  props: {
    cardArray: Array,
  },

  computed: {
    test() {
      return this.cardarray;
    },
  },

  async created() {
    this.cardarray = this.cardArray;
    await this.getApiData();
  },

  methods: {
    async getApiData() {
      const response = await axios.get("https://reqres.in/api/users");
      // console.log(response.data);
      this.dataArray = response.data.data;
    },
    testMethod() {
      this.cardarray.push({
        key1: 7,
        key2: 8,
      });
    },
  },
};
</script>
