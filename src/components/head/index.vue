<template>
  <div class="ostrich-head">
    <div class="container">
      <div class="logo">
        <img src="../../assets/svg/logo.svg" alt="logo">
      </div>
      <div class="head-link">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" @click="$router.push({path: '/home'})">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">头条</template>
            <el-menu-item index="2-1" @click="$router.push({path: '/headline/headlineViewpoint'})">观点洞察</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({path: '/headline/headlineSituation'})">链圈局势</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({path: '/headline/headlineAndustry'})">行业资讯</el-menu-item>
            <el-menu-item index="2-4" @click="$router.push({path: '/headline/headlineEncyclopedia'})">百科</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" @click="$router.push({path: '/flash/flash'})">快讯</el-menu-item>
          <el-menu-item index="4">行情</el-menu-item>
          <el-menu-item index="5" @click="$router.push({path: '/activity'})">活动</el-menu-item>
        </el-menu>
      </div>
      <div class="head-action">
        <el-popover
                placement="top-start"
                title="投稿请联系："
                trigger="hover"
                popper-class="head-popover"
                content="lemon@tuoniao.fm">
          <span slot="reference" class="width-80 contribute">投稿</span>
        </el-popover>
        <span class="width-80 search">搜索</span>
        <!--<el-input placeholder=""></el-input>-->
        <el-popover ref="downloadApp" placement="bottom" trigger="click">
          <div class="download-app">
            <img class="QRcode" :src="imgSrc" alt="店铺二维码">
            <p class="QRcodeInstructions">扫描二维码</p>
            <p class="QRcodeInstructions">下载鸵鸟区块链</p>
            <p class="QRcodeInstructions">APP</p>
          </div>
        </el-popover>
        <span class="width-80 APP" v-popover:downloadApp>APP</span>
      </div>
      <div class="login-or-register">
        <el-button type="primary">登录/注册</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'ostrich-header',
    props: {
    },
    data () {
      return {
        activeIndex: '1',
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532877920333&di=798ec9728571a37a7790b7d5972b53ed&imgtype=0&src=http%3A%2F%2Fcimage.tianjimedia.com%2FuploadImages%2F2014%2F044%2FV1A74G68V8OT.gif'
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
