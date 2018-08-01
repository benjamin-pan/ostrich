<template>
  <div class="jifen-container">
    <div class="baseTabBox">
      <span class="first">我的关注</span>
      
    </div>
   <!--  <div class="inforBox">
      
      <p class="marginBottom">当前总积分：<span class="jifen">400,000</span></p>
      <p>积分规则：积分商城正在完善中</p>
    </div> -->

    <div class="tabelBox">
      
      <el-table
        :data="tableData"

        style="width: 100%;">
        <el-table-column
          prop="name"
          label="关注对像"
          width="230px">
        </el-table-column>
        <el-table-column
          prop="intruce"
          label="介绍"
          width="280px">
        </el-table-column>
        <el-table-column
          prop="obj"
          label="角色"
          width="69px">
        </el-table-column>
        <el-table-column
          prop="star"
          label="粉丝"
          width="95px"
          style="text-align:right;">
        </el-table-column>
        <el-table-column
          prop="allSee"
          label="总阅读量"
          width="96px">
        </el-table-column>
        <el-table-column
          prop="oprate"
          label="操作"
          width="78px"
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
            name: '鸵鸟区块链的朋友们小虎',
            intruce:'区块链就像当年互联网刚刚兴起的时候，',
            obj:'作者',
            star:'232,467',
            allSee:'2,823 万',
            oprate:'取消关注'
          },
          {
            name: '鸵鸟区块链的朋友们小虎',
            intruce:'区块链就像当年互联网刚刚兴起的时候，',
            obj:'作者',
            star:'232,467',
            allSee:'2,823 万',
            oprate:'取消关注'
          },
          {
            name: '鸵鸟区块链的朋友们小虎',
            intruce:'区块链就像当年互联网刚刚兴起的时候，',
            obj:'作者',
            star:'232,467',
            allSee:'2,823 万',
            oprate:'取消关注'
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

