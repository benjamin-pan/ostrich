<template>
  <div class="activity-container">
    <div class="baseTabBox">
      <span class="first">邀请好友</span>
      
    </div>
    <div class="activityBox textLeft">
      
      <img class="logo" src="" alt="">
      <p class="textLeft">
        <el-button type="text">我的邀请码：</el-button>
        <el-button type="text" class="ma">EEDDG36</el-button>
      </p>
      <p class="textLeft">
        <el-button type="text">填写邀请人：</el-button>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary">主要按钮</el-button>
      </p>
      <p>
        <el-button type="text">我的邀请码：</el-button>
      </p>
      <p>
        <el-button type="text">邀请规则：</el-button>
      </p>
      <p class="ruleItem">1、一个被邀请人只能绑定一个邀请码 </p>
      <p class="ruleItem">2、一个邀请码可以邀请多人 </p>
      <p class="ruleItem">3、邀请成功后邀请人与被邀请人同时过的10个积分 </p>
      <p class="ruleItem">4、邀请码绑定成功后，被邀请人不能更改邀请码</p>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
  export default {
    data () {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }, {
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }, {
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }, {
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }]
      }
    },
    components: {},
    created () {
    },
    mounted () {

    },
    beforeDestroy () {
    },
    methods: {
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    computed: {},
    watch: {}
  }
</script>

