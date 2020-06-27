<template>
  <div>
    <alertdialog />
    <welcome v-if="!isLogin" />
    <div>
      <index v-if="isLogin" />
      <login v-else />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    login: () => import("@/components/login.vue"),
    index: () => import("@/views/index.vue"),
    welcome: () => import("@/components/welcome.vue"),
    alertdialog: () => import("@/components/AlertDialog.vue")
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
/* 移动设备时不显示 */
@media (max-width: 1024px) {
  .header {
    display: none;
  }
}
.header {
  height: 100%;
}

.header .logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 2; */
  background-size: 100%;
}
.header .logo a {
  display: inline-block;
  margin-top: 15%;
  margin-left: 15%;
}
.header .logo-r {
  float: right;
  position: absolute;
  right: 0px;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.header .logo-r img {
  height: 470px;
  width: fit-content;
}
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(//s2.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/background.bc725153.png);
  background-size: cover;
  background-position: center;
  z-index: -1;
}
#router {
  width: 80%;
  display: inline-block;
  border: 1px solid darkblue;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  height: 100%;
  margin: 0;
}
.el-carousel {
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
