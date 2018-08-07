<template>
  <div id="flashDetails">
    <section class="news">
      <div class="container">
        <div class="content-left left">
          <!--幻灯片-->
          <div id="carousel-example-generic" class="carousel slide marginb-30 margint-20" data-ride="carousel">
          </div>
          <!-- 左侧list-->
          <div class="news-list-content marginb-30">
            <div class="news-list-left content" style="padding: 35px 15px;">
              <div>
                <h1 class="details-headline">中国人民银行数字货币研究所副所长：区块链在数字票据上的应用效果</h1>
                <div style="display: -webkit-inline-box;margin-top: 20px;">
                  <span class="details-adm" style="margin-left: 17px;">区块链的朋友们</span>
                  <span class="details-data" style="margin-left: 20px;">03-22 10.5</span>
                </div>
                <div class="details-express-content">
                  <span>
                    中国人民银行数字货币研究所副所长：区块链在数字票据上的应用效果.中国人民银行数字货币研究所副所长：区块链在数字票据上的应用效果 中国人民银行数字货币研究所副所长：区块链在数字票据上的应用效果.中国人民银行数字货币研究所副所长：区块链在数字票据上的应用效果.中国人民银行数字货币研究所副所长：区块链在数字票据上的应用效果.
                  </span>
                </div>
                <div>
                  <p class="details-content-p">
                    <img src="../../../assets/images/2018072511043147-e1532487879866.jpg">
                  </p>
                </div>
                <div>
                  <li class="express-left">
                    <span>
                      <img style="margin: -6px 10px 0 0;" src="../../../assets/images/down.png">369
                    </span>
                    <span>
                      <img style="margin: -6px 10px 0 0;" src="../../../assets/images/up.png">369
                    </span>
                  </li>
                  <li class="timeline-right">
                    <span class="comment-cli">
                      <img style="margin: -3px 10px 0 0;" src="../../../assets/images/comment.png">评论(901)
                    </span>
                    <span>
                      <img style="margin: -3px 10px 0 0;" src="../../../assets/images/share.png">分享
                    </span>
                  </li>
                </div>
                <div class="details-content-02">
                  <strong>
                    参与讨论
                  </strong>
                  <el-input class="textarea-express" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="发表你的见解">
                  </el-input>
                  <span class="datails-content-02-span express-span-left">请发表有价值的东西</span>
                  <span class="datails-content-02-span content-span-right">
                    <el-button>发表评论</el-button>
                  </span>
                </div>
                <div class="datails-comment express-comment">
                  <strong>
                    最新评论（435）
                  </strong>
                  <div class="media-left comment-left">
                    <a href="https://www.tuoniaox.com/43699.html" class="news-list-img">
                      <input type="hidden" value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">
                      <img class="media-object" src="../../../assets/images/2018071917143365.jpg" alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">
                    </a>
                    &nbsp;</div>
                  <div class="media-body comment-body">
                    <p class="media-heading" style="">
                      鸵鸟小助手
                    </p>
                    <p>来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡</p>
                  </div>
                </div>
                <div class="datails-comment express-comment">
                  <strong>
                    最新评论（435）
                  </strong>
                  <div class="media-left comment-left">
                    <a href="https://www.tuoniaox.com/43699.html" class="news-list-img">
                      <input type="hidden" value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">
                      <img class="media-object" src="../../../assets/images/2018071917143365.jpg" alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">
                    </a>
                    &nbsp;</div>
                  <div class="media-body comment-body">
                    <p class="media-heading" style="">
                      鸵鸟小助手
                    </p>
                    <p>来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡</p>
                  </div>
                </div>
                <a class="details-a">查看更多</a>
              </div>
            </div>
          </div>
        </div>
        <div class="right content-right">
            <today-flash></today-flash>
            <headline-news></headline-news>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  import HeadlineNews from "../../../components/headline-news";
  export default {
    data () {
      return {

      }
    },
    components: {
      HeadlineNews
    },
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    computed: {},
    watch: {}
  }
</script>
