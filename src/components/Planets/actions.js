import * as types from './actionTypes';
import { fetchData } from '../../api/api'


export function planetSuccess(data){
	return {type: types.PLANET_SUCCESS, data};
}
export function planetError(){
	return {type: types.PLANET_ERROR};
}
