

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    cart: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        incrementCart: (state) => {
            state.cart += 1
        }
    }

})

// // Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer