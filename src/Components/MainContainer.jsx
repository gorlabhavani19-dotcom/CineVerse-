import { useSelector } from "react-redux"
import { VideoTitle} from "./videoTitle.jsx";
import useNow from "../hooks/usegetNow";
import { VideoBack } from "./videoBack.jsx";
export const Main=()=>{
  console.log("main is called");
  useNow();
    const movies=useSelector((store)=>store.movie?.nowPlaying);
    console.log("these are movies:",movies);
    const mainmovies=movies?.[0];
    console.log(mainmovies);
    if (!movies || movies.length === 0) return null;
    const {title,overview,id}=mainmovies;
    return(
    <div>
      <VideoTitle title={mainmovies?.title} overview={mainmovies?.overview}/>
       <VideoBack movieId={550}/>
    </div>
   )
}