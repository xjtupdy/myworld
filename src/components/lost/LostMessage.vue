<template>
  <el-card class="box-card">

    <el-descriptions class="margin-top" :title="message.category" :column="3" :size="size" border>

      <template #extra>
        <el-button size="small" type="primary"  icon="el-icon-user" @click="showPublisher">发布人</el-button>
        <el-button size="small" type="primary" icon="el-icon-bell" @click="confirmReceive">确认已领</el-button>
        <el-button size="small" type="danger" icon="el-icon-phone" @click="report">举报</el-button>
        <el-tag :type="status[message.status]" style="margin-left: 20px">{{statusInfo[message.status]}}</el-tag>
      </template>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          拾物图片
        </template>
        <el-image style="width: 200px; height: 200px"
                  fit="cover"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :preview-src-list="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']">
        </el-image>

      </el-descriptions-item><!--    拾物图片    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          拾取位置
        </template>
        {{message.pick_location}}
      </el-descriptions-item><!--    拾取位置    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-time"></i>
          拾取时间
        </template>
        {{message.pick_time}}
      </el-descriptions-item><!--    拾取时间    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-document"></i>
          拾物描述
        </template>
        {{message.description}}
      </el-descriptions-item><!--    拾物描述    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-place"></i>
          放置位置
        </template>
        {{message.location}}
      </el-descriptions-item><!--    放置位置    -->
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-date"></i>
          发布时间
        </template>
        {{message.release_time}}
      </el-descriptions-item><!--    发布时间    -->
    </el-descriptions>
  </el-card>
  <br>
  <el-divider></el-divider>
  <br>
</template>

<script>
export default {
  name: "LostMessage",
  data () {
    return {
      size: '',
      status:{
        "1":"success",
        "2":"info",
        "3":"danger"
      },
      statusInfo:{
        "1":"发布中",
        "2":"已完成",
        "3":"审核中",
      }
    };
  },
  props:['message'],
  methods:{
    showPublisher(){

    },
    confirmReceive(){

    },
    report(){

    }
  }
}
</script>

<style scoped>
.item {
  padding: 18px 0;
}

.box-card {
  /*width: 480px;*/
}
</style>
