<template>
  <v-app dark class="example">
    <v-bottom-sheet v-model="drawer">
      <v-sheet class="text-center">
        <v-list dense class="py-0">
          <v-list-item
            :to="item.to"
            @click="drawer = false"
            v-for="item in items"
            :key="item.title"
          >
            <v-list-item-content>
              <v-list-item-title
                class="headline font-weight-light py-3 text-center"
              >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-bottom-sheet>

    <v-app-bar
      :height="$vuetify.breakpoint.smAndDown ? '50' : '100'"
      :app="$vuetify.breakpoint.smAndDown"
      class="navigation"
      fixed
      width="100vw"
    >
      <template v-if="navItems && $vuetify.breakpoint.mdAndUp">
        <v-img
          v-if="navItems != null"
          :src="navItems.logo.fields.file.url"
          max-height="90"
          max-width="90"
          @click="toHome"
          class="hover"
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
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" name="mobile navigation button" />
      </template>
    </v-app-bar>

    <v-main :class="$vuetify.breakpoint.mdAndUp ? 'cont' : ''" ref="scroll">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-btn
      fixed
      bottom
      right
      v-show="scY > 500"
      fab
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <v-footer class="mx-0">
      <v-row class="grey darken-4 white--text">
        <v-col cols="11" md="8" class="mx-auto py-10 my-6">
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="5">
              <v-img
                v-if="navItems != null"
                :src="navItems.footerLogo.fields.file.url"
                max-height="150"
                max-width="150"
              />
            </v-col>
            <v-col cols="12" md="4" class="ml-auto text-end">
              <h3 class="font-weight-light title">GET IN TOUCH</h3>
              <div class="pt-8 font-weight-light">
                <p class="mb-1">(702) 803-1201</p>
                <p class="mb-1">info@elementcabinetdesign.com</p>
                <p class="mb-1">6283 S. Valley View Blvd. | Suite J Las Vegas, NV 89118</p>
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
      date: new Date().getFullYear(),
      clipped: false,
      drawer: false,
      fixed: true,
      scTimer: 0,
      scY: 0,
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Door Styles",
          to: "/door-styles",
        },
        {
          title: "Inspiration Gallery",
          to: "/inspiration-gallery",
        },
        {
          title: "Brochures",
          to: "/brochures",
        },
        {
          title: "Contact Us",
          to: "/contact",
        },
      ],
    };
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toHome() {
      this.$router.push("/");
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
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
  // async fetch() {
  // },
  async beforeCreate() {
    await this.$store.dispatch("navigation/getPageItems");
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.v-footer {
  padding: 12px;
}
.cont {
  margin-top: 100px;
}

.hover {
  cursor: pointer;
}

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
