<template>
  <div class="short-article-box">
    <div class="single-art clearfix" v-for="one in news">
      <div class="pull-left img-box cursor-pointer" @click="goToArticleDetail(one)">
        <img :src="one.single_pic"/>
      </div>
      <div class="pull-right content-box">
        <p class="title cursor-pointer" @click="goToArticleDetail(one)">{{one.title}}</p>
        <div>
          <el-button type="primary" round>{{one.copyright_type === '1' ? '原创' : '转载'}}</el-button>
          <el-button type="primary" round v-if="one.is_top === '1'">置顶</el-button>
          <el-button type="primary" round v-if="one.is_recommend === '1'">精选</el-button>
        </div>
        <p class="short-content">{{one.summary}}</p>
        <div class="bottomBox">
          <div class="pull-left">
            <os-author class="font-12" :name="one.source_author" icon=""></os-author>
          </div>
          <div class="pull-left ml-15">
            <span class="release-time">{{one.date}}</span>
          </div>
          <div class="pull-left ml-45 os-lable">
            <span class="ml-5" v-for="tag in one.tags.split(',')">{{tag}}</span>
          </div>
          <div class="watch-num pull-right font-12">{{one.views}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'ostrich-short-article',
    props: {
      news: {
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
    methods: {
      goToArticleDetail (row) {
        this.$router.push({
          path: '/detail',
          query: {
            id: row.id
          }
        })
      }
    },
    computed: {},
    watch: {}
  }
</script>
