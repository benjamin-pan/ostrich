<template>
  <div class="view-insight-box clearfix">
    <div class="content-left pull-left bg-color">
      <ostrich-short-title title="观点洞察" title-icon="icon-view-insight"></ostrich-short-title>
      <ostrich-short-article :news="news"></ostrich-short-article>
      <!--<ostrich-short-article :news="news"></ostrich-short-article>-->
      
      <!--<div class="news-list-content">-->
      <!--<div class="news-list-left">-->
      <!--&lt;!&ndash; 置顶新闻 &ndash;&gt;-->
      <!--<ul class="" style="padding-left: 0px;">-->
      <!---->
      <!--</ul>-->
      <!--&lt;!&ndash; 正常新闻 &ndash;&gt;-->
      <!--<ul class="news-list">-->
      <!--<li class="list-content" style="border-top: 0px">-->
      <!--<div class="media">-->
      <!--<div class="media-left">-->
      <!--<a href="https://www.tuoniaox.com/43699.html" class="news-list-img">-->
      <!--<input type="hidden"-->
      <!--value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">-->
      <!--<img class="media-object" src="../../../assets/images/2018071917143365.jpg"-->
      <!--alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">-->
      <!--</a>-->
      <!--&nbsp;-->
      <!--</div>-->
      <!--<div class="media-body">-->
      <!--<h4 class="media-heading">-->
      <!--<a class="tuoniao-a">好消息频出！这是利好被提前释放还是牛市苗头的初现</a>-->
      <!--</h4>-->
      <!--<el-button type="primary" round>独家</el-button>-->
      <!--<p class="media-introduce">-->
      <!--<a href="https://www.tuoniaox.com/43710.html" target="_blank">-->
      <!--鸵鸟区块链消息：据RIA 6月14日报道，俄罗斯国家杜马金融市场委员会主席阿纳托利·阿克萨科夫表示，在关于数字金融资产的法案中。-->
      <!--</a>-->
      <!--</p>-->
      <!--<ul class="footnotes">-->
      <!--<li class="left">-->
      <!--<img style="border-radius: 50%;margin-top: -10px;" src="../../../assets/images/tx.jpg">-->
      <!--</li>-->
      <!--<li class="left tuoniao-bookmark">-->
      <!--鸵鸟区块链的朋友们-->
      <!--</li>-->
      <!--<li class="left">20小时前</li>-->
      <!--<li class="left flash-li-01">-->
      <!--<img style="width: 15px;height: 15px;" src="../../../assets/images/bookmark.png">-->
      <!--<a href="https://www.tuoniaox.com/tag/coinbase" rel="tag">Coinbase</a>-->
      <!--<a href="https://www.tuoniaox.com/tag/g20" rel="tag">G20</a>-->
      <!--<a href="https://www.tuoniaox.com/tag/mei-zheng-jian-hui" rel="tag">美证监会</a>-->
      <!--</li>-->
      <!--<li class="right view">-->
      <!--<img style="margin: -6px 10px 0 0;" src="../../../assets/svg/首页新闻-浏览量icon.svg">-->
      <!--<a href="javascript:;" data-id="43710" data-src="" class="generate-share-image right">3098</a>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li class="list-content" style="border-top: 0px">-->
      <!--<div class="media">-->
      <!--<div class="media-left">-->
      <!--<a href="https://www.tuoniaox.com/43699.html" class="news-list-img">-->
      <!--<input type="hidden"-->
      <!--value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">-->
      <!--<img class="media-object" src="../../../assets/images/2018071917143365.jpg"-->
      <!--alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">-->
      <!--</a>-->
      <!--&nbsp;-->
      <!--</div>-->
      <!--<div class="media-body">-->
      <!--<h4 class="media-heading">-->
      <!--<a class="tuoniao-a">好消息频出！这是利好被提前释放还是牛市苗头的初现</a>-->
      <!--</h4>-->
      <!--<el-button type="primary" round>独家</el-button>-->
      <!--<p class="media-introduce">-->
      <!--<a href="https://www.tuoniaox.com/43710.html" target="_blank">-->
      <!--席阿纳托利·阿克萨科夫表示，在关于数字金融资产的法案中。-->
      <!--</a>-->
      <!--</p>-->
      <!--<ul class="footnotes">-->
      <!--<li class="left">-->
      <!--<img style="border-radius: 50%;margin-top: -10px;" src="../../../assets/images/tx.jpg">-->
      <!--</li>-->
      <!--<li class="left tuoniao-bookmark">-->
      <!--鸵鸟区块链的朋友们-->
      <!--</li>-->
      <!--<li class="left">20小时前</li>-->
      <!--<li class="left flash-li-01">-->
      <!--<img style="width: 15px;height: 15px;" src="../../../assets/images/bookmark.png">-->
      <!--<a href="https://www.tuoniaox.com/tag/coinbase" rel="tag">Coinbase</a>-->
      <!--<a href="https://www.tuoniaox.com/tag/g20" rel="tag">G20</a>-->
      <!--<a href="https://www.tuoniaox.com/tag/mei-zheng-jian-hui" rel="tag">美证监会</a>-->
      <!--</li>-->
      <!--<li class="right view">-->
      <!--<img style="margin: -6px 10px 0 0;" src="../../../assets/svg/首页新闻-浏览量icon.svg">-->
      <!--<a href="javascript:;" data-id="43710" data-src="" class="generate-share-image right">3098</a>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--<div class="more center line36 marginb-30" data-is-loading="1">-->
      <!--<span class="marginb-30 loadmore">-->
      <!--<a href="#" style="color: #409EFF;display: contents;">加载更多</a>-->
      <!--</span>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <div class="pull-right content-right">
      <div class="bg-color">
        <ostrich-short-title title="24小时新闻" title-icon="icon-24hour"></ostrich-short-title>
        <os-short-card></os-short-card>
      </div>
      <os-enterprise-column></os-enterprise-column>
      <div class="mt-25 bg-color">
        <ostrich-short-title title="热门标签" title-icon="icon-hot-tag"></ostrich-short-title>
        <os-hot-lables></os-hot-lables>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  //  import HeadlineNews from "../../../components/headline-news";
  //  import HeadlineColumn from "../../../components/headline-column";
  //  import HeadlineHotLabel from "../../../components/headline-hot-label";

  import OstrichShortArticle from "../../../components/os-short-article/index.vue";

  export default {
    data () {
      return {}
    },
    components: {
      OstrichShortArticle
    },
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    computed: {},
    watch: {}
  }
</script>
