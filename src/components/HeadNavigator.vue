<template>

  <div class="line"></div>
  <el-menu
      router
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="/home/lost-hall" route="/home/lost-hall">拾物大厅</el-menu-item>
    <el-menu-item index="/home/seek-hall" route="/home/seek-hall">失物大厅</el-menu-item>
    <el-submenu index="3">
      <template v-slot:title>我的发布</template>
      <el-menu-item index="/home/my-lost-hall" route="/home/my-lost-hall">寻人信息</el-menu-item>
      <el-menu-item index="/home/my-seek-hall" route="/home/my-seek-hall">寻物信息</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template v-slot:title>发布信息</template>
      <el-menu-item @click="addLostMessage">寻人信息</el-menu-item>
      <el-menu-item @click="addSeekMessage">寻物信息</el-menu-item>
    </el-submenu>
    <el-menu-item index="5" >消息中心</el-menu-item>
    <el-submenu index="6">
      <template v-slot:title>用户</template>
      <el-menu-item index="/home/user">个人信息</el-menu-item>
      <el-menu-item @click="logout">登出</el-menu-item>
    </el-submenu>
    <AddLostMessage v-model:lost_dialog_visible="add_lost_dialog_visible"></AddLostMessage>
    <AddSeekMessage v-model:seek_dialog_visible="add_seek_dialog_visible"></AddSeekMessage>
  </el-menu>
</template>

<script>
import AddLostMessage from "./lost/AddLostMessage";
import AddSeekMessage from "./seek/AddSeekMessage";
export default {
  name:"HeadNavigator",
  components: {AddSeekMessage, AddLostMessage},
  data() {
    return {
      activeIndex: '/home/lost-hall',
      add_lost_dialog_visible: false,
      add_seek_dialog_visible: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      key
      keyPath
      // console.log("key", key)
      // console.log("keyPath", keyPath);// 点击子按钮会有俩值

    },
    logout(){
      localStorage.clear()
      this.$router.push('/login')
    },
    addLostMessage(){
      this.add_lost_dialog_visible = true
    },
    addSeekMessage(){
      this.add_seek_dialog_visible = true
    }

  },
  mounted() {
    this.activeIndex = this.$route.path
    if(this.$route.path === '/home'){
      this.$router.push('/home/lost-hall')
      this.activeIndex = '/home/lost-hall'
    }
    window.addEventListener('hashchange',()=> {
      this.activeIndex = this.$route.path
    },false);
  }
}
</script>

<style scoped>
</style>