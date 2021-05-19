<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <div style="margin-top: 15px">
        <el-input
            placeholder="请输入查询内容"
            v-model="input"
            class="input-with-select"
            clearable
            autofocus
        >
          <template #append>
            <el-button icon="el-icon-search" @click="search"></el-button>
          </template>
        </el-input>
      </div>
    </el-col>
  </el-row>

  <br>
  <el-divider></el-divider>
  <br>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  name:"SearchSeek",
  setup() {
    return {
      input: ref(''),
    }
  },
  methods:{
    search(){
      alert()
    }
  }
})
</script>

<style scoped>
>>> .el-input__inner{

  height: 65px;
}
</style>