<template>
  <v-row justify="center" class="mt-16">
    <v-col class="text-center" cols="12" md="9">
      <h1 v-if="copy.title" :class="titleStyle">{{ copy.title }}</h1>
      <h2
        v-for="item in copy.description.content"
        :key="item.i"
        v-html="item.content[0].value"
        class="font-weight-light mt-5"
        :class="descriptionStyle"
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
  computed: {
    descriptionStyle() {
      let result = null
      if (this.copy.descriptionFormat) {
        result = this.copy.descriptionFormat
      }
      console.log('des',result)
      return result
    },
    titleStyle() {
      let result = null
      if (this.copy.titleFormat) {
        result = this.copy.titleFormat
      }
      console.log('title',result)
      return result
    }
  },
};
</script>

<style lang="scss" scoped></style>
