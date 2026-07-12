 import { useDispatch } from 'react-redux'
 import { options } from '../utils/Constant'
 import { useEffect } from 'react'
 import { addNowPlaying } from '../utils/movieSlice';
 const useNow=()=>{
const dispatch=useDispatch();
const nowPlaying=useSelector((store)=>store.movies.nowPlaying);
const getNow=async() =>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing', options)
  const json=await data.json();
 console.log(json);
 dispatch(addNowPlaying(json.results));
 }
 //useeffect for calling once and it rerenders the component only once
 useEffect(()=>{ 
    if(!nowPlaying) { getNow(); }
 },[]);
};
export default useNow;