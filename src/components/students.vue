<template>
  <div>
    <span class="info-title">
      <h2>学生信息</h2>
    </span>
    <ul class="studentsInfo">
      <li v-for="(stu, index) in students" :key="index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ stu.user.name }}</span>
            <p style="float: right; padding: 3px 0">No.{{ stu.user.number }}</p>
          </div>
          <div>
            <p>成绩:92.1</p>
            <p>排名:3</p>
          </div>
        </el-card>
      </li>
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
