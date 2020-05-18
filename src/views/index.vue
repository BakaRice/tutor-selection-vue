<template>
  <div>
    <h1>教师登录后系统首页 index</h1>
    <p>需要显示教师个人信息、教师所指导学生</p>
    <p>
      基于sessionstorage中数据判断用户登陆状态，登录后加载此组件。
      <br />
      <router-link to="/welcome">登录时可见</router-link>
      <router-view />
    </p>
    <p v-if="user">
      账号：{{ user.number }}<br />
      用户名：{{ user.name }}<br />
      自我介绍：{{ teacher.introduction }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TEACHER } from "@/store/type.js";
export default {
  created() {
    this.$store.dispatch(TEACHER);
  },
  computed: {
    ...mapState(["user"]),
    ...mapState(["teacher"])
  }
};
</script>
