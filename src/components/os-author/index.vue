<template>
  <div class="user-info">
    <img class="head-portrait" src="../../assets/images/3-10.jpg" height="32" width="32"/>
    <span class="user-name">{{name}}</span>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-author',
    props: {
      name: {
        type: String,
        default: ''
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
    methods: {},
    computed: {},
    watch: {}
  }
</script>
