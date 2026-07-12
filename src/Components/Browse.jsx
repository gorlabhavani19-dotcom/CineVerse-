import Header from './Header'
import useNow from '../hooks/usegetNow';
import { Main } from './MainContainer.jsx';
import Secondary from './SecondaryContainer.jsx';
import usePopular from '../hooks/usegetPopular.js';
import useTrending from '../hooks/useTrending';
import useHorror from '../hooks/useHorror';
import Gpt from './Gpt.jsx';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGpt=useSelector(store=>store.gpt.showGpt);

  useNow();
  usePopular();
  useTrending();
  useHorror();
    return (
       <div>
    <Header/>
    {showGpt?(<Gpt/>):
   <>
    <Main/>
    <Secondary/>
    </>}
  </div>
  )
}

export default Browse;