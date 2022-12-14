<template>
    <div style="display:flex">
        <div style="margin-top:30px;margin-left:30px;width:400px">
            <el-tree :data="data" :props="defaultProps" :default-expanded-keys="[1, 2, 3, 4, 5, 6]"
                node-key="id"></el-tree>
        </div>
        <div style="margin-top:30px;margin-left:30px;width:400px">
            <el-tree :data="data2" :props="defaultProps" :default-expanded-keys="[1, 2, 3, 4]"
                node-key="id"></el-tree>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    label: 'Room',
                    id: 1,
                    children: [
                        {
                            label: 'room_room',
                        },
                        {
                            label: 'room_floor',
                        },
                        {
                            label: 'room_freeroom',
                        },
                    ]
                },
                {
                    label: 'Customer',
                    id: 2,
                    children: [
                        {
                            label: 'customer_customer',
                        },
                        {
                            label: 'customer_level',
                        },
                        {
                            label: 'customer_customercount'
                        },
                    ]
                },
                {
                    label: 'Order',
                    id: 3,
                    children: [
                        {
                            label: 'order_order',
                        },
                        {
                            label: 'order_income',
                        },
                    ]
                },
                {
                    label: 'Comment',
                    id: 4,
                    children: [
                        {
                            label: 'comment_comment',
                        },
                        {
                            label: 'comment_commentcount',
                        }
                    ]
                },
                {
                    label: 'User',
                    id: 5,
                    children: [
                        {
                            label: 'user_user',
                        },
                        {
                            label: 'user_level',
                        }
                    ]
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            data2: [
                {
                    label: 'Room_Triggers',
                    id: 1,
                    children: [
                        {
                            label: 'room_insert_trigger',
                        },
                        {
                            label: 'room_update_trigger1',
                        },
                        {
                            label: 'room_update_trigger2',
                        },
                    ]
                },
                {
                    label: 'Customer_Triggers',
                    id: 2,
                    children: [
                        {
                            label: 'customer_insert_trigger',
                        },
                        {
                            label: 'customer_delete_trigger1',
                        },
                    ]
                },
                {
                    label: 'Order_Triggers',
                    id: 3,
                    children: [
                        {
                            label: 'order_insert_trigger',
                        },
                        {
                            label: 'order_update_trigger1',
                        },
                        {
                            label: 'order_update_trigger2',
                        },
                        {
                            label: 'order_delete_trigger1',
                        },
                        {
                            label: 'order_delete_trigger2',
                        },
                    ]
                },
                {
                    label: 'Comment_Triggers',
                    id: 4,
                    children: [
                        {
                            label: 'comment_insert_trigger1',
                        },
                        {
                            label: 'comment_insert_trigger2',
                        },
                        {
                            label: 'comment_insert_trigger3',
                        },
                        {
                            label: 'comment_update_trigger1',
                        },
                        {
                            label: 'comment_update_trigger2',
                        },
                        {
                            label: 'comment_delete_trigger1',
                        },
                        {
                            label: 'comment_delete_trigger2',
                        },
                    ]
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },
    methods: {

    }
}
</script>

<style>

</style>