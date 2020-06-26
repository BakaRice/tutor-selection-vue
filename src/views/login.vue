<template>
  <div class="input">
    <div class="inputLabel">
      <el-button
        icon="el-icon-user-solid"
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px;z-index:3"
      >
        登录系统
      </el-button>

      <el-drawer
        v-loading="loading"
        title="我是标题"
        :append-to-body="true"
        :visible.sync="drawer"
        :with-header="false"
        size="50%"
        class="login-drawer"
      >
        <div>
          <h1>账号登录</h1>
          <form ref="form">
            <div>
              <label>* 账号</label>
              <el-input
                type="text"
                placeholder="请输入学/工号"
                v-model.number="number"
              />
            </div>
            <div>
              <label>* 密码</label>
              <el-input
                placeholder="请输入密码"
                v-model="password"
                show-password
              ></el-input>
            </div>

            <el-button type="primary" @click="login">登录</el-button>
          </form>
          <div class="inputInfo">
            <h1>使用说明</h1>
            <p>
              初次登录时，账号与密码相同； 实现毕业设计双向选择 教师：
              登录；导入多门课程成绩单excel表格(前端js实现)
            </p>
            <p>为课程设置最低分数/权重；保密算法 设置实际指导学生数</p>
            <p>
              设置加权后，有资格学生数量范围 查看当前已接收学生 各参数均可修改
              学生：
            </p>
            <p>输入学号；载入曾经选修的课程 提交，提醒确认</p>
            <p>
              匹配，返回成功说明，更新数据；不匹配，返回友好失败提醒信息
            </p>
            <p>达到最大数后，关闭提交，显式友好提醒信息 后台并发判断</p>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { LOGIN } from "@/store/type.js";
export default {
  components: {},
  data: () => ({
    loading: false,
    drawer: false,
    number: null,
    password: null
  }),
  methods: {
    async login() {
      if (this.number != null && this.password != null) {
        console.log(typeof this.number);

        this.$store
          .dispatch(LOGIN, {
            number: this.number,
            password: this.password
          })
          .then(res => {
            console.log("success login");
          })
          .catch(err => {
            console.log("bad login");
            this.$data.loading = false;
          });
        this.$data.loading = true;
        this.$refs.form.reset();
      } else {
        this.$message.error("账户或密码不能为空");
      }
    }
  }
};
</script>

<style scoped>
* {
  /* z-index: 3; */
}
.input {
  /* display: flex;
  justify-content: space-evenly; */
  position: fixed;
  right: 5%;
  top: 40%;
}
.inputLabel {
  margin: 5px 0;
}
.inputLabel .el-input {
  margin: 5px 0 0 0;
}
.inputLabel .el-button {
  margin: 5px 0 0 0;
}
.login-drawer * {
  padding: 10px;
}
</style>
