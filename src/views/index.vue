<template>
  <div>
    <el-container>
      <el-header class="afterheader">
        <!-- 登录后系统首页 -->
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
  components: {
    sidebar: () => import("@/components/sidebar.vue")
  },
  computed: {
    ...mapState(["user"])
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
