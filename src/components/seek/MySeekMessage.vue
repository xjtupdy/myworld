<template>
  <el-card class="box-card">
    <el-descriptions class="margin-top" :title="message.category" :column="3" :size="size" border>
      <template #extra>
        <el-button size="small" type="primary" @click="showEditDrawer">修改</el-button>
        <el-button size="small" @click="deleteSeekMessage" type="danger" icon="el-icon-delete" circle></el-button>
        <el-tag :type="status[message.status]" style="margin-left: 20px">{{statusInfo[message.status]}}</el-tag>
      </template>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          失物图片
        </template>
        <el-image style="width: 200px; height: 200px"
                  fit="cover"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :preview-src-list="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']">
        </el-image>

      </el-descriptions-item><!--    失物图片    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          丢失位置
        </template>
        {{message.location}}
      </el-descriptions-item><!--    丢失位置    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          丢失时间
        </template>
        {{message.time}}
      </el-descriptions-item><!--    丢失时间    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          失物描述
        </template>
        {{message.description}}
      </el-descriptions-item><!--    失物描述    -->
    </el-descriptions>
  </el-card>
  <br>
  <el-divider></el-divider>
  <br>
  <el-drawer
      title="请填写修改的内容"
      v-model="drawer"
      direction="rtl"
      destroy-on-close>
    <el-form :model="form" style="margin-left: 20px; margin-right: 20px" :label-width="formLabelWidth">
      <el-form-item label="失物名称" :label-width="formLabelWidth">
        <el-input v-model="form.category" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="失物图片" :label-width="formLabelWidth">
        <el-image style="width: 200px; height: 200px"
                  fit="cover"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :preview-src-list="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']">
        </el-image>
      </el-form-item>
      <el-form-item label="简要描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off" type = "textarea"></el-input>
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
      <el-form-item v-if="message.status !== 3" label="当前状态">
        <el-select v-model="form.status">
          <el-option label="发布中" value="发布中" key="1"></el-option>
          <el-option label="已完成" value="已完成" key="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="message.status === 3" label="当前状态">
        <el-select model-value="审核中" disabled><!--    model-value无法随选中的变更      -->
          <el-option key="1" label="审核中" value="1" disabled></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button  type="primary" @click="editSeek">修改</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>
import api from "../../js/api";
export default {
  name: "MySeekMessage",
  data () {
    return {
      drawer: false,
      size: '',
      formLabelWidth: '120px',
      status:{
        "1":"success",
        "2":"info",
        "3":"danger"
      },
      statusInfo:{
        "1":"发布中",
        "2":"已完成",
        "3":"审核中",
      },
      form: JSON.parse(JSON.stringify(this.message)), //对象的深拷贝
    }
  },
  props:['message'],
  methods:{
    showEditDrawer(){
      this.drawer = true
    },
    editSeek(){
      this.drawer = false
      let status = 1
      if(this.form.status === this.statusInfo["1"]){
        status = 1
      }else if(this.form.status === this.statusInfo["2"]){
        status = 2
      }else{
        status = 3
      }
      this.axios.post(api.http + '/editSeekProperty',{
        category:this.form.category,
        description:this.form.description,
        location:this.form.location,
        time:this.form.time,
        userID:localStorage.getItem("userid"),
        seekID:this.form.seekID,
        status:status
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    },
    deleteSeekMessage(){
      this.axios.post(api.http + '/deleteSeekProperty',{
        seekID:this.message.seekID
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    },
  },
  created() {
    this.form.status = this.statusInfo[this.form.status]
  }
}
</script>

<style scoped>

</style>