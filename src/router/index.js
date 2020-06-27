import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/login",
  //   component: () => import("@/components/login.vue")
  // },
  {
    path: "/index",
    component: () => import("@/views/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

// 以上为没有角色要求的默认路由
// --------------------------
// 后期追加的路由配置
let adminRoutes = [
  {
    path: "/selfInfo",
    component: () => import("@/views/teacher/info.vue")
  },
  {
    path: "/teacher/students",
    component: () => import("@/views/teacher/students.vue")
  },
  {
    path: "/teacher/students/add",
    component: () => import("@/views/teacher/studentAdd.vue")
  },
  {
    path: "/teacher/courses",
    component: () => import("@/views/teacher/course.vue")
  }
];

let studentsRoutes = [
  {
    path: "/students/teachers",
    component: () => import("@/views/student/teachers.vue")
  }
];
// 必须与后端提前约定。按角色，动态加载路由信息
// 使其他角色即使知道路由路径，也无法加载对应的组件
export const TEACHER_ROLE = "fbf89a7c09ff46b4";
export const STUDENT_ROLE = "14f6e82780a749d7";

// 暴露该方法。登录后，有vuex调用，通知更新路由信息
export function updateRoutes() {
  switch (sessionStorage.getItem("role")) {
    case TEACHER_ROLE:
      console.log(adminRoutes);
      router.addRoutes(adminRoutes);
      break;
    case STUDENT_ROLE:
      console.log(studentsRoutes);
      router.addRoutes(studentsRoutes);
      // student的路由
      break;
  }
}
// 再此文件模块加载时，也执行。用户登陆后刷新页面时，按sessionstorage中数据初始化
// 没有找到sessionstorage的监听事件
updateRoutes();
