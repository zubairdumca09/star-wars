import * as types from './actionTypes';
export default function loginReducer(state = {}  , action){
  console.log(action)
	switch(action.type){
		case types.LOGIN_SUCCESS :
			return Object.assign({}, action.data)
		case types.LOGIN_ERROR :
			return state;
		case types.LOGOUT :
			return {};
		default :
			return state;
	}
}
