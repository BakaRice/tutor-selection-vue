<template>
  <div>
    <alertdialog />
    <div v-if="!isLogin" class="header">
      <div class="logo" :style="bgImg">
        <a><img src="@/assets/logo.png"/></a>
      </div>
      <div class="logo-r">
        <img src="@/assets/logo-bg-img.jpg" />
      </div>
    </div>
    <!-- <div v-if="isLogin" class="fixed-bg"></div> -->
    <div>
      <index v-if="isLogin" />
      <login v-else />
    </div>
  </div>
</template>

<script>
import bg from "@/assets/logo-bg.png";
// import { LOGIN } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  components: {
    login: () => import("@/views/login.vue"),
    index: () => import("@/views/index.vue"),
    alertdialog: () => import("@/components/AlertDialog.vue")
  },
  computed: {
    ...mapState(["isLogin"])
  },
  data: () => ({
    bgImg: { backgroundImage: "url(" + bg + ") " }
  })
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
.header {
  position: relative;
  height: 470px;
}
.header .logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 998.5px;
  height: 470px;
  z-index: 2;
  background-size: 100%;
}
.header .logo a {
  display: inline-block;
  margin-top: 105px;
  margin-left: 300px;
}
.header .logo-r {
  float: right;
  position: absolute;
  right: 0px;
}
.header .logo-r img {
  height: 470px;
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
</style>
