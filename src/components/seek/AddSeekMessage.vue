<template>
  <el-dialog title="新建寻物信息" :model-value="seek_dialog_visible" :before-close="hideSeekDialog">
    <el-form :model="form" style="margin-left: 20px; margin-right: 20px" :label-width="formLabelWidth">
      <el-form-item label="失物名称" :label-width="formLabelWidth">
        <el-input v-model="form.category" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="失物图片" :label-width="formLabelWidth">
        <el-image style="width: 200px; height: 200px"
                  fit="cover"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
        </el-image>
      </el-form-item>
      <el-form-item label="简要描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="丢失位置" :label-width="formLabelWidth">
        <el-input v-model="form.location" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="丢失时间" :label-width="formLabelWidth">
        <span class="demonstration"></span>
        <el-date-picker
            v-model="form.time"
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
      formLabelWidth: '120px',
      form: {
        category:'',
        description:'',
        photo:'',
        location:"",
        time: ''
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
        photo:this.form.photo,
        location:this.form.location,
        time:this.form.time,
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