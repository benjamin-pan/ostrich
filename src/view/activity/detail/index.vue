<template>
  <div class="activity-detail-box">
    <div class="top clearfix bg-color">
      <div class="img-box pull-left">
        <img :src="activity.title" alt="">
      </div>
      <div class="activity-info pull-right">
        <p class="title">{{activity.title}}</p>
        <div class="detail-box">
          <p class="os-organizers">主办方：{{activity.sponsor}}</p>
          <p class="os-guest">主讲嘉宾：{{activity.speaker}}</p>
          <p class="os-clock">时间：{{activity.date}}</p>
          <p class="os-location">地点：{{activity.address}}</p>
        </div>
        <p class="action-box">
          <el-button type="primary">报名</el-button>
          <el-button type="primary">收藏</el-button>
          <os-share></os-share>
        </p>
      </div>
    </div>
    <div class="mt-25 clearfix">
      <div class="bottom-left pull-left bg-color">
        <os-short-title title="活动详情"></os-short-title>
        <div class="content-box">
          {{activity.content}}
        </div>
      </div>
      <div class="bottom-right pull-right bg-color">
        <os-short-title title="最新活动" titleIcon="icon-hot-activity"></os-short-title>
        <os-hot-activity></os-hot-activity>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>

  import OsShortTitle from "../../../components/os-short-title/index.vue";

  export default {
    data () {
      return {
        activity: {}
      }
    },
    components: {OsShortTitle},
    created () {
    },
    mounted () {
      this.getActivityDetailList()
    },
    beforeDestroy () {
    },
    methods: {
      getActivityDetailList () {
        this.getRequest('https://api.tuoniaox.com/homepage/homepage/activitydetail', {
          user_id: '',
          content_id: this.$route.query.id
        }).then(res => {
          this.activity = res.data.post_data || {}
          console.log(this.activity)
        }).catch((err) => {
          this.activity = {}
        })
      },
      goToActivityDetail (id) {
        this.$router.push({
          path: '/detail',
          query: {
            id
          }
        })
      }
    },
    computed: {},
    watch: {
      ifShowSelecte (val) {
        if (val) this.ifSpread = '收起筛选'
        else this.ifSpread = '展开筛选'
      }
    }
  }
</script>
