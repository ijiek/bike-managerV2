<template>
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
        <v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Name" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Name" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Name" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Name" />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "AddRacerDialog",
  props: {
    value: {
      // eslint-disable-next-line
      type: Boolean,
      // eslint-disable-next-line
    },
  },
  data: () => ({
    // eslint-disable-next-line
    showDialog: false,
  }),
  computed: {
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
