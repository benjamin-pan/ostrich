<template>
  <div class="activity-container">
    <div class="baseTabBox">
      <span class="first">邀请好友</span>
      
    </div>
    <div class="activityBox">
      
      <img class="logo" src="" alt="">
      <p class="textLeft m40">
        <el-button type="text">我的邀请码：</el-button>
        <el-button type="text" class="ma">EEDDG36</el-button>
      </p>
      <div v-show="isshow">
        <p class="textLeft m60">
          <el-button type="text">填写邀请人：</el-button>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary basebtn" @click="invitecode">确认</el-button>
        </p>
        <p>
          <el-button type="text">邀请步骤：</el-button>
        </p>
        <div class="buzhouBox m40">

          <div class="left bg">
            <p>第一步：获取邀请</p>
            <p>人的邀请码</p>
          </div>
          <div class="jian left"></div>
          <div class="left bg">
            <p>第二步：绑定邀请人</p>
            <p>的邀请码</p>
          </div>
          <div class="jian left"></div>
          <div class="left bg">
            <p>第三步：成功后，邀请人</p>
            <p>与被邀请人都会获得积分</p>
          </div>
          <div class="clear"></div>

        </div>
        <p>
          <el-button type="text">邀请规则：</el-button>
        </p>
        <p class="ruleItem">1、一个被邀请人只能绑定一个邀请码 </p>
        <p class="ruleItem">2、一个邀请码可以邀请多人 </p>
        <p class="ruleItem">3、邀请成功后邀请人与被邀请人同时过的10个积分 </p>
        <p class="ruleItem">4、邀请码绑定成功后，被邀请人不能更改邀请码</p>
      </div>
      <div v-show="!isshow">
        <p class="textLeft m40">
          <el-button type="text">已绑定邀请码：</el-button>
          <el-button type="text" class="ma">{{changeMessage}}</el-button>
        </p>
        <p>您还可以吧自己的邀请码提供给其他人绑定，绑定成功后你和被邀请人都将获得积分。</p>
      </div>
    </div>
    <!-- 提示 -->
    <el-dialog top="26%" :show-close="false" :title="null" :visible.sync="dialogerrorVisible" class="my-dialog message-dialog">
      <div class="iconBox">
        <i class="icon iconfont icon-icon-tishi-cuowujingshi error"></i>
      </div>
      <p class="baseMess">邀请码有误，请确认后重新输入</p>
    </el-dialog>
    <!-- 提示 -->
    <el-dialog top="26%" :show-close="false" :title="null" :visible.sync="dialogsuccessVisible" class="my-dialog message-dialog">
      <div class="iconBox">
        <i class="icon iconfont icon-icon-tishi-chenggong success"></i>
      </div>
      <p class="baseMess">取消关注成功</p>
    </el-dialog>
  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
  export default {
    data () {
      return {
        user_id:'10008',
        code:'BB277A',
        dialogerrorVisible:false,
        dialogsuccessVisible:false,
        isshow:false
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
      invitecode(){
        this.getRequest('https://api.tuoniaox.com/app/app/invitecode', {
            code:this.code,
            user_id: this.user_id
        }).then(res=> {
          if(res.data.code == 200){
            this.dialogsuccessVisible = false; 
            setTimeout(()=> {
              this.dialogsuccessVisible = false; 
            },2000);
          }else{
            this.dialogerrorVisible = true; 
            setTimeout(()=> {
              this.dialogerrorVisible = false; 
            },2000);
          }
        })
      }
    },
    computed: {
      changeMessage: function () {
        return `${this.code.substring(0,1)}****${this.code.substring(this.code.length-1)}`
      }
    },
    watch: {}
  }
</script>

