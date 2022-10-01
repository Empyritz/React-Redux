import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
   try {
    const resp = await axios(url)
    return resp.data
   } catch(error) {

   }
    // -------------------------   
    // return fetch(url) 
    //     .then(res => res.json())
    //     .catch(err => console.log(err))
})

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        amount: 0,
        total: 0,
        isLoading: true,
    },
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            state.amount = 0
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount +1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount -1
        },
        claculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false
        }
    }

}) 


const url = "https://course-api.com/react-useReducer-cart-project"


export default cartSlice.reducer
export const cartActions = cartSlice.actions
// export const { clearCart } = cartSlice.actions