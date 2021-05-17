<template>
<!--  <div class="about">-->
<!--    <h1>This is an about page</h1>-->
<!--    <p1>{{this.$store.state.counter}}{{}}</p1>-->
<!--    <input type="button" value="ddd" @click="increase">-->

<!--  </div>-->
  <HeadNavigator></HeadNavigator>
<!--  <Upload></Upload>-->
  <MyImage></MyImage>
  <MyUploadImage></MyUploadImage>
</template>
<script>
import HeadNavigator from "../components/HeadNavigator";
// import Upload from "../components/Upload";
import MyImage from "../components/MyImage";
import MyUploadImage from "../components/MyUploadImage";
export default {
  name:"About",
  components: {
    MyUploadImage, MyImage,
    // Upload,
    HeadNavigator
  },
  data(){
    return{

    }
  },
  methods:{
    increase:function (){
      this.$store.commit("increment")
    }
  }
}
</script>