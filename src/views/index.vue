<template>
  <div>
    <el-container>
      <el-header class="afterheader">
        <!-- <h1>登录后系统首页 index</h1>
        <p>基于sessionstorage中数据判断用户登陆状态，登录后加载此组件。</p> -->
        <div class="logo">
          <a href="">
            <img src="@/assets/logo.png" alt="" />
          </a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="280px">
          <sidebar />
        </el-aside>
        <el-main>
          <div class="index-body">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { TEACHER } from "@/store/type.js";
export default {
  created() {
    // this.$store.dispatch(TEACHER);
  },
  components: {
    sidebar: () => import("@/components/sidebar.vue")
  },
  computed: {
    ...mapState(["user"])
    // ...mapState(["teacher"])
  }
};
</script>

<style scoped>
.afterheader {
  height: 130px;
  background: #00785a;
}
.logo {
  line-height: 130px;
}
.logo img {
  height: 130px;
}
</style>
