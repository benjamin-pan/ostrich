<template>
  <div id="headlineViewpoint">
    <section class="news">
      <div class="container">
        <div class="content-left left">
          <!-- 左侧list-->
          <div class="news-list-content marginb-30">
            <div class="news-list-left">
              <div class="tuoniao-ency">
                <img style="margin-left: 3px;margin-top: 10px;" src="../../../assets/svg/二级页-链圈局势icon.svg">
                <span>观点洞察</span>
              </div>
              <situation></situation>
            </div>
            <div class="more center line36 marginb-30" data-is-loading="1">
              <span class="marginb-30 loadmore">
                <a href="#" style="color: #409EFF;display: contents;">加载更多</a>
              </span>
            </div>
          </div>
        </div>
        <div class="right content-right">
          <headline-news></headline-news>
          <div class="content-right right marginb nosee">
            <headline-column></headline-column>
            <headline-hot-label></headline-hot-label>
          </div>
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
  import HeadlineColumn from "../../../components/headline-column";
  import HeadlineHotLabel from "../../../components/headline-hot-label";
  import Situation from "../../../components/situation";
  export default {
    data () {
      return {

      }
    },
    components: {
      HeadlineNews,
      HeadlineColumn,
      HeadlineHotLabel,
      Situation
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
