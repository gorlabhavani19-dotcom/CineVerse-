import { IMG_CDN_URL } from "../utils/Constant";

const Moviecart=({posterPath})=>{
  if(!posterPath) return null;
    return(
  <><div className="w-50 pr-4 rounded-lg hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
    <img alt="Movie cart" src={IMG_CDN_URL + posterPath}></img>
    </div></>
        )
}
export default Moviecart;