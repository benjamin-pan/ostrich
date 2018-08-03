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
  <span class="watch-num pull-right">{{watchNum}}</span>
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
  <os-discuss></os-discuss>
  <os-comments></os-comments>
  <div class="related-new-box">
    <p class="new-instructions">相关新闻</p>
    <el-row class="news" :gutter="20">
      <el-col :span="8" v-for="(o) in 6" :key="o" class="single-new">
        <img src="../../assets/images/3-10.jpg" class="image"/>
        <p class="new-title">好吃的汉堡</p>
      </el-col>
    </el-row>
  </div>
  </div>
  <div class="other">
    <div class="author-box">
      <p class="author-icon">
        <img src="" alt="">
      </p>
      <p class="author-name">鸵鸟区块链的朋友们</p>
      <p class="author-introduction">区块链就像当年互联网刚刚兴起的时候， 也有很多反对的声音，但最终还是慢慢的走向了普通大众的生活。</p>
      <p class="if-like">
        <el-button type="info" size="small" class="like-he">已关注</el-button>
      </p>
      <div class="article-info clearfix">
        <div class="info-box pull-left">
          <p class="num">38 篇</p>
          <p class="info-title">作品</p>
        </div>
        <div class="info-box pull-right">
          <p class="num">12.6 万</p>
          <p class="info-title">总阅读量</p>
        </div>
      </div>
    </div>
    <div class="advertising">
      <img src="../../assets/images/20180113143552.jpg"/>
    </div>
    <os-hot-news></os-hot-news>
  </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  import OsComments from "../../components/os-comments/index.vue";
  import OsDiscuss from "../../components/os-discuss/index.vue";
  import OsHotNews from "../../components/os-hot-news/index.vue";

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
    components: {
      OsHotNews,
      OsDiscuss,
      OsComments},
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
      getJifenList () {
        this.getRequest('https://api.tuoniaox.com/news/news/detail', {
          user_id: this.user_id,
          content_id: this.$router.query.content_id,
          page_size: 10
        }).then(res => {
          this.isShow = true;
          if (res.data.points_list.length > 0) {
            this.tableData = res.data.points_list;
          } else {
            this.tableData = [];
          }
        }).catch((err) => {
          console.log(err, 'err');
          this.tableData = [];
          this.isShow = false;
        })
      },
    },
    computed: {},
    watch: {}
  }
</script>
