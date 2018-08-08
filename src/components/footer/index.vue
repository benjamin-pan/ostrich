<template>
  <div class="ostrich-footer">
    <div class="ostrich-with">
      <el-row :gutter="20" class="lx">
        <div class="left">
          <el-col :span="1">
            <div class="grid-content bg-purple">关于我们</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">投稿须知</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">免责声明</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">联系我们</div>
          </el-col>
        </div>
        <div class="right">
          <el-col :span="1" class="wx">
            <div class="grid-content bg-purple">
              <el-popover ref="weChat" placement="top" trigger="hover" id="a" popper-class="a">
                <div class="download-app">
                  <img class="QRcode" :src="imgSrc" alt="微信二维码">
                  <p class="QRcodeInstructions">扫描二维码</p>
                  <p class="QRcodeInstructions">关注鸵鸟微信公众号</p>
                </div>
              </el-popover>
              <span slot="reference" class="weChat" @mouseenter="isActive = !isActive" @mouseleave="isActive = !isActive" v-bind:class="{ wechatBg: isActive }" v-popover:weChat>
                <img src="../../assets/svg/页脚-微信-选中.svg" alt="微信">
              </span>
            </div>
          </el-col>
          <el-col :span="1" class="sj">
            <div class="grid-content bg-purple">
              <el-popover ref="mobile" placement="top" trigger="hover">
                <div class="download-app">
                  <img class="QRcode" :src="imgSrc" alt="微信二维码">
                  <p class="QRcodeInstructions">扫描二维码</p>
                  <p class="QRcodeInstructions">下载鸵鸟区块链APP</p>
                </div>
              </el-popover>
              <span class="mobile" @mouseenter="isActive1 = !isActive1" @mouseleave="isActive1 = !isActive1" v-bind:class="{ mobileBg: isActive1 }" v-popover:mobile>
                <img src="../../assets/svg/页脚-手机APP-选中.svg" alt="手机">
              </span>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="ostrich-friendship">
      <div class="blogroll">
        <div>
          <el-col :span="16" class="blogroll-01">
            <div>友情链接：</div>
          </el-col>
        </div>
        <div class="partner">
          <a href="">鸵鸟创投媒体</a>
          <a href="">哈鲁资本</a>
          <a href="">LBANK</a>
          <a href="">AICoin</a>
          <a href="">原本</a>
          <a href="">比特币之家</a>
          <a href="">陀螺财经</a>
          <a href="">火球财经</a>
          <a href="">比特之窗</a>
          <a href="">核财经</a>
          <a href="">链世界</a>
          <a href="">区块链导航</a>
          <a href="">币空投</a>
          <a href="">币猫商城</a>
          <a href="">CES ASIA</a>
        </div>
        <div class="company">
          Copyright © 2018 上海以北科技有限公司 沪ICP备15014516号-2
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
  .a {
  transform: translateY(-16px);
}
</style>
<script>
  export default {
    name: 'ostrich-footer',
    props: {},
    data() {
      return {
        isActive: false,
        isActive1: false
      }
    },
    components: {},
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {},
    computed: {},
    watch: {}
  }

</script>
