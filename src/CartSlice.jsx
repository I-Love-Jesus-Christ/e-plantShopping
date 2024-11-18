import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  cart_quantity_count: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.cart_quantity_count += 1;
    },

    removeItem: (state, action) => {
      const index = state.items.findIndex(function(cart_item){
        return cart_item.name == action.payload.name;
      });
      state.items.splice(index, 1);
      state.cart_quantity_count -= action.payload.quantity;
    },

    updateQuantity: (state, action) => {
      const index = state.items.findIndex(function(cart_item){
        return cart_item.name == action.payload.item.name;
      });
      const difference = action.payload.difference;
      state.cart_quantity_count += difference;
      state.items[index].quantity += difference;     
    }
  }
});

export const { addItem, removeItem, updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;
