<template>
  <p>SeekHall</p>
  <SearchSeek></SearchSeek>
  <SeekMessage v-for="seekProperty in seekProperties"
               :message="seekProperty"
               :key="seekProperty.id"
                @showPublisher="publisherInfo"></SeekMessage>
  <SeeUserInfo v-model:Visible="dialogVisible"></SeeUserInfo>
</template>

<script>

import SeekMessage from "./SeekMessage";
import SearchSeek from "./SearchSeek";
import SeeUserInfo from "@/components/user/SeeUserInfo";
export default {
  name: "SeekHall",
  data() {
    return {
      seekProperties: [{id: 0, category: '学生卡', status: '1'}, {id: 1, category: '學生卡'}],
      dialogVisible:false
    }
  },
  components: {SeekMessage,SearchSeek,SeeUserInfo},
  created() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/home/seek-hall")
      this.axios.post('http://10.181.39.60:5001/getWallSeekProperties',{
      }).then((response) => {
        console.log(response)
        this.seekProperties = response.data
      })
    }
    else {
      this.$router.push("/login")
    }
  },
  methods:{
    publisherInfo(userID){
       if(userID == userID){
         this.dialogVisible = true;
         console.log(this.dialogVisible);
       }
    }
  }
}
</script>

<style scoped>

</style>