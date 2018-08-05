<template>
  <div class="ostrich-flash-box clearfix">
    <div class="content-left pull-left">
      <os-short-title class="bg-color" title="今日快讯" titleIcon="icon-flash"></os-short-title>
      <!-- 左侧list-->
      <div class="news-list-left bg-color">
        <div class="time-vertical" v-for="item in flash" :key="item.index">
          <div class="timer">
            <div class="flag-timeline clearfix">
              <div class="point pull-left ml-25">
                <span class="flag-timeline-time">{{item.date}}</span>
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
