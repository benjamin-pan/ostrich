<template>
  <div class="my-container">
    <div class="cleftBox left">
      <div class="headImg"></div>
      <div class="title">鸵鸟小助手</div>
      <router-link to="/my/pcenter" class="navBase" :class="{ active: index == '1' }"><span></span>各人中心</router-link>
      <router-link to="/my/jifen" class="navBase" :class="{ active: index=='2' }">我的积分</router-link>
      <router-link to="/my/pcenter" class="navBase" :class="{ active: index=='3' }">我的收藏</router-link>
      <router-link to="/my/jifen" class="navBase" :class="{ active: index=='4' }">我的关注</router-link>
      <router-link to="/my/pcenter" class="navBase" :class="{ active: index=='5' }">消息中心</router-link>
      <router-link to="/my/jifen" class="navBase" :class="{ active: index=='6' }">邀请活动</router-link>
    </div>
    <div class="cRightBox right">
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
        index: '1'
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
      change: function (index) {
        this.index = index;
      }
    },
    computed: {},
    watch: {}
  }
</script>
