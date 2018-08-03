<template>
  <div class="pcenter-container">
   
    <el-tabs v-model="activeName" @tab-click="handleClick" class="baseTabBox">
      <el-tab-pane label="基本信息" name="first">
         <div class="contentBox" >
          <div class="myInforBox">
              <el-form ref="form" :model="form" label-width="86px" :label-position="labelPosition">
                <el-form-item label="头像：">
                  <span class="changehead">更换头像</span>
                </el-form-item>
                <el-form-item label="用户名：">
                  <el-input v-model="appuser_list.username"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                  <el-radio-group v-model="appuser_list.resource">
                    <el-radio label="保密"></el-radio>
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                  
                </el-form-item>
                <el-form-item label="生日：">
                  <el-col>
                    <el-date-picker
                      v-model="appuser_list.resource"
                      type="datetime"
                      placeholder="选择出生日期">
                    </el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="个人简介：">
                   <el-input type="textarea" v-model="appuser_list.desc" placeholder="限50个字以内"></el-input>
                </el-form-item>
                
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
              </el-form>

          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="账户安全" name="second">
        <div class="contentBox" >
          <div class="item">
            <span class="one">手机号码：</span>
            <span class="two">{{appuser_list.mobile}}</span>
            <span class="three" @click="dialogFormVisible = true">修改</span>
          </div>
          <div class="item">
            <span class="one">登录密码：</span>
            <span class="two">******</span>
            <span class="three">修改</span>
          </div>
          <div class="item">
            <span class="one">邮箱：</span>
            <span class="two">{{appuser_list.email}}</span>
            <span class="three">绑定</span>
          </div>
          <div class="item">
            <span class="one">微信：</span>
            <span class="two">{{appuser_list.wxname}}</span>
            <span class="three">绑定</span>
          </div>

        </div>
       
      </el-tab-pane>
    </el-tabs>
    <!-- diolog -->
    <el-dialog title="修改手机号码" :visible.sync="dialogFormVisible" class="my-dialog">
      <el-form :model="form">
        <el-form-item>
          <el-select v-model="value" placeholder="请选择" class="phone">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="input" placeholder="请输入手机号码" class="phoneN"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="input" placeholder="验证码" class="yanzheng"></el-input>
          <el-button type="primary" class="btn">主要按钮</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
      <el-row :gutter="24">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-button @click="dialogFormVisible = false" class="btn1 btn2">取 消</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-button type="primary" @click="dialogFormVisible = false" class="btn2">确 定</el-button>
          </div>
        </el-col>
      </el-row>
       
        
      </div>
    </el-dialog>

    

  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
  export default {
    data () {
      return {
        dialogFormVisible: false,
        activeName:'first',
        labelPosition:'left',
        appuser_list:{},
        form:{},
        options: [{
          value: '1',
          label: '+86'
        }, {
          value: '2',
          label: '+00'
        }],
        value: '1'

      }
    },
    components: {},
    created () {
    },
    mounted () {
      this.getUseInfo();
    },
    beforeDestroy () {
    },
    methods: {
      change: function (value) {
        this.isActive = value;
      },
      handleClick(tab, event) {
        if(this.activeName = 'first'){
          this.updateUseInfo();
        }else{
          this.getUseInfo();
        }
      },
      onSubmit:function() {
        console.log('submit!');
      },
      getUseInfo:function(user_id = 100006){
        this.getRequest('https://api.tuoniaox.com/app/app/getuserinfo', {
            user_id
        }).then(res=> {
          console.log('res.appuser_list1',res.data.appuser_list)
            if(res.data.appuser_list){
              console.log('res.appuser_list',res.data.appuser_list)
              this.appuser_list = res.data.appuser_list;
            }else{
              
            }
        }).catch((err) => {
        })
      },
      updateUseInfo:function(user_id = 100006){
        this.getRequest('https://api.tuoniaox.com/app/app/updateuser', {
            user_id,
            user_info:[{head_url:''},{nickname:''}]

        }).then(res=> {
          console.log('res.appuser_list1',res.data.appuser_list)
            if(res.data.appuser_list){
              console.log('res.appuser_list',res.data.appuser_list)
              this.appuser_list = res.data.appuser_list;
            }else{
              
            }
        }).catch((err) => {
        })
      }

    },
    computed: {},
    watch: {}
  }
</script>
