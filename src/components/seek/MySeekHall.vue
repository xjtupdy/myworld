<template>
  <p>我的寻物信息</p>
  <MySeekMessage v-for="seekProperty in seekProperties" :message="seekProperty" :key="seekProperty.id"></MySeekMessage>
</template>

<script>

import MySeekMessage from "./MySeekMessage";

export default {
  name: "MySeekHall",
  data() {
    return {
      seekProperties: [{id: 0, category: '学生卡', status: '1'}, {id: 1, category: '学生卡'}],

    }
  },
  components: {MySeekMessage},
  created() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/home/my-seek-hall")
      this.axios.post('http://10.181.39.60:5001/getSeekPropertiesByUsername',{
        username:localStorage.getItem("username")
      }).then((response) => {
        console.log(response)
        this.seekProperties = response.data
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