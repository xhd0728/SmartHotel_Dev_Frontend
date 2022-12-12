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
                    <el-button type="primary" @click="submitForm('formLabelAlign')"
                        style="margin-left:70px">办理</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
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
        }
    }
}
</script>

<style>

</style>