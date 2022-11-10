import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async ({limit}) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then((res) => res.json())
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'loading'
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = 'success'
        },
        [getPosts.rejected]: (state) => {
            state.status = 'failed'
        },
    },
    reducers: {
        removePost: (state, payload) => {
            state.list = state.list.filter((item) => item.id !== payload.payload) 
        }
    }
})

export const { removePost } = postsSlice.actions;

export default postsSlice.reducer