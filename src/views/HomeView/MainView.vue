<template>
  <div>
    <el-container>
      <div>
        <el-row type="flex">
          <el-col>
            <div>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>入住情况</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="gotoRoomView">房间管理</el-button>
                </div>
                <div style="display:flex">
                  <div style="margin-left:20px">
                    <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
                    <div style="text-align:center">入住情况</div>
                  </div>
                  <div style="text-align:center;width:200px;margin-left: 10px;vertical-align: middle;">
                    <div style="margin-top:40px;margin-bottom:10px">入住: 200 间</div>
                    <div style="margin-top:10px;margin-bottom:10px">空闲: 300 间</div>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col>
            <div>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>收入情况</span>
                  <el-button style="float: right; padding: 3px 0" type="text">订单管理</el-button>
                </div>
                <div style="font-size:20px;margin-top: 20px;margin-left: 20px;">
                  <div><i class="el-icon-s-data"></i> 今日营收: 328.00</div>
                  <div style="margin-top:10px"><i class="el-icon-s-data"></i> 年度营收: 648.00</div>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col>
            <div>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>排班情况</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="x_refresh">刷新</el-button>
                </div>
                <div style="font-size:20px;margin-top: 20px;margin-left: 20px;">
                  <div>今日值班: xhd0728</div>
                  <div style="margin-top:10px">员工总数: 50</div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col>
            <div>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>快捷功能</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="x_refresh">刷新</el-button>
                </div>
                <div>
                  <div style="margin-left:20px;margin-top:20px;">
                    <el-button type="success" plain>办理入住</el-button>
                    <el-button type="warning" plain>办理退房</el-button>
                    <el-button type="primary" plain @click="gotoRoomView">房间管理</el-button>
                  </div>
                  <div style="margin-left:20px;margin-top:20px;">
                    <el-button type="primary" plain @click="gotoOrderView">订单管理</el-button>
                    <el-button type="primary" plain @click="gotoCustomerView">顾客管理</el-button>
                    <el-button type="primary" plain @click="gotoCommentView">评价管理</el-button>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-container>
  </div>

</template>

<script>

export default {
  data() {
    return {
      percentage: 35,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
    gotoRoomView() {
      this.$router.push('/room')
    },
    gotoOrderView() {
      this.$router.push('/order')
    },
    gotoCustomerView() {
      this.$router.push('/customer')
    },
    gotoCommentView() {
      this.$router.push('/comment')
    },
    x_refresh() {
      location.reload()
    },
  }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;

  /* &:last-child {
    margin-bottom: 0;
  } */
}

.el-col {
  border-radius: 4px;
}


.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-card {
  width: 400px;
  height: 250px;
  padding: 10px 0;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: -10px;
}
</style>