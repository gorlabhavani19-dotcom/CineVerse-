import { createSlice } from "@reduxjs/toolkit"
const gptSlice=createSlice({
    name:'gpt',
    initialState:{
    showGpt:false,
    movienames:null,
    tmdbresults:null
    },
    reducers:{
   toggle:(state,action)=>{
  state.showGpt=!state.showGpt;
   },
   addgptresults:(state,action)=>{
    const {movienames,tmdbresults}=action.payload;
    state.movienames=movienames;
    state.tmdbresults=tmdbresults;;
   }
    }
})
//exporting the actions and iam exporting the reducers
export const {toggle, addgptresults}=gptSlice.actions;
export default gptSlice.reducer