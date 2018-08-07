<template>
<<<<<<< HEAD
  <div class="ostrich-home">
    <div class="content-left left detail-container">
=======
  <div class="home-container clearfix">
    <div class="content-left pull-left">
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
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
<<<<<<< HEAD
      <div class="news-list-content">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="baseTabBox">
          <el-tab-pane label="推荐" name="recommend">
            <recommend></recommend>
          </el-tab-pane>
          <el-tab-pane label="观点洞察" name="viewpoint">
            <view-insight></view-insight>
          </el-tab-pane>
          <el-tab-pane label="链圈局势" name="situation">
            <situation></situation>
          </el-tab-pane>
          <el-tab-pane label="行业资讯" name="industry">
            <industry></industry>
          </el-tab-pane>
          <el-tab-pane label="百科" name="encyclopedia">
            <encyclopedia></encyclopedia>
=======
      <div class="news-list-content mt-25">
        <el-tabs v-model="activeName" @tab-click="getNews(activeName)" class="baseTabBox">
          <el-tab-pane v-for="classify in classifys" :label="classify.name" :name="classify.id">
            <ostrich-short-article :news="news"></ostrich-short-article>
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
<<<<<<< HEAD
    <div class="right content-right">
      <today-flash></today-flash>
      <headline-column></headline-column>
      <div class="hotnews marginb-30">
        <div class="tit news24">
          <img src="../../assets/svg/二级页-24小时新闻icom.svg">
          <span>24小时新闻</span>
        </div>
        <div class="con bgc paddingclearfix">
          <div class="con bgc clearfix">
            <ul class="clearfix tuoniao-hot-news">
              <li class="news-li">
                <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                  <img class="left" src="../../assets/images/2018071811084089.jpeg" alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                </a>
                <ol class="right">
                  <li>
                    <span class="tuoniao-hot-content">
                      <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                    </span>
                  </li>
                  <li class="font12 gray8 li-time">12分钟前</li>
                  <li class="right newsTraffic">
                    <img src="../../assets/svg/首页新闻-浏览量icon.svg">
                    <a href="javascript:;" data-id="43710" data-src="" class="generate-share-image right">3098</a>
                  </li>
                </ol>
              </li>
            </ul>
            <ul class="clearfix tuoniao-hot-news">
              <li class="news-li">
                <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                  <img class="left" src="../../assets/images/2018071811084089.jpeg" alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                </a>
                <ol class="right">
                  <li>
                    <span class="tuoniao-hot-content">
                      <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                    </span>
                  </li>
                  <li class="font12 gray8 li-time">12分钟前</li>
                  <li class="right newsTraffic">
                    <img src="../../assets/svg/首页新闻-浏览量icon.svg">
                    <a href="javascript:;" data-id="43710" data-src="" class="generate-share-image right">3098</a>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
=======
    <div class="pull-right content-right">
      <ostrich-short-flash :flashs="flashs"></ostrich-short-flash>
      <os-enterprise-column></os-enterprise-column>
      <os-hot-news class="mt-25"></os-hot-news>
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
<script>
<<<<<<< HEAD
  import TodayFlash from "../../components/today-flash";
  import HeadlineColumn from "../../components/headline-column";
  import ViewInsight from "../../components/view-insight";
  import Situation from "../../components/situation";
  import Industry from "../../components/industry";
  import Encyclopedia from "../../components/encyclopedia";
  import Recommend from "../../components/recommend";
=======
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
  export default {
    data () {
      return {
<<<<<<< HEAD
        activeName: 'recommend',
        activeName: 'situation',
        activeName: 'industry',
        activeName: 'encyclopedia',
        activeName: 'viewpoint'
      };
    },
    components: {
      TodayFlash,
      HeadlineColumn,
      ViewInsight,
      Situation,
      Industry,
      Encyclopedia,
      Recommend
=======
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
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
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
