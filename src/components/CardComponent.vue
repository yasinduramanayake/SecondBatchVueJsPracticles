<template>
  <div class="pa-4">
    <v-row>
      <v-col lg="4" cols="12" v-for="item in cardarray" :key="item">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardarray: [
        {
          key1: 1,
          key2: 2,
        },
        {
          key1: 3,
          key2: 4,
        },
        {
          key1: 5,
          key2: 6,
        },
      ],
    };
  },
};
</script>
