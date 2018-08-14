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
            <el-menu-item v-for="classify in classifys" :index="classify.id"
                          @click="$router.push({path: '/headline/headlineViewpoint', query: {id: classify.id, name: classify.name}})">
              {{classify.name}}
            </el-menu-item>
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
      activeIndex: {
        type: String,
        default: '1'
      }
//      ,
//      classifys: {
//        type: Array,
//        default () {
//          return []
//        }
//      }
    },
    data () {
      return {
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532877920333&di=798ec9728571a37a7790b7d5972b53ed&imgtype=0&src=http%3A%2F%2Fcimage.tianjimedia.com%2FuploadImages%2F2014%2F044%2FV1A74G68V8OT.gif',
        classifys: [],
        activeName: ''
      }
    },
    components: {},
    created () {
    },
    mounted () {
      this.getClassify()
    },
    beforeDestroy () {
    },
    methods: {
      getClassify () {
        this.getRequest('https://api.tuoniaox.com/news/news/classify').then(res => {
          this.classifys = res.data.post_list || []
//          this.$emit('postClassifys', this.classifys)
          this.activeName = (this.classifys[0] || {}).id
//          this.getNews()
        }).catch((err) => {
          this.classifys = []
          this.activeName = ''
        })
      }
    },
    computed: {},
    watch: {}
  }
</script>
