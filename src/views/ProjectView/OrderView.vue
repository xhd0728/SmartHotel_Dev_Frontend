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
                    <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
                </div>
            </el-dialog>
        </div>
        <div>
            <el-table :data="orderData" height="525" border stripe :cell-style="cellStyle"
                style="width: 1200px;margin-top: 30px;margin-left: 20px;">
                <el-table-column prop="name" label="姓名" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="gender" label="性别" min-width="20" header-align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" min-width="20" header-align="center"></el-table-column>
                <el-table-column prop="phone_num" label="手机" min-width="45" header-align="center"></el-table-column>
                <el-table-column prop="level" label="等级" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="floor" label="楼层" min-width="20" header-align="center"></el-table-column>
                <el-table-column prop="room_id" label="房间号" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="space" label="几人间" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="value" label="原价" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="pay" label="实付款" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="create_time" label="预定时间" min-width="40" header-align="center"></el-table-column>
                <el-table-column prop="opt" label="操作" min-width="40" header-align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" circle
                            @click="optEditDialog(scope.row)"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="open"></el-button>
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
                    <el-button type="primary" @click="dialogFormVisible1 = false">确定</el-button>
                </div>
            </el-dialog>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            orderData: [
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    level: '普通会员',
                    floor: '1',
                    room_id: '101',
                    space: '2',
                    value: '100.00',
                    pay: '120.00',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    level: '普通会员',
                    floor: '1',
                    room_id: '102',
                    space: '1',
                    value: '100.00',
                    pay: '120.00',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    level: '普通会员',
                    floor: '1',
                    room_id: '103',
                    space: '1',
                    value: '100.00',
                    pay: '120.00',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    level: '普通会员',
                    floor: '1',
                    room_id: '104',
                    space: '1',
                    value: '100.00',
                    pay: '120.00',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    level: '普通会员',
                    floor: '2',
                    room_id: '201',
                    space: '3',
                    value: '100.00',
                    pay: '120.00',
                    create_time: '2022年6月1日',
                },
            ],
            dialogFormVisible: false,
            dialogFormVisible1: false,
            form: {
                phone_num: '',
                room_id: '',
                value: '',
                pay: '',
            },
            form1: {
                phone_num: '',
                room_id: '',
                value: '',
                pay: '',
            },
            formLabelWidth: '100px'
        }
    },
    methods: {
        cellStyle() {
            return "text-align:center"
        },
        x_refresh() {
            location.reload()
        },
        open() {
            this.$confirm('是否确认删除该订单？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    });
                })
                .catch(action => {
                    this.$message({
                        type: 'info',
                        message: '取消'
                    })
                });
        },
        optEditDialog(row) {
            this.form1.phone_num = row.phone_num
            this.form1.room_id = row.room_id
            this.form1.value = row.value
            this.form1.pay = row.pay
            this.dialogFormVisible1 = true
        }
    }
}
</script>

<style>

</style>