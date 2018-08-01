<template>
  <div class="jifen-container">
    <div class="baseTabBox">
      <span class="first">我的积分</span>
      
    </div>
    <div class="inforBox">
      
      <p class="marginBottom">当前总积分：<span class="jifen">400,000</span></p>
      <p>积分规则：积分商城正在完善中</p>
    </div>

    <div class="tabelBox">
      
      <el-table
        :data="tableData"

        style="width: 100%;">
        <el-table-column
          prop="date"
          label="更新时间"
          width="171">
        </el-table-column>
        <el-table-column
          prop="name"
          label="来源渠道"
          width="250">
        </el-table-column>
        <el-table-column
          prop="number"
          label="积分变化数量"
          width="200">
        </el-table-column>
        <el-table-column
          prop="all"
          label="剩余总积分"
          width=""
          style="text-align:right;">
        </el-table-column>
      </el-table>
      
    
      <div class="paginBox">
        <p class="allPage left">共13页/1268条数据</p>
        <div class="blockPage right">
          <el-pagination
             background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
          <div class="gopageBox">
          <span>跳至</span><el-input v-model="input"></el-input><span>页</span>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      
      
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
