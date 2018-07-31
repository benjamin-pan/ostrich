<template>
  <div class="pcenter-container">
    <div class="baseTabBox">
      <span class="first" v-bind:class="{ active: !isActive }" v-on:click="change(false)">基本信息</span>
      <span v-bind:class="{ active: isActive }" v-on:click="change(true)">账户安全</span>
    </div>
    <div class="contentBox">
    </div>
  </div>
</template>
<style lang="scss" scoped src="./index.less">

</style>
<script>
  export default {
    data () {
      return {
        isActive: true
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
      change: function (value) {
        this.isActive = value;
      }

    },
    computed: {},
    watch: {}
  }
</script>
