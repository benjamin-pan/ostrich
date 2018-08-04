<template>
  <div class="shoucang-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="baseTabBox">
      <el-tab-pane label="新闻资讯" name="news">
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
                <span class="flag"><i class="icon iconfont icon-shouyexinwen-biaoqianicon"></i></span>
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
                <span class="flag"><i class="icon iconfont icon-shouyexinwen-biaoqianicon"></i></span>
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
                <span class="flag"><i class="icon iconfont icon-shouyexinwen-biaoqianicon"></i></span>
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
      <el-tab-pane label="活动" name="activity">
        <div class="huodongBox">
          <el-row :gutter="24">
            <el-col :span="12" v-for="item in news_list">
              <div class="grid-content bg-purple">
                <div class="infoImgBox">
                  <img class="infoImg" :src="item.single_pic" alt="">
                </div>
                
                <div class="infor">
                  <p>{{item.summary}}</p>
                  <div class="bottomBox">
                    <div class="left">
                      <span class="location">{{item.source_name}}</span>
                      <span class="time2">{{item.date}}</span>
                    </div>
                    <div class="right baseBtn" @click="quxiao(item.id)">取消收藏</div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </el-col>
          
          </el-row>
        </div>
      
      </el-tab-pane>
    </el-tabs>
  
  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
  export default {
    data () {
      return {
        activeName: 'news',
        user_id: '100008',
        news_list: [],
        activity_list: []
      }
    },
    components: {},
    created () {
    },
    mounted () {
      this.getshoucangList(this.page_num, this.activeName);
    },
    beforeDestroy () {
    },
    methods: {
      handleClick (tab, event) {
        this.getshoucangList(this.page_num, this.activeName);
      },
      getshoucangList (page_num = 1, type) {
        this.getRequest('https://api.tuoniaox.com/news/operate/collectionlist', {
          user_id: this.user_id,
          type,
          page_num,
          page_size: 10
        }).then(res => {
          this.isShow = true;
          if (type == 'news') {
            if (res.data.news_list.length > 0) {
              this.news_list = res.data.news_list;
            } else {
              this.news_list = [];
            }
          } else {
            if (res.data.news_list.length > 0) {
              this.activity_list = res.data.news_list;
            } else {
              this.activity_list = [];
            }
          }

        })
      },
      quxiao (content_id) {
        this.getRequest('https://api.tuoniaox.com/news/operate/cancelcollection', {
          user_id: this.user_id,
          content_id
        }).then(res => {


        })
      },


    },
    computed: {},
    watch: {}
  }
</script>

