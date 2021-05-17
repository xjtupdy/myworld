<template>
  <p>我发布的寻人信息</p>
  <MyLostMessage v-for="lostProperty in lostProperties" :message="lostProperty" :key="lostProperty.id"></MyLostMessage>
</template>

<script>
import MyLostMessage from "./MyLostMessage";

export default {
  name: "MyLostHall",
  data(){
    return{
      lostProperties:[{id:0,category:'学生卡',status:'1'},{id:1,category:'學生卡'}],
    }
  },
  components: {MyLostMessage},
  created() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/home/my-lost-hall")
      this.axios.post('http://10.181.39.60:5001/getLostPropertiesByUsername',{
        username:localStorage.getItem("username")
      }).then((response) => {
        console.log(response)
        this.lostProperties = response.data
      })
    }
    else {
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>