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
        <el-tabs v-model="activeName" @tab-click="getNews(activeName)" class="baseTabBox">
          <el-tab-pane v-for="classify in classifys" :label="classify.name" :name="classify.id">
            <ostrich-short-article :news="news"></ostrich-short-article>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="pull-right content-right">
      <ostrich-short-flash :flashs="flashs"></ostrich-short-flash>
      <!--企业专栏暂时不上-->
      <!--<os-enterprise-column></os-enterprise-column>-->
      <os-advertising :items="rightads"></os-advertising>
      <os-hot-news class="mt-25"></os-hot-news>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
<script>
  import OsAdvertising from "../../components/os-advertising/index.vue";

  export default {
    components: {OsAdvertising},
    data () {
      return {
        activeName: 'second',
        news: [],
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
      this.getCarousel()
      this.getNews()
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
      getNews (id = '') {
        this.getRequest('https://api.tuoniaox.com/news/news/list', {
          cat_id: id,
          page_num: '',
          page_size: ''
        }).then(res => {
          this.news = res.data.news_list || []
        }).catch((err) => {
          this.news = []
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
          this.activeName = (this.classifys[0] || {}).id
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
      }
    }
  }
</script>
