<template>
    <el-row>
        <el-col style="width:500px">
            <div style="text-align:center;margin-top:10px;margin-bottom: 10px;">
                房间筛选
            </div>
            <div style="display: flex;align-items: baseline;">
                <span style="margin-left:50px;margin-top: 20px;">是否空闲: </span>
                <el-radio v-model="free_radio" label="1" style="margin-left:20px">全部</el-radio>
                <el-radio v-model="free_radio" label="2">空闲</el-radio>
                <el-radio v-model="free_radio" label="3">有人</el-radio>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">居住人数: </span>
                <el-input-number v-model="space_num" :min="1" :max="3" style="margin-left:20px"
                    size="mini"></el-input-number>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">热水情况: </span>
                <el-radio v-model="hotwater_radio" label="1" style="margin-left:20px">有热水</el-radio>
                <el-radio v-model="hotwater_radio" label="2">无热水</el-radio>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">设备情况: </span>
                <el-radio v-model="computer_radio" label="1" style="margin-left:20px">有电脑</el-radio>
                <el-radio v-model="computer_radio" label="2">无电脑</el-radio>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">价格选择:&nbsp;&nbsp;&nbsp;&nbsp;小于等于</span>
                <el-input v-model="input" placeholder="价格" size="mini" style="width:80px;margin-left:10px"></el-input>
                <span style="margin-left:10px">￥</span>
            </div>
            <div style="text-align:center;margin-top: 30px;">
                <el-button type="primary" round>搜索</el-button>
            </div>
        </el-col>
        <el-col span="300" style="margin-left:20px">
            <div style="text-align:center;margin-top:10px;margin-bottom: 10px;">
                房间状态
            </div>
            <el-table :data="roomData" max-height="700" max-width="500" border stripe :cell-style="cellStyle">
                <el-table-column prop="room_id" label="房间号" width="70" header-align="center">
                </el-table-column>
                <el-table-column prop="space" label="人数" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="is_hotwater" label="热水" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="is_computer" label="电脑" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="value" label="价格" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="is_used" label="状态" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="opt" label="操作" width="100" header-align="center">
                    <template>
                        <el-button type="text">办理入住</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            space_num: 1,
            free_radio: '1',
            hotwater_radio: '1',
            computer_radio: '1',
            input: '999',
            roomData: [
                {
                    room_id: '101',
                    space: '2',
                    value: '150',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '空闲'
                },
                {
                    room_id: '102',
                    space: '1',
                    value: '120',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '有人'
                },
                {
                    room_id: '103',
                    space: '3',
                    value: '130',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '空闲'
                },
                {
                    room_id: '104',
                    space: '2',
                    value: '210',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '有人'
                },
                {
                    room_id: '201',
                    space: '3',
                    value: '150',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '空闲'
                },
                {
                    room_id: '202',
                    space: '1',
                    value: '170',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '有人'
                },
                {
                    room_id: '203',
                    space: '1',
                    value: '130',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '有人'
                },
                {
                    room_id: '204',
                    space: '2',
                    value: '120',
                    is_hotwater: '有',
                    is_computer: '有',
                    is_used: '空闲'
                },
            ]
        }
    },
    methods: {
        cellStyle() {
            return "text-align:center"
        }
    }
}
</script>

<style>

</style>