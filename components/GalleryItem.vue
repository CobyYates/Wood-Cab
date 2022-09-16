<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-img
        :src="image.image.fields.file.url"
        @click="openImage(image.image.fields.file.url)"
        class="image"
        :aspect-ratio="10/9"
      >
        <v-overlay v-show="hover" absolute>
          <v-icon large>mdi-arrow-expand</v-icon>
        </v-overlay>
      </v-img>
    </v-hover>
    <p class="title text-center primary--text link" @click="openSwatch(image.link)">
      {{ image.title }}
    </p>
    <v-dialog v-model="model" width="auto">
      <v-img :src="selected" contain max-height="90vh" class="img">
        <v-btn icon @click="model = false" class="close">
          <v-icon large>mdi-close</v-icon>
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
      console.log(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.image, .link {
  cursor: pointer;
}

.img {
  position: relative;
}

.close {
  position: absolute;
  right: 60px;
  top: 10px;
}

::v-deep .v-dialog {
  box-shadow: none !important;
}
</style>
