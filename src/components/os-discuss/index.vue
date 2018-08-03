<template>
  <div class="discuss-box">
    <p class="discuss-title">参与讨论</p>
    <el-input type="textarea" placeholder="请登录后发表评论…"></el-input>
    <p class="action clearfix">
      <span class="need-login">立即<a>登录</a>，参与讨论</span>
      <el-button type="primary" size="small" plain class="sent-discuss pull-right">发表评论</el-button>
    </p>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-discuss',
    data () {
      return {}
    },
    components: {},
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>
