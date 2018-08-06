<template>
      <div class="ostrich-encyclopedia">
        <div class="content-left left">
          <!-- 左侧list-->
          <div class="news-list-content marginb-30">
            <div class="news-list-left">
              <div class="tuoniao-ency">
                <img style="margin-left: 3px;margin-top: 10px;" src="../../../assets/svg/二级页-百科icon.svg">
                <span>百科</span>
              </div>
              <encyclopedia></encyclopedia>
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
</template>
<style lang="scss" scoped>
  @import './index.scss';

</style>
<script>
  import HeadlineNews from "../../../components/headline-news";
  import HeadlineColumn from "../../../components/headline-column";
  import HeadlineHotLabel from "../../../components/headline-hot-label";
  import Encyclopedia from "../../../components/encyclopedia";
  export default {
    data () {
      return {

      }
    },
    components: {
      HeadlineNews,
      HeadlineColumn,
      HeadlineHotLabel,
      Encyclopedia
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
