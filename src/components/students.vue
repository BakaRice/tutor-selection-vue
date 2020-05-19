<template>
  <div>
    <div>学生信息</div>
    <ul>
      <li v-for="(stu, index) in students" :key="index">
        {{ index }},{{ stu.user.name }}
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
