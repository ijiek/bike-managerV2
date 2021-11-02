<!-- change this to be a dashboard to view info -->
<template>
  <v-container fluid>
    <!-- <AddRacerDialog v-model="showAddRacerDialog" /> -->
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
          <v-btn> evr </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-row>
            <v-col md="6">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="fullName"
                  persistent
                  autofocus
                  label="Name"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  type="number"
                  :rules="[numberRule]"
                  persistent
                  label="Age"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="year"
                  :items="items"
                  chips
                  label="Year"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field persistent label="School" />
              </v-col>
            </v-col>
            <v-col md="6"> vwe </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Home -->
    <navbar v-model="drawer" />
    <v-card outlined rounded>
      <v-toolbar>
        <v-toolbar-title> DashBoard </v-toolbar-title>
        <v-spacer />
        <!-- <v-btn @click.stop="showDialog = true"> Add Race </v-btn> -->
      </v-toolbar>
      <v-card-text>
        <!-- <v-row>
          <v-col cols="6">
            <v-toolbar>
              <v-toolbar-title> Race Name </v-toolbar-title>
            </v-toolbar>
          </v-col>
        </v-row> -->
      </v-card-text>
    </v-card>
    <v-spacer />
    <AppFooter />
  </v-container>
</template>

<script>
/* eslint-disable */
import navbar from "@/components/layout/navbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
// import AddRacerDialog from "@/components/AddRacerDialog.vue";

export default {
  components: {
    navbar,
    AppFooter,
    // AddRacerDialog,
  },
  data() {
    return {
      drawer: false,
      showDialog: false,
      numberRule: (v) => {
        if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 100) return true;
        return "Number has to be between 0 and 100";
      },
      items: ["9", "10", "11", "12", "13"],
    };
  },
};
</script>

<style>
</style>
