<template>
  <div>
    <span class="info-title">
      <h2>课程信息</h2>
    </span>
    <!-- edit -->
    <div v-if="isEdit" class="courseEdit">
      <h1>修改{{ courses[editIndex].name }}课程</h1>

      <form class="infoForm" ref="form">
        <div class="infoFromCell">
          <span>课程名</span>
          <el-input
            v-model="editName"
            placeholder="姓名，请输入内容"
          ></el-input>
        </div>
        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>学分</span>
          <el-input v-model="editCredit" placeholder="课程的学分"></el-input>
        </div>

        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>最低分</span>
          <el-input
            v-model="editLowset"
            placeholder="当前课程的最低分要求"
          ></el-input>
        </div>
        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>权重</span>
          <el-input
            v-model="editWeight"
            placeholder="当前课程的权重"
          ></el-input>
        </div>
        <div style="margin: 20px 0;"></div>
      </form>
      <el-button type="primary" plain>
        <input type="file" @change="readFile" />
        添加学生信息
      </el-button>
      <el-button @click="exitEditCourse()">
        提交
      </el-button>
      <!-- <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px;"
      >
        点我打开
      </el-button> -->

      <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <h1>学生成绩预览</h1>
        <el-table :data="students" height="700px" stripe>
          <el-table-column
            property="number"
            label="学号"
            width="150"
          ></el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="100"
          ></el-table-column>
          <el-table-column property="grade" label="成绩"> </el-table-column>
        </el-table>
      </el-drawer>
    </div>
    <!-- add -->
    <div v-else-if="isAdd">
      <h1>新建课程</h1>
      <form class="infoForm" ref="form">
        <div class="infoFromCell">
          <span>课程名</span>
          <el-input
            v-model="newCourse.name"
            placeholder="姓名，请输入内容"
          ></el-input>
        </div>
        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>学分</span>
          <el-input
            v-model="newCourse.credit"
            placeholder="课程的学分"
          ></el-input>
        </div>

        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>最低分</span>
          <el-input
            v-model="newCourse.lowsetSorce"
            placeholder="当前课程的最低分要求"
          ></el-input>
        </div>
        <div class="infoFromCell">
          <div style="margin: 20px 0;"></div>
          <span>权重</span>
          <el-input
            v-model="newCourse.weight"
            placeholder="当前课程的权重"
          ></el-input>
        </div>
        <div style="margin: 20px 0;"></div>
      </form>

      <el-button @click="exitEditCourse()">
        提交
      </el-button>
    </div>
    <!-- list -->
    <div v-else>
      <el-button @click="addCourse">添加新课程</el-button>
      <div v-if="courses" class="courseList">
        <ul class="coursesInfo">
          <li v-for="(cou, index) in courses" :key="cou.id">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{ cou.name }}</span>
                <el-button
                  @click="editCourse(index)"
                  style="float: right; padding: 3px 0"
                  type="text"
                >
                  修改
                </el-button>

                <el-button type="danger" plain @click="removeCourse(index)">
                  删除
                </el-button>
              </div>

              <div>
                <p>No.{{ cou.id }}</p>
                <p>学分:{{ cou.credit }}</p>
                <p>权重:{{ cou.weight }}</p>
                <p>最低分要求：{{ cou.lowsetSorce }}</p>
              </div>
            </el-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { readStudentFile } from "@/util/ExcelUtils.js";
import { LIST_COURSES } from "@/store/type.js";
import { INSERT_COURSE } from "@/store/type.js";
import { UPDATE_COURSE } from "@/store/type.js";
import { REMOVE_COURSE } from "@/store/type.js";
import { ADD_STUDENTS } from "@/store/type.js";
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    isEdit: false,
    isAdd: false,
    editIndex: -1,
    newCourse: {
      credit: null,
      lowsetSorce: null,
      name: null,
      weight: null
    },
    students: []
  }),
  created() {
    this.$store.dispatch(LIST_COURSES);
  },
  computed: {
    ...mapState(["courses"]),
    editCredit: {
      get() {
        return this.$store.state.courses[this.editIndex].credit;
      },
      set(v) {
        this.$store.commit("courseCredit", { data: v, index: this.editIndex });
      }
    },
    editName: {
      get() {
        return this.$store.state.courses[this.editIndex].name;
      },
      set(v) {
        this.$store.commit("courseName", { data: v, index: this.editIndex });
      }
    },
    editLowset: {
      get() {
        return this.$store.state.courses[this.editIndex].lowsetSorce;
      },
      set(v) {
        this.$store.commit("courselowsetSorce", {
          data: v,
          index: this.editIndex
        });
      }
    },
    editWeight: {
      get() {
        console.log(this.$store.state.courses[this.editIndex].weight);
        return this.$store.state.courses[this.editIndex].weight;
      },
      set(v) {
        this.$store.commit("courseWeight", { data: v, index: this.editIndex });
      }
    }
  },
  methods: {
    readFile(event) {
      let file = event.target.files[0];
      readStudentFile(file).then(data => {
        this.students = data;
        console.log(this.students);
        this.$data.drawer = true;
      });
    },
    addCourse() {
      console.log("add");
      this.isAdd = true;
    },
    editCourse(v) {
      console.log("edit" + v);
      this.isEdit = true;
      this.editIndex = v;
    },
    async exitEditCourse() {
      console.log("exitEdit");
      if (this.isEdit) {
        this.isEdit = false;
        await this.$store.dispatch(UPDATE_COURSE, this.editIndex);
        this.$message({
          type: "success",
          message: "课程修改成功!"
        });
      }
      if (this.isAdd) {
        await this.$store.dispatch(INSERT_COURSE, this.newCourse);
        this.$message({
          type: "success",
          message: "课程添加成功!"
        });

        this.isAdd = false;
      }
      if (this.students) {
        await this.$store.dispatch(ADD_STUDENTS, {
          index: this.editIndex,
          students: this.students
        });

        this.$message({
          type: "success",
          message: "学生添加成功!"
        });

        this.isAdd = null;
      }
      this.editIndex = null;
    },
    removeCourse(value) {
      console.log("removeCourse");

      this.$confirm(
        `此操作将永久删除${this.courses[value].name},课程学生信息将清空, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$store.dispatch(REMOVE_COURSE, value).then(res => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style scoped>
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
.box-card {
  width: auto;
}

.coursesInfo li {
  margin: 15px;
  list-style: none;
}
.courseEdit {
}
</style>
