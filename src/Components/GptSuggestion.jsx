import {useSelector} from "react-redux";
import Movielist from "./Movielist";
const GptSuggestion = () => {
  const gpt=useSelector((store=>store.gpt));
  const {movienames,tmdbresults}=gpt;
  if(!movienames||!tmdbresults)return null;
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#0D1240] via-[#17164A] to-[#2B0F36] ">
    <div className="m-5 gap-3 text-white/80 bg">
    {movienames.map((name,index)=>{
      return <Movielist key={movienames[index]} movies={tmdbresults[index]} title={movienames[index]}/>
    })}
   </div>
    </div>
  );
};

export default GptSuggestion;
