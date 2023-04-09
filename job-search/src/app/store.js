import { configureStore } from '@reduxjs/toolkit';
import {jobsReduer, selectedJobReducer} from "./reducer/JobsReducer";


 const store = configureStore({
  reducer: {
    jobs: jobsReduer,
    selectedJob: selectedJobReducer,
  },
});

export default store;