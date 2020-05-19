<template>
  <div>
    <el-container>
      <el-header>
        <h1>登录后系统首页 index</h1>
        <p>基于sessionstorage中数据判断用户登陆状态，登录后加载此组件。</p>
      </el-header>
      <el-container>
        <el-aside width="250px">
          Aside
          <sidebar />
        </el-aside>
        <el-main>
          <h1>Main</h1>

          <p>教师：需要显示教师个人信息、教师所指导学生</p>
          <p>学生：需要显示学生个人信息、学生的导师</p>

          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TEACHER } from "@/store/type.js";
export default {
  created() {
    this.$store.dispatch(TEACHER);
  },
  components: {
    sidebar: () => import("@/components/sidebar.vue")
  },
  computed: {
    ...mapState(["user"]),
    ...mapState(["teacher"])
  }
};
</script>
