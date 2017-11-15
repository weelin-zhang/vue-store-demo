import state from './state'
const getters={
	globalInfo(state){
		console.log('getters-global')
		console.log(state.globalInfo[0].name)
		return state.globalInfo
	}
}

export default getters;