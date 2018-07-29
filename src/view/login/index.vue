<template>
  <div class="login-container">
    <div class="userContainer">
      <div class="mu-paper login_wrap mu-paper-round mu-paper-3">
        <div class="login">
          <div>
            <div>
              <h3 class="login-head">
                <span class="login-title">登录</span>
                <span class="if-registered">
                  <span>还没有鸵鸟账号？</span>
                  <span class="go-to-register" @click="$router.push({path: '/register'})">立即注册</span>
                </span>
              </h3>
              <div class="login_center">
                <el-form :model="form" :rules="rules" ref="ruleForm">
                  <el-row>
                    <el-col :span="24">
                      <el-form-item prop="user" :error="userErrMsg">
                        <el-input v-model="user" placeholder="用户名或手机号码"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <el-form-item prop="password" :error="pwdErrMsg">
                        <el-input type="password" v-model="password" placeholder="密码"
                                  suffix-icon="ostrich-icon-eye-close"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
                <div>
                  <span class="forget" @click="$router.push({path: '/findPWD'})">忘记密码</span>
                </div>
                <div>
                  <el-button type="primary" class="login-in">登录</el-button>
                </div>
                <div class="wx_login">
                  <div class="wx_btn">微信登录</div>
                  <div>
                    <img class="wechat-login" src="../../assets/svg/wechat.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        user: '',
        password: '',
        userErrMsg: '',
        pwdErrMsg: '',
        form: {},
        rules: {
          user: [],
          password: []
        }
      }
    },
    components: {},
    created () {
    },
    mounted () {
//      this.userErrMsg = "错误提示"
//      this.pwdErrMsg = '请输入正确的用户名或手机号码'
    },
    beforeDestroy () {
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>
