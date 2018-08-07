<template>
  <div class="my-container">
    <div class="cleftBox left">
      <div class="headImg"></div>
      <div class="title">鸵鸟小助手</div>
      <router-link to="/my/pcenter"  class="navBase" ><i class="icon iconfont icon-gerenzhongxin-gerenmoren"></i>各人中心</router-link>
      <router-link to="/my/jifen" class="navBase "> <i class="icon iconfont icon-gerenzhongxin-jifenmoren"></i>我的积分</router-link>
      <router-link to="/my/shoucang" class="navBase" > <i class="icon iconfont icon-gerenzhongxin-shoucangmoren"></i>我的收藏</router-link>
      <router-link to="/my/guanzhu" class="navBase" > <i class="icon iconfont icon-gerenzhongxin-guanzhumoren"></i>我的关注</router-link>
      <router-link to="/my/newsCenter" class="navBase" > <i class="icon iconfont icon-gerenzhongxin-xiaoximoren"></i>消息中心</router-link>
      <router-link to="/my/activity" class="navBase"> <i class="icon iconfont icon-gerenzhongxin-yaoqingmoren"></i>邀请活动</router-link>
      <div class="denglubtn">
        <el-button type="primary">退出登录</el-button>
        
      </div>

    </div>
    <div class="cRightBox right">
      <router-view></router-view>
    </div>
    <div class="clear"></div>
  </div>
</template>
<style lang="scss" src="./index.scss">

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
