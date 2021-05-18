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
    <el-form :model="form" style="margin-left: 20px; margin-right: 20px">
      <el-form-item label="物品名称" :label-width="formLabelWidth">
        <el-input v-model="form.category" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="简要描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off" type = "textarea"></el-input>
      </el-form-item>
      <el-form-item label="捡拾地址" :label-width="formLabelWidth">
        <el-input v-model="form.location" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="丢失时间" :label-width="formLabelWidth">
        <span class="demonstration"></span>
        <el-date-picker
            v-model="form.pick_time"
            type="datetime"
            placeholder="选择日期时间">
        </el-date-picker>
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
        "2":"danger"
      },
      statusInfo:{
        "1":"发布中",
        "2":"审核中",
        "3":"已完成"
      },
      form: {
        category:this.message.category,
        description:this.message.description,
        location:this.message.location,
        pick_time: this.message.pick_time,
        seekID:this.message.seekID,
        status:this.message.status
      },
    }
  },
  props:['message'],
  methods:{
    showEditDrawer(){
      this.drawer = true
    },
    editSeek(){
      this.drawer = false
      this.axios.post(api.http + '/editSeekProperty',{
        category:this.form.category,
        description:this.form.description,
        location:this.form.location,
        time:this.form.pick_time,
        userID:localStorage.getItem("userid"),
        seekID:this.form.seekID,
        status:this.form.status
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
  }
}
</script>

<style scoped>

</style>