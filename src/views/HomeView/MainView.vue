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
                  <div style="text-align:left;width:200px;margin-left: 50px;vertical-align: middle;">
                    <div style="margin-top:40px;margin-bottom:10px"><i class="el-icon-s-home"></i>入住: {{ total_room -
                        free_room
                    }} 间</div>
                    <div style="margin-top:10px;margin-bottom:10px"><i class="el-icon-s-home"></i>空闲: {{ free_room }} 间
                    </div>
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
                  <div><i class="el-icon-s-data"></i> 年度营收: {{ income_total.toFixed(2) }} 元</div>
                  <div style="margin-top:10px"><i class="el-icon-s-data"></i> 订单总数: {{ order_total }}</div>
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
                  <span>注册情况</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="x_refresh">刷新</el-button>
                </div>
                <div style="font-size:20px;margin-top: 20px;margin-left: 20px;">
                  <div><i class="el-icon-user"></i>会员总数: {{ customer_total }}</div>
                  <div style="display:flex">
                    <div style="margin-top:10px"><i class="el-icon-sugar"></i>好评: {{ comment_good }}</div>
                    <div style="margin-top:10px;margin-left:20px"><i class="el-icon-sugar"></i>中评: {{ comment_medium }}
                    </div>
                    <div style="margin-top:10px;margin-left: 20px;"><i class="el-icon-sugar"></i>差评: {{ comment_bad }}
                    </div>
                  </div>
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
                    <el-button type="success" plain @click="gotoReservationView">办理入住</el-button>
                    <el-button type="warning" plain @click="gotoCheckoutView">办理退房</el-button>
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
import axios from 'axios';
export default {
  data() {
    return {
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      free_room: '10',
      total_room: '100',
      percentage: '30',
      customer_total: '100',
      comment_good: '20',
      comment_medium: '15',
      comment_bad: '5',
      income_total: '648.00',
      order_total: '10',
    };
  },
  mounted() {
    this.getRoomStatus()
    this.getOrderStatus()
    this.getCustomerStatus()
    this.getCommentStatus()
  },
  methods: {
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
    gotoReservationView() {
      this.$router.push('/reservation')
    },
    gotoCheckoutView() {
      this.$router.push('/checkout')
    },
    getRoomStatus() {
      axios.request({
        method: 'GET',
        url: 'api/room/status',
      }).then((res) => {
        this.free_room = res.data.free_room
        this.total_room = res.data.total_room
        this.percentage = ((this.total_room - this.free_room) / this.total_room * 100).toFixed(2)
      })
    },
    getOrderStatus() {
      axios.request({
        method: 'GET',
        url: 'api/order/status'
      }).then((res) => {
        this.order_total = res.data.order_total
        this.income_total = res.data.income_total
      })
    },
    getCustomerStatus() {
      axios.request({
        method: 'GET',
        url: 'api/customer/status'
      }).then((res) => {
        this.customer_total = res.data.customer_count
      })
    },
    getCommentStatus() {
      axios.request({
        method: 'GET',
        url: 'api/comment/status'
      }).then((res) => {
        this.comment_good = res.data.comment_good
        this.comment_medium = res.data.comment_medium
        this.comment_bad = res.data.comment_bad
      })
    }
  }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
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