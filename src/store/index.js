import Vue from "vue";
import Vuex from "vuex";
import * as types from "./type";
import axios from "@/axios/MyAxios";
import { updateRoutes } from "@/router/index";
import { author } from "@/util/Const";

Vue.use(Vuex);

const myState = {
  exception: { message: null },
  isLogin: false,
  user: { name: "", number: 0 },
  teacher: { introduction: null, optional_num: 0, ranges: 0 },
  courses: [
    { id: null, name: null, lowset_socre: null, credit: null, weight: null }
  ],
  students: [{ id: null, name: null }]
};

const myMutations = {
  [types.GET_EXCEPTION](state, data) {
    state.exception = data;
  },
  [types.LOGIN](state, data) {
    state.isLogin = data;
  },
  [types.GET_USER](state, user) {
    state.user = user;
  },
  [types.GET_STUDENTS](state, students) {
    state.students = students.data;
  },
  [types.TEACHER](state, teahcer) {
    state.teacher.introduction = teahcer.introduction;
    state.teacher.optional_num = teahcer.optional_num;
    state.teacher.ranges = teahcer.ranges;
    state.user.name = teahcer.user.name;
    state.user.number = teahcer.user.number;
  },
  [types.UPDATE_TEACHER](state, teacher) {
    state.teacher.introduction = teacher.introduction;
    state.teacher.ranges = teacher.ranges;
    state.user.name = teacher.user.name;
  },
  [types.INSERT_COURSE](state, course) {
    state.courses.push(course.data);
  },
  [types.LIST_COURSES](state, courses) {
    state.courses = courses.data;
  },
  [types.REMOVE_COURSE](state, index) {
    // state.courses = state.courses.filter(t => t.id != index);
    // 这里的index是渲染列表的顺序序号
    // splice被vue包裹 会自动重新渲染
    // https://cn.vuejs.org/v2/guide/list.html
    state.courses.splice(index, 1);
  },
  //同步修改 教师ranges
  ranges(state, data) {
    state.teacher.ranges = data;
  },
  //同步修改 教师introduction
  introduction(state, data) {
    state.teacher.introduction = data;
  },
  //同步修改 name
  name(state, data) {
    state.user.name = data;
  },
  courseCredit(state, course) {
    state.courses[course.index].credit = course.data;
  },
  courseName(state, course) {
    state.courses[course.index].name = course.data;
  },
  courselowsetSorce(state, course) {
    state.courses[course.index].lowsetSorce = course.data;
  },
  courseWeight(state, course) {
    state.courses[course.index].weight = course.data;
  }
};

const myActions = {
  // 登录
  async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post("login", data);
    let auth = resp.headers[author];
    console.log("LOGIN");
    console.log(resp);
    if (auth != null) {
      sessionStorage.setItem(author, auth);
      sessionStorage.setItem("role", resp.data.role);
      //将number 记录在state中
      commit("number", data.number);
      updateRoutes();
      commit(types.LOGIN, true);
    }
  },
  async index({ commit }, data) {
    let resp = await axios.get("index");
    console.log(resp.data.user);
    //INDEX 中加载用户的基本信息
    commit(types.GET_USER, resp.data.user);
  },
  //list teahcer information by id
  async [types.TEACHER]({ commit }, data) {
    let resp = await axios.get("teachers/teacher");
    console.log(resp);
    commit(types.TEACHER, resp.data);
  },
  async [types.UPDATE_TEACHER]({ commit }, data) {
    let resp = await axios.post("teachers/teahcer", data);
    console.log(resp);
    commit(types.UPDATE_TEACHER, data);
  },
  async [types.GET_STUDENTS]({ commit }, data) {
    let resp = await axios.get("teachers/students");
    console.log(resp.data);
    commit(types.GET_STUDENTS, resp.data);
  },
  async [types.LIST_COURSES]({ commit }, data) {
    let resp = await axios.get("teachers/courses");
    console.log(resp.data);
    commit(types.LIST_COURSES, resp.data);
  },
  async [types.INSERT_COURSE]({ commit }, data) {
    let resp = await axios.post("teachers/course", data);
    console.log(resp.data);
    commit(types.INSERT_COURSE, resp.data);
  },
  async [types.UPDATE_COURSE]({ commit }, data) {
    console.log(this.state.courses[data]);
    let resp1 = await axios.patch(
      "teachers/courses/info",
      this.state.courses[data]
    );
    let resp2 = await axios.patch(
      "teachers/courses/setting",
      this.state.courses[data]
    );
    console.log("resp1");
    console.log(resp1);
    console.log("resp2");
    console.log(resp2);
  },
  async [types.REMOVE_COURSE]({ commit }, data) {
    console.log(data);
    let resp = await axios.delete(
      `teachers/courses/${this.state.courses[data].id}`
    );
    console.log(resp);
    commit(types.REMOVE_COURSE, data);
  }
};
export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});

// --------------------------
// 执行时判断，刷新时检测；也可以添加长度等更严格判断
if (sessionStorage.getItem(author) != null) {
  myState.isLogin = true;
}
