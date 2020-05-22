<template>
  <div></div>
</template>
<script>
import { mapState } from "vuex";
export default {
  methods: {
    openVn(v) {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", { style: "color: #F56C6C" }, "ERROR "),
          h("i", { style: "color: teal" }, v)
        ])
      });
    }
  },
  watch: {
    exp() {
      // alert(`${this.exp.message}`);
      this.openVn(this.exp.message);
    }
  },
  computed: {
    ...mapState({ exp: state => state.exception })
  }
};
</script>
