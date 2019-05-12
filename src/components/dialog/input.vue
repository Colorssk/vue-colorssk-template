<template>
   <div class="input">
    <!-- 输入后匹配输入建议 -->
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {}
  },
  components: {},
  mounted () {

  }
}
</script>

<style scoped lang="stylus">
</style>
