<template>
  <div class="ostrich-home">
    <div class="content-left left detail-container">
      <!--幻灯片-->
      <div id="carousel-example-generic" class="carousel slide marginb-30 margint-20" data-ride="carousel">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="infoImgBox">
              <img class="infoImg" src="../../assets/images/2018071917143365.jpg" alt="">
            </div>
          </div>
        </el-col>
        <el-col :span="6" :push="2">
          <div class="grid-content bg-purple">
            <div class="infoImgBox">
              <img class="infoImg" src="../../assets/images/2018071917143365.jpg" alt="">
            </div>
          </div>
        </el-col>
        <el-col :span="6" :push="4">
          <div class="grid-content bg-purple">
            <div class="infoImgBox">
              <img class="infoImg" src="../../assets/images/2018071917143365.jpg" alt="">
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 左侧list-->
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
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
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
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";

</style>
<script>
  import TodayFlash from "../../components/today-flash";
  import HeadlineColumn from "../../components/headline-column";
  import ViewInsight from "../../components/view-insight";
  import Situation from "../../components/situation";
  import Industry from "../../components/industry";
  import Encyclopedia from "../../components/encyclopedia";
  import Recommend from "../../components/recommend";
  export default {
    data() {
      return {
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
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }

</script>
