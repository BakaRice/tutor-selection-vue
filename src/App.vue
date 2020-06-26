<template>
  <div>
    <alertdialog />
    <div v-if="!isLogin" class="header">
      <div class="logo" :style="bgImg">
        <a><img src="@/assets/logo.png"/></a>
      </div>
      <div class="logo-r">
        <!-- <img src="@/assets/logo-bg-img.jpg" /> -->
        <el-carousel
          height="100%"
          direction="vertical"
          :autoplay="true"
          :interval="5000"
        >
          <el-carousel-item
            height="100%"
            v-for="(item, index) in pic"
            :key="index"
          >
            <h3 class="medium" :style="item">
              {{ item }}
            </h3>
          </el-carousel-item>
        </el-carousel>
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
import bg1 from "@/assets/login_container_bg_03b.jpg";
import bg2 from "@/assets/login_container_bg_05b.jpg";
import bg3 from "@/assets/login_container_bg_01b.jpg";
// import { LOGIN } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  data: () => ({
    bgImg: { backgroundImage: "url(" + bg + ") " },
    pic: [
      { backgroundImage: "url(" + bg1 + ") " },
      { backgroundImage: "url(" + bg2 + ") " },
      { backgroundImage: "url(" + bg3 + ") " }
    ]
  }),
  components: {
    login: () => import("@/views/login.vue"),
    index: () => import("@/views/index.vue"),
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
