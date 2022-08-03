<template>
  <div class="navigation">
    <nav v-if="navItems" class="d-flex justify-space-between align-center mx-10">
      <v-img :src="navItems.logo.fields.file.url" max-width="200" />
      <ul role="menu">
        <li v-for="item in navItems.navItem" :key="item.i">
          <router-link :to="item.fields.url">
            {{ item.fields.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
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
