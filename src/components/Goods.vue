<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr>
    <ul>
        <li v-for="item in getGoodsInfo">{{item.name}}</li>
    </ul>
    <button @click="updateGoodsInfo({name: '通过辅助方法改变状态'})">通过辅助方法改变状态</button>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        data(){
            return {
                msg: "Goods Info"
            }
        },
        computed:{
            ...mapGetters(
                ['getGoodsInfo']
            )
        },
        methods: {
            // 除了dispath之外还有借助辅助函数触发actions
            ...mapActions(['updateGoodsInfo'])
        },
        created(){
            console.log('created goods')
            // 还可以传参
            this.$store.dispatch('updateGoodsInfo',{name:"goods add"})
        },
        mounted(){
            console.log('mounted，goods')

        },
    	beforeRouteEnter:(to, from, next)=>{
    		console.log('即将进入goods')
    		next()
    	},
    	beforeRouteLeave:(to, from, next)=>{
    		console.log('即将离开goods')
    		next()

    	}
        
    }
</script>