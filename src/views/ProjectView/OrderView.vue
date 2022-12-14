<template>
    <div>
        <div style="margin-top:20px;margin-left:20px;width: 800px;display: flex;align-items: baseline;">
            <el-button type="primary" round @click="dialogFormVisible = true">新建订单</el-button>
            <el-button type="info" icon="el-icon-refresh" circle @click="x_refresh"></el-button>
            <el-dialog title="新建订单" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="手机" :label-width="formLabelWidth">
                        <el-input v-model="form.phone_num" autocomplete="off" size="mini"
                            style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item label="房间号" :label-width="formLabelWidth">
                        <el-input v-model="form.room_id" autocomplete="off" size="mini" style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item label="实付款" :label-width="formLabelWidth">
                        <el-input v-model="form.pay" autocomplete="off" size="mini" style="width:200px"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="addOrder">确定</el-button>
                </div>
            </el-dialog>
        </div>
        <div>
            <el-table :data="orderData" height="525" border stripe :cell-style="cellStyle"
                style="width: 1200px;margin-top: 30px;margin-left: 20px;">
                <el-table-column prop="oid" label="订单号" min-width="20" header-align="center"></el-table-column>
                <el-table-column prop="customer.name" label="姓名" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="customer.gender" label="性别" min-width="20"
                    header-align="center"></el-table-column>
                <el-table-column prop="customer.age" label="年龄" min-width="20" header-align="center"></el-table-column>
                <el-table-column prop="customer.phone_num" label="手机" min-width="45"
                    header-align="center"></el-table-column>
                <el-table-column prop="customer.level.name" label="等级" min-width="30"
                    header-align="center"></el-table-column>
                <el-table-column prop="room.floor.name" label="楼层" min-width="20"
                    header-align="center"></el-table-column>
                <el-table-column prop="room.room_id" label="房间号" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="room.space" label="几人间" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="room.value" label="原价" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="pay" label="实付款" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="create_time" label="预定时间" min-width="40" header-align="center"></el-table-column>
                <el-table-column prop="opt" label="操作" min-width="40" header-align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" circle
                            @click="optEditDialog(scope.row)"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="open(scope.row)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="修改订单" :visible.sync="dialogFormVisible1">
                <el-form :model="form">
                    <el-form-item label="手机" :label-width="formLabelWidth">
                        <el-input v-model="form1.phone_num" autocomplete="off" size="mini"
                            style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item label="房间号" :label-width="formLabelWidth">
                        <el-input v-model="form1.room_id" autocomplete="off" size="mini" style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item label="原价" :label-width="formLabelWidth">
                        <el-input v-model="form1.value" autocomplete="off" size="mini" style="width:200px"
                            :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="实付款" :label-width="formLabelWidth">
                        <el-input v-model="form1.pay" autocomplete="off" size="mini" style="width:200px"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取消</el-button>
                    <el-button type="primary" @click="modifyOrder">确定</el-button>
                </div>
            </el-dialog>
        </div>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            orderData: [],
            dialogFormVisible: false,
            dialogFormVisible1: false,
            form: {
                phone_num: '',
                room_id: '',
                pay: '',
            },
            form1: {
                phone_num: '',
                room_id: '',
                value: '',
                pay: '',
                oid: ''
            },
            formLabelWidth: '100px'
        }
    },
    mounted() {
        this.getOrderData()
    },
    methods: {
        cellStyle() {
            return "text-align:center"
        },
        x_refresh() {
            location.reload()
        },
        open(row) {
            this.$confirm('是否确认删除该订单？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios.request({
                    method: 'DELETE',
                    url: 'api/order/order',
                    data: {
                        oid: row.oid
                    }
                }).then((res) => {
                    this.$message({
                        message: res.data.detail,
                        type: 'success'
                    })
                })
            }).catch(action => {
                this.$message({
                    type: 'info',
                    message: '取消'
                })
            });
        },
        optEditDialog(row) {
            this.form1.phone_num = row.customer.phone_num
            this.form1.room_id = row.room.room_id
            this.form1.value = row.room.value
            this.form1.pay = row.pay
            this.form1.oid = row.oid
            this.dialogFormVisible1 = true
        },
        getOrderData() {
            axios.request({
                method: 'GET',
                url: 'api/order/orders',
            }).then((res) => {
                this.orderData = res.data
            })
        },
        addOrder() {
            axios.request({
                method: 'POST',
                url: 'api/order/order',
                data: {
                    phone_num: this.form.phone_num,
                    room_id: this.form.room_id,
                    pay: this.form.pay
                }
            }).then((res) => {
                this.dialogFormVisible = false
                this.$message({
                    message: res.data.detail,
                    type: 'success'
                })
            })
        },
        modifyOrder() {
            axios.request({
                method: 'POST',
                url: 'api/order/order',
                data: {
                    oid: this.form1.oid,
                    phone_num: this.form1.phone_num,
                    room_id: this.form1.room_id,
                    pay: this.form1.pay
                }
            }).then((res) => {
                this.dialogFormVisible1 = false
                this.$message({
                    message: res.data.detail,
                    type: 'success'
                })
            })
        }
    }
}
</script>

<style>

</style>