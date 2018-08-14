<template>
  <div class="short-card-box">
    <div class="single-new clearfix" v-for="item in items">
      <div class="img-box pull-left">
        <img :src="item.single_pic" height="480" width="585"/>
      </div>
      <div class="content-box pull-right">
        <p class="new-title">{{item.title}}</p>
        <p class="bottom-info">
          <span>{{item.date}}</span>
          <span class="watch-num pull-right">{{item.views}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'os-short-card',
    props: {
      items: {
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
