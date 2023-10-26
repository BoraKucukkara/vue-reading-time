<template>
  <div class="vue-reading-time" v-if="readingTime >= 1">
  {{ Math.round(readingTime) }} min read
  </div>
  <div class="vue-reading-time" v-else-if="readingTime < 1 && readingTime > 0 ">
      under 1 min read
  </div>
  <div class="vue-reading-time" v-else-if="readingTime == 0">
    {{ err }}
  </div>
</template>

<script>
  export default {
      name:"VueReadingTime",
      data() {
          return {
          readingTime:0,
          err:""
          }
      },
      props: {
          element: String
      },
      methods: {
          calculatedReadTime() {
            let element = this.$parent.$refs[this.element]
            if(element) {
                let wordCount = this.$parent.$refs[this.element].innerText.split(" ").length
              if(wordCount > 1) {
              // average adult reading speed 238 words per minute
                  this.readingTime = wordCount / 238
              } else {
                  this.readingTime=0
              }
            } else {
                this.err = "ref not found"
            }
              
          }
      },
      mounted() {
          this.calculatedReadTime()
      }
  }
</script>