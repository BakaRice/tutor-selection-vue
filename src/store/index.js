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
  courses: [{ id: null, name: null, lowset_socre: 0, credit: 0 }],
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
