<template>
    <el-row>
        <el-col style="width:500px">
            <div style="text-align:center;margin-top:10px;margin-bottom: 10px;">
                房间筛选
            </div>
            <div style="display: flex;align-items: baseline;">
                <span style="margin-left:50px;margin-top: 20px;">是否空闲: </span>
                <el-radio v-model="free_radio" label="2" style="margin-left:20px">全部</el-radio>
                <el-radio v-model="free_radio" label="0">空闲</el-radio>
                <el-radio v-model="free_radio" label="1">有人</el-radio>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">居住人数: </span>
                <el-input-number v-model="space_num" :min="1" :max="3" style="margin-left:20px"
                    size="mini"></el-input-number>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">热水情况: </span>
                <el-radio v-model="hotwater_radio" label="2" style="margin-left:20px">全部</el-radio>
                <el-radio v-model="hotwater_radio" label="0">无热水</el-radio>
                <el-radio v-model="hotwater_radio" label="1">有热水</el-radio>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">设备情况: </span>
                <el-radio v-model="computer_radio" label="2" style="margin-left:20px">全部</el-radio>
                <el-radio v-model="computer_radio" label="0">无电脑</el-radio>
                <el-radio v-model="computer_radio" label="1">有电脑</el-radio>
            </div>
            <div style="display: flex;align-items: baseline;margin-top: 20px;">
                <span style="margin-left:50px">价格区间:</span>
                <el-input v-model="input1" placeholder="价格" size="mini" style="width:70px;margin-left:10px"></el-input>
                <span style="margin-left:10px">~</span>
                <el-input v-model="input2" placeholder="价格" size="mini" style="width:70px;margin-left:10px"></el-input>
                <span style="margin-left:10px">元</span>
            </div>
            <div style="text-align:center;margin-top: 30px;">
                <el-button type="primary" round @click="queryRoomData">搜索</el-button>
            </div>
        </el-col>
        <el-col span="300" style="margin-left:20px">
            <div style="text-align:center;margin-top:10px;margin-bottom: 10px;">
                房间状态
            </div>
            <el-table :data="roomData" max-height="600px" min-width="500" border stripe :cell-style="cellStyle">
                <el-table-column prop="room_id" label="房间号" width="70" header-align="center">
                </el-table-column>
                <el-table-column prop="space" label="人数" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="is_hotwater" label="热水" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="is_computer" label="电脑" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="value" label="价格" width="80" header-align="center">
                </el-table-column>
                <el-table-column prop="is_used" label="状态" width="60" header-align="center">
                </el-table-column>
                <el-table-column prop="opt" label="操作" width="100" header-align="center">
                    <el-button type="text" @click="gotoReservationView">办理入住</el-button>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            is_empty: '0',
            space_num: '1',
            free_radio: '2',
            hotwater_radio: '2',
            computer_radio: '2',
            input1: '0',
            input2: '999',
            roomData: []
        }
    },
    mounted() {
        this.getRoomData()
    },
    methods: {
        cellStyle() {
            return "text-align:center"
        },
        getRoomData() {
            axios.request({
                method: 'GET',
                url: 'api/room/rooms',
                params: {
                    is_empty: 0
                }
            }).then((res) => {
                this.roomData = res.data
            })
        },
        queryRoomData() {
            axios.request({
                method: 'GET',
                url: 'api/room/rooms',
                params: {
                    is_empty: 1,
                    is_used: this.free_radio,
                    space: this.space_num,
                    is_hotwater: this.hotwater_radio,
                    is_computer: this.computer_radio,
                    input1: this.input1,
                    input2: this.input2
                }
            }).then((res) => {
                this.roomData = res.data
            })
        },
        gotoReservationView() {
            this.$router.push('/reservation')
        }
    }
}
</script>

<style>

</style>