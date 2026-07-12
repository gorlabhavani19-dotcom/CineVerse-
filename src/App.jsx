import {Provider} from "react-redux";
import './App.css';
import Body from "./Components/Body.jsx";
import appStore from "./utils/appStore";
function App() {
  console.log("App is rendering"); 
  return (
    <div>
   <Provider store={appStore}>
    <Body/>
   </Provider>
      </div>
    
  )
}

export default App
