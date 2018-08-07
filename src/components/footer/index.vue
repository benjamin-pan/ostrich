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
              <span>
                <img src="../../assets/svg/页脚-微信-选中.svg" alt="微信">
              </span>
            </div>
          </el-col>
          <el-col :span="1" class="sj">
            <div class="grid-content bg-purple">
              <span>
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

</style>
<script>
  export default {
    name: 'ostrich-footer',
    props: {},
    data() {
      return {}
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
