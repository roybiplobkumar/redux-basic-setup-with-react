import { configureStore } from "@reduxjs/toolkit";
import CounterRedusers from "../futures/counter/counterSlices"

const store=configureStore({
 reducer:{
  counters: CounterRedusers
 }
})

export  default store;