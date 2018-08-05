<template>
  <p class="short-title-box">
    <img :src="iconImg" alt="">
    <span>{{title}}</span>
  </p>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-short-title',
    props: {
      title: {
        type: String,
        default: ''
      },
      titleIcon: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        iconImg: require(`../../assets/svg/${this.titleIcon}.svg`)
      }
    },
    components: {},
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>
