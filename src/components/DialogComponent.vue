<template>
  <div>
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Close Dialog" @click="closeDialog()"></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    closeDialog() {
      this.$emit("closethemodal", false);
    },
  },
};
</script>
