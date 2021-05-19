<template>
<!--  <div id="nav">-->
<!--&lt;!&ndash;    <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    <World></World>&ndash;&gt;-->
<!--  </div>-->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  components: {},
  mounted() {
    // window.addEventListener('hashchange',()=>{
    //   let currentPath = window.location.hash.slice(1)
    //   if(this.$route.path !== currentPath){
    //     this.$router.push(currentPath)
    //   }
    // })
  }
}
</script>