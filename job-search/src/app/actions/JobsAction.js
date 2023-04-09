import { actionTypes } from "../constants/action-types";

export const setJobs = (jobs) =>{
    return {
        type: actionTypes.SET_JOBS,
        payload: jobs
    }
}

export const selectedJobs = (job) => {
    return {
        type: actionTypes.SELECTED_JOB,
        payload: job
    }
}

export const removeSelctedJob = (job) => {
    return {
        type: actionTypes.removeSelctedJob,
        payload : job
    }
}

export const makrequest = () =>{
    return{
        type: actionTypes.MAKE_REQEUEST
    }
}