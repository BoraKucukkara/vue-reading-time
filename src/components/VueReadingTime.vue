<template>
  <div class="vue-reading-time" v-if="readingTime >= 1">
  {{ readingTime }} min read
  </div>
  <div class="vue-reading-time" v-else-if="readingTime < 1 && readingTime > 0">
      under 1 min read
  </div>
  <div class="vue-reading-time" v-else-if="readingTime == 0">
  </div>
</template>

<script>
  export default {
      name:"VueReadingTime",
      data() {
          return {
          readingTime:0
          }
      },
      props: {
          element: String
      },
      methods: {
          calculatedReadTime() {
              let wordCount = this.$parent.$refs[this.element].innerText.split(" ").length
              if(wordCount > 0) {
              // average adult reading speed 238 words per minute
                  this.readingTime = Math.round(wordCount / 238)
              } else {
                  this.readingTime=0
              }
          }
      },
      mounted() {
          this.calculatedReadTime()
      }
  }
</script>