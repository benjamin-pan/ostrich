<template>
  <div class="portal-container">
    <div class="headContainer">
      <div class="headBox">
        <div class="shareBox">
          <el-popover
            placement="bottom"
            width="200"

            popper-class="shareBox-pop"
            trigger="hover">
            <div class="popContent">
              <p class="shareb"><i class="icon iconfont icon-QQ"></i>腾讯QQ</p>
              <p class="shareb"><i class="icon iconfont icon-weibo"></i>新浪微博</p>
              <p class="shareb"><i class="icon iconfont icon-wechat"></i>微信</p>
              <p class="weixinImg">
                <img src="" alt="">
              </p>
              <p class="mm">微信扫一扫,即刻分享</p>
            </div>
            <span slot="reference"><i class="icon iconfont icon-kuaixun-fenxiangicon"></i>分享</span>
            <!-- <el-button slot="reference">hover 激活</el-button> -->
          </el-popover>
        </div>
      
        
        <div class="infoBox">
          <el-row>
            <el-col :span="5">
              <div class="grid-content">
                <p class="topTitle">1233篇</p>
                <p class="bottomTitle">文章</p>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">
                <p class="topTitle">1233万</p>
                <p class="bottomTitle">总阅读量</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content portalImg">
                <img src="" alt="">
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">
                <p class="topTitle">1233</p>
                <p class="bottomTitle">粉丝</p>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">
                <p class="topTitle">1233万</p>
                <p class="bottomTitle">收藏</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="nameBox">
          <span class="name">鸵鸟小助手</span>
        </div>
        <div class="messageBox">
          <p>可发生的肤色金佛</p>
          <p>我欧锦赛的金佛is分配口味彷佛我</p>
        </div>
        <el-button type="info" class="guanzhu">已关注</el-button>
      </div>
    </div>
    
    <div class="contentBox shoucang-container">
      
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
            <div class="right"><i class="icon iconfont icon-wenzhangxiangqing-yueduliangicon"></i>2000</div>
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
            <div class="right"><i class="icon iconfont icon-wenzhangxiangqing-yueduliangicon"></i>2000</div>
            <div class="clear"></div>
          </div>
        </div>
        

      </div>
    </div>

  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
  export default {
    data () {
      return {
       poptrue:true,
        user_id:'100008'
      }

    },
    components: {},
    created () {
    },
    mounted () {
      this.getJifenList();
    },
    beforeDestroy () {
    },
    methods: {
      getJifenList(page_num = 1){
        this.getRequest('https://api.tuoniaox.com/app/app/pointslist', {
            user_id: this.user_id,
            page_num,
            page_size:10
        }).then(res=> {
            this.isShow = true;
            if(res.data.points_list.length>0){
              this.tableData = res.data.points_list;
            }else{
              this.tableData = [];
            }
        })
      },
      
      
    },
    computed: {},
    watch: {}
  }
</script>
