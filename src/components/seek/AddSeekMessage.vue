<template>
  <el-dialog title="新建寻物信息" :model-value="seek_dialog_visible">
    <el-form :model="form">
      <el-form-item label="物品名称" :label-width="formLabelWidth">
        <el-input v-model="form.category" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="简要描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="捡拾地址" :label-width="formLabelWidth">
        <el-input v-model="form.location" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="拾取时间" :label-width="formLabelWidth">
        <span class="demonstration"></span>
        <el-date-picker
            v-model="form.release_time"
            type="datetime"
            placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <template #footer>
                <span class="dialog-footer">
                  <el-button @click="hideSeekDialog">取 消</el-button>
                  <el-button type="primary" @click="addSeek">发 布</el-button>
                </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "AddSeekMessage",
  data(){
    return{
      form: {
        category:'',
        description:'',
        location:"",
        release_time: ''
      },
    }
  },
  props:["seek_dialog_visible"],
  methods:{
    hideSeekDialog(){
      this.$emit('update:seek_dialog_visible', false)
    },
    addSeek(){
      this.hideSeekDialog()
      this.axios.post('http://10.181.39.60:5001/postSeekProperty',{
        category:this.form.category,
        description:this.form.description,
        location:this.form.location,
        time:this.form.release_time,
        userID:localStorage.getItem("userid")
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    }
  }
}
</script>

<style scoped>

</style>