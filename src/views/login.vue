<template>
  <div class="input">
    <div class="inputLabel">
      <h1>用户登录</h1>
      <p>初次登录时，密码与用户名相同</p>
      <form ref="form">
        <label>用户名</label>
        <el-input type="text" placeholder="请输入学/工号" v-model="number" />
        <br />
        <label>密码</label>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
        <br />
        <el-button @click="login" type="button">登录</el-button>
      </form>
    </div>
    <div class="inputInfo">
      <h1>说明</h1>
      <p>
        实现毕业设计双向选择 教师：
        登录；导入多门课程成绩单excel表格(前端js实现)
      </p>
      <p>为课程设置最低分数/权重；保密算法 设置实际指导学生数</p>
      <p>
        设置加权后，有资格学生数量范围 查看当前已接收学生 各参数均可修改 学生：
      </p>
      <p>输入学号；载入曾经选修的课程 提交，提醒确认</p>
      <p>
        匹配，返回成功说明，更新数据；不匹配，返回友好失败提醒信息
      </p>
      <p>达到最大数后，关闭提交，显式友好提醒信息 后台并发判断</p>
    </div>
  </div>
</template>

<script>
import { LOGIN } from "@/store/type.js";
export default {
  components: {},
  data: () => ({
    number: null,
    password: null
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password
      });
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.input {
  display: flex;
  justify-content: space-evenly;
}
.inputLabel {
  width: 300px;
  margin: 5px 0;
}
.inputLabel .el-input {
  margin: 5px 0 0 0;
}
.inputLabel .el-button {
  margin: 5px 0 0 0;
}
</style>
