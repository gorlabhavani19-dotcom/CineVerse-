import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {options} from '../utils/Constant';
import {addHorror} from '../utils/movieSlice';
const useHorror=() =>{
    const dispatch=useDispatch();
    const horrorMovies=useSelector((store)=>store.movies.horrorMovies);
    const getHorror = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', options);
        const json = await data.json();
        dispatch(addHorror(json.results));

    };
    useEffect(() => {
        if
        (!horrorMovies) {
            getHorror();
        }
    }, []);
}
export default useHorror;