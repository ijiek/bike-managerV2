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
export default {
  // eslint-disable-next-line
  name: "AddRaceDialog",
  props: {
    value: {
      type: Boolean,
      // eslint-disable-next-line
      required: true,
      // eslint-disable-next-line
    },
  },
  // eslint-disable-next-line
  data() {
    return {
      numberRule: (v) => {
        // eslint-disable-next-line
        if (!v.trim()) return true;
        // eslint-disable-next-line
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 100) return true;
        // eslint-disable-next-line
        return "Number has to be between 0 and 100";
        // eslint-disable-next-line
      },
      // eslint-disable-next-line
    };
  },
  methods: {
    // eslint-disable-next-line
    cancel() {
      // eslint-disable-next-line
      this.resolve(false);
      // eslint-disable-next-line
      this.showDialog = false;
      // eslint-disable-next-line
    },
  },
  computed: {
    // gets value of dialog true of false
    showDialog: {
      // eslint-disable-next-line
      get() {
        // eslint-disable-next-line
        return this.value;
      },
      // eslint-disable-next-line
      set(value) {
        // eslint-disable-next-line
        return this.$emit("input", value);
        // eslint-disable-next-line
      },
      // eslint-disable-next-line
    },
    // eslint-disable-next-line
  },
  // eslint-disable-next-line
};
</script>

<style>
</style>
