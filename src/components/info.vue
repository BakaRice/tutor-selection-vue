<template>
  <div class="info">
    <span class="info-title">
      <h2>个人信息</h2>
    </span>
    <div style="display:flex">
      <img src="../assets/img/info/bg-info.png" />
      <form class="infoForm" ref="form">
        <div class="infoFromCell">
          <span>姓名</span>
          <el-input v-model="name" placeholder="姓名，请输入内容"></el-input>
        </div>
        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>自我介绍</span>
          <el-input
            type="textarea"
            placeholder="自我介绍，请输入内容"
            v-model="introduction"
            maxlength="100"
            show-word-limit
          >
          </el-input>
        </div>
        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>最大指导数</span>
          <el-input v-model="ranges" placeholder="最大指导学生数量"></el-input>
        </div>

        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>当前指导数</span>
          <el-input
            disabled=""
            v-model="teacher.optional_num"
            placeholder="当前指导学生数量"
          ></el-input>
        </div>
        <div style="margin: 20px 0;"></div>
        <el-button type="primary" @click="updateInfo">修改信息</el-button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { TEACHER } from "@/store/type.js";
import { UPDATE_TEACHER } from "@/store/type.js";
export default {
  data() {
    return {
      // iuser: {
      //   name: this.$store.state.user.name,
      //   ranges: this.$store.state.teacher.ranges,
      //   optional_num: this.$store.state.teacher.optional_num,
      //   introduction: this.$store.state.teacher.introduction
      // }
    };
  },
  created() {
    this.$store.dispatch(TEACHER);
  },
  methods: {
    updateInfo() {
      console.log("updateInfo!");
      this.$store.dispatch(UPDATE_TEACHER, {
        introduction: this.$store.state.teacher.introduction,
        ranges: this.$store.state.teacher.ranges,
        user: {
          name: this.$store.state.user.name
        }
      });
    }
  },
  computed: {
    ...mapState(["teacher"]),
    ranges: {
      get() {
        return this.$store.state.teacher.ranges;
      },
      set(value) {
        console.log(this.$store.state.teacher.ranges);
        this.$store.commit("ranges", value);
      }
    },
    introduction: {
      get() {
        return this.$store.state.teacher.introduction;
      },
      set(value) {
        console.log(this.$store.state.teacher.introduction);
        this.$store.commit("introduction", value);
      }
    },
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        console.log(this.$store.state.user.name);
        this.$store.commit("name", value);
      }
    }
  }
};
</script>
<style scoped>
.info img {
  width: 300px;
}
.info-title {
  padding-left: 20px;
  border-left: 6px solid #096c36;
  display: block;
  margin: 17px 0;
  height: 22px;
  line-height: 22px;
}
.info-title h2 {
  font-size: 20px;
  color: #096c36;
}
.infoForm {
  /* 撑满可用空间 */
  margin: 0 10px;
  width: -webkit-fill-available;
}
.infoForm .infoFromCell > span {
  color: #096c36;
  font-size: 18px;
}
</style>
