<template>
  <div>
    <h1>个人信息</h1>
    <p v-if="user">
      账号：{{ user.number }}<br />
      用户名：{{ user.name }}<br />
      自我介绍：{{ teacher.introduction }}
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { TEACHER } from "@/store/type.js";
export default {
  created() {
    this.$store.dispatch(TEACHER);
  },
  computed: {
    ...mapState(["user"]),
    ...mapState(["teacher"])
  }
};
</script>
