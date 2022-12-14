<template>
    <div>
        <div></div>
        <el-dialog title="登录" :visible.sync="dialogFormVisible" width="30%" :show-close="false" :center="true"
            :close-on-click-modal="false" :close-on-press-escape="false">
            <el-form :model="form">
                <el-form-item label="账号" :label-width="formLabelWidth">
                    <el-input v-model="form.username" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.password" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="验证码" :label-width="formLabelWidth">
                    <div style="display:flex">
                        <el-input v-model="form.code" autocomplete="off" style="width:80px"></el-input>
                        <div style="width:120px;height:30px;margin-left: 20px;margin-top: 5px;">
                            <img :src="code_img" @click="getCodeImg" />
                        </div>
                    </div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="loginFun">登录</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            dialogFormVisible: 'true',
            form: {
                username: '',
                password: '',
                code: ''
            },
            formLabelWidth: '120px',
            dialogClose: 0,
            code_img: 'data:image/png;base64,',
            code_img_b64: ''
        }
    },
    mounted() {
        this.getCodeImg()
    },
    methods: {
        loginFun() {
            axios.request({
                method: 'POST',
                url: '/api/user/login',
                data: {
                    username: this.form.username,
                    password: this.form.password,
                    img: this.code_img_b64,
                    code: this.form.code
                }
            }).then((res) => {
                console.log(res)
                if (res.status == 200) {
                    this.$store.commit('$_setToken', res.data.token)
                    this.$message({
                        message: res.data.detail,
                        type: 'success'
                    })
                    this.$store.commit('$_setUsername', this.form.username)
                    this.$router.push('/')
                } else {
                    this.$message({
                        message: res.data.detail,
                        type: 'error'
                    })
                }
            })
        },
        getCodeImg() {
            axios.request({
                method: 'GET',
                url: 'api/user/login',
            }).then((res) => {
                this.code_img = "data:image/png;base64," + res.data.img
                this.code_img_b64 = res.data.img
                console.log(this.code_img)
            })
        }
    }
}
</script>

<style>

</style>