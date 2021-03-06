import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import goods from './modules/goods'

Vue.use(Vuex)


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules:{
		goods
	}
})