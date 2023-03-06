<template>
  <v-row>
    <v-col class="navigation d-flex align-center">
      <nav v-if="navItems" class="d-flex mx-10">
        <v-img :src="navItems.logo.fields.file.url" max-width="200" />
        <v-spacer />
        <ul role="menu">
          <li v-for="item in navItems.navItem" :key="item.i">
            <router-link :to="item.fields.url">
              {{ item.fields.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navigation",
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
  height: 100px;
  background-color: #f1f1f1;
  padding: 50px 0;
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
