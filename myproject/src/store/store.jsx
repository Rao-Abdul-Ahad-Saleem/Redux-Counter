// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlide'


const store = configureStore({
    reducer: {
        counter: counterReducer
    },

})

export default store