<template>
  <!-- slider component -->
  <div><SliderComponent /></div>

  <div class="mt-10"></div>
  <div class="mt-10"></div>
  <!-- card component -->
  <div><CardComponent /></div>

  <div class="mt-10"></div>
  <div class="mt-10"></div>
  <!-- form component -->

  <div>
    <FormComponent />
  </div>
  <div class="mt-10"></div>
  <div class="mt-10"></div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
export default {
  components: {
    SliderComponent,
    CardComponent,
    FormComponent,
  },
};
</script>
