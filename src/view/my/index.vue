<template>
  <div class="my-container">
    <div class="cleftBox">
      <router-link to="/my/pcenter">各人中心</router-link>
      <router-link to="/my/jifen">我的积分</router-link>

    </div>
    <div class="cRight">
       <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./index.less">

</style>
<script>
  export default {
    data () {
      return {
        user: '',
        password: '',
        userErrMsg: '',
        pwdErrMsg: '',
        form: {},
        rules: {
          user: [],
          password: []
        }
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
