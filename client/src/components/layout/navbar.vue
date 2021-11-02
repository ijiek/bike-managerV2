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
// import NavigationDrawer from '@/components/NavigationDrawer.vue'
export default {
  // eslint-disable-next-line
  name: "navbar",
  // components: {
  //   NavigationDrawer
  // },
  // eslint-disable-next-line
  data() {
    return {
      drawer: false,
      group: null, // eslint-disable-next-line
      items: [
        // eslint-disable-next-line
        {
          // eslint-disable-next-line
          name: "Home", // eslint-disable-next-line
          path: "/home", // eslint-disable-next-line
          icon: "home",
        },
        // {
        //   name: "About",
        //   path: "/about",
        //   icon: "motorbike",
        // },
        {
          // eslint-disable-next-line
          name: "Race", // eslint-disable-next-line
          path: "/race", // eslint-disable-next-line
          icon: "map-marker-radius",
        },
        {
          // eslint-disable-next-line
          name: "Bikers", // eslint-disable-next-line
          path: "/biker", // eslint-disable-next-line
          icon: "bike",
        },
        // change this to logout later
        {
          // eslint-disable-next-line
          name: "LogIn", // eslint-disable-next-line
          path: "/", // eslint-disable-next-line
          icon: "account-circle",
        },
        {
          // eslint-disable-next-line
          name: "Test", // eslint-disable-next-line
          path: "/test", // eslint-disable-next-line
          icon: "account-circle", // eslint-disable-next-line
        }, // eslint-disable-next-line
      ], // eslint-disable-next-line
    }; // eslint-disable-next-line
  }, // eslint-disable-next-line
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
