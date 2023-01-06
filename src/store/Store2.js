import { configureStore } from "@reduxjs/toolkit"
import Reducer from "../reducer/Reducer"

export const  Store2 = configureStore ({
    reducer: {
        counter: Reducer,
    },
}); 


export default Store2;