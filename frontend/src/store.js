import {configureStore} from '@reduxjs/toolkit'
import authReducer from'./slices/Authslice'
import { apiSlice } from './slices/Apislice';

const store=configureStore({
    reducer:{
    auth:authReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:(getDefaultmiddleware)=>getDefaultmiddleware().concat(apiSlice.middleware),
    devTools:true
})


export default store;

