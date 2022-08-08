<template>
  <v-row justify="center" class="mt-16">
    <v-col class="text-center" cols="12" md="9">
      <h1 v-if="copy.title">{{ copy.title }}</h1>
      <h2
        v-for="item in copy.description.content"
        :key="item.i"
        v-html="item.content[0].value"
        class="font-weight-light mt-5"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    copy: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
