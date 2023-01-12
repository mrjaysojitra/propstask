import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export {} from '@reduxjs/toolkit'


export const getPosts2 = createAsyncThunk(
    'post2/getPosts2',
    async(args, {dispatch, getSate}) => {
        return fetch(
            `https://fakestoreapi.com/products`).then(y => y.json());
    }
)




const postSlice2 = createSlice({
    name: 'post2',
    initialState: {
        list: [],
        status: null
    },


    extraReducers: {
        [getPosts2.pending]: (state, action) => {
            state.status = 'loading'
        },

        [getPosts2.fulfilled]: (state, action) => {
            state.list = action.payload
            state.status = 'success'
        },

        [getPosts2.rejected]: (state, action) => {
            state.status = 'failed'
        },

    }
})
 

export default postSlice2.reducer;
