<template>
  <div class="home-container clearfix">
    <div class="content-left pull-left">
      <!--幻灯片-->
      <div data-ride="carousel" class="carousel bg-color">
        <el-carousel :interval="5000" arrow="always" height="360px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../assets/images/20180113143552.jpg"/>
            <p>{{ item }}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="25" class="mt-25">
        <el-col :span="8" v-for="(o) in 3" :key="o">
          <div class="infoImgBox">
            <img class="infoImg" src="../../assets/images/2018071917143365.jpg" alt="">
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
      <os-enterprise-column></os-enterprise-column>
      <os-hot-news class="mt-25"></os-hot-news>
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
        activeName: 'second',
        news: [],
        flashs: [],
        classifys: []
      }
    },
    created () {
    },
    mounted () {
      this.getCarousel()
      this.getNews()
      this.getFlashs()
      this.getClassify()
    },
    beforeDestroy () {
    },
    methods: {
      getCarousel () {
        this.getRequest('https://api.tuoniaox.com/homepage/homepage/sowingmap').then(res => {
          console.log(res)
        }).catch((err) => {
        })
      },
      getNews (id = '') {
        this.getRequest('https://api.tuoniaox.com/news/news/list', {
          cat_id: id,
          page_num: '',
          page_size: ''
        }).then(res => {
          this.news = res.data.news_list || []
          console.log(this.news)
        }).catch((err) => {
          console.log(err, 'err');
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
          console.log(4, res)
        }).catch((err) => {
          this.flashs = []
        })
      }
    }
  }
</script>
