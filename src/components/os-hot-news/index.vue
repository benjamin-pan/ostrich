<template>
  <div class="hot-news">
    <os-short-title title="热门新闻" title-icon="icon-hot-news"></os-short-title>
    <os-short-card></os-short-card>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-hot-news',
    data () {
      return {}
    },
    components: {},
    created () {
    },
    mounted () {
      this.getHotNews()
    },
    beforeDestroy () {
    },
    methods: {
      getHotNews () {
        this.getRequest('https://api.tuoniaox.com/news/news/hot', {
          limit: ''
        }).then(res => {
          this.hotNews = res.data.post_list || []
          console.log('1', res)
        }).catch((err) => {
          this.hotNews = []
        })
      },
    },
    computed: {},
    watch: {}
  }
</script>
