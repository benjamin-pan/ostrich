<template>
  <div class="share-box">
    <el-popover ref="share" placement="bottom" trigger="click">
      <div class="share-popover">
        <div class="thirdParty">
          <p class="QQ"><img src="../../assets/svg/QQ.svg" alt=""><span>腾讯QQ</span></p>
          <p class="weibo"><img src="../../assets/svg/weibo.svg" alt=""><span>新浪微博</span></p>
          <p class="chat"><img src="../../assets/svg/weChatSmall.svg" alt=""><span>微信</span></p>
        </div>
        <div class="QRcode-box">
          <img class="QRcode" :src="QRSrc">
        </div>
        <p class="QRcodeInstructions">微信扫一扫，即刻分享</p>
      </div>
    </el-popover>
    <span class="pull-right os-sharing ml-25" v-popover:share>分享</span>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-share',
    props: {
      QRSrc: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
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
