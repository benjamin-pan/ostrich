<template>
  <div class="detail-container">
    <div class="article">
      <h1 class="article-title">{{title}}</h1>
      <p class="information">
        <span class="small-title">{{smallTitle}}</span>
        <span class="artcle-time">{{artcleTime}}</span>
        <el-popover ref="share" placement="bottom" trigger="click">
          <div class="share-popover">
            <div class="thirdParty">
              <p class="QQ"><img src="../../assets/svg/QQ.svg" alt=""><span>腾讯QQ</span></p>
              <p class="weibo"><img src="../../assets/svg/weibo.svg" alt=""><span>新浪微博</span></p>
              <p class="chat"><img src="../../assets/svg/weChatSmall.svg" alt=""><span>微信</span></p>
            </div>
            <img class="QRcode" :src="imgSrc" alt="店铺二维码">
            <p class="QRcodeInstructions">微信扫一扫，即刻分享</p>
          </div>
        </el-popover>
        <span class="share-artcle" v-popover:share>分享</span>
        <span class="watch-num">{{watchNum}}</span>
      </p>
      <div class="abstract-box hasQuotes">
        <img class="quotes" src="../../assets/svg/icon-quotes.svg" alt="">
        <p class="abstract">{{abstract}}</p>
      </div>
      <div class="parting-line"></div>
      <p class="paragraph">
        <span class="mes-source">鸵鸟区块链消息：</span>
        <span>据Finance Magnates 6月20日报道，英国金融监管局（FCA）针对未经授权的金融服务供应商Coin Boost提供包括加密货币在内的金融服务或产品发出警告。</span>
      </p>
      <p class="paragraph">
        <span class="mes-source">来源：Finance Magnates，鸵鸟区块链编译整理</span>
      </p>
      <div class="capsules">
        <span class="capsule">区块链</span>
        <span class="capsule">加密</span>
        <span class="capsule">数字货币</span>
        <span class="capsule">智能合约</span>
        <span class="capsule">智能合约</span>
        <span class="capsule">钱包&交易</span>
        <span class="capsule">比特币 BTC</span>
      </div>
      <div class="btn-box">
        <el-button type="primary" class="btn-like">点赞</el-button>
        <el-button type="primary" class="btn-collection" icon="el-icon-search">收藏</el-button>
      </div>
      <div class="discuss-box">
        <p class="discuss-title">参与讨论</p>
        <el-input type="textarea" placeholder="请登录后发表评论…"></el-input>
        <p class="action clearfix">
          <span class="need-login">立即<span>登录</span>，参与讨论</span>
          <el-button type="primary" size="small" plain class="sent-discuss pull-right">发表评论</el-button>
        </p>
      </div>
      <div class="comments-box">
        <p class="comments-title">最新评论（435）</p>
        <div class="one-comments">
          <div class="user-info">
            <img class="head-portrait"  src="../../assets/images/3-10.jpg" height="32" width="32"/>
            <span class="user-name">鸵鸟小助手</span>
          </div>
          <div class="content-box">
            <p class="comment-text">狂人也所知甚少，很多币种闻所未闻，所以只能靠大家自己判断了。</p>
            <p class="comment-info clearfix">
              <span class="comment-time pull-left">2018-06-16 16:39:03</span>
              <span class="feel-good pull-right">
                <img class="icon-good" src="../../assets/svg/icon-good.svg" alt="">
                点赞(
                <span>
                  30989
                </span>
                )
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="other">456</div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    data () {
      return {
        title: '中国人民银行数字货币研究所副所长：区块链在数字票据上的应用效果显著',
        smallTitle: '鸵鸟区块链的朋友们',
        artcleTime: '03-22 11:05',
        watchNum: '30989',
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532877920333&di=798ec9728571a37a7790b7d5972b53ed&imgtype=0&src=http%3A%2F%2Fcimage.tianjimedia.com%2FuploadImages%2F2014%2F044%2FV1A74G68V8OT.gif',
        abstract: '微软于近日宣布，将与国际知名咨询机构安永联合推出保护版权的区块链工具，即利用区块链技术为作者、软件开发人员和其他创意制作人收取版税，该技术可在多台计算机上创建防篡改记录系统。'
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
