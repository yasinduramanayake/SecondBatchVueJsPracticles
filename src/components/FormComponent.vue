<template>
  <h2 class="text-center">{{ message }}</h2>
  <br /><br />
  <div class="form_header">
    <!-- <v-btn @click="showForm()">Show Form</v-btn> -->
    <v-card class="form_width" elevation="5">
      <div class="pa-4" v-if="showform === false">
        <h2 class="ml-15">Sample Form</h2>
        <v-form>
          <div class="mt-10 ml-15 mr-10">
            <v-row>
              <!-- <input id="input1" :value="test" @input="test1()" />

              {{ test }} -->
              <v-col lg="12" cols="12">
                <label>Name </label>

                <v-text-field
                  placeholder="Enter Name...."
                  variant="outlined"
                  v-model="form.name"
                ></v-text-field>

                {{ form.name }}
              </v-col>
              <v-col lg="12" cols="12">
                <label>Address</label>
                <br />

                <v-text-field
                  placeholder="Enter Address...."
                  variant="outlined"
                  v-model="form.address"
                ></v-text-field>

                {{ form.address }}
              </v-col>
              <v-col lg="12" cols="12">
                <label>Inquiry</label>

                <v-text-field
                  placeholder="Enter Inquiry...."
                  variant="outlined"
                  v-model="form.inquiry"
                ></v-text-field>
              </v-col>
              {{ form }}
              <v-col lg="12" cols="12">
                <v-btn block color="#004DA7" @click="testFun()">Submit</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-form>
      </div>
      <div class="pa-4" v-else-if="showform === true">No Result</div>
    </v-card>
    <v-dialog v-model="show" max-width="500">
      <DialogBoxComponent @closethemodal="closedialog"
    /></v-dialog>
  </div>
</template>

<script>
import DialogBoxComponent from "@/components/DialogComponent.vue";
export default {
  components: {
    DialogBoxComponent,
  },
  data() {
    return {
      show: false,
      showform: false,
      form: {},
      test: "hello world",
      number1: 1,
      array1: [],
      object1: {},
    };
  },

  props: {
    message: String,
    propform: Object,
  },
  created() {
    this.form = this.propform;
  },

  methods: {
    testFun() {
      console.log(this.form.name);
      this.show = true;
      // this.$emit("emitingForm", this.form);
    },
    showForm() {
      this.showform = true;
    },
    closedialog(value) {
      this.show = false;
    },
  },
};
</script>
