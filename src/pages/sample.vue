<template>
  <div class="mt-0"></div>
  <!-- slider component -->
  <div><SliderComponent /></div>

  <div class="mt-10"></div>
  <div class="mt-10"></div>
  <!-- card component -->
  <div><CardComponent :cardArray="cardarray" /></div>

  <div class="mt-10"></div>
  <div class="mt-10"></div>
  <!-- form component -->

  <div>
    <FormComponent
      :message="message"
      :propform="form"
   
    />
  </div>
  <div class="mt-10"></div>
  <div class="mt-10"></div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
export default {
  data() {
    return {
      message: "hello Form",
      form: {},
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
  created() {
    this.form.name = "test";
    this.form.address = "test";
    this.form.inquiry = "test";
  },

  components: {
    SliderComponent,
    CardComponent,
    FormComponent,
  },
  methods: {
    getEmitData(value) {
      console.log(value.name);
    },
  },
};
</script>
