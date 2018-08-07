<template>
  <div class="detail-container">
    <div class="article">
      <h1 class="article-title">{{article.title}}</h1>
      <p class="information">
        <span class="small-title">{{article.publish_user}}</span>
        <span class="artcle-time">{{article.date}}</span>
        <os-share></os-share>
        <span class="watch-num pull-right">{{article.views}}</span>
      </p>
      <div class="abstract-box hasQuotes">
        <img class="quotes" src="../../assets/svg/icon-quotes.svg" alt="">
        <p class="abstract">{{article.summary}}</p>
      </div>
      <div class="parting-line"></div>
      <!--<p class="paragraph">-->
      <!--<span class="mes-source">鸵鸟区块链消息：</span>-->
      <!--<span>据Finance Magnates 6月20日报道，英国金融监管局（FCA）针对未经授权的金融服务供应商Coin Boost提供包括加密货币在内的金融服务或产品发出警告。</span>-->
      <!--{{article.content}}-->
      <!--</p>-->
      <p class="paragraph" v-html="article.content">
      </p>
      <p class="paragraph">
        <span class="mes-source">来源：{{article.source_name}}，{{article.publish_user}}编译整理</span>
      </p>
      <div class="capsules">
        <span class="capsule" v-for="tag in (article.tags||'').split(',')">{{tag}}</span>
      </div>
      <div class="btn-box">
        <el-button type="primary" class="btn-like"><img src="../../assets/svg/icon-good-white.svg" alt="">点赞</el-button>
        <el-button type="primary" class="btn-collection"><img src="../../assets/svg/icon-collection-white.svg" alt="">收藏
        </el-button>
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
      <os-hot-news class="mt-25"></os-hot-news>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>

  import OsShare from "../../components/os-share/index.vue";

  export default {
    data () {
      return {
        article: {}
      }
    },
    components: {
      OsShare
    },
    created () {
    },
    mounted () {
      this.getArticleDetail()
    },
    beforeDestroy () {
    },
    methods: {
      getArticleDetail () {
        this.getRequest('https://api.tuoniaox.com/news/news/detail', {
          user_id: this.user_id,
          content_id: this.$route.query.id
        }).then(res => {
          this.article = res.data.post_data || {}
        }).catch((err) => {
          console.log(err, 'err');
          this.tableData = [];
          this.isShow = false;
        })
      }
    },
    computed: {},
    watch: {}
  }
</script>
