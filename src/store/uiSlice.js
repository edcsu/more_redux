import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'ui',
    initialState: { isCartVisible: false },
    reducers: {
        toggle(state){
            state.isCartVisible = !state.isCartVisible
        }
    }
})

export const uiSliceActions = cartSlice.actions;

export default cartSlice.reducer