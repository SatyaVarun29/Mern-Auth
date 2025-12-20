import {configureStore} from '@reduxjs/toolkit'

const store=configureStore({
    reducer:{},
    middleware:(getDefaultmiddleware)=>getDefaultmiddleware(),
    devTools:true
})


export default store;

