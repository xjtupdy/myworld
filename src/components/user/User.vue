<template>
  <p>个人信息</p>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>基本信息</span>
        <el-button class="button" type="text">操作按钮</el-button>
      </div>
    </template>
    <el-form :model="user" style="margin-right: 20px" :label-width="formLabelWidth" label-position="left">
      <el-form-item label="姓名">
        <el-form-item :label="user.realname"></el-form-item>
      </el-form-item>

      <el-form-item label="学生卡号">
        <el-form-item :label="user.validID"></el-form-item>
      </el-form-item>

      <el-form-item label="性别">
        <el-form-item :label="user.gender"></el-form-item>
      </el-form-item>

      <el-form-item label="联系电话">
        <el-form-item :label="user.phone"></el-form-item>
      </el-form-item>

      <el-form-item label="联系邮箱">
        <el-form-item :label="user.mail"></el-form-item>
      </el-form-item>

      <el-form-item label="个人简介">
        <el-form-item :label="user.individual_resume"></el-form-item>
      </el-form-item>

      <el-form-item>
        <el-button  type="primary" @click="showEditUser">修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>



  <el-drawer
      title="请填写修改的内容"
      v-model="drawer_people"
      direction="rtl"
      destroy-on-close>
    <el-form :model="user" style="margin-right: 20px" :label-width="formLabelWidth" label-position="left">
      <el-form-item label="姓名">
        <el-input v-model="new_user.realname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学生卡号">
        <el-input v-model="new_user.validID" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="new_user.gender" placeholder="请选择">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="new_user.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱">
        <el-input v-model="new_user.mail" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input v-model="new_user.individual_resume" autocomplete="off" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  type="primary" @click="editUser">修改</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>


export default {

  name: "User",
  data(){
    return{
      formLabelWidth:"120px",
      drawer_people:false,
      user:{
        realname:'真实姓名',
        validID:'3120305555',
        gender:'男',
        phone:'13689261234',
        mail:'13689261234',
        individual_resume:'个人简介'
      },
      new_user:{
        realname:'真实姓名',
        validID:'3120305555',
        gender:'男',
        phone:'13689261234',
        mail:'13689261234',
        individual_resume:'个人简介'
      },
    }
  },
  components: {},
  methods:{
    showEditUser(){
      this.drawer_people = true
    },
    editUser(){
      let gen = 1;
      if(this.new_user.gender === '男'){
        gen = 1
      }else{
        gen = 0
      }
      this.axios.post('http://10.181.39.60:5001/editUser', {
        userID:localStorage.getItem('userid'),
        username:localStorage.getItem('username'),
        password:localStorage.getItem('password'),
        realname:this.new_user.realname,
        validID:this.new_user.validID,
        IDphoto:'fsdfsd',
        gender:gen,
        phone:this.new_user.phone,
        mail:this.new_user.mail,
        individual_resume:this.new_user.individual_resume,
      }).then((response) => {
        console.log(gen)
        console.log(response)
        this.drawer_people = false
        location.reload()
      })
    }
  },
  created() {
    this.axios.post('http://10.181.39.60:5001/getUserByUsername',{
      username:localStorage.getItem("username")
    }).then((response) => {
      console.log(response.data)
      this.user = response.data
      if(this.user.gender === 1){
        this.user.gender = '男'
      }else{
        this.user.gender = '女'
      }
      this.new_user = JSON.parse(JSON.stringify(this.user));//对象的深拷贝
    })
  }
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 20px;
}

.item {
  margin-bottom: 18px;
}
.button {
  font-size: 25px;
}
.box-card {
  width: 800px;
  font-size: 25px;
}
</style>