<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-img
        :src="image.image.fields.file.url"
        @click="openImage(image.image.fields.file.url)"
        class="image"
        :aspect-ratio="10 / 9"
      >
        <v-overlay v-show="hover" absolute>
          <v-icon large>mdi-arrow-expand</v-icon>
        </v-overlay>
      </v-img>
    </v-hover>
    <p
      class="title text-center link"
    >
      {{ image.title }}
    </p>
    <v-dialog
      v-model="model"
      height="90vh"
      :width="$vuetify.breakpoint.mdAndUp ? '1300' : 'auto'"
    >
      <v-img
        :src="selected"
        contain
        max-height="90vh"
        class="d-flex justify-end"
      >
        <v-btn class="close" icon @click="model = false">
          <v-icon large color="white">mdi-close</v-icon>
        </v-btn>
      </v-img>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: false,
      selected: null,
    };
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    openImage(img) {
      this.selected = img;
      this.model = true;
    },
    openSwatch(link) {
      window.location = `/door-styles#${link}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  cursor: pointer;
}

.img {
  position: relative;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
}

::v-deep .v-dialog {
  box-shadow: none !important;
}
</style>
