# vue-reading-time component

Calculates the reading time of the article and displays

#### DEMO https://vue-article-reading-time.netlify.app

![Vue reading time component](src/assets/ss.png)

App.vue
```html
<article ref="article-4356">
    <h1>Excepteur sint occaecat</h1>
    <!-- pass elements ref as prop to component, can be dynamized by using :ref="some-article.id" -->
    <article-read-time element="article-4356"></article-read-time>
    <!-- -->
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nibh augue. Proin suscipit velit neque, et sodales enim blandit vel. </h2>
    <p>Vestibulum nunc tellus, laoreet imperdiet condimentum a, tempor vel lacus. Etiam auctor purus egestas tincidunt placerat. Ut feugiat dignissim dolor vitae finibus. Ut sollicitudin enim justo, id dignissim nisl volutpat a. Pellentesque mollis a mi in commodo. Morbi gravida, orci dignissim gravida ultrices, neque est pretium felis, ut gravida mauris leo at odio. Aliquam sollicitudin neque et erat tempor, at lobortis erat imperdiet. Suspendisse congue diam vel quam vestibulum bibendum. Etiam congue varius iaculis. Maecenas justo velit, lacinia ut accumsan suscipit, fringilla ac lorem.</p>
</article>
```

article-read-time.vue component

```js
<template>
  <small v-if="readTime >= 1">
    {{ readTime }} min. read
  </small>
</template>

//vue instance method
methods: {
    calculatedReadTime() {
      // average adult reading speed 238 words per minute
      this.readTime = Math.round(this.$parent.$refs[this.element].innerText.split(" ").length / 238)
    }
  }
```