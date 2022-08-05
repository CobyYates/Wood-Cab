<template>
  <div>
    {{ value }}
    <client-only>
      <flipbook
        class="flipbook"
        v-model="value"
        :pages="pages"
        :click-to-zoom="false"
        v-slot="flipbook"
      >
        <div class="text-center mb-n16">
          <v-btn @click="flipbook.flipLeft">
            <v-icon color="primary">mdi-chevron-left</v-icon>
            Previous
          </v-btn>
          <v-btn @click="flipbook.flipRight">
            Next
            <v-icon color="primary">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </flipbook>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: {
    pdf: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    pages() {
      const page = this.pdf.fields.pdf.map((e) => e.fields.file.url);
      page.unshift(null);
      return page;
    },
  },
};
</script>

<style lang="scss" scoped>
.flipbook {
  height: 100vh !important;
}
</style>
