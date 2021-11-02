<template>
  <nav>
    <v-app-bar
      :extension-height="showExtBar ? 48 : 0"
      app
      class="teal"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title> Track </v-toolbar-title>
      <v-spacer />

      <v-btn icon><v-icon>mdi:magnify</v-icon></v-btn>

      <v-btn icon><v-icon>mdi:apps</v-icon></v-btn>

      <v-btn icon><v-icon>mdi:dots-vertical</v-icon></v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <!-- items in nav -->
      <v-list>
        <template>
          <!-- list rendering -->
          <v-list-item-group v-model="group">
            <v-list-item v-for="item in items" :key="item.name" :to="item.path">
              <v-list-item-icon>
                <v-icon>{{ "mdi:" + item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
/* eslint-disable */
// import { icon } from "@iconify/vue2";
// import NavigationDrawer from '@/components/NavigationDrawer.vue'
export default {
  name: "navbar",
  // components: {
  //   Icon,
  //   // NavigationDrawer
  // },

  data() {
    return {
      // // Assign icon data to icons.chart
      // icons: {
      //   chart: areaChartOutlined,
      // },
      drawer: false,
      group: null,
      items: [
        {
          name: "Home",
          path: "/home",
          icon: "home",
        },
        // {
        //   name: "About",
        //   path: "/about",
        //   icon: "motorbike",
        // },
        {
          name: "Race",
          path: "/race",
          icon: "map-marker-radius",
        },
        {
          name: "Bikers",
          path: "/biker",
          icon: "bike",
        },
        // change this to logout later
        {
          name: "LogIn",
          path: "/",
          icon: "account-circle",
        },
        {
          name: "Test",
          path: "/test",
          icon: "account-circle",
        },
      ],
    };
  },
};
</script>

<style>
.navbar_main {
  position: relative;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: normal;
  color: #212121 !important;
}
</style>
