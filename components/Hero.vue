<template>
  <div>
    <v-row>
      <v-col class="pa-0">
        <v-carousel
          :height="hero.fields.height"
          v-if="hero.fields.carousel"
          :show-arrows="false"
          delimiter-icon="mdi-circle-medium"
          hide-delimiter-background
          cycle
          interval="5000"
        >
          <v-carousel-item
            v-for="image in hero.fields.desktopImages"
            :key="image.i"
          >
            <v-img
              :src="image.fields.file.url"
              :height="hero.fields.height"
              class="hero-image"
            >
              <div class="hero-image-copy text-center pa-6">
                <h2
                  class="display-1"
                  :class="
                    hero.fields.textColor
                      ? `${hero.fields.textColor}--text`
                      : ''
                  "
                >
                  {{ image.fields.title }}
                </h2>
                <p
                  class="title"
                  :class="
                    hero.fields.textColor
                      ? `${hero.fields.textColor}--text`
                      : ''
                  "
                >
                  {{ image.fields.description }}
                </p>
              </div>
            </v-img>
          </v-carousel-item>
        </v-carousel>
        <v-img
          v-else
          :height="hero.fields.height"
          :src="hero.fields.desktopImages[0].fields.file.url"
          max-width="100%"
          min-width="100%"
          :max-height="hero.fields.height"
          class="hero-image"
        >
          <div v-if="hero.fields.title" class="hero-image-copy text-center pa-6">
            <h2
              :class="
                hero.fields.textColor ? `${hero.fields.textColor}--text` : ''
              "
            >
              {{ hero.fields.title }}
            </h2>
          </div>
        </v-img>
      </v-col>
    </v-row>
    <v-row v-if="hero.fields.description">
      <v-col class="mx-auto my-16" cols="12" md="10" lg="7">
        <h2 v-if="hero.fields.textBelow" class="text-center font-weight-light">
          {{ hero.fields.description }}
        </h2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "hero",
  data() {
    return {};
  },
  props: {
    hero: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
.hero-image {
  position: relative;
  &-copy {
    position: absolute !important;
    background-color: rgba(7, 7, 7, 0.644);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 900px) {
      width: 90%;
    }
  }
}
</style>
