<template>
  <div class="container">
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
          <el-tab-pane label="推荐" name="first">
          </el-tab-pane>
          <el-tab-pane label="观点洞察" name="second">
            <div class="ziyunBoxOne">
              <div class="left cleft">
                <img src="" alt="">
              </div>
              <div class="right cright">
                <p class="title">
                  俄国家杜马官员：三项加密货币相关法案均在“重写”中，“数字币”概念将从法案中剔除
                </p>
                <el-row>
                  <el-button type="primary" round>置顶</el-button>
                  <el-button type="primary" round>置顶</el-button>
                </el-row>
                <p class="title1">
                  鸵鸟区块链消息：据RIA 6月14日报道，俄罗斯国家杜马金融市场委员会主席阿纳托利·阿克萨科夫表示，在关于数字金融资产的法案中。
                </p>
                <div class="bottomBox">
                  <div class="left">
                    <img class="head" src="" alt="">
                    <span class="name">鸵鸟小助手</span>
                    <span class="time">12分钟前</span>
                    <span class="flag"></span>
                    <span class="biao">区块链</span>
                    <span class="biao">区块链</span>
                    <span class="biao">区块链</span>
                  </div>
                  <div class="right">取消收藏</div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="clear"></div>

            </div>
            <div class="ziyunBoxOne ziyunBoxTwo">

              <div class="cright">
                <p class="title">
                  俄国家杜马官员：三项加密货币相关法案均在“重写”中，“数字币”概念将从法案中剔除
                </p>
                <el-row>

                  <el-button type="primary" round>置顶</el-button>
                  <el-button type="primary" round>置顶</el-button>
                </el-row>
                <p class="title1">
                  鸵鸟区块链消息：据RIA 6月14日报道，俄罗斯国家杜马金融市场委员会主席阿纳托利·阿克萨科夫表示，在关于数字金融资产的法案中。
                </p>
                <div class="bottomBox">
                  <div class="left">
                    <img class="head" src="" alt="">
                    <span class="name">鸵鸟小助手</span>
                    <span class="time">12分钟前</span>
                    <span class="flag"></span>
                    <span class="biao">区块链</span>
                    <span class="biao">区块链</span>
                    <span class="biao">区块链</span>
                  </div>
                  <div class="right">取消收藏</div>
                  <div class="clear"></div>
                </div>
              </div>


            </div>
            <div class="ziyunBoxOne ziyunBoxTwo">
              <div class="cright">
                <p class="title">
                  俄国家杜马官员：三项加密货币相关法案均在“重写”中，“数字币”概念将从法案中剔除
                </p>
                <el-row>

                  <el-button type="primary" round>置顶</el-button>
                  <el-button type="primary" round>置顶</el-button>
                </el-row>
                <p class="title1">
                  鸵鸟区块链消息：据RIA 6月14日报道，俄罗斯国家杜马金融市场委员会主席阿纳托利·阿克萨科夫表示，在关于数字金融资产的法案中。
                </p>
                <div class="imgBox">
                  <el-row :gutter="26">
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <img src="" alt="">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple-light">
                        <img src="" alt="">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <img src="" alt="">
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="bottomBox">
                  <div class="left">
                    <img class="head" src="" alt="">
                    <span class="name">鸵鸟小助手</span>
                    <span class="time">12分钟前</span>
                    <span class="flag"></span>
                    <span class="biao">区块链</span>
                    <span class="biao">区块链</span>
                    <span class="biao">区块链</span>
                  </div>
                  <div class="right">取消收藏</div>
                  <div class="clear"></div>
                </div>
              </div>


            </div>
          </el-tab-pane>
          <el-tab-pane label="链圈局势" name="first">
          </el-tab-pane>
          <el-tab-pane label="行业资讯" name="first">
          </el-tab-pane>
          <el-tab-pane label="百科" name="first">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="right content-right">
      <today-flash></today-flash>
      <headline-column></headline-column>
      <div class="hotnews marginb-30">
        <div class="tit">
          <span style="border-radius: 25%; background: #CD3333; height: 20px; width: 20px; margin-left: 15px;">
            <img style="margin-top: -3px; margin-left: 2px;" src="../../assets/images/hot.png">
          </span>
          <span>热门新闻</span>
        </div>
        <div class="con bgc paddingclearfix">
          <div class="con bgc  clearfix">
            <ul class="clearfix tuoniao-hot-news">
              <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                <img class="left" src="../../assets/images/2018071811084089.jpeg" alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
              </a>
              <ol class="right">
                <span class="tuoniao-hot-content">
                  <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                </span>
                <li class="font12 gray8">2018-07-18</li>
                <li class="right">
                  <img style="height: 20px;width: 15px;margin-left: 100px;" src="../../assets/images/eye.png">
                  <a href="javascript:;" style="margin-left: 12px;" data-id="43710" data-src="" class="generate-share-image right">3098</a>
                </li>
              </ol>
            </ul>
            <ul class="clearfix tuoniao-hot-news">
              <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                <img class="left" src="../../assets/images/2018071811084089.jpeg" alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
              </a>
              <ol class="right">
                <span class="tuoniao-hot-content">
                  <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                </span>
                <li class="font12 gray8">2018-07-18</li>
                <li class="right">
                  <img style="height: 20px;width: 15px;margin-left: 100px;" src="../../assets/images/eye.png">
                  <a href="javascript:;" style="margin-left: 12px;" data-id="43710" data-src="" class="generate-share-image right">3098</a>
                </li>
              </ol>
            </ul>
            <ul class="clearfix tuoniao-hot-news">
              <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                <img class="left" src="../../assets/images/2018071811084089.jpeg" alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
              </a>
              <ol class="right">
                <span class="tuoniao-hot-content">
                  <a href="https://www.tuoniaox.com/43416.html" target="_blank" title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                </span>
                <li class="font12 gray8">2018-07-18</li>
                <li class="right">
                  <img style="height: 20px;width: 15px;margin-left: 100px;" src="../../assets/images/eye.png">
                  <a href="javascript:;" style="margin-left: 12px;" data-id="43710" data-src="" class="generate-share-image right">3098</a>
                </li>
              </ol>
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
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    components: {
      TodayFlash,
      HeadlineColumn
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }

</script>
