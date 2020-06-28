<template>
  <div>
    <span class="info-title">
      <h2>学生信息</h2>
    </span>
    <ul class="studentsInfo">
      <router-link :to="`/teacher/students/add`">
        <el-button> 添加学生 </el-button>
      </router-link>
      <route-view />
      <div v-if="students.length == 0">
        <el-alert title="暂时还没有指导的学生" type="warning"> </el-alert>
      </div>
      <div v-if="students">
        <li v-for="(stu, index) in students" :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <p>index-{{ index }}</p>
              <!-- <p style="float: right; padding: 3px 0">
                No.{{ stu.user.number }}
              </p> -->
            </div>
            <div>
              <p>学号{{ stu.user.number }}</p>
              <p>姓名:{{ stu.user.name }}</p>

              <!-- <p>成绩:92.1</p>
              <p>排名:3</p> -->
            </div>
          </el-card>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { GET_STUDENTS } from "@/store/type.js";
import { mapState } from "vuex";
export default {
  created() {
    console.log("GET_STUDENTS");
    this.$store.dispatch(GET_STUDENTS);
  },
  computed: {
    ...mapState(["students"])
  }
};
</script>

<style scoped>
.info-title {
  padding-left: 20px;
  border-left: 6px solid #096c36;
  display: block;
  margin: 17px 0;
  height: 22px;
  line-height: 22px;
}
.info-title h2 {
  font-size: 20px;
  color: #096c36;
}
.text {
  font-size: 14px;
}
ul {
  list-style: none;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.studentsInfo li {
  margin: 15px;
}
</style>
