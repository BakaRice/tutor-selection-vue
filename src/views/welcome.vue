<template>
  <div>
    <h1>teacher-welcome</h1>
    <p v-if="user">欢迎你，{{ user.name }}老师！</p>
    <ul></ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {},
  computed: {
    ...mapState(["user"])
  }
};
</script>
