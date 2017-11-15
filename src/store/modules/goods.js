import types from '../types.js'
// console.log(types)

const state={
	goodsInfo: [{
		name: "goods default name"
	}]
}

const getters={
	getGoodsInfo(state){
		console.log('goods getters')
		return state.goodsInfo
	}
}

const mutations={
	[types.UPDATE_GOODS_INFO](state, obj){
		console.log('goods mutations')
		state.goodsInfo.push(obj)
	}
}

const actions={
	updateGoodsInfo({commit},obj){
		console.log('goods update')
		commit(types.UPDATE_GOODS_INFO, obj)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}