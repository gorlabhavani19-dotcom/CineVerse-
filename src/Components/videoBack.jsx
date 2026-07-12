//fetching the triler video and updating the store
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo.jsx";
export const VideoBack=({movieId})=>{
const trailerVideo=useSelector((store)=>store.movie?.trailerVideo)
useMovieVideo(movieId);
 return(
    <div className="w-screen h-screen"> 
    {trailerVideo?.key && (
        <iframe className="absolute top-0 left-0 w-full object-cover h-full scale-125 -z-10" src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&playsinline=1`}
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
    )}
    </div>
)
}

