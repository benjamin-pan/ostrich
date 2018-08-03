<template>
  <div class="ostrich-flash">
    <div class="content-left">
      <!-- 左侧list-->
      <div class="news-list-left">
        <div class="tuoniao-ency">
          <img style="margin-left: 3px;" src="../../../assets/svg/icon-flash.svg">
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
              </div>
              <div class="segmenttation">
              </div>
              <div v-if="show" v-bind:class="{ commentflash: item.isActive }">
                <el-row :gutter="20" class="timeline-lx">
                  <el-col :span="1" class="robot">
                    <div class="grid-content bg-purple">
                      <img src="../../../assets/images/robot.png" alet="机器人" />
                    </div>
                  </el-col>
                  <el-col :span="13" class="flash-input">
                    <div class="grid-content bg-purple">
                      <el-input placeholder="发表你的见解"></el-input>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="timeline-signature">
                  <el-col :span="15" class="falsh-comment">
                    <div class="grid-content bg-purple">请发表有价值的信息，友善发言的人运气不会差</div>
                  </el-col>
                  <el-col :span="4" :push="4" class="timeline-comment">
                    <div class="grid-content bg-purple">
                      <el-button>发表评论</el-button>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="timeline-allcomment">
                  <el-col :span="2" class="timeline-comment-01">
                    <div class="grid-content bg-purple">评论1(900)</div>
                  </el-col>
                  <el-col :span="2" class="view-more">
                    <div class="grid-content bg-purple timeline-more">
                      <a>查看更多</a>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="timeline-lx">
                  <el-col :span="1">
                    <div class="grid-content bg-purple">
                      <img src="../../../assets/images/robot.png" alet="机器人" />
                    </div>
                  </el-col>
                  <el-col class="robot-01">
                    <div class="grid-content bg-purple">鸵鸟小助手</div>
                  </el-col>
                  <el-col :span="5" class="robot-01-time">
                    <div class="grid-content bg-purple">2018-06-20 16:39:03</div>
                  </el-col>
                </el-row>
                <el-row class="robot-o1-content">
                  <el-col :span="13" class="robot-o1-content-lx">
                    <div class="grid-content bg-purple-dark">
                      狂人也所知甚少，很多币种闻所未闻，所以只能靠大家自己判断了，你买的那些不知名的币种有可能会是未来的黑马，但更大的可能将会成为空气，这就是币圈的现状
                    </div>
                  </el-col>
                </el-row>
                <el-row class="robot-o1-cut">
                  <el-col :span="23">
                    <div class="grid-content bg-purple-dark"></div>
                  </el-col>
                </el-row>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="more center line36 marginb-30" data-is-loading="1" style="padding-bottom: 45px;top: -37px;position: ;background: ;">
        <span class="marginb-30" style="border: 1px solid #409EFF;border-radius: 4px;display: inline-block;width: 180px;top: 67px;position: relative;">
          <a href="#" style="color: #409EFF;display: contents;">加载更多</a>
        </span>
      </div>
    </div>
    <div class="right content-right">
      <div class="news-flash-right right marginb">
        <div class="ranking marginb-30 margint-20">
          <div class="ranking marginb-30 margint-20">
            <div class="tit">
              <span style="border-radius: 25%; background: #FFB90F; height: 20px; width: 20px; margin-left: 15px; text-align: center;">
                <img style="margin-top: -3px; margin-left: 2px;" src="../../../assets/images/enterprise.png">
              </span>
              <span>交易所公告</span>
            </div>
            <div class="con bgc line22 clearfix">
              <el-row :gutter="16" class="notice">
                <el-col :span="18" class="notice_01">
                  <div class="grid-content bg-purple">
                    <a class="tuoniao-a">[Fcoin] 关于F码相关事宜的公告</a>
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
        </div>
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
    data() {
      return {
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532877920333&di=798ec9728571a37a7790b7d5972b53ed&imgtype=0&src=http%3A%2F%2Fcimage.tianjimedia.com%2FuploadImages%2F2014%2F044%2FV1A74G68V8OT.gif',
        classObject: [{
          isActive: false
        }],
        show: false
      }
    },
    components: {
      HeadlineNews
    },
    methods: {
      commentSwitch() {
        this.classObject.isActive = !this.classObject.isActive;
      }
    }
  }

</script>
