<template>
  <div>
    <section class="friendlinks">
      <div style="width: 100%;background: #708090;">
        <div class="container top">
          <el-row style="left: -35px;">
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">

                <a href="">关于我们</a>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <a href="">投稿须知</a>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <a href="">免责声明</a>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <a href="">联系我们</a>
              </div>
            </el-col>
            <el-col :span="2" :push="14">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <span style="border-radius: 50%;width: 35px;height: 35px;background: #515151;margin-top: -30px;">
                  <img style="margin: 10px 0 0 -5px;" src="../../assets/svg/页脚-微信-选中.svg">
                </span>
              </div>
            </el-col>
            <span style="border-radius: 50%;width: 35px;height: 35px;background: #515151;margin: -30px 0 0 345px;">
              <img style="margin: 10px 0 0 -5px;" src="../../assets/svg/页脚-手机APP-选中.svg">
            </span>
          </el-row>
        </div>
      </div>
      <div class="container" style="text-align: center;">
        <div class="content">
          <span>友情链接:</span>
          <div class="tuoniao-content">
            <a href="http://tuoniao.fm/">鸵鸟创投媒体</a>
            <a href="http://hellocapital.net/">哈鲁资本</a>
            <a href="http://lbank.info/">LBANK</a>
            <a href="https://www.aicoin.net.cn/">AICoin</a>
            <a href="http://yuanben.io/">原本</a>
            <a href="http://www.btc798.com/">比特币之家</a>
            <a href="https://www.tuoluocaijing.cn/">陀螺财经</a>
            <a href="http://www.ihuoqiu.com/">火球财经</a>
            <a href="http://www.btc789.com/">比特之窗</a>
            <a href="http://www.lianwencj.com/">链金财经</a>
            <a href="https://www.hecaijing.com/">核财经</a>
            <a href="https://www.7234.cn/">链世界</a>
            <a href="http://www.block123.com/">区块链导航</a>
            <a href="http://tokenairdrop.org/">币空投</a>
            <a href="http://www.8btm.com/">币猫商城</a>
            <a href="http://www.cesasia.cn/">CES ASIA</a>
            <a href="http://blockchain.haiwainet.cn/">人民日报海外网区块链频道</a>
          </div>
        </div>
        <div style="width: 1250px;height: 1px;background: #999;position: relative;margin-top: 84px;left: -7px;">
        </div>
        <div class="copyright" style="text-align: center;margin-top: 20px;margin: 20px 0 0 -7px;">
          <div style="position: absolute;">
            <p>Copyright © 2018 上海以北科技有限公司 沪ICP备15014516号-3</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'ostrich-base',
    props: {
    },
    data () {
      return {
        activeIndex: ''
      }
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
