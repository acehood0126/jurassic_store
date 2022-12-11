import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import { Products } from "../../enum";

export interface CounterState {
  products: Array<IProduct>;
  cart: Array<number>;
}

const initialState: CounterState = {
  products: Products,
  cart: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<number>) => {
      state.cart.push(action.payload);
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.indexOf(action.payload);
      if (index > -1) state.cart.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = productSlice.actions;

export default productSlice.reducer;
