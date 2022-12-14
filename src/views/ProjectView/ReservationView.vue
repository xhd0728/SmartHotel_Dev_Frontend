<template>
    <div style="width:100%">
        <div style="text-align:center;margin-top: 20px;">
            办理入住
        </div>
        <div style="margin-left:430px;margin-top:30px">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="formLabelAlign">
                <el-form-item label="房间号">
                    <el-input v-model="formLabelAlign.room_id" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="formLabelAlign.phone_num" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="实付款">
                    <el-input v-model="formLabelAlign.pay" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addOrder" style="margin-left:70px">办理</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            labelPosition: 'center',
            formLabelAlign: {
                room_id: '',
                phone_num: '',
                pay: ''
            }
        }
    },
    methods: {
        resetForm() {
            this.formLabelAlign.room_id = ''
            this.formLabelAlign.pay = ''
            this.formLabelAlign.phone_num = ''
        },
        addOrder() {
            axios.request({
                method: 'POST',
                url: 'api/order/order',
                data: {
                    room_id: this.formLabelAlign.room_id,
                    phone_num: this.formLabelAlign.phone_num,
                    pay: this.formLabelAlign.pay
                }
            }).then((res) => {
                this.$message({
                    message: res.data.detail,
                    type: 'success'
                }),
                    this.$router.push('/')
            }).catch((res) => {
                this.$message({
                    message: res.data.detail,
                    type: 'error'
                })
            })
        }
    }
}
</script>

<style>

</style>