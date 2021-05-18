<template>
  <el-card class="box-card">
    <el-descriptions class="margin-top" :title="message.category" :column="3" :size="size" border>
      <template #extra>
        <el-button size="small" type="primary"  icon="el-icon-user" @click="openChange">发布人</el-button>
        <el-button size="small" type="danger" icon="el-icon-phone" @click="delost">举报</el-button>
        <el-tag :type="status[message.status]" style="margin-left: 20px">{{statusInfo[message.status]}}</el-tag>
      </template>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          失物图片
        </template>
        <el-image style="width: 200px; height: 200px"
                  fit="cover"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :preview-src-list="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']">
        </el-image>

      </el-descriptions-item><!--    失物图片    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          丢失位置
        </template>
        {{message.location}}
      </el-descriptions-item><!--    丢失位置    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          丢失时间
        </template>
        {{message.time}}
      </el-descriptions-item><!--    丢失时间    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          失物描述
        </template>
        {{message.description}}
      </el-descriptions-item><!--    失物描述    -->
    </el-descriptions>
  </el-card>
  <br>
  <el-divider></el-divider>
  <br>
</template>

<script>
export default {
  name: "SeekMessage",
  data () {
    return {
      size: '',
      status:{
        "1":"success",
        "2":"danger"
      },
      statusInfo:{
        "1":"发布中",
        "2":"审核中",
        "3":"已完成"
      }
    }
  },
  props:['message']
}
</script>

<style scoped>

</style>