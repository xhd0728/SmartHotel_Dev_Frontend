<template>
    <div style="width:100%">
        <div style="text-align:center;margin-top: 20px;">
            办理退房
        </div>
        <div style="margin-left:430px;margin-top:30px">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="form">
                <el-form-item label="订单号">
                    <el-input v-model="formLabelAlign.oid" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addCheck" style="margin-left:70px">办理</el-button>
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
                oid: ''
            }
        }
    },
    methods: {
        resetForm() {
            this.formLabelAlign.oid = ''
        },
        addCheck() {
            axios.request({
                method: 'DELETE',
                url: 'api/order/order',
                data: {
                    oid: this.formLabelAlign.oid,
                }
            }).then((res) => {
                this.$message({
                    message: res.data.detail,
                    type: 'success'
                }),
                    this.$router.push('/')
            })
        }
    }
}
</script>

<style>

</style>