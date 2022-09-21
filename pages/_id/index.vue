<template>
  <v-row>
    <v-col>
      <Hero v-if="page.fields.hero" :hero="page.fields.hero" />
      <CopyBlock
        v-if="page.fields.copyBlock"
        :copy="page.fields.copyBlock.fields"
      />
      <v-row class="grey lighten-2 py-10" v-if="page.fields.cabinetSwatch">
        <v-col class="text-center">
          <swatch-list :swatches="page.fields.cabinetSwatch" />
        </v-col>
      </v-row>
      <v-row v-if="page.fields.cabinetSwatch">
        <v-col cols="10" md="8" class="mx-auto">
          <CabinetSwatch
            v-for="swatch in page.fields.cabinetSwatch"
            :key="swatch.i"
            :swatch="swatch"
          />
        </v-col>
      </v-row>
      <v-row v-if="page.fields.galleryItems" class="mt-16">
        <v-col cols="10" md="8" class="mx-auto">
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="image in page.fields.galleryItems"
              :key="image.i"
            >
              <GalleryItem :image="image.fields" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="page.fields.flipbook" class="mb-10">
        <v-col>
          <Book :pdf="page.fields.flipbook" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { createClient } from "../../plugins/contentful";
import Hero from "~/components/Hero.vue";
import CabinetSwatch from "~/components/CabinetSwatch.vue";
import GalleryItem from "~/components/GalleryItem.vue";
import Book from "../../components/Book.vue";
import CopyBlock from "~/components/CopyBlock.vue";
import SwatchList from "~/components/SwatchList.vue";
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
  components: { Hero, CabinetSwatch, GalleryItem, Book, CopyBlock, SwatchList },
};
</script>

<style scoped lang="scss">

</style>
