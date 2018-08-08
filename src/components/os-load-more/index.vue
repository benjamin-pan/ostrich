<template>
  <div class="loading-more-box">
    <div class="loading-more">
      <el-button @click="loadMore">加载更多</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-load-more',
    props: {
      title: {
        type: String,
        default: ''
      },
      titleIcon: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        iconImg: '',
        activePage: 1
      }
    },
    components: {},
    created () {
    },
    mounted () {
      this.iconImg = this.titleIcon === '' ? '' : require(`../../assets/svg/${this.titleIcon}.svg`)
    },
    beforeDestroy () {
    },
    methods: {
      loadMore () {
        this.$emit('loadNextPage', ++this.activePage)
      }
    },
    computed: {},
    watch: {}
  }
</script>
