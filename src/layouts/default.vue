<template>
  <v-app>
    <div><HeaderComponent /></div>

    <v-main>
      <router-view />
    </v-main>

    <div><FooterComponent/></div>
  </v-app>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
