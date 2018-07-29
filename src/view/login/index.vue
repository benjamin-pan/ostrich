<template>
  <div class="userContainer">
    <div class="mu-paper login_wrap mu-paper-round mu-paper-3">
      <div class="login">
        <div class="login_con">
          <div class="main">
            <h3 class="login-head">
              <span class="login-title">登录</span>
              <span class="if-registered">
                <span>还没有鸵鸟账号？</span>
                <span class="go-to-register">立即注册</span>
              </span>
            </h3>
            <div class="login_center">
              <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-row>
                  <el-col :span="24">
                    <el-form-item>
                      <el-input v-model="input" placeholder="用户名或手机号码"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item>
                      <el-input type="password" v-model="input" placeholder="密码" suffix-icon="el-icon-date"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <div>
                <span class="forget">忘记密码</span>
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
          <div style="display: none;">
            <div class="resetPassword">
              <div class="resetPassword_box"><h3>忘记密码</h3>
                <div>
                  <div class="field_wrap">
                    <div>
                      <div class="mu-text-field has-label"><!---->
                        <div class="mu-text-field-content">
                          <div class="mu-text-field-label float">邮箱</div> <!----> <input name="email" type="text"
                                                                                         class="mu-text-field-input">
                          <!---->
                          <div>
                            <hr class="mu-text-field-line">
                            <hr class="mu-text-field-focus-line">
                          </div> <!----></div>
                      </div>
                      <div class="jump"><span style="display: none;">去登录 &gt;&gt;</span> <span style="display: none;">去注册 &gt;&gt;</span>
                        <span style="display: none;">去验证 &gt;&gt;</span></div>
                    </div> <!----></div>
                  <button class="mu-raised-button reset_btn" type="button" tabindex="0"
                          style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
                    <div class="mu-raised-button-wrapper">
                      <div class="mu-ripple-wrapper"></div> <!----> <!----> <span
                            class="mu-raised-button-label">发送验证邮件</span></div>
                  </button>
                  <div class="back">返回</div>
                </div>
              </div>
              <div style="display: none;">
                <div class="send_suc"><h3>邮件已发送</h3>
                  <div class="send_suc_box"><p class="text"> 邮件已发送至你的邮箱<strong></strong> 快去查收邮件吧</p>
                    <button class="mu-raised-button send_btn disabled label-before" disabled="" type="button"
                            style="outline: none; -webkit-appearance: none;">
                      <div class="mu-raised-button-wrapper"><span class="mu-raised-button-label">邮件已发送</span> <!---->
                        <span class="icon"></span> <!----></div>
                    </button>
                    <div class="back">返回</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none;">
            <div class="active_email">
              <div class="active_email_box"><h3>验证邮箱</h3>
                <div><p class="text">Hi，你的邮箱 <strong></strong> 来自Tower <br>快验证邮箱开始体验蓝湖吧</p>
                  <button class="mu-raised-button send_btn" type="button" tabindex="0"
                          style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
                    <div class="mu-raised-button-wrapper">
                      <div class="mu-ripple-wrapper"></div> <!----> <!----> <span
                            class="mu-raised-button-label">发送验证邮件</span></div>
                  </button>
                  <div class="back">返回</div>
                </div>
              </div>
              <div style="display: none;">
                <div class="send_suc"><h3>邮件已发送</h3>
                  <div class="send_suc_box"><p class="text"> 邮件已发送至你的邮箱<strong></strong> 快去查收邮件吧</p>
                    <button class="mu-raised-button send_btn disabled label-before" disabled="" type="button"
                            style="outline: none; -webkit-appearance: none;">
                      <div class="mu-raised-button-wrapper"><span class="mu-raised-button-label">邮件已发送</span> <!---->
                        <span class="icon"></span> <!----></div>
                    </button>
                    <div class="back">返回</div>
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
        isFetching: true,
        form: {},
        rules: []
      }
    },
    components: {},
    created () {
    },
    mounted () {
      console.log([1, 2, 3, 4].includes(2))
      setTimeout(() => {
        console.log(1)
        isFetching = true
      })
    },
    beforeDestroy () {
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>
