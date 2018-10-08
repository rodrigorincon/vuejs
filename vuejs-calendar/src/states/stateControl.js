import moment from 'moment-timezone'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	month: moment().month(),
	year:  moment().year()
  },
  mutations: {
  	decreaseMonth(state){
  		if(state.month == 0){
  			state.month = 11
  			state.year--
  		}else{
  			state.month--
  		}
  	},
  	increaseMonth(state){
  		if(state.month == 11){
  			state.month = 0
  			state.year++
  		}else{
  			state.month++
  		}
  	}
  }
})
