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
          <el-form-item label="打分" :label-width="formLabelWidth">
            <el-rate v-model="form.star" show-text style="margin-top:11px"></el-rate>
          </el-form-item>
          <el-form-item label="评论" :label-width="formLabelWidth">
            <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.text" style="width:500px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-table :data="commentData" height="525" border stripe :cell-style="cellStyle"
        style="width: 1200px;margin-top: 30px;margin-left: 20px;">
        <el-table-column prop="name" label="姓名" min-width="30" header-align="center"></el-table-column>
        <el-table-column prop="gender" label="性别" min-width="20" header-align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" min-width="20" header-align="center"></el-table-column>
        <el-table-column prop="phone_num" label="手机" min-width="45" header-align="center"></el-table-column>
        <el-table-column prop="level" label="等级" min-width="30" header-align="center"></el-table-column>
        <el-table-column prop="star" label="评分" min-width="40" header-align="center">
          <template slot-scope="scope0">
            <el-rate disabled v-model="scope0.row.star" show-score text-color="#ff9900"
              score-template="{value}"></el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="评论时间" min-width="50" header-align="center"></el-table-column>
        <el-table-column prop="opt" label="操作" min-width="40" header-align="center">
          <template slot-scope="scope">
            <el-button type="info" icon="el-icon-more" circle @click="optTextDialog(scope.row)"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle @click="optEditDialog(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="open"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="修改评价" :visible.sync="dialogFormVisible1">
        <el-form :model="form1">
          <el-form-item label="手机" :label-width="formLabelWidth">
            <el-input v-model="form1.phone_num" autocomplete="off" size="mini" style="width:130px"></el-input>
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
          <el-button type="primary" @click="dialogFormVisible1 = false">确定</el-button>
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
export default {
  data() {
    return {
      commentData: [
        {
          name: '辛海东',
          gender: '男',
          age: '20',
          phone_num: '13904585027',
          email: 'xinhaidong0625@foxmail.com',
          level: '普通会员',
          star: '4.5',
          text: 'xhdxhdxhd',
          create_time: '2022年6月1日',
        },
        {
          name: '辛海东',
          gender: '男',
          age: '20',
          phone_num: '13904585027',
          email: 'xinhaidong0625@foxmail.com',
          level: '普通会员',
          star: '3.7',
          text: 'herhrej3443',
          create_time: '2022年6月1日',
        },
        {
          name: '辛海东',
          gender: '男',
          age: '20',
          phone_num: '13904585027',
          email: 'xinhaidong0625@foxmail.com',
          level: '普通会员',
          star: '2.5',
          text: 'hsdhfsahhs',
          create_time: '2022年6月1日',
        },
        {
          name: '辛海东',
          gender: '男',
          age: '20',
          phone_num: '13904585027',
          email: 'xinhaidong0625@foxmail.com',
          level: '普通会员',
          star: '4.5',
          text: 'hshshhf',
          create_time: '2022年6月1日',
        },
        {
          name: '辛海东',
          gender: '男',
          age: '20',
          phone_num: '13904585027',
          email: 'xinhaidong0625@foxmail.com',
          level: '普通会员',
          star: '5',
          text: '12121',
          create_time: '2022年6月1日',
        },
      ],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      form: {
        phone_num: '',
        text: '',
        star: '3'
      },
      form1: {
        phone_num: '',
        text: '',
        star: '3'
      },
      textarea1: '',
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
      this.form1.phone_num = row.phone_num
      this.form1.star = row.star
      this.form1.text = row.text
      this.dialogFormVisible1 = true
    },
    optTextDialog(row) {
      this.textarea1 = row.text
      this.dialogFormVisible2 = true
    }
  }
}
</script>

<style>

</style>