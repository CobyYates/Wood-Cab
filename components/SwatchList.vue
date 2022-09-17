<template>
  <div>
    <h3 class="text-h4 mb-3" >Series</h3>
    <a
      :href="`#${item.id}`"
      class="title px-4"
      v-for="item in swatchList"
      :key="item.i"
    >
      {{ item.series }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    swatches: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    swatchList() {
      let result = this.swatches.map((e) => e.fields);
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
