<template>
  <div class="hot-lables-box">
    <el-row class="lables">
      <el-button round>圆角</el-button>
      <el-button round>按钮</el-button>
      <el-button round>圆角钮</el-button>
      <el-button round>圆角按钮</el-button>
      <el-button round>按钮</el-button>
      <el-button round>圆按钮</el-button>
      <el-button round>按钮</el-button>
      <el-button round>圆角按钮</el-button>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
<script>
  export default {
    name: 'os-hot-lables',
    props: {
      lables: {
        type: Array,
        default () {
          return []
        }
      }
    },
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