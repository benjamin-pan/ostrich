<template>
  <div class="jifen-container">
    123

  </div>
</template>
<style lang="scss" src="./index.scss">

</style>
<script>
  export default {
    data () {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }, {
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }, {
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }, {
            date: '2018-06-26 19:51:32',
            name: '王小虎',
            number: '+1000',
            all:4000
          }]
      }
    },
    components: {},
    created () {
    },
    mounted () {

    },
    beforeDestroy () {
    },
    methods: {
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    computed: {},
    watch: {}
  }
</script>

