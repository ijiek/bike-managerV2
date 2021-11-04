<template>
  <v-container fluid>
    <v-dialog
      v-model="showDialog"
      :fullscreen="$vuetify.breakpoint.mobile"
      transition="scroll-y-transition"
      no-click-animation
      internal-activator
      max-width="800"
      scrollable
    >
      <v-card>
        <v-toolbar>
          <v-btn @click="showDialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title> Add New Racer </v-toolbar-title>
          <v-spacer />
        </v-toolbar>

        <v-card-text>
          <v-row>
            <v-col md="6">
              <v-col cols="12">
                <v-skeleton-loader class="mx-auto" max-width="300" type="card">
                  <v-img src="https://picsum.photos/id/11/500/300" />
                </v-skeleton-loader>
              </v-col>
              <!-- once database is connected change the ime source -->
              <v-col cols="12">
                <v-file-input
                  label="File input"
                  filled
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
            </v-col>
            <v-col md="6">
              <v-col cols="12">
                <v-text-field
                  v-model="fullName"
                  persistent
                  autofocus
                  label="Name"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="number"
                  :rules="[numberRule]"
                  persistent
                  label="Age"
                />
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  v-model="year"
                  :items="items"
                  chips
                  label="Year"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field persistent label="School" />
              </v-col>
            </v-col>
            <v-col md="6"> </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- change this back remove ectended prop -->

    <navbar v-model="drawer" />
    <!-- v-if="$vuetify.breakpoint.mdAndUp  breakpoint inside {{}}-->
    <v-card>
      <v-toolbar>
        <div v-if="!bikerView">
          <v-toolbar-title> Vbewarb </v-toolbar-title>
        </div>
        <!-- {{ bikerView }} -->

        <v-spacer />
        <v-toolbar-items>
          <v-col cols="12">
            <v-autocomplete
              v-model="bikerView"
              :items="biker"
              outlined
              dense
              label="Select View"
            >
            </v-autocomplete>
          </v-col>
        </v-toolbar-items>
        <!-- <v-toolbar-title> All Bikers </v-toolbar-title> -->

        <v-btn @click.stop="showDialog = true"> Add Biker </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-card outlined>
              <v-toolbar>
                <v-toolbar-title v-if="bikerView === 0">
                  select from dropdown</v-toolbar-title
                >
              </v-toolbar>

              <v-card-text>
                <p v-if="!bikerView">Default View of Bikers</p>

                <p>{{ bikerView }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <AppFooter />
  </v-container>
</template>

<script>
/* eslint-disable */
import navbar from "@/components/layout/navbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  Title: "Bikers",
  components: {
    navbar,
    AppFooter,
  },

  data() {
    return {
      bikerView: null,
      drawer: false,
      showDialog: false,
      numberRule: (v) => {
        if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 10 && v <= 100) return true;
        return "Number has to be between 10 and 100";
      },
      items: ["9", "10", "11", "12", "13"],
      biker: ["View All Bikers", "Year Group", "A-Z"],
    };
  },
};
</script>

<style>
</style>
