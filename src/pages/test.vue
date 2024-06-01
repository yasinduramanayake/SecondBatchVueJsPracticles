<template>
  <div>
    <!-- <Index /> -->

    <button @click="navigate()">Route</button>
  </div>
</template>

<script>
import Index from "@/pages/index.vue";

export default {
  components: {
    Index,
  },

  methods: {
    navigate() {
      this.$router.push("/");
    },
  },
};
</script>
