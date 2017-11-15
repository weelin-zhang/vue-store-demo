import state from './state'
import types from './types'

const mutations={
	[types.UPDATE_GLOBAL_INFO](state,data){
		console.log('mutations-updateglobalinfo',data)
		state.globalInfo=data
	}
}

export default mutations