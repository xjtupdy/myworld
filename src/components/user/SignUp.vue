<template>
  <div class="bg" >
    <el-row style="">
      <el-col :span="4"><div class="grid-content bg-purple">
        <img src="http://stu.xjtu.edu.cn/coremail/s?func=lp:getImg&img_id=logo_001&org_id=" style="margin-top:50px">
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8" class="log">
        <div class="inter">
          <el-form :model="form" :rules="rules" ref="form"  label-width="80px">
            <el-form-item label="账号" prop="username">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="realname">
              <el-input v-model="form.realname"></el-input>
            </el-form-item>
            <el-form-item label="证件号" prop="validID">
              <el-input v-model="form.validID"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.gender" placeholder="">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="mail">
              <el-input v-model="form.mail"></el-input>
            </el-form-item>
            <el-form-item label="个人简介">
              <el-input type="textarea" v-model="form.individual_resume"></el-input>
            </el-form-item>
            <el-form-item>

            </el-form-item>
          </el-form>
          <el-button class="bu" type="primary" @click="submitForm('form')" >注册</el-button>
          <el-button class="bu" type="primary" @click="back('form')" >返回登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: "SignUp",
  data() {
    return {
      form: {
        username: '',
        password: '',
        realname:'',
        validID:'',
        gender:'',
        phone:'',
        mail:'',
        individual_resume:''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6,  message: '长度在大于6个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        validID: [
          { required: true, message: '请输入证件号', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入号码', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/my/"+localStorage.getItem("username"))
    }
  },
  methods: {
    back(){
      this.$router.push("/login")
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          this.onSubmit()
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    onSubmit() {
      var gen = 1
      if(this.form.gender == '男'){
        gen = 1
      }else{
        gen = 0
      }
      this.axios.post('http://10.181.39.60:5001/register',{
        username:this.form.username,
        password:this.form.password,
        realname:this.form.realname,
        validID:this.form.validID,
        gender:gen,
        phone:this.form.phone,
        mail:this.form.mail,
        individual_resume:this.form.individual_resume
      }).then((response) => {
        console.log(response)
        if(response.data == "1")
        {
          this.axios.post('http://10.181.39.60:5001/getUserByUsername',{
            username:this.form.username
          }).then((response) =>{
            var gg = '男'
            if(response.data.gender==0){
              gg = '女'
            }
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('realname', response.data.realname)
            localStorage.setItem('validID', response.data.validID)
            localStorage.setItem('gender', gg)
            localStorage.setItem('phone', response.data.phone)
            localStorage.setItem('mail', response.data.mail)
            localStorage.setItem('resume', response.data.individual_resume)
          })
          this.$router.push("/my/"+localStorage.getItem("username"))
          ElMessage.success("注册成功，已经自动登录")
          localStorage.setItem('login', '1')
        }else if(response.data == "2")
        {
          ElMessage.error("用户名已经存在")
        }
      })
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
  margin-top: 200px;
  margin-right: 120px;
  margin-left: 120px;
}
.bu{
  width: 30%;
  margin-left: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
