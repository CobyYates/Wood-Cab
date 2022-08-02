<template>
  <div>
    <Hero v-if="page.fields.hero" :hero="page.fields.hero" />
    <v-row v-if="page.fields.cabinetSwatch">
      <v-col cols="10" md="9" class="mx-auto">
        <CabinetSwatch
          v-for="swatch in page.fields.cabinetSwatch"
          :key="swatch.i"
          :swatch="swatch"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { createClient } from "../../plugins/contentful";
import Hero from "~/components/Hero.vue";
import CabinetSwatch from "~/components/CabinetSwatch.vue";
const contentfulClient = createClient();

export default {
  name: "index",
  data() {
    return {};
  },
  asyncData({ env, params }) {
    return contentfulClient
      .getEntries({
        content_type: "page",
        "fields.slug": params.id,
      })
      .then((page) => {
        return {
          page: page.items[0],
        };
      })
      .catch(console.error);
  },
  components: { Hero, CabinetSwatch },
};
</script>

<style scoped lang="scss"></style>
