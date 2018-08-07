<template>
  <div class="pcenter-container">
   
    <el-tabs v-model="activeName" @tab-click="handleClick" class="baseTabBox">
      <el-tab-pane label="基本信息" name="first">
         <div class="contentBox" >
          <div class="myInforBox">
              <el-form ref="form" :model="form" label-width="86px" :label-position="labelPosition">
                <el-form-item label="头像：">
                  <img :src="appuser_list.head_url" alt="" class="imgHead">
                  <span class="changehead" @click="dialogHeadVisible = true">更换头像</span>
                </el-form-item>
                <el-form-item label="用户名：">
                  <el-input v-model="appuser_list.username"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                  <el-radio-group v-model="appuser_list.sex">
                    <el-radio v-model="radio" label="0">保密</el-radio>
                    <el-radio v-model="radio" label="1">男</el-radio>
                    <el-radio v-model="radio" label="2">女</el-radio>
                  </el-radio-group>
                  
                </el-form-item>
                <el-form-item label="生日：">
                  <el-col>
                    <el-date-picker
                      v-model="appuser_list.birthday"
                      type="datetime"
                      placeholder="选择出生日期">
                    </el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="个人简介：">
                   <el-input type="textarea" v-model="appuser_list.bio" placeholder="限50个字以内"></el-input>
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
            <span class="three" @click="dialogPassWordVisible = true">修改</span>
          </div>
          <div class="item">
            <span class="one">邮箱：</span>
            <span class="two">{{appuser_list.email || '暂无' }}</span>
            <span class="three" @click="dialogEmailVisible = true">{{appuser_list.email ? '修改' : '绑定'}}</span>
          </div>
          <div class="item">
            <span class="one">微信：</span>
            <span class="two">{{appuser_list.wxname}}</span>
            <span class="three" @click="dialogWinxinVisible = true">{{appuser_list.wxname ? '解除绑定' : '绑定'}}</span>
          </div>

        </div>
       
      </el-tab-pane>
    </el-tabs>
    <!-- diolog 更换头像-->
    <el-dialog title="更换头像" :visible.sync="dialogHeadVisible" class="my-dialog">
      <el-form :model="form">
        <el-form-item>
          <div class="updateHeadBox">
            <div class="left bigImg" >
              <img :src="appuser_list.head_url" alt="">
            </div>
            <div class="right">
              <p>预览</p>
              <img :src="appuser_list.head_url" alt="" class="smallImg">
              <el-upload
                :show-file-list="false"
                ref="uploadimg"
                class="upload-demo"
                action="ttps://jsonplaceholder.typicode.com/posts/"
                :limit="1"
                :on-preview="onpreview"
                :on-change="onchange"
                :on-progress="onpress"
                :file-list="fileList">
                <el-button size="small" type="primary"><i class="el-icon-upload el-icon--right"></i>上传</el-button>
              </el-upload>
              <!-- <el-button type="primary" plain class="upBtn"><i class="el-icon-upload el-icon--right"></i>上传</el-button> -->
            </div>
            <div class="clear"></div>
            <p class="notice">注：可上传图片格式：JPG、JPEG、PNG，图片大小不超过5M。</p>
          </div>
        </el-form-item>
      
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-light">
              <el-button type="primary" @click="dialogHeadVisible = false" class="baseBtn">确 定</el-button>
            </div>
          </el-col>
        </el-row>
       
        
      </div>
    </el-dialog>
    <!-- diolog 修改手机号码 -->
    <el-dialog title="修改手机号码" :visible.sync="dialogFormVisible" class="my-dialog">
      <el-form :model="ruleFormPhone" :rules="rules" ref="ruleFormPhone" >
        <el-form-item prop="phone">
          <el-select v-model="value" placeholder="请选择" class="phone">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input  v-model="ruleFormPhone.phone" placeholder="请输入手机号码" class="phoneN"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <el-input v-model="ruleFormPhone.captcha" placeholder="验证码" class="yanzheng"></el-input>
          <el-button type="primary" class="btn" @click="getCode">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-button @click="dialogFormVisible = false" class="btn1 btn2">取 消</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-button type="primary" @click="changePhone('ruleFormPhone')" class="btn2">确 定</el-button>
              </div>
            </el-col>
          </el-row>  
          
        </el-form-item>
      </el-form>
      
    </el-dialog>
    <!-- diolog 修改密码-->
    <el-dialog title="修改密码" :visible.sync="dialogPassWordVisible" class="my-dialog">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="input" placeholder="输入新密码" class="baseBtn"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="input" placeholder="确认新密码" class="baseBtn"></el-input>
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
    <!-- diolog 邮箱-->
    <el-dialog :title="appuser_list.wxname ? '修改邮箱' : '绑定邮箱' " :visible.sync="dialogEmailVisible" class="my-dialog">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="input" placeholder="请输入邮箱账号" class="baseBtn"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="input" placeholder="验证码" class="yanzheng"></el-input>
          <el-button type="primary" class="btn">发送验证码</el-button>
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
    <!-- diolog 微信-->
    <el-dialog :title="appuser_list.wxname ? '解绑' : '绑定微信' " :visible.sync="dialogWinxinVisible" class="my-dialog">
      <el-form :model="form" v-show="appuser_list.wxname">
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
      <div slot="footer" class="dialog-footer" v-show="appuser_list.wxname">
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
      <!-- 绑定微信 -->
      <div class="weixinCodeBox">
        <div class="imgBox">
          <img class="weixinCode" src="" alt="">
        </div>
        <p>请使用微信扫描二维码登录</p>
      </div>
      
    </el-dialog>

    

  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
 
  import {isvalidPhone} from '../../../assets/common/validate.js';
  var validPhone=(rule, value,callback)=>{
    if (!value){
        callback(new Error('请输入电话号码'))
    }else  if (!isvalidPhone(value)){
      callback(new Error('请输入正确的11位手机号码'))
    }else {
        callback()
    }
  }
  export default {
    data () {
      return {
        dialogFormVisible: false,
        dialogPassWordVisible: false,
        dialogEmailVisible: false,
        dialogWinxinVisible: false,
        dialogHeadVisible: false,
        activeName:'first',
        labelPosition:'left',
        appuser_list:{ username:'' },
        form:{},
        options: [{
          value: '1',
          label: '+86'
        }, {
          value: '2',
          label: '+00'
        }],
        value: '1',
        ruleFormPhone: {
          phone:'',
          captcha:''
        },
        rules: {
          phone: [
            { required: true, message: '验证码不能为空'},
            { trigger: 'blur', validator: validPhone }
          ],
          captcha: [
            { required: true, message: '验证码不能为空'}
          ]

        },
        mobile:'18301979839',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        upImgUrl:''

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
        this.updateUseInfo();
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
      updateUseInfo(user_id = 100006) {
        
          const _this = this;
          const { appuser_list: { username = '', sex = '', birthday = '', bio = '' } } = _this;
          _this.getRequest('https://api.tuoniaox.com/app/app/updateuser', {
            user_id,
            user_info: {
              'head_url':'',
              'nickname': username,
              'sex':sex,
              'birthday':birthday,
              'bio': bio,
            },

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
      getCode:function(){
        this.getRequest('https://api.tuoniaox.com/login/login/sendSMSCode', {
          mobile:this.mobile
        }).then(res=> {
          
        })
      },
      changePhone:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.getRequest('https://api.tuoniaox.com/app/app/updateuser', {
              mobile:this.mobile
            }).then(res=> {
              
            });
          } else {
            return false;
          }
        });
      },
      onpress:function(){
        console.log("uo propress")
      },
      onchange:function(file, fileList){
        console.log("file",file)
        console.log("fileList",fileList)
      },
      onpreview:function(file){
        this.upImgUrl = file.url;
        console.log('this.upImgUrl',this.upImgUrl)
      }

    },
    computed: {},
    watch: {}
  }
</script>
