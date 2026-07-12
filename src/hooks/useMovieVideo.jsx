import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieVideo = (movieId) => {
  const dispatch = useDispatch();
const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
  const getMovieVideo = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        options
      );

      const data = await res.json();

      console.log("API RESPONSE:", data);

      const trailers = data?.results?.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = trailers?.length ? trailers[0] : null;

      console.log("SELECTED TRAILER:", trailer);

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  useEffect(() => {
    if(!trailerVideo&&movieId) {
      getMovieVideo();
    }
  }, [movieId]);
};

export default useMovieVideo;