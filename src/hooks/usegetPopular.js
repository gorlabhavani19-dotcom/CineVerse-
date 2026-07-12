 import { useDispatch } from 'react-redux'
 import { options } from '../utils/Constant'
 import { useEffect } from 'react'
 import { addPopular } from '../utils/movieSlice';
 const usePopular=()=>{
  const dispatch=useDispatch();
const popularMovies=useSelector((store)=>store.movies.popularMovies);
 const getPopular=async() =>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular', options)
  const json=await data.json();
 console.log(json);
 dispatch(addPopular(json.results));
 }
 //useeffect for calling once and it rerenders the component only once
 useEffect(()=>{ 
    if(!popularMovies) { getPopular(); }
 },[]);
};
export default usePopular;