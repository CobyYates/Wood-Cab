<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      app
      width="70vw"
    >
      <!-- <v-list>
        <v-list-item
          v-for="(item, i) in navItems.navItem"
          :key="i"
          :to="item.fields.url"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.fields.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-app-bar class="navigation" :clipped-left="clipped">
      <template v-if="navItems && $vuetify.breakpoint.mdAndUp">
        <v-img :src="navItems.logo.fields.file.url" max-width="200" />
        <ul class="ml-auto">
          <li v-for="item in navItems.navItem" :key="item.i">
            <router-link :to="item.fields.url">
              {{ item.fields.title }}
            </router-link>
          </li>
        </ul>
      </template>
      <template v-if="$vuetify.breakpoint.smAndDown">
        <v-spacer />
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
    };
  },
  computed: {
    ...mapState("navigation", ["navItems"]),
  },
  mounted() {
    this.$store.dispatch("navigation/getPageItems");
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    display: inline-block;
    padding: 0 10px;
  }
  a {
    color: #333;
    text-decoration: none;
  }
}
</style>
