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
        empty-text="暂无数据"
        style="width: 100%;">
        <el-table-column
          prop="points_time"
          label="更新时间"
          width="171">
        </el-table-column>
        <el-table-column
          
          prop="points_time2"
          label="来源渠道"
          width="250">
        </el-table-column>
        <el-table-column
          prop="points_use_num"
          label="积分变化数量"
          :formatter="getStatus"
          width="200">
        </el-table-column>
        <el-table-column
          prop="points_num"
          label="剩余总积分"
          width=""
          style="text-align:right;">
        </el-table-column>
      </el-table>
      
    
      <div class="paginBox" v-show="isShow">
        <p class="allPage left">共13页/1268条数据</p>
        <div class="blockPage right">
          <el-pagination
            @current-change="handlePageChange"
            :current-page.sync="page"
            background
            layout="prev, pager, next ,jumper"
            :total="1000">
          </el-pagination>
          <div class="gopageBox">
          <!-- <span>跳至</span><el-input v-model="page" @change='goPage'></el-input><span>页</span> -->
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
        page:1,
        isShow:true,
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
          }],
          user_id:'10008'
      }

    },
    components: {},
    created () {
    },
    mounted () {
      this.getJifenList();
    },
    beforeDestroy () {
    },
    methods: {
      getJifenList(page_num = 1){
        this.getRequest('https://api.tuoniaox.com/app/app/pointslist', {
            user_id: this.user_id,
            page_num,
            page_size:10
        }).then(res=> {
            this.isShow = true;
            if(res.data.points_list.length>0){
              this.tableData = res.data.points_list;
            }else{
              this.tableData = [];
            }
        }).catch((err) => {
          console.log(err, 'err');
          this.tableData = [];
          this.isShow = false;
        })
      },
      getStatus(row,column) {
        return row.points_type == '0' ? `-${row.points_use_num}` : `+${row.points_use_num}`;
      },
      handlePageChange(val){
        console.log(`当前页: ${val}`);
        this.getJifenList(val);
      },
      
    },
    computed: {},
    watch: {}
  }
</script>
