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
    <v-app-bar class="navigation" :clipped-left="clipped" height="100">
      <template v-if="navItems && $vuetify.breakpoint.mdAndUp">
        <v-img
          v-if="navItems.logo"
          :src="navItems.logo.fields.file.url"
          max-height="90"
          max-width="90"
        />
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
    <v-footer padless>
      <v-row class="grey darken-4 white--text">
        <v-col cols="11" md="8" class="mx-auto py-10 my-6">
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="5">
              <v-img
                v-if="navItems.logo"
                :src="navItems.logo.fields.file.url"
                max-height="90"
                max-width="90"
              />
            </v-col>
            <v-col cols="12" md="4" class="ml-auto text-end">
              <h3 class="font-weight-light title">GET IN TOUCH</h3>
              <div class="pt-8 font-weight-light">
                <p class="mb-1">702-329-5030</p>
                <p class="mb-1">info@elementcabinetdesign.com</p>
                <p class="mb-1">7370 Dean Martin Dr #401 Las Vegas, NV 89139</p>
              </div>
            </v-col>
          </v-row>
          <v-divider dark />
          <v-row class="pt-10">
            <v-col cols="12" md="5">
              <p>Woodcab Factory (C) {{ date }} ALL RIGHTS RESERVED</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
  // methods: {
  //   getMetaTag(val) {
  //     console.log(val)
  //     console.log(first)
  //   }
  // },
  // head() {
  //   let properties = {};
  //   let meta = [];
  //   let link = [];
  //   let script = [];
  //   const title = this.getMetatag("title");
  //   const description = this.getMetatag("description");
  //   const image = this.getMetatag("og:image");

  //   if (title) {
  //     properties.title = title.value;
  //     meta.push({
  //       hid: "og:title",
  //       property: "og:title",
  //       content: title.value,
  //     });
  //     meta.push({
  //       hid: "og:site_name",
  //       property: "og:site_name",
  //       content: title.value,
  //     });
  //   }

  //   if (description) {
  //     meta.push({
  //       hid: "description",
  //       name: "description",
  //       content: description.value,
  //     });
  //     meta.push({
  //       hid: "og:description",
  //       property: "og:description",
  //       content: description.value,
  //     });
  //   }

  //   if (image) {
  //     meta.push({
  //       hid: "og:image",
  //       property: "og:image",
  //       content: image.value,
  //     });
  //   }

  //   meta.push({
  //     hid: "og:type",
  //     property: "og:type",
  //     content: "website",
  //   });

  //   return {
  //     ...properties,
  //     meta,
  //     link,
  //     script,
  //   };
  // },
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
