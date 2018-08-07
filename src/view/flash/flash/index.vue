<template>
  <div class="ostrich-flash-box clearfix">
    <div class="content-left pull-left">
      <os-short-title class="bg-color" title="今日快讯" titleIcon="icon-flash"></os-short-title>
      <!-- 左侧list-->
<<<<<<< HEAD
      <div class="news-list-left">
        <div class="tuoniao-ency">
          <img class="flash-img" src="../../../assets/svg/icon-flash.svg">
          <span>今日快讯</span>
        </div>
        <div class="timeline">
          <ul class="time-vertical" v-for="item in classObject" :key="item.index">
            <li class="timer">
              <b></b>
              <div class="flag-timeline">
                <span class="flag-timeline-time">20:30:56</span>
                <a @click="$router.push({path: '/flash/flashDetails'})" class="tuoniao-a express-details">
                  <p class="timeline-tit">
                    123哈鲁资本创始合伙人陈强：区块链技术为底层的数字资产本身为社会实验，存在巨大投资风险
                  </p>
                </a>
                <span class="timeline-content">
                  鸵鸟区块链6月15日上海现场消息，在今天召开CES Asia 区块链行业发展应用论坛上，哈鲁资本创始合伙人陈强分析了国内行业现状： 1.区块链技术为底层支撑的数字资产等，本身为社会实验，存在巨大投资风险； 2.目前国内的大部分项目，存在过度宣传，过度包装以及二级市场市值操盘的情况，大部分token发放机制没有通过智能合约执行，存在严重的信息不透明情况；
                  3.大部分国内项目包装的底层技术创新最终实现的结果是，大部分源自己开源代码的重新组合，创新性较差，不具备实际落地能力； 4.部分项目token的价值逻辑，充斥着资金操作的团队，流动性差，团队运营能力不足的情况，导致投资人盲目持有相关token，造成中长期损失的可能性；
                  5.短期套利心态严重，散户机构化，token发放成本极低，作恶成本极低。
                </span>
                <li class="timeline-left">
                  <span>
                    <img style="margin: -6px 10px 0 0;" src="../../../assets/images/down.png">369
                  </span>
                  <span>
                    <img style="margin: -6px 10px 0 0;" src="../../../assets/images/up.png">369
                  </span>
                </li>
                <li class="timeline-right">
                  <el-popover ref="share" placement="bottom" trigger="click">
                    <div class="share-popover">
                      <div class="thirdParty">
                        <p class="QQ">
                          <img src="../../../assets/svg/QQ.svg" alt="">
                          <span>腾讯QQ</span>
                        </p>
                        <p class="weibo">
                          <img src="../../../assets/svg/weibo.svg" alt="">
                          <span>新浪微博</span>
                        </p>
                        <p class="chat">
                          <img src="../../../assets/svg/weChatSmall.svg" alt="">
                          <span>微信</span>
                        </p>
                      </div>
                      <img class="QRcode" :src="imgSrc" alt="店铺二维码">
                      <p class="QRcodeInstructions">微信扫一扫，即刻分享</p>
                    </div>
                  </el-popover>
                  <span class="comment-cli" v-on:click="show = !show">
                    <img src="../../../assets/images/comment.png">评论(901)
                  </span>
                  <span v-popover:share>
                    <img class="flash-share" src="../../../assets/images/share.png">分享
                  </span>
                </li>
                <span style="display: ;"></span>
                <span style="display: ;"></span>
=======
      <div class="news-list-left bg-color">
        <div class="time-vertical" v-for="item in flash" :key="item.index">
          <div class="timer">
            <div class="flag-timeline clearfix">
              <div class="point pull-left ml-25">
                <span class="flag-timeline-time">{{item.date}}</span>
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
              </div>
              <div class="article-box pull-right">
                <p @click="$router.push({path: '/flash/flashDetails'})">{{item.title}}</p>
                <p class="timeline-content mt-10">{{item.content}}</p>
                <div class="clearfix mt-20 pb-20">
                  <span class="pull-left ml-7 os-rising">{{item.bull}}</span>
                  <span class="pull-left ml-35 os-falling">{{item.bear}}</span>
                  <os-share :QRSrc="item.qrcode_url"></os-share>
                  <span class="pull-right ml-25 os-sharing" @click="showComments = !showComments">{{`评论(900)`}}</span>
                </div>
                <div v-if="showComments" v-bind:class="{ commentflash: item.isActive }">
                  <div class="clearfix mt-20">
                    <div class="portrait-box pull-left">
                      <img src="../../../assets/svg/icon-default-portrait.svg" alet=""/>
                    </div>
                    <div class="sent-comments pull-right">
                      <p>
                        <el-input placeholder="发表你的见解"></el-input>
                      </p>
                      <div class="btn-box clearfix">
                        <p class="info pull-left">请发表有价值的信息，友善发言的人运气不会差</p>
                        <el-button class="pull-right">发表评论</el-button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="comment-title">
                      <span class="comment-num">评论(900)</span>
                      <span class="look-more pull-right">查看更多</span>
                    </p>
                    <div class="release-info">
                      <os-author :name="123" class="pull-left font-14"></os-author>
                      <span class="release-time font-12 ml-10">2018-06-20 16:39:03</span>
                      <p class="pl-48 font-12">
                        狂人也所知甚少，很多币种闻所未闻，所以只能靠大家自己判断了，你买的那些不知名的币种有可能会是未来的黑马，但更大的可能将会成为空气，这就是币圈的现状</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="loading-more">
        <el-button>加载更多</el-button>
      </div>
    </div>
<<<<<<< HEAD
    <div class="right content-right">
      <div class="news-flash-right right marginb">
        <div class="ranking marginb-30 margint-20">
          <div class="ranking marginb-30 margint-20">
            <div class="tit">
              <img class="announcement-img" src="../../../assets/svg/二级页面-交易所icon.svg">
              <span class="exchange-notice">交易所公告</span>
            </div>
            <div class="con bgc line22 clearfix">
              <el-row :gutter="16" class="notice">
                <el-col :span="18" class="notice_01">
                  <div class="grid-content bg-purple">
                    <a class="tuoniao-a" @click="$router.push({path: '/flash/noticedetails'});">[Fcoin] 关于F码相关事宜的公告</a>
                  </div>
                </el-col>
                <el-col :span="6" class="notice_o2">
                  <div class="grid-content bg-purple">1小时前</div>
                </el-col>
              </el-row>
              <el-row :gutter="16" class="notice">
                <el-col :span="18" class="notice_01">
                  <div class="grid-content bg-purple">[Fcoin] 关于F码相关事宜的公告</div>
                </el-col>
                <el-col :span="6" class="notice_o2">
                  <div class="grid-content bg-purple">1小时前</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <headline-news></headline-news>
=======
    <div class="pull-right content-right">
      <div class="bg-color exchange-info">
        <os-short-title title="交易所公告" titleIcon="icon-exchange"></os-short-title>
        <div class="clearfix">
          <p class="pull-left title">[91Fcoin] 关于F码相关事宜的公告</p>
          <p class="pull-right time">39分钟前</p>
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
        </div>
      </div>
      <os-advertising></os-advertising>
      <div class="bg-color mt-25">
        <os-short-title title="24小时新闻" title-icon="icon-24hour"></os-short-title>
        <os-short-card></os-short-card>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';

</style>
<script>
<<<<<<< HEAD
  import HeadlineNews from "../../../components/headline-news";
  
=======

>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
  export default {
    data () {
      return {
        flash: [],
        showComments: false
      }
    },
    components: {},
    mounted () {
      this.getFlashList()
    },
    methods: {
      getFlashList () {
        this.getRequest('https://api.tuoniaox.com/news/newsflash/list', {
          user_id: '',
          page_num: '',
          page_size: ''
        }).then(res => {
          this.flash = res.data.post_list || []
          console.log(1234, this.flash)
        }).catch((err) => {
          this.flash = []
        })
      }
    }
  }
</script>
