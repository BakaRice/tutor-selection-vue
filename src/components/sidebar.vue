<template>
  <aside>
    <div class="list-left">
      <span class="yj-lm">导师互选系统</span>
      <div class="sideMenu">
        <h3 @click="index = 1" :class="{ on: index == 1 }">
          <router-link id="cell" to="/selfInfo" title="个人信息">
            个人信息
          </router-link>
        </h3>
        <h3 @click="index = 2" :class="{ on: index == 2 }">
          <router-link id="cell" to="/teacher/students" title="学生信息">
            学生信息
          </router-link>
        </h3>
        <h3 @click="index = 3" :class="{ on: index == 3 }">
          <router-link id="cell" to="/welcome" title="登录欢迎">
            登录欢迎
          </router-link>
        </h3>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    index: 0
  }),
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.list-left {
  width: 240px;
  padding-bottom: 40px;
  background: #ebebeb;
}
.yj-lm {
  display: block;
  width: 240px;
  height: 70px;
  background: #00785a;
  font-size: 26px;
  color: #fff;
  line-height: 70px;
  text-align: center;
  font-weight: bold;
}
.sideMenu {
  margin-top: 5px !important;
}
.sideMenu h3 {
  height: 57px;
  line-height: 57px;
  padding-left: 20px;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #b3b3b3;
  background: url(../assets/list-nav-l.png) no-repeat 220px center;
}
.sideMenu h3.on {
  background: #fff url(../assets/list-nav-l-h.png) no-repeat 217px center;
  border: 0;
  border-left: 3px solid #be9b60;
  font-weight: bold;
  box-sizing: border-box;
  margin-top: -1px;
}
.sideMenu h3:hover {
  transition: 0.2s;
  color: #00785a;
  background: #fff url(../assets/list-nav-l-h.png) no-repeat 217px center;
  border: 0;
  border-left: 3px solid #be9b60;
  font-weight: bold;
  box-sizing: border-box;
  margin-top: -1px;
}
.sideMenu h3 > #cell {
  font-size: 16px;
  height: 57px;
  display: block;
  width: 84%;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: black;
}
.sideMenu h3 > #cell:hover {
  transition: 0.2s;
  color: #00785a;
  font-weight: bold;
}
</style>
