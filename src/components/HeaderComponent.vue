<template>
  <v-app-bar :elevation="2" color="blue">
    <v-row>
      <v-col lg="5" md="2" sm="2" class="ml-10">
        <v-img width="70px" src="@/assets/images/business-Logo.jpg"></v-img>
      </v-col>
      <v-spacer></v-spacer>

      <v-col lg="6" md="8" sm="9" style="padding-left: 25%; padding-top: 19px">
        <v-row>
          <div>
            <v-list-item @click="$router.push('/')" class="ml-10">
              Home</v-list-item
            >
          </div>
          <div>
            <v-list-item @click="$router.push('/sample')" class="ml-10">
              Sample</v-list-item
            >
          </div>

          <div>
            <v-list-item @click="$router.push('/test')" class="ml-10">
              Test</v-list-item
            >
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
