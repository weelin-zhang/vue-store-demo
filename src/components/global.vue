<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr>

    <ul>

        <li v-for="item in globalInfo">{{item.name}}</li>
    </ul>
    <!-- 通过mutation方法修改,知识模拟mutations方法也可以修改,耗时操作用actions -->
    <button @click="hre([{name:'ceshi'}])">通过辅助方法改变状态并且使用别名</button>
  </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return {
                msg: "global Info"
            }
        },
        computed:{
            ...mapGetters(
                ['globalInfo']
            )
        },
        // 组件中引入mutation方法时，有两种方式
        // 1. 组件的方法名和mutations定义的名字相同,列表方式引入mutations是方法
        // 2. 组件中另起一个明字，对象方式引入mutations方法
        methods:{
            // 方法2
            ...mapMutations({
                "hre":'UPDATE_GLOBAL_INFO',
                }
            ),
            //方法1
            // ...mapMutations([
            //     'UPDATE_GLOBAL_INFO'
            //     ]
            // ),            
        },
        created(){
            console.log('created app,add')
            // 通过action方法异步获取数据修改
            this.$store.dispatch('updateGlobalInfo')
        },
        mounted(){
            console.log('mounted，add')

        },
    	beforeRouteEnter:(to, from, next)=>{
    		console.log('即将进入Add')
    		next()
    	},
    	beforeRouteLeave:(to, from, next)=>{
    		console.log('即将离开Add')
    		next()

    	}
        
    }
</script>