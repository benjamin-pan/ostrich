<template>
  <div class="ostrich-head">
    <div class="container">
      <div class="logo">
        <img src="../../assets/svg/logo.svg" alt="">
      </div>
      <div class="head-link">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">头条</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">快讯</el-menu-item>
          <el-menu-item index="4">行情</el-menu-item>
          <el-menu-item index="5">行情</el-menu-item>
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
        activeIndex: ''
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
