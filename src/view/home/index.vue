<template>
  <div class="home-container clearfix">
    <div class="content-left pull-left">
      <!--幻灯片-->
      <div data-ride="carousel" class="carousel bg-color cursor-pointer">
        <el-carousel :interval="5000" arrow="always" height="360px">
          <el-carousel-item v-for="item in slideshow">
            <img :src="item.single_pic" :key="item.id" @click="$router.push({path: '/detail', query: {id: item.id}})"/>
            <p>{{ item.title }}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="25" class="mt-25">
        <el-col :span="8" v-for="bannerad in bannerads">
          <div class="infoImgBox" @click="openOutLink(bannerad.link_url)">
            <img class="infoImg cursor-pointer" :src="bannerad.single_pic" alt="">
          </div>
        </el-col>
      </el-row>
      <!-- 左侧list-->
      <div class="news-list-content mt-25">
        <el-tabs v-model="activeName" @tab-click="getNews()" class="baseTabBox">
          <el-tab-pane v-for="classify in classifys" :label="classify.name" :name="classify.id">
            <ostrich-short-article :news="news"></ostrich-short-article>
            <os-load-more @loadNextPage="loadNextPage" v-show="totalNews>news.length"></os-load-more>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="pull-right content-right">
      <ostrich-short-flash :flashs="flashs"></ostrich-short-flash>
      <!--企业专栏暂时不上-->
      <!--<os-enterprise-column></os-enterprise-column>-->
      <os-advertising :items="rightads"></os-advertising>
      <os-hot-news></os-hot-news>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
<script>
  export default {

    data () {
      return {
        activeName: '',
        news: [],
        totalNews: 0,
        flashs: [],
        classifys: [],
        slideshow: [],
        bannerads: [],
        rightads: []
      }
    },
    created () {
    },
    mounted () {
      this.$emit('changeActiveIndex', '1')
      this.getCarousel()
      this.getFlashs()
      this.getClassify()
      this.getbBannerads()
      this.getRightads()
    },
    beforeDestroy () {
    },
    methods: {
      getCarousel () {
        this.getRequest('https://api.tuoniaox.com/homepage/homepage/sowingmap').then(res => {
          this.slideshow = res.data.news_list || []
        }).catch((err) => {
          this.slideshow = []
        })
      },
      getNews (pageNum = '') {
        this.getRequest('https://api.tuoniaox.com/news/news/list', {
          cat_id: this.activeName,
          page_num: pageNum,
          page_size: ''
        }).then(res => {
          let data = res.data
          if (pageNum !== '') this.news.push(...data.news_list)
          else this.news = data.news_list || []
          this.totalNews = data.total
        }).catch((err) => {
          this.news = []
          this.totalNews = 0
        })
      },
      getFlashs () {
        this.getRequest('https://api.tuoniaox.com/news/newsflash/list', {
          user_id: '',
          page_num: '',
          page_size: ''
        }).then(res => {
          this.flashs = res.data.post_list || []
        }).catch((err) => {
          this.flashs = []
        })
      },
      getClassify () {
        this.getRequest('https://api.tuoniaox.com/news/news/classify').then(res => {
          this.classifys = res.data.post_list || []
//          this.$emit('postClassifys', this.classifys)
          this.activeName = (this.classifys[0] || {}).id
          this.getNews()
        }).catch((err) => {
          this.classifys = []
          this.activeName = ''
        })
      },
      getbBannerads () {
        this.getRequest('https://api.tuoniaox.com/homepage/homepage/bannerads').then(res => {
          this.bannerads = res.data.result_list || []
        }).catch((err) => {
          this.bannerads = []
        })
      },
      getRightads () {
        this.getRequest('https://api.tuoniaox.com/homepage/homepage/rightads').then(res => {
          this.rightads = res.data.result_list || []
        }).catch((err) => {
          this.rightads = []
        })
      },
      openOutLink (url) {
        window.open(url)
      },
      loadNextPage (val) {
        this.getNews(val)
      }
    }
  }
</script>
