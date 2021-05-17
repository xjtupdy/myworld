<template>
  <p>SeekHall</p>
  <SeekMessage v-for="seekProperty in seekProperties" :message="seekProperty" :key="seekProperty.id"></SeekMessage>
</template>

<script>

import SeekMessage from "./SeekMessage";

export default {
  name: "SeekHall",
  data() {
    return {
      seekProperties: [{id: 0, category: '学生卡', status: '1'}, {id: 1, category: '學生卡'}],

    }
  },
  components: {SeekMessage},
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
  }
}
</script>

<style scoped>

</style>