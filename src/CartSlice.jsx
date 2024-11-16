import { createSlice } from '@reduxjs/toolkit';

class CartItem {
  constructor(product) {
    this.product = product;
    this.quantity = 1;
  }
  calculate_total_cost(){
    let string_of_cost_number = this.product.cost.slice(1);
    let cost_number = Number(string_of_cost_number);
    let total_cost_number = this.quantity * cost_number;
    let total_cost = '$' + total_cost_number;
    return total_cost;
  }
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      let cart_item = new CartItem(action.payload);
      state.items.push(cart_item);
    },

    removeItem: (state, action) => {
      index = state.items.findIndex(function(cart_item){
        return cart_item.product.name == action.payload.product.name;
      });
      state.items.splice(index, 1);
    },

    updateQuantity: (state, action) => {
      index = state.items.findIndex(function(cart_item){
        return cart_item.product.name == action.payload.product.name;
      });
      state.items[index].quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
