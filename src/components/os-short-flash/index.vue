<template>
  <div class="short-flash-box">
    <os-short-title title="今日快讯" titleIcon="icon-flash"></os-short-title>
    <div class="news-flash" v-for="flash in flashs">
      <p class="flash-title">{{flash.title}}</p>
      <p class="flash-content">{{flash.content}}</p>
      <p class="mt-25 img-box" v-if="flash.post_img">
        <img :src="flash.post_img"/>
      </p>
      <div class="mt-15 clearfix font-12">
        <span class="pull-left release-time">{{flash.date}}</span>
        <span class="text-color black">
          <!--<el-popover ref="share" placement="bottom" trigger="click">-->
            <!--<div class="share-popover">-->
              <!--<div class="thirdParty">-->
                <!--<p class="QQ"><img src="../../assets/svg/QQ.svg" alt=""><span>腾讯QQ</span></p>-->
                <!--<p class="weibo"><img src="../../assets/svg/weibo.svg" alt=""><span>新浪微博</span></p>-->
                <!--<p class="chat"><img src="../../assets/svg/weChatSmall.svg" alt=""><span>微信</span></p>-->
              <!--</div>-->
              <!--<img class="QRcode" :src="imgSrc" alt="店铺二维码">-->
              <!--<p class="QRcodeInstructions">微信扫一扫，即刻分享</p>-->
            <!--</div>-->
          <!--</el-popover>-->
          <!--<span class="pull-right ml-25 os-sharing" v-popover:share>分享</span>-->
          <os-share></os-share>
          <span class="pull-right ml-25 os-falling" @click="emptyOrNot(0,flash.id)">{{flash.bear}}</span>
          <span class="pull-right os-rising" @click="emptyOrNot(1,flash.id)">{{flash.bull}}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
<script>
  export default {
    name: 'ostrich-short-flash',
    props: {
      flashs: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
//        imgSrc: ''
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
      emptyOrNot (flashType, flashId) {
        this.getRequest('https://api.tuoniaox.com/app/app/bullbear', {
          user_id: '',
          content_id: flashId,
          flash_type: flashType
        }).then(res => {
          console.log(res)
        }).catch((err) => {
        })
      }
    },
    computed: {},
    watch: {}
  }
</script>
