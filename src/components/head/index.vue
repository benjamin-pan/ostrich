<template>
  <div class="ostrich-head">
    <div class="container">
      <div class="logo">
        <img src="../../assets/svg/logo.svg" alt="">
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
          <el-menu-item index="5">活动</el-menu-item>
        </el-menu>
      </div>
      <div class="head-action">
        <span class="contribute">投稿</span>
        <span class="search">搜索</span>
        <span class="APP">APP</span>
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
    methods: {},
    computed: {},
    watch: {}
  }
</script>
