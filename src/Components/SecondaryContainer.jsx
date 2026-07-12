import Movielist from "./Movielist";
import { useSelector } from "react-redux";
    const Secondary=()=>{
    const movies=useSelector(store=>store.movie);
    console.log("movies slice =", movies);
     return (
      <div  className="bg-black">
     <div className="-mt-40 relative z-20 pl-8">
       <Movielist title="Nowplaying" movies={movies?.nowPlaying}/>
        <Movielist title="Trending" movies={movies?.trending}/>
         <Movielist title="Popular" movies={movies?.popularMovies}/>
        <Movielist title="Upcoming" movies={movies?.nowPlaying}/>
         <Movielist title="Horror" movies={movies?.horror}/>
     </div>
     </div>
     )
    }
    export default Secondary;