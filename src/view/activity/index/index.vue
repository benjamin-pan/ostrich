<template>
  <div class="activity-box bg-color">
    <div>
      <el-tabs v-model="activeName" @tab-click="">
        <el-tab-pane label="全部" name="0"></el-tab-pane>
        <el-tab-pane :label="classify.name" :name="classify.id" v-for="classify in classifys"></el-tab-pane>
      </el-tabs>
      <el-button type="text" class="search-more" @click="ifShowSelecte=!ifShowSelecte">{{ifSpread}}</el-button>
    </div>
    <div class="selecte-conditions" v-show="ifShowSelecte">
      <p>
        <span class="selecte-title">时间：</span>
        <el-radio v-model="timeSelect" label="1">全部</el-radio>
        <el-radio v-model="timeSelect" label="today">今天</el-radio>
        <el-radio v-model="timeSelect" label="tomorrow明天">明天</el-radio>
        <el-radio v-model="timeSelect" label="today_2">后天</el-radio>
        <el-radio v-model="timeSelect" label="week">本周</el-radio>
        <el-radio v-model="timeSelect" label="month">本月</el-radio>
        <el-radio v-model="timeSelect" label="quarter">本季度</el-radio>
        <el-radio v-model="timeSelect" label="8">
          <el-date-picker
                  v-model="selectDate"
                  type="date"
                  placeholder="选择日期">
          </el-date-picker>
        </el-radio>
      </p>
      <p>
        <span class="selecte-title">地点：</span>
        <el-radio v-model="addressSelect" label="1">北京</el-radio>
        <el-radio v-model="addressSelect" label="2">上海</el-radio>
        <el-radio v-model="addressSelect" label="3">广州</el-radio>
        <el-radio v-model="addressSelect" label="4">深圳</el-radio>
        <el-radio v-model="addressSelect" label="5">杭州</el-radio>
        <el-radio v-model="addressSelect" label="6">成都</el-radio>
        <el-radio v-model="addressSelect" label="7">武汉</el-radio>
        <el-radio v-model="addressSelect" label="8">厦门</el-radio>
        <el-radio v-model="addressSelect" label="9">香港</el-radio>
        <el-radio v-model="addressSelect" label="10">澳门</el-radio>
        <el-radio v-model="addressSelect" label="11">其他</el-radio>
      </p>
      <p>
        <span class="selecte-title">状态：</span>
        <el-radio v-model="stateSelect" label="0">全部</el-radio>
        <el-radio v-model="stateSelect" label="starting">报名中</el-radio>
        <el-radio v-model="stateSelect" label="started">活动中</el-radio>
        <el-radio v-model="stateSelect" label="end">已结束</el-radio>
      </p>
    </div>
    <div class="pl-30 pr-30 card-box">
      <el-row :gutter="30">
        <el-col :span="8" v-for="list in activityList" class="mt-30 mb-30">
          <el-card :body-style="{ padding: '0px' }" class="single-card">
            <img :src="list.single_pic" class="image" @click="goToActivityDetail(list.id)">
            <div class="content-box">
              <p class="title" @click="goToActivityDetail(list.id)">{{list.title}}</p>
              <p class="clearfix mt-25">
                <span class="pull-left ml-5 os-location">{{list.address}}</span>
                <span class="pull-right os-clock">{{list.date}}</span>
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
        ifSpread: '展开筛选',
        ifShowSelecte: false,
        activeName: '全部',
        timeSelect: '',
        selectDate: '',
        addressSelect: '',
        stateSelect: '',
        activityList: [],
        classifys: []
      }
    },
    components: {},
    created () {
    },
    mounted () {
      this.$emit('changeActiveIndex', '4')
      this.getActivityList()
      this.getClassifys()
    },
    beforeDestroy () {
    },
    methods: {
//      getActivityList () {
//        this.getRequest('https://api.tuoniaox.com/app/app/activitysearch', {
//          query: this.activeName,
//          date: this.timeSelect,
//          place: this.addressSelect,
//          status: this.stateSelect,
//          page_num: 1
//        }).then(res => {
//          this.activityList = res.data.news_list || []
//        }).catch((err) => {
//          this.activityList = []
//        })
//      },
      getActivityList () {
        this.getRequest('https://api.tuoniaox.com/homepage/homepage/activitylist', {
          page_num: '',
          page_size: ''
        }).then(res => {
          this.activityList = res.data.news_list || []
        }).catch((err) => {
          this.activityList = []
        })
      },
      goToActivityDetail (id) {
        this.$router.push({
          path: '/activity/detail',
          query: {
            id
          }
        })
      },
      getClassifys () {
        this.getRequest('https://api.tuoniaox.com/news/activity/classify').then(res => {
          this.classifys = res.data.post_list || []
        }).catch((err) => {
          this.classifys = []
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
