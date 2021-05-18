<template>
  <p>LostHall</p>
  <LostMessage v-for="lostProperty in lostProperties" :message="lostProperty" :key="lostProperty.id"></LostMessage>
<!--  <MyLostMessage v-for="lostProperty in lostProperties" :message="lostProperty" :key="lostProperty.id"></MyLostMessage>-->
</template>

<script>
import LostMessage from "./LostMessage";
export default {
  name: "LostHall",
  data(){
    return{
      lostProperties:[{id:0,category:'学生卡',status:'1'},{id:1,category:'學生卡'}],
      seekProperties:[]
    }
  },
  components: {LostMessage},
  created() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/home/lost-hall")
      this.axios.post('http://10.181.39.60:5001/getWallLostProperties',{
      }).then((response) => {
        console.log(response)
        this.lostProperties = response.data
      })

      // this.axios.post('http://10.181.39.60:5001/getWallSeekProperties',{
      // }).then((response) => {
      //   console.log(response)
      //   this.seekProperties = response.data
      // })
    }
    else {
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>