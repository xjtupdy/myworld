<template>
  <div class="home">
    <el-row style=" background-color:#545c64 ">
      <el-col :offset="8" :span="8">
        <HeadNavigator></HeadNavigator>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="18" :offset="3">
        <router-view></router-view>
      </el-col>
    </el-row>

    <UploadJava></UploadJava>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import UploadJava from "../components/UploadJava";
import HeadNavigator from "../components/HeadNavigator"

export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components: {
    HeadNavigator,
    UploadJava,
    // HelloWorld
  },

}
</script>
