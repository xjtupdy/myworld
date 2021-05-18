<template>
  <p>User</p>
  <MyLostMessage v-for="lostProperty in lostProperties" :message="lostProperty" :key="lostProperty.id"></MyLostMessage>
</template>

<script>
import MyLostMessage from "../lost/MyLostMessage";

export default {
  name: "User",
  data(){
    return{
      lostProperties:[{id:0,category:'學生卡'},{id:1,category:'學生卡'}]
    }
  },
  components: {MyLostMessage}
}
</script>

<style scoped>

</style>