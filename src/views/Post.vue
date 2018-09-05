<template>
  <div id="post">
    {{ content[$route.params.id] }}
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      content: [
        'post0',
        'post1',
        'post2'
      ]
    }
  }
}
</script>
