<template>
    <div>
        <div style="margin-top:20px;margin-left:20px;width: 800px;display: flex;align-items: baseline;">
            <el-button type="success" round>添加会员</el-button>
            <el-button type="info" icon="el-icon-refresh" circle @click="x_refresh"></el-button>
            <span style="margin-left:20px;width: 90px;">搜索用户: </span>
            <el-input placeholder="姓名或手机号" v-model="input" clearable style="width:200px"></el-input>
            <el-button icon="el-icon-search" circle style="margin-left:20px"></el-button>
        </div>
        <div>
            <el-table :data="customerData" height="525" border stripe :cell-style="cellStyle"
                style="width: 1200px;margin-top: 30px;margin-left: 20px;">
                <el-table-column prop="name" label="姓名" min-width="40" header-align="center">
                </el-table-column>
                <el-table-column prop="gender" label="性别" min-width="30" header-align="center">
                </el-table-column>
                <el-table-column prop="age" label="年龄" min-width="30" header-align="center">
                </el-table-column>
                <el-table-column prop="phone_num" label="手机" min-width="50" header-align="center">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" header-align="center">
                </el-table-column>
                <el-table-column prop="level" label="等级" min-width="40" header-align="center">
                </el-table-column>
                <el-table-column prop="last_time" label="上次来访时间" min-width="50" header-align="center">
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间" min-width="50" header-align="center">
                </el-table-column>
            </el-table>
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
            ]
        }
    },
    methods: {
        cellStyle() {
            return "text-align:center"
        },
        x_refresh() {
            location.reload()
        },
    }
}
</script>

<style>

</style>