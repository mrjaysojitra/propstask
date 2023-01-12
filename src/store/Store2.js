import { configureStore } from "@reduxjs/toolkit"
import { Post2 } from "../post/Post2";
import postslice from "../post/postSlice";
import postSlice2 from "../post/postSlice2";


export const  Store2 = configureStore ({
    reducer: {

        post: postslice,
        Post2: postSlice2
    },
}); 


export default Store2;