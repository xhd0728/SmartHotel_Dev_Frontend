<template>
    <div style="margin-top:30px;margin-left:30px;">
        <el-tree :data="data" :props="defaultProps" :default-expanded-keys="[1, 2, 3, 4, 5, 6]" node-key="id"></el-tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                label: '前端',
                id: 1,
                children: [
                    {
                        label: 'Vue.js 2.7.9',
                    },
                    {
                        label: 'vue-cli 5.0.8',
                    },
                    {
                        label: 'Node.js 18.12.0',
                    },
                ]
            },
            {
                label: '后端',
                id: 2,
                children: [
                    {
                        label: 'Python 3.8.8',
                    },
                    {
                        label: 'Django 4.1.3',
                    },
                    {
                        label: 'PyJWT 1.7.1'
                    },
                ]
            },
            {
                label: '数据库',
                id: 3,
                children: [
                    {
                        label: 'MySQL 8.0.30',
                    },
                    {
                        label: 'Redis 5.0',
                    },
                ]
            },
            {
                label: '开发工具',
                id: 4,
                children: [
                    {
                        label: 'Visual Studio Code',
                    },
                    {
                        label: 'Jetbrain Pycharm Professional',
                    }
                ]
            },
            {
                label: '版本控制工具',
                id: 5,
                children: [
                    {
                        label: 'Git',
                    },
                    {
                        label: 'Kleopatra',
                    }
                ]
            },
            {
                label: '部署工具',
                id: 6,
                children: [
                    {
                        label: 'docker',
                    },
                    {
                        label: 'docker-compose 2.14.0',
                    }
                ]
            }
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