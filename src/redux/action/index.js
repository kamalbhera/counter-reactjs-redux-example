import {INCREMENT,DECREMENT} from '../actionTypes/actionsType'

export const increment = (value) =>{
    return{type:INCREMENT, payload: value}
}
export const decrement = (value) =>{
    return {type:DECREMENT,payload: value}
}
