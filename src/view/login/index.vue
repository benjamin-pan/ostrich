<template>
  <div>
    这是登录页
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
export default {
  data () {
    return {}
  },
  components: {},
  created () {
  },
  mounted () {
    console.log([1, 2, 3, 4].includes(2))
    setTimeout(() => {
      console.log(1)
    })
  },
  beforeDestroy () {
  },
  methods: {},
  computed: {},
  watch: {}
}
</script>
