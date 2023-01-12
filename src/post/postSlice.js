import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
   
   
export const getPosts = createAsyncThunk(
 'post/getPosts',
 async(args, {dispatch, getSate}) => {
     return fetch(
         `https://jsonplaceholder.typicode.com/posts`
     ).then(y => y.json());
 }
)

const postSlice = createSlice({
     name: 'post',
     initialState:{
         list: [],
         status: null
     },

     extraReducers: {
         [getPosts.pending]: (state, action) => {
             state.status = 'loading'
         },

         [getPosts.fulfilled]: (state, action) => {
             state.list = action.payload
             state.status = 'success'
         },

         [getPosts.rejected]: (state, action) => {
             state.status = 'failed'
         }
     }
})


export default postSlice.reducer;