<template>
  <div class="advertising-box">
    <img :src="item.single_pic" class="cursor-pointer" @click="openAdvertising(item.link_url)" v-for="item in items"/>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-advertising',
    props: {
      items: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    components: {},
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
      openAdvertising (url) {
        window.open(url)
      }
    },
    computed: {},
    watch: {}
  }
</script>
