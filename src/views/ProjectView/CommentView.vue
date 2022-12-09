<template>
    <div>
      <!-- <Header></Header> -->
      <el-container>
        <div style="width:400px;height:400px">
          <el-progress :percentage="50"></el-progress>
          <el-progress :percentage="100" :format="format"></el-progress>
          <el-progress :percentage="100" status="success"></el-progress>
          <el-progress :percentage="100" status="warning"></el-progress>
          <el-progress :percentage="50" status="exception"></el-progress>
        </div>
      </el-container>
    </div>
  </template>
  
  <script>
  
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
    }
  }
  </script>
  
  <style>
  
  </style>