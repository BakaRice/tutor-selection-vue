<template>
  <div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="student"
    >
      <el-form-item label="学生名">
        <el-input v-model="student.user.name"></el-input>
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="student.user.number"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="upload()">check in</el-button>
  </div>
</template>

<script>
import { ADD_STUDENT } from "@/store/type.js";
export default {
  data() {
    return {
      labelPosition: "right",
      student: {
        user: {
          name: "",
          number: ""
        }
      }
    };
  },
  methods: {
    async upload() {
      console.log(name);
      await this.$store.dispatch(ADD_STUDENT, this.student);
      this.$router.push("/teacher/students");
    }
  }
};
</script>
