<template>
  <div :id="swatch.fields.id">
    <v-row class="py-10">
      <v-col cols="8" md="4">
        <v-img
          :src="swatch.fields.cabinetImage.fields.file.url"
          :alt="swatch.fields.cabinetImage.fields.file.description"
          height="600"
          contain
        />
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12">
            <h3 class="title primary--text">{{ swatch.fields.title.toUpperCase() }}</h3>
            <p class="subtitle-1">{{ swatch.fields.description }}</p>
            <v-divider class="primary my-3" />
            <h3>COLOR OPTIONS</h3>
          </v-col>
          <v-col cols="3" v-for="img in swatch.fields.swatches" :key="img.i">
            <v-hover v-slot="{ hover }">
              <v-img
                :src="img.fields.file.url"
                :alt="img.fields.file.description"
                height="130"
                @click="openImage(img.fields.file.url)"
                class="swatch"
              >
                <v-overlay v-show="hover" absolute>
                  <v-icon large>mdi-magnify</v-icon>
                </v-overlay>
              </v-img>
            </v-hover>
            <p>{{ img.fields.title }}</p>
          </v-col>
        </v-row>
        <v-dialog v-model="model" width="400">
          <v-img :src="selected" contain height="400" class="img">
            <v-btn class="close" icon @click="model = false">
              <v-icon large>mdi-close</v-icon>
            </v-btn>
          </v-img>
        </v-dialog>
      </v-col>
    </v-row>
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
    swatch: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    openImage(img) {
      this.selected = img;
      this.model = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.swatch {
  cursor: pointer;
}

.img {
  position: relative;
}

.close {
  position: absolute;
  right: 20px;
  top: 10px;
}

::v-deep .v-dialog {
  box-shadow: none !important;
}
</style>
