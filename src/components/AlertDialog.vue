<template>
  <div>
    <el-alert
      v-if="this.exp.message"
      title="用户名或密码错误"
      type="error"
      show-icon
    >
    </el-alert>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  watch: {
    exp() {
      // alert(`${this.exp.message}`);
    }
  },
  computed: {
    ...mapState({ exp: state => state.exception })
  }
};
</script>
