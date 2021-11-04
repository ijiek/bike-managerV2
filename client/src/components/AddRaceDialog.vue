<template>
  <v-dialog
    v-model="showDialog"
    :fullscreen="$vuetify.breakpoint.mobile"
    transition="scroll-y-transition"
    max-width="800"
    scrollable
    @keydown.esc="cancel"
  >
    <v-card>
      <v-toolbar>
        <v-btn @click="showDialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title> Add New Event </v-toolbar-title>
        <v-spacer />
      </v-toolbar>

      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-col cols="12">
              <v-text-field
                v-model="raceName"
                persistent
                autofocus
                label="Race Name"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="raceDescription"
                persistent
                autofocus
                rows="2"
                clearable
                label="Race Description"
              />
            </v-col>

            Select Start Date
            <v-col cols="12">
              <v-date-picker v-model="startDate" />
            </v-col>

            <!-- <v-col cols="12">
              <v-text-field
                type="number"
                :rules="[numberRule]"
                persistent
                label="Age"
              />
            </v-col> -->
            <!-- <v-col cols="12">
              <v-autocomplete
                v-model="year"
                :items="items"
                chips
                label="Year"
              /> -->
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable */
export default {
  name: "AddRaceDialog",
  props: {
    value: {
      type: Boolean,

      required: true,
    },
  },

  data() {
    return {
      numberRule: (v) => {
        if (!v.trim()) return true;

        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 100) return true;

        return "Number has to be between 0 and 100";
      },
    };
  },
  methods: {
    cancel() {
      this.resolve(false);

      this.showDialog = false;
    },
  },
  computed: {
    // gets value of dialog true of false
    showDialog: {
      get() {
        return this.value;
      },

      set(value) {
        return this.$emit("input", value);
      },
    },
  },
};
</script>

<style>
</style>
