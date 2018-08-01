<template>
  <div class="login-container">
    <div class="userContainer">
      <div class="mu-paper login_wrap mu-paper-round mu-paper-3">
        <div class="login">
          <div>
            <div>
              <h3 class="login-head">
                <span class="login-title">注册</span>
                <span class="if-registered">
                <span>已有账号，直接</span>
                  <span class="go-to-register" @click="$router.push({path: '/'})">
                    登录
                  </span>
                </span>
              </h3>
              <div class="login_center">
                <el-form :model="form" :rules="rules" ref="ruleForm">
                  <el-row>
                    <el-col :span="24">
                      <el-form-item prop="user" :error="userErrMsg">
                        <el-input v-model="user" placeholder="请设置用户名"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <el-form-item prop="password" :error="pwdErrMsg">
                        <el-input type="password" v-model="password" placeholder="请设置登录密码"
                                  suffix-icon="ostrich-icon-eye-close"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="16">
                    <el-col :span="8">
                      <el-form-item prop="password" :error="pwdErrMsg">
                        <el-select v-model="phoneNum" placeholder="请选择">
                          <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="16">
                      <el-form-item prop="password" :error="pwdErrMsg">
                        <el-input type="password" v-model="password" placeholder="请输入手机号码"
                                  suffix-icon="ostrich-icon-eye-close"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="16">
                    <el-col :span="16">
                      <el-form-item prop="password" :error="pwdErrMsg">
                        <el-input type="password" v-model="password" placeholder="验证码"
                                  suffix-icon="ostrich-icon-eye-close"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item>
                        <el-button
                                class="verifiationCodeBtn"
                                :type="verifiationCodeType"
                                :disabled="canClick"
                                @click="sendVerificationCode">{{verifiationCodeText}}
                        </el-button>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-form-item prop="password" :error="pwdErrMsg">
                        <el-checkbox v-model="ifAccept"><span class="ifAccept">阅读并接受<span
                                class="agreement">《鸵鸟区块链用户协议》</span></span></el-checkbox>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
                <div>
                  <el-button type="primary" class="login-in">注册</el-button>
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
        },
        phoneNum: 1,
        options: [
          {value: 1, label: '+86'}
        ],
        ifAccept: false,
        canClick: false,
        verifiationCodeType: 'primary',
        verifiationCodeText: '发送验证码'
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
    methods: {
      sendVerificationCode () {
        this.canClick = true
        this.verifiationCodeType = 'info'
        let time = 60
        this.verifiationCodeText = `${time--}S`
        let timer = setInterval(() => {
          this.verifiationCodeText = `${time--}S`
          if (time < 0) {
            clearInterval(timer)
            this.verifiationCodeType = 'primary'
            this.verifiationCodeText = '发送验证码'
          }
        }, 1000)
      }
    },
    computed: {},
    watch: {}
  }
</script>
