import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
         popularMovies: [],
    trending: [],
    horror: [],
    },
    reducers:{
        addNowPlaying:(state,action)=>{
          state.nowPlaying=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },addPopular:(state,action)=>{
          state.popularMovies=action.payload;
        },addTrending:(state,action)=>{
          state.trending=action.payload;
        },addHorror:(state,action)=>{
          state.horror=action.payload;
        }
        
    }
})
export const {addNowPlaying,addTrailerVideo,addPopular,addTrending,addHorror}=movieSlice.actions;
export default movieSlice.reducer;