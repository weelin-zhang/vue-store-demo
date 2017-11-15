import types from './types'
import axios from 'axios'

const actions={
	updateGlobalInfo({commit, state}){
		console.log('global actions')
		axios.get('http://xxxxx/api/api1/').then(resp=>{
			// console.log(resp.data.d)
			//此处可以加一个响应的判断
			commit(types.UPDATE_GLOBAL_INFO, resp.data.d)
		})
		.catch(error=>{
			console.log(error)
			// 假如请求失败，随便给一个值
			commit(types.UPDATE_GLOBAL_INFO, [{name: 'zz'}])
		})
	}
}

export default actions;