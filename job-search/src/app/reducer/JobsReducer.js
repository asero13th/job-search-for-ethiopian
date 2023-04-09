import { actionTypes } from "../constants/action-types";


const initialState = {
    jobs: []
}

export const jobsReduer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_JOBS:
            return {...state, jobs: action.payload}
        default:
            return state
    }
}

export const selectedJobReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.SELECTED_JOB:
            return {...state, ...action.payload}
        default:
            return state
    }
}