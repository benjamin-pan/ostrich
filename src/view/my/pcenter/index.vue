<template>
  <div class="pcenter-container">
   
    <el-tabs v-model="activeName" @tab-click="handleClick" class="baseTabBox">
      <el-tab-pane label="基本信息" name="first">
        <div class="contentBox" >
            <div class="item">
              <span class="one">手机号码：</span>
              <span class="two">18312587815</span>
              <span class="three">修改</span>
            </div>
            <div class="item">
              <span class="one">登录密码：</span>
              <span class="two">******</span>
              <span class="three">暂无</span>
            </div>
            <div class="item">
              <span class="one">邮箱：</span>
              <span class="two">18312587815</span>
              <span class="three">暂无</span>
            </div>
            <div class="item">
              <span class="one">微信：</span>
              <span class="two">18312587815</span>
              <span class="three">修改</span>
            </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="账户安全" name="second">
        <div class="contentBox" >
          <div class="myInforBox">
              <el-form ref="form" :model="form" label-width="86px" :label-position="labelPosition">
                <el-form-item label="头像：">
                  <span class="changehead">更换头像</span>
                </el-form-item>
                <el-form-item label="用户名：">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="保密"></el-radio>
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                  
                </el-form-item>
                <el-form-item label="生日：">
                  <el-col>
                    <el-date-picker
                      v-model="value1"
                      type="datetime"
                      placeholder="选择出生日期">
                    </el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="个人简介：">
                   <el-input type="textarea" v-model="form.desc" placeholder="限50个字以内"></el-input>
                </el-form-item>
                
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
              </el-form>

          </div>

        </div>
      </el-tab-pane>
    </el-tabs>
   
    

  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
  export default {
    data () {
      return {
        activeName:'first',
        labelPosition:'left',
        form: {
          name: 'sssss',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          value1:''
        }

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
      change: function (value) {
        this.isActive = value;
      },
      handleClick(tab, event) {
       
      },
      onSubmit:function() {
        console.log('submit!');
      }

    },
    computed: {},
    watch: {}
  }
</script>
