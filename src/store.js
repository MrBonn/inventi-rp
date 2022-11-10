import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './Posts/postsSlice'



export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})