<template>
  <div style="width:75%">
    <div style="margin-top:20px;margin-left: 30px;font-size: x-large;">
      项目简介
    </div>
    <el-divider></el-divider>
    <div style="margin-left:30px">
      <p style="line-height:30px">
        本数据库管理系统开发的目的是便于酒店经营者管理酒店的各项事务，
        <br>
        对于顾客，房间，账单，入住评价等数据实体都实现了复杂查询功能，并且设置了分级管理权限，不同的管理层有不同的管理权限，
        <br>
        同时采用安全度和性能较高的session和redis进行持久化登录管理；
        <br>
        顾客实体和酒店房间实体是本数据库系统的核心部分，可对每个房间和每个顾客的信息进行关联管理；
        <br>
        此外，本数据库系统采用了前后端分离的开发模式，使用nginx和caddy等反向代理服务，性能高消耗低，防止跨域问题以及数据截获造成客人重要信息泄漏，
        <br>
        还支持使用dockerfile进行CI/CD一键部署，方便使用和备份。
      </p>
    </div>
    <el-divider></el-divider>
    <div style="margin-left:30px">
      <p style="line-height:30px">
        设置了不同级别的管理员，采用redis和token的方式进行验证；
        <br>
        酒店状态仪表盘，能够清晰简明的展示酒店的状态；
        <br>
        酒店房间管理，可以实现对不同类型房间的筛选；
        <br>
        顾客管理，可以创建顾客，修改顾客信息，通过手机号搜索顾客；
        <br>
        订单管理，增加订单，修改订单和删除订单；
        <br>
        评价管理，增加评价，修改评价和删除评价，可以一键滑动选择评价；
        <br>
        项目信息，作者信息，各个模块的增删改查，以及Django ORM实现的触发器操作和serializer序列化器；
        <br>
        DockerFile自动部署，通过docker-compose一键拉取镜像并映射网络端口。
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>