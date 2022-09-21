<template>
  <div :class="$vuetify.breakpoint.mdAndUp ? 'pt-16' : ''">
    <client-only>
      <flipbook
        class="flipbook"
        v-model="value"
        :pages="pages"
        :click-to-zoom="true"
      />
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
  height: 90vh !important;
}
</style>
