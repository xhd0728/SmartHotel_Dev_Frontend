<template>
  <div>
    <div style="margin-top:20px;margin-left:20px;width: 800px;display: flex;align-items: baseline;">
      <el-button type="warning" round @click="dialogFormVisible = true">添加评价</el-button>
      <el-button type="info" icon="el-icon-refresh" circle @click="x_refresh"></el-button>
      <el-dialog title="添加评价" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="手机" :label-width="formLabelWidth">
            <el-input v-model="form.phone_num" autocomplete="off" size="mini" style="width:130px"></el-input>
          </el-form-item>
          <el-form-item label="房间号" :label-width="formLabelWidth">
            <el-input v-model="form.room_id" autocomplete="off" size="mini" style="width:130px"></el-input>
          </el-form-item>
          <el-form-item label="打分" :label-width="formLabelWidth">
            <el-rate v-model="form.star" show-text style="margin-top:11px"></el-rate>
          </el-form-item>
          <el-form-item label="评论" :label-width="formLabelWidth">
            <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.text" style="width:500px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="addComment">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-table :data="commentData" height="525" border stripe :cell-style="cellStyle"
        style="width: 1200px;margin-top: 30px;margin-left: 20px;">
        <el-table-column prop="customer.name" label="姓名" min-width="20" header-align="center"></el-table-column>
        <el-table-column prop="customer.gender" label="性别" min-width="20" header-align="center"></el-table-column>
        <el-table-column prop="customer.age" label="年龄" min-width="20" header-align="center"></el-table-column>
        <el-table-column prop="customer.phone_num" label="手机" min-width="30" header-align="center"></el-table-column>
        <el-table-column prop="customer.level.name" label="等级" min-width="30" header-align="center"></el-table-column>
        <el-table-column prop="room.room_id" label="房间号" min-width="20" header-align="center"></el-table-column>
        <el-table-column prop="star" label="评分" min-width="40" header-align="center">
          <template slot-scope="scope0">
            <el-rate disabled v-model="scope0.row.star" show-score text-color="#ff9900"
              score-template="{value}"></el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="评论时间" min-width="40" header-align="center"></el-table-column>
        <el-table-column prop="opt" label="操作" min-width="40" header-align="center">
          <template slot-scope="scope">
            <el-button type="info" icon="el-icon-more" circle @click="optTextDialog(scope.row)"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle @click="optEditDialog(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="open(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="修改评价" :visible.sync="dialogFormVisible1">
        <el-form :model="form1">
          <el-form-item label="手机" :label-width="formLabelWidth">
            <el-input v-model="form1.phone_num" autocomplete="off" size="mini" style="width:130px"></el-input>
          </el-form-item>
          <el-form-item label="房间号" :label-width="formLabelWidth">
            <el-input v-model="form1.room_id" autocomplete="off" size="mini" style="width:130px"></el-input>
          </el-form-item>
          <el-form-item label="打分" :label-width="formLabelWidth">
            <el-rate v-model="form1.star" show-text style="margin-top:11px"></el-rate>
          </el-form-item>
          <el-form-item label="评论" :label-width="formLabelWidth">
            <el-input type="textarea" autosize placeholder="请输入内容" v-model="form1.text" style="width:500px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取消</el-button>
          <el-button type="primary" @click="modifyComment">确定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="查看评论内容" :visible.sync="dialogFormVisible2" width="30%">
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1">
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible2 = false">确定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      commentData: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      form: {
        phone_num: '',
        room_id: '',
        text: '',
        star: '3'
      },
      form1: {
        phone_num: '',
        text: '',
        room_id: '',
        star: '3',
        cid: ''
      },
      textarea1: '',
      formLabelWidth: '100px'
    }
  },
  mounted() {
    this.getCommentData()
  },
  methods: {
    cellStyle() {
      return "text-align:center"
    },
    x_refresh() {
      location.reload()
    },
    open(row) {
      this.$confirm('是否确认删除该顾客？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.request({
          method: 'DELETE',
          url: 'api/comment/comment',
          data: {
            cid: row.cid
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
      console.log(row)
      this.form1.phone_num = row.customer.phone_num
      this.form1.room_id = row.room.room_id
      this.form1.star = row.star
      this.form1.text = row.text
      this.form1.cid = row.cid
      this.dialogFormVisible1 = true
    },
    optTextDialog(row) {
      this.textarea1 = row.text
      this.dialogFormVisible2 = true
    },
    getCommentData() {
      axios.request({
        method: 'GET',
        url: 'api/comment/comments'
      }).then((res) => {
        this.commentData = res.data
      })
    },
    addComment() {
      axios.request({
        method: 'POST',
        url: 'api/comment/comment',
        data: {
          phone_num: this.form.phone_num,
          room_id: this.form.room_id,
          text: this.form.text,
          star: this.form.star
        }
      }).then((res) => {
        this.dialogFormVisible = false
        this.$message({
          message: res.data.detail,
          type: 'success'
        })
      })
    },
    modifyComment() {
      axios.request({
        method: 'POST',
        url: 'api/comment/comment',
        data: {
          cid: this.form1.cid,
          phone_num: this.form1.phone_num,
          room_id: this.form1.room_id,
          text: this.form1.text,
          star: this.form1.star
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