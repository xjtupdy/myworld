<template>
  <div class="bg" >
    <el-row style="">
      <el-col :span="4"><div class="grid-content bg-purple">
        <img src="http://stu.xjtu.edu.cn/coremail/s?func=lp:getImg&img_id=logo_001&org_id=" style="margin-top:50px">
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8" class="log">
        <div class="inter">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="bu" type="primary" @click="logIn" >登录</el-button>

            </el-form-item>
          </el-form>
          <a @click="goLogUp" style="text-decoration:underline;float: right;color: dodgerblue">还没有账号，前往注册</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  name: "LogIn",
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      user:{

      }
    }
  },
  created() {
    if(localStorage.getItem("login") === '1'){
      this.$router.push("/home")
    }
  },
  methods: {
    logIn() {
      console.log(this.form.username)
      console.log(this.form.password)
      this.axios.post('http://10.181.39.60:5001/login',{
        username:this.form.username,
        password:this.form.password
      }).then((response) => {
        // console.log(response)
        if(response.data == 1){
          this.axios.post('http://10.181.39.60:5001/getUserByUsername',{
            username:this.form.username
          }).then((response) =>{
            console.log(response)
            localStorage.setItem('userid', response.data.userID)
            localStorage.setItem('username', response.data.username)
            console.log("login()", localStorage.getItem("username"))
            localStorage.setItem('realname', response.data.realname)
            localStorage.setItem('validID', response.data.validID)
            localStorage.setItem('gender', response.data.gender)
            localStorage.setItem('phone', response.data.phone)
            localStorage.setItem('mail', response.data.mail)
            localStorage.setItem('resume', response.data.individual_resume)
            localStorage.setItem('login', '1')
            this.$router.push("/home")
          })
        }else if(response.data == 2){
          ElMessage.error("用户名不存在")
        }else if(response.data == 3){
          ElMessage.error("密码错误")
        }
      })
    },
    goLogUp(){
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped>
.bg{
  margin: 0px;
  background-image: url(http://stu.xjtu.edu.cn/coremail/s?func=lp:getImg&org_id=&img_id=background_001);
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 950px;
}
.log{
  top: 0; bottom: 0;
  left: 0; right: 0;
  width: 800px;
  height: 950px;
  line-height: 2;
  margin: auto;
  border-radius: 5px;
  background: rgba(255, 255, 255, .3);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
}
.inter{
  margin-top: 400px;
  margin-right: 120px;
  margin-left: 120px;
}
.bu{
  width: 100%;
  margin-left: 0;
  margin-bottom: 10px;
}
</style>
