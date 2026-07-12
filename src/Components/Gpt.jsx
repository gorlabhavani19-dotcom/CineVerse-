
import {useRef} from "react";
import ai from "../utils/gemini";
import {options} from "../utils/Constant";
import GptSuggestion from "./GptSuggestion";
import {useDispatch} from "react-redux";
import {addgptresults} from "../utils/Gptslice";
import {useSelector} from "react-redux";
import Movielist from "./Movielist"
const Gpt=()=>{
  const searchText=useRef(null);
  const dispatch=useDispatch();
  //search the movie in the tmdb api and return results
  const fetchMovie=async(movi)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movi+'&include_adult=false&language=en-US&page=1', options)
 const json=await data.json();
 return json.results;
  }
  const handleSearch=async()=>{
    console.log("API Key:", import.meta.env.VITE_GEMINI_API_KEY);
console.log(searchText.current .value);
    //i can make an api call to the open ai to get the movie results
  const gptquery="Act as a movie recommendation system and suggest movies based on the following query:"+searchText.current.value+"onlygiveme names of 5 movies and comma seperated movie like the example results:gadar,sholy,sholay,"
 const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: gptquery,
});
 //Azaz Apna Apna,Hera Pheri,3 Idiots,Andaz Apna Apna
const movieResults=response.text.split(",");//after
console.log(movieResults);
//["Azaz Apna Apna","Hera Pheri","3 Idiots","Andaz Apna Apna"]
//for each movie i will call tmdb api and i will find hte results
//for each movie i will call the tmdb api and i will find the results
const data=movieResults.map(movie=>fetchMovie(movie));
//it will return 5 promises [promise,promise,promise,promise,promise] because it is asynchronus
const tmdbresult=await Promise.all(data);//it will wait for all the promises to resolve and return the results
console.log(tmdbresult);
dispatch(addgptresults({movienames:movieResults, tmdbresults:tmdbresult}));
  }
  const gpt=useSelector((store=>store.gpt));
  const {movienames,tmdbresults}=gpt;
   return(
    <>
      <div className="items-center w-full min-h-screen bg-gradient-to-b from-[#0D1240] via-[#17164A] to-[#2B0F36] bg pt-30">
        <h1 className="text-6xl font-bold text-center text-white/90">CineVerse AI Search</h1>
        <p className="text-lg text-center pt-4 text-white/80">Explore movies, actors, and genres instantly with AI recommendations</p>
        <div className="flex justify-center pt-6 gap-4 ">
        <input ref={searchText} className="bg-black text-white text-lg text-center px-4 w-[50%] py-4 rounded-full placeholder:text-white/50 border border-white/30 f " placeholder="Search any movie, actor or genre...." />
      <button className="bg-purple-900 cursor-pointer text-white px-2 rounded-lg hover:bg-purple-700 transition duration-300"
       onClick={handleSearch}
 > Search</button>
        </div>
      
    <div className="m-5 gap-3 text-white/80 bg">
    {movienames && tmdbresults ? (
      movienames.map((name,index)=>{
        return <Movielist key={movienames[index]} movies={tmdbresults[index]} title={movienames[index]}/>
      })
    ) : null}
   </div>
         <p className="text-lg text-center pt-15 text-white/80">Search for movies, actors, or genres to get personalized recommendations.</p>
        <div className="flex justify-center pt-35">
        <div className="flex justify-center m-8 bg-[#1A1038] p-4 rounded-lg text-white/80 text-lg  w-[80%] mx-auto text-center "> 
          <p>Try searching for genres, actors, or moods. CineVerse AI will suggest the best movies tailored to your preferences. Use keywords like "action", "romantic", or "thriller" for better results.</p>
        </div>
        </div>  
        </div>
  <div>
</div>
</>
 )
}
export default Gpt;