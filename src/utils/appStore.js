import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import Gpt from "../Components/Gpt";
import gptReducer from "./Gptslice"
const appStore=configureStore(
    {
        reducer:{
             user:userReducer,
            movie:moviesReducer,
          gpt:gptReducer,
        }
    }
)
export default appStore;
