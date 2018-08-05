<template>
  <div class="activity-box bg-color">
    <div>
      <el-tabs v-model="activeName" @tab-click="">
        <el-tab-pane label="全部" name="first"></el-tab-pane>
        <el-tab-pane label="系列活动" name="second"></el-tab-pane>
        <el-tab-pane label="大型峰会" name="third"></el-tab-pane>
        <el-tab-pane label="沙龙/培训" name="fourth"></el-tab-pane>
        <el-tab-pane label="线上活动" name="fifth"></el-tab-pane>
        <el-tab-pane label="培训" name="sixth"></el-tab-pane>
        <el-tab-pane label="其他" name="seventh"></el-tab-pane>
      </el-tabs>
      <el-button type="text" class="search-more" @click="ifShowSelecte=!ifShowSelecte">{{ifSpread}}</el-button>
    </div>
    <div class="selecte-conditions" v-show="ifShowSelecte">
      <p>
        <span class="selecte-title">时间：</span>
        <el-radio v-model="timeSelect" label="1">全部</el-radio>
        <el-radio v-model="timeSelect" label="2">今天</el-radio>
        <el-radio v-model="timeSelect" label="3">明天</el-radio>
        <el-radio v-model="timeSelect" label="4">后天</el-radio>
        <el-radio v-model="timeSelect" label="5">本周</el-radio>
        <el-radio v-model="timeSelect" label="6">本月</el-radio>
        <el-radio v-model="timeSelect" label="7">本季度</el-radio>
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
        <el-radio v-model="stateSelect" label="1">全部</el-radio>
        <el-radio v-model="stateSelect" label="2">报名中</el-radio>
        <el-radio v-model="stateSelect" label="3">活动中</el-radio>
        <el-radio v-model="stateSelect" label="4">已结束</el-radio>
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
                <span class="pull-left ml-5 os-location">{{list.id}}</span>
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
        activeName: 'first',
        timeSelect: '',
        selectDate: '',
        addressSelect: '',
        stateSelect: '',
        activityList: []
      }
    },
    components: {},
    created () {
    },
    mounted () {
      this.getActivityList()
    },
    beforeDestroy () {
    },
    methods: {
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
