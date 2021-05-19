<template>
  <el-dialog
      title="发布人信息"
      :model-value="Visible"
      width="30%"
      :before-close="handleClose">
    <span>发布人信息</span>
    <div>这是发布人的信息</div>
      <template #footer>
              <span class="dialog-footer">
                 <el-button type="primary" @click="closewindow">确 定</el-button>
            </span>
      </template>
  </el-dialog>
</template>

<script>
export default {
  props:['Visible'],
  name: "SeeUserInfo",
  data() {

  },
  methods: {
    closewindow(){
      this.$emit('update:Visible', false)
    },
    handleClose() {
      this.$emit('update:Visible', false)
    }
  }

}
</script>

<style scoped>

</style>