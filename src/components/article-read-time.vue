<template>
  <small v-if="readTime >= 1">
    {{ readTime }} min. read
  </small>
</template>

<script>
export default {
  data() {
    return {
      readTime: 0
    }
  },
  props: {
    element: String
  },
  methods: {
    calculatedReadTime() {
      // average adult reading speed 238 words per minute
      this.readTime = Math.round(this.$parent.$refs[this.element].innerText.split(" ").length / 238)
    }
  },
  mounted() {
    this.calculatedReadTime()
  }
}
</script>

<style scoped>
small {
  border: .1rem coral solid;
  border-radius:1rem;
  padding: .2rem .7rem;
  text-align: center;
  color:coral;
}
</style>
