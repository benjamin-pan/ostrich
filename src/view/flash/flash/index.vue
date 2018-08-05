<template>
  <div class="ostrich-flash-box clearfix">
    <div class="content-left pull-left">
      <os-short-title class="bg-color" title="今日快讯" titleIcon="icon-flash"></os-short-title>
      <!-- 左侧list-->
      <div class="news-list-left bg-color">
        <div class="time-vertical" v-for="item in classObject" :key="item.index">
          <div class="timer">
            <div class="flag-timeline clearfix">
              <div class="point pull-left ml-25">
                <span class="flag-timeline-time">20:30:56</span>
              </div>
              <div class="article-box pull-right">
                <p @click="$router.push({path: '/flash/flashDetails'})">
                   123哈鲁资本创始合伙人陈强：区块链技术为底层的数字资产本身为社会实验，存在巨大投资风险
                </p>
                <p class="timeline-content mt-10">鸵鸟区块链6月15日上海现场消息，在今天召开CES Asia 区块链行业发展应用论坛上，哈鲁资本创始合伙人陈强分析了国内行业现状： 1.区块链技术为底层支撑的数字资产等，本身为社会实验，存在巨大投资风险； 2.目前国内的大部分项目，存在过度宣传，过度包装以及二级市场市值操盘的情况，大部分token发放机制没有通过智能合约执行，存在严重的信息不透明情况；
                  3.大部分国内项目包装的底层技术创新最终实现的结果是，大部分源自己开源代码的重新组合，创新性较差，不具备实际落地能力； 4.部分项目token的价值逻辑，充斥着资金操作的团队，流动性差，团队运营能力不足的情况，导致投资人盲目持有相关token，造成中长期损失的可能性；
                  5.短期套利心态严重，散户机构化，token发放成本极低，作恶成本极低。</p>
                <div class="clearfix mt-20 pb-20">
                  <span class="pull-left ml-7 os-rising"></span>
                  <span class="pull-left ml-35 os-falling"></span>
                  <el-popover ref="share" placement="bottom" trigger="click">
                    <div class="share-popover">
                      <div class="thirdParty">
                        <p class="QQ"><img src="../../../assets/svg/QQ.svg" alt=""><span>腾讯QQ</span></p>
                        <p class="weibo"><img src="../../../assets/svg/weibo.svg" alt=""><span>新浪微博</span></p>
                        <p class="chat"><img src="../../../assets/svg/weChatSmall.svg" alt=""><span>微信</span></p>
                      </div>
                      <img class="QRcode" :src="imgSrc" alt="店铺二维码">
                      <p class="QRcodeInstructions">微信扫一扫，即刻分享</p>
                    </div>
                  </el-popover>
                  <span class="pull-right ml-25 os-sharing" v-popover:share>分享</span>
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
                      <p class="pl-48 font-12">狂人也所知甚少，很多币种闻所未闻，所以只能靠大家自己判断了，你买的那些不知名的币种有可能会是未来的黑马，但更大的可能将会成为空气，这就是币圈的现状</p>
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
    <div class="pull-right content-right">
      <div class="bg-color exchange-info">
        <os-short-title title="交易所公告" titleIcon="icon-exchange"></os-short-title>
        <div class="clearfix">
          <p class="pull-left title">[91Fcoin] 关于F码相关事宜的公告</p>
          <p class="pull-right time">39分钟前</p>
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
  import HeadlineNews from "../../../components/headline-news";

  export default {
    //    name: 'ostrich-flash',
    data () {
      return {
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532877920333&di=798ec9728571a37a7790b7d5972b53ed&imgtype=0&src=http%3A%2F%2Fcimage.tianjimedia.com%2FuploadImages%2F2014%2F044%2FV1A74G68V8OT.gif',
        classObject: [{
          isActive: false
        }],
        showComments: false
      }
    },
    components: {
      HeadlineNews
    },
    methods: {
      commentSwitch () {
        this.classObject.isActive = !this.classObject.isActive;
      }
    }
  }

</script>
