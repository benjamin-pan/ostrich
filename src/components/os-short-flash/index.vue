<template>
  <div class="short-flash-box">
    <ostrich-short-title title="今日快讯" titleIcon="icon-flash"></ostrich-short-title>
    <div class="news-flash" v-for="flash in flashs">
      <p class="flash-title">{{flash.title}}</p>
      <p class="flash-content">{{flash.content}}</p>
      <p class="mt-25 img-box" v-if="flash.post_img">
        <img :src="flash.post_img"/>
      </p>
      <p class="mt-15 clearfix font-12">
        <span class="pull-left release-time">{{flash.date}}</span>
        <span class="text-color black">
          <span class="pull-right ml-25 os-sharing">分享</span>
          <span class="pull-right ml-25 os-falling">{{flash.bear}}</span>
          <span class="pull-right os-rising">{{flash.bull}}</span>
        </span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
<script>
  export default {
    name: 'ostrich-short-flash',
    props: {
      flashs: {
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
