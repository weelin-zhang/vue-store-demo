import Vue from 'vue'
import Router from 'vue-router'
import Global from '@/components/global'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  routes: [
	  {
	  	path: '/',
	  	component: Global,
	  },
	  {
	  	path: '/goods',
	  	component: Goods,
	  }
  	
  ]
})
