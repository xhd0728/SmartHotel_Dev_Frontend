<template>
    <div>
        <div style="margin-top:20px;margin-left:20px;width: 800px;display: flex;align-items: baseline;">
            <el-button type="success" round @click="dialogFormVisible = true">添加会员</el-button>
            <el-button type="info" icon="el-icon-refresh" circle @click="x_refresh"></el-button>
            <span style="margin-left:20px;width: 90px;">搜索用户: </span>
            <el-input placeholder="姓名或手机号" v-model="input" clearable style="width:200px"></el-input>
            <el-button icon="el-icon-search" circle style="margin-left:20px"></el-button>
            <el-dialog title="添加会员" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off" size="mini" style="width:130px"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" :label-width="formLabelWidth">
                        <el-input-number size="mini" v-model="form.age"></el-input-number>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                        <el-select v-model="form.gender" placeholder="请选择" size="mini" style="width:130px">
                            <el-option label="未指定" value="0"></el-option>
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机" :label-width="formLabelWidth">
                        <el-input v-model="form.phone_num" autocomplete="off" size="mini"
                            style="width:130px"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="form.email" autocomplete="off" size="mini" style="width:130px"></el-input>
                    </el-form-item>
                    <el-form-item label="等级" :label-width="formLabelWidth">
                        <el-select v-model="form.level" placeholder="请选择" size="mini" style="width:130px">
                            <el-option label="普通会员" value="1"></el-option>
                            <el-option label="超级会员" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
                </div>
            </el-dialog>
        </div>
        <div>
            <el-table :data="customerData" height="525" border stripe :cell-style="cellStyle"
                style="width: 1200px;margin-top: 30px;margin-left: 20px;">
                <el-table-column prop="name" label="姓名" min-width="40" header-align="center"></el-table-column>
                <el-table-column prop="gender" label="性别" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" min-width="30" header-align="center"></el-table-column>
                <el-table-column prop="phone_num" label="手机" min-width="50" header-align="center"></el-table-column>
                <el-table-column prop="email" label="邮箱" header-align="center"></el-table-column>
                <el-table-column prop="level" label="等级" min-width="40" header-align="center"></el-table-column>
                <el-table-column prop="last_time" label="上次来访时间" min-width="50" header-align="center"></el-table-column>
                <el-table-column prop="create_time" label="创建时间" min-width="50" header-align="center"></el-table-column>
                <el-table-column prop="opt" label="操作" min-width="40" header-align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" circle
                            @click="optEditDialog(scope.row)"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="open"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="修改会员信息" :visible.sync="dialogFormVisible1">
                <el-form :model="form1">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="form1.name" autocomplete="off" size="mini" style="width:130px"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" :label-width="formLabelWidth">
                        <el-input-number size="mini" v-model="form1.age" style="width:130px"></el-input-number>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                        <el-select v-model="form1.gender" placeholder="请选择" size="mini" style="width:130px">
                            <el-option label="未指定" value="0"></el-option>
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机" :label-width="formLabelWidth">
                        <el-input v-model="form1.phone_num" autocomplete="off" size="mini" style="width:130px"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="form1.email" autocomplete="off" size="mini" style="width:130px"></el-input>
                    </el-form-item>
                    <el-form-item label="等级" :label-width="formLabelWidth">
                        <el-select v-model="form1.level" placeholder="请选择" size="mini" style="width:130px">
                            <el-option label="普通会员" value="1"></el-option>
                            <el-option label="超级会员" value="2"></el-option>
                        </el-select>
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
            customerData: [
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    email: 'xinhaidong0625@foxmail.com',
                    level: '普通会员',
                    last_time: '2022年12月1日',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    email: 'xinhaidong0625@foxmail.com',
                    level: '普通会员',
                    last_time: '2022年12月1日',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    email: 'xinhaidong0625@foxmail.com',
                    level: '普通会员',
                    last_time: '2022年12月1日',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    email: 'xinhaidong0625@foxmail.com',
                    level: '普通会员',
                    last_time: '2022年12月1日',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    email: 'xinhaidong0625@foxmail.com',
                    level: '普通会员',
                    last_time: '2022年12月1日',
                    create_time: '2022年6月1日',
                },
                {
                    name: '辛海东',
                    gender: '男',
                    age: '20',
                    phone_num: '13904585027',
                    email: 'xinhaidong0625@foxmail.com',
                    level: '普通会员',
                    last_time: '2022年12月1日',
                    create_time: '2022年6月1日',
                },
            ],
            dialogFormVisible: false,
            dialogFormVisible1: false,
            form: {
                name: '',
                level: '1',
                gender: '0',
                age: '18',
                phone_num: '',
                email: '',
            },
            form1: {
                name: '',
                level: '1',
                gender: '0',
                age: '18',
                phone_num: '',
                email: '',
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
            this.$confirm('是否确认删除该顾客？', '确认信息', {
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
            this.form1.name = row.name
            this.form1.gender = row.gender
            this.form1.age = row.age
            this.form1.phone_num = row.phone_num
            this.form1.email = row.email
            this.form1.level = row.level
            this.dialogFormVisible1 = true
        }
    }
}
</script>

<style>

</style>