<template>
  <div id="app" class="clearfix">
    <ostrich-header></ostrich-header><!-- :activeIndex="activeIndex"-->
    <router-view></router-view><!-- @changeActiveIndex="changeActiveIndex"-->
    <ostrich-footer></ostrich-footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        activeIndex: '1'
      }
    },
    components: {},
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
      changeActiveIndex (val) {
        this.activeIndex = val
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>