<template>
  <div id="app">
    <el-header>
      <div style="height:20px;display: flex;justify-content: space-between;">
        <div style="font-size:20px;width: 800px;">
          SmartHotel | 智慧酒店系统 | 哈尔滨工程大学 信息系统课程设计实践作业
        </div>
        <div style="font-size:20px;margin-left: 100px;">
          <el-dropdown>
            <span style="text-align:right">logined user: xhd0728</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="gotoPersonView">个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="gotoProjectView">关于</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '2', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-s-promotion"></i>首页</template>
            <el-menu-item index="1-1" @click="gotoMainView">仪表盘</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
            <el-menu-item index="2-1" @click="gotoRoomView">房间管理</el-menu-item>
            <el-menu-item index="2-2" @click="gotoCustomerView">顾客管理</el-menu-item>
            <el-menu-item index="2-3" @click="gotoOrderView">订单管理</el-menu-item>
            <el-menu-item index="2-4" @click="gotoCommentView">评价管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>项目信息</template>
            <el-menu-item index="3-1" @click="gotoAuthorView">作者信息</el-menu-item>
            <el-menu-item index="3-2" @click="gotoTechView">技术栈</el-menu-item>
            <el-menu-item index="3-3" @click="gotoDatabaseView">数据库结构</el-menu-item>
            <el-menu-item index="3-4" @click="gotoProjectView">项目简介</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-header {
  background-color: #87afe4;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name: 'App',
  data() {

  },
  mounted() {

  },
  methods: {
    gotoMainView() {
      this.$router.push('/main')
    },
    gotoCommentView() {
      this.$router.push('/comment')
    },
    gotoCustomerView() {
      this.$router.push('/customer')
    },
    gotoOrderView() {
      this.$router.push('/order')
    },
    gotoRoomView() {
      this.$router.push('/room')
    },
    gotoAuthorView() {
      this.$router.push('/author')
    },
    gotoDatabaseView() {
      this.$router.push('/database')
    },
    gotoProjectView() {
      this.$router.push('/project')
    },
    gotoTechView() {
      this.$router.push('/tech')
    },
    gotoPersonView() {
      this.$router.push('/person')
    }
  }
}
</script>
