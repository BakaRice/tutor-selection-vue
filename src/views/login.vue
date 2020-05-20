<template>
  <div>
    <alertdialog />
    <h1>用户登录</h1>
    <p>初次登录时，密码与用户名相同</p>
    <form ref="form">
      <label>用户名</label>
      <input type="text" v-model="number" />
      <br />
      <label>密码</label>
      <input type="password" v-model="password" />
      <br />
      <button @click="login" type="button">登录</button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/type.js";
export default {
  components: {
    alertdialog: () => import("@/components/AlertDialog.vue")
  },
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

<style scoped></style>
