import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal: (state , action) => {
            state.isOpen = true
        },
        closeModal: (state, action) => {
            state.isOpen = false
        }
    },
})

export default modalSlice.reducer
export const modalActions = modalSlice.actions