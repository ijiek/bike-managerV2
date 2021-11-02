
<template>
  <v-container fluid>
    <AddRaceDialog v-model="AddRaceDialog"></AddRaceDialog>
    <!-- Home -->
    <navbar v-model="drawer" />
    <v-card outlined rounded>
      <v-toolbar>
        <v-toolbar-title> Active Events </v-toolbar-title>
        <v-spacer />
        <v-btn @click="AddRaceDialog = true"> Add Race </v-btn>
      </v-toolbar>
      <v-card-text>
        <!-- v-card for individual race display -->
        <v-row>
          <v-col cols="12" md="6">
            <!-- add list rendering v-for="race in races" :key="race.id" -->
            <v-card outlined>
              <v-toolbar>
                <v-icon> mdi-compass </v-icon>
                <v-toolbar-title>
                  race name
                  <!--  {{ race name }} -->
                </v-toolbar-title>
                <v-spacer />
                <v-btn text> Archive Race </v-btn>
                <v-btn> Edit Race </v-btn>
              </v-toolbar>
              <v-card-text>
                <h3>race name</h3>
                <h3>Race Description</h3>
                <h3>Start Date</h3>
                <h3>Finish Date</h3>
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
import AddRaceDialog from "@/components/AddRaceDialog.vue";

export default {
  components: {
    navbar,
    AppFooter,
    AddRaceDialog,
  },
  data() {
    return {
      AddRaceDialog: false,
      drawer: false,
      // items: ["9", "10", "11", "12", "13"]
    };
  },
};
</script>

<style>
</style>
