import * as types from './actionTypes';
export default function planetReducer(state = [], action){
	switch(action.type){
		case types.PLANET_SUCCESS :
			return action.data;
		case types.PLANET_ERROR :
			return state;
		default :
			return state;
	}
}
