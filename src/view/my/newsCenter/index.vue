<template>
  <div class="jifen-container">
    <div class="baseTabBox">
      <span class="first">我的消息</span>
      <span class="deleteBtn com-lv">删除</span>
    </div>

    <div class="tabelBox">
      
      <el-table
        :data="tableData"
        empty-text="暂无数据"
        style="width: 100%;">
        <el-table-column
          type="selection"
          width="54">
        </el-table-column>
        <el-table-column
          prop="add_time"
          label="时间"
          width="186">
        </el-table-column>
        <el-table-column
          prop="message_title"
          label="内容"
          width="610">
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
            add_time: '2018-06-26 19:51:32',
            message_title: '王小虎'
          }, {
            add_time: '2018-06-26 19:51:32',
            message_title: '王小虎'
          },{
            add_time: '2018-06-26 19:51:32',
            message_title: '王小虎'
          }],
        user_id:'100008'
      }
    },
    components: {},
    created () {
    },
    mounted () {
      this.getNewsList();
    },
    beforeDestroy () {
    },
    methods: {
      getNewsList(page_num = 1){
        this.getRequest('https://api.tuoniaox.com/app/app/messagelist', {
            user_id: this.user_id,
            page_num,
            page_size:10
        }).then(res=> {
            this.isShow = true;
            if(res.data.message_list.length>0){
              this.tableData = res.data.message_list;
            }else{
              this.tableData = [];
            }
        }).catch((err) => {
          this.tableData = [];
          this.isShow = false;
        })
      },
      handlePageChange(val){
        this.getNewsList(val);
      },
    },
    computed: {},
    watch: {}
  }
</script>

