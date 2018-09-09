<template>
  <div id="classification" v-for="(klass, index) in klasses">
    <a 
      :href="klass.href"
      :key="index">
      klass.name
    </a>
  </div>
</template>

<script>
export default {
  name: 'Classification',
  data () {
    klasses: []
  },
  created () {
    this.axios.post('http://localhost:3000/klass')
      .then((res) => {
        this.klasses = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
