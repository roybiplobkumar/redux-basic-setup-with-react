import { createSlice } from "@reduxjs/toolkit";

const counterSlices= createSlice({
 name :"counters",
 initialState: {value:3}, 
 reducers: {
   increment: (state, )=>{
    state.value++
   }, 
   decriment: (state, )=>{
    state.value--
   }
 }
})


export  default  counterSlices.reducer
export  const {increment, decriment}=counterSlices.actions