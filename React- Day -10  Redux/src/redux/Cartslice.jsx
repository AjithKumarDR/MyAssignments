import { createSlice } from '@reduxjs/toolkit'
export const cartslice = createSlice({
    name:'blogs',
    initialState:[],
    reducers:{
      
    }
})

    export const {saveAllBlogs} = cartslice.actions
    export default cartslice.reducer