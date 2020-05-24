<template>
  <div>
    <span class="info-title">
      <h2>教师信息</h2>
    </span>
    <div v-if="tutor">
      <p>tutor:{{ tutor.user.name }}</p>

      <p>introduction: {{ tutor.introduction }}</p>
    </div>
    <ul v-else class="studentsInfo">
      <div v-if="teachers.length == 0">暂时还没有可选的导师</div>
      <div v-if="teachers">
        <li v-for="(teahcer, index) in teachers" :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ teahcer.user.name }}</span>
              <p style="float: right; padding: 3px 0">
                No.{{ teahcer.user.number }}
              </p>
            </div>
            <p>个人简介:{{ teahcer.introduction }}</p>
            <p>已指导学生数:{{ teahcer.optional_num }}</p>
            <p>可指导最大数:{{ teahcer.ranges }}</p>
            <el-button @click="choseTeacher(teahcer.user.number)"
              >选择</el-button
            >
          </el-card>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { LIST_TEACHERS } from "@/store/type.js";
import { GET_TEACHER } from "@/store/type.js";
import { CHOSE } from "@/store/type.js";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch(GET_TEACHER);
    this.$store.dispatch(LIST_TEACHERS);
  },
  watch: {
    tutor() {
      //   alert("tutor");
      console.log("MyTutor");
    }
  },
  computed: {
    ...mapState(["teachers"]),
    ...mapState(["tutor"])
    // teahcer: this.$store.state.teahcer
    // tutor: function() {
    //   console.log(this.$store.state.tutor);
    //   return this.$store.state.tutor;
    // }
  },
  methods: {
    choseTeacher(teacher_number) {
      console.log(teacher_number);
      this.$store.dispatch(CHOSE, teacher_number);
    }
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
