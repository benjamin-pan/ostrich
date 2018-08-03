<template>
  <div id="app" class="clearfix">
    <ostrich-header></ostrich-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  // text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  width: 100%;
  height: 100%;
  /*background-color: #F5F5F5;*/
}
</style>
