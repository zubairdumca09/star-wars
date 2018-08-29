import * as types from './actionTypes';
import { fetchData } from '../../api/api'


export function loginSuccess(data){
	return {type: types.LOGIN_SUCCESS, data};
}
export function loginError(){
	return {type: types.LOGIN_ERROR};
}
export function logout(){
	return {type: types.LOGOUT};
}

export function getUserDetails(data){
  return (dispatch) => {
    for(let i = 0 ; i < 87 ; i++){
        (function(i){
          let url = `https://swapi.co/api/people/${i+1}/`;
      		fetchData(url).then((response)=>{
            let json = response.body;
            if((json.name === data.username) && (json.birth_year === data.password)){
              dispatch(loginSuccess(json))
            }
          }).catch(()=>{
            console.error(`People ${i+1} detail not found.`)
          });
        })(i)
    }
  }
}
