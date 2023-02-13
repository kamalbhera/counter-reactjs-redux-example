import { DIVIDE, MULTIPLY } from "../actionTypes/actionsType"

export const multiply = (value) =>{
    return {type:MULTIPLY,payload: value}
}
export const divide = (value) =>{
    return {type:DIVIDE,payload: value}
}
