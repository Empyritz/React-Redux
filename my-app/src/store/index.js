import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { configure } from "@testing-library/react";

const counterSlice = createSlice({
    name: "counter", 
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter ++
        },
        decrement(state, action) {
            state.counter --
        },
        addBy(state, action) {
            state.counter += action.payload
        }
    }
})
export const actions = counterSlice.actions
const store = configureStore({
    reducer: counterSlice.reducer 
})
export default store;




// -------------------- FIRST STORE -----------------------


// import { legacy_createStore as createStore } from "redux"

// const reducerFn = (state={ counter: 20 }, action) => {
//     //Synchronus Function 
//     //We should not mutate the orginal state 

//     if(action.type === "INC"){
//         return { counter: state.counter + 1 }
//     }
//     if(action.type === "DEC"){
//         return { counter: state.counter - 1 }
//     }
//     if(action.type === "ADD"){
//         return { counter: state.counter + action.payload }
//     }

//     return state;
// }

// const store = createStore(reducerFn)

// export default store;