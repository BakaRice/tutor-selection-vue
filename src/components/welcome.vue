<template>
  <div class="header">
    <div class="logo" :style="bgImg">
      <a><img src="@/assets/logo.png"/></a>
    </div>
    <div class="logo-r">
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
</template>

<script>
//登录前的欢迎页面，纯页面，无关于登录逻辑
import bg from "@/assets/logo-bg.png";
import bg1 from "@/assets/login_container_bg_03b.jpg";
import bg2 from "@/assets/login_container_bg_05b.jpg";
import bg3 from "@/assets/login_container_bg_01b.jpg";

export default {
  data: () => ({
    bgImg: { backgroundImage: "url(" + bg + ") " },
    pic: [
      { backgroundImage: "url(" + bg2 + ") " },
      { backgroundImage: "url(" + bg1 + ") " },
      { backgroundImage: "url(" + bg3 + ") " }
    ]
  })
};
</script>
