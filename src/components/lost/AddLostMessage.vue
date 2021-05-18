<template>
  <el-dialog title="新建寻人信息" :model-value="lost_dialog_visible" :before-close="hideLostDialog">
    <el-form :model="form">
      <el-form-item label="物品名称" :label-width="formLabelWidth">
        <el-input v-model="form.category" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="简要描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="拾取地址" :label-width="formLabelWidth">
        <el-input v-model="form.pick_location" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="放置地址" :label-width="formLabelWidth">
        <el-input v-model="form.location" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="拾取时间" :label-width="formLabelWidth">
        <span class="demonstration"></span>
        <el-date-picker
            v-model="form.pick_time"
            type="datetime"
            placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <template #footer>
                <span class="dialog-footer">
                  <el-button @click="hideLostDialog">取 消</el-button>
                  <el-button type="primary" @click="addLost">发 布</el-button>
                </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "AddLostMessage",
  data(){
    return{
      // dialogVisible:this.lost_dialog_visible,
      // dialogVisible:true,
      form: {
        category:'',
        description:'',
        location:"",
        pick_time: '',
        pick_location:''
      },
      formLabelWidth: '120px',
    }
  },
  props:["lost_dialog_visible"],
  methods:{
    hideLostDialog(){
      // this.lost_dialog_visible = false
      this.$emit('update:lost_dialog_visible', false)
    },
    addLost(){
      this.hideLostDialog()
      this.axios.post('http://10.181.39.60:5001/postLostProperty',{
        category:this.form.category,
        description:this.form.description,
        location:this.form.location,
        pick_time:this.form.pick_time,
        pick_location:this.form.pick_location,
        release_userID:localStorage.getItem("userid")
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    },
  }
}
</script>

<style scoped>

</style>