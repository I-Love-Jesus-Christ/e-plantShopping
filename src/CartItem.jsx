import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity} from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, signal_item_removed_from_cart }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total_cart_amount = 0;
    cart.forEach(function (cart_item) {
      let total_cart_item_cost = calculateTotalCost(cart_item);
      total_cart_amount += total_cart_item_cost;
    })
    return total_cart_amount;
  };


  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Checkout functionality coming soon!');
  };

  const handleIncrement = (item) => {
    const difference = 1;
    const payload = {
      item: item,
      difference: difference
    };
    dispatch(updateQuantity(payload));
  };

  const handleDecrement = (item) => {
    const difference = -1;
    const payload = {
      item: item,
      difference: difference
    };
    if (item.quantity == 1) {
      dispatch(removeItem(item));
      signal_item_removed_from_cart(item.name);
    } else {
      dispatch(updateQuantity(payload));
    }
    
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
    signal_item_removed_from_cart(item.name);
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let string_of_cost_number = item.cost.slice(1);
    let cost_number = Number(string_of_cost_number);
    let total_cost = item.quantity * cost_number;
    return total_cost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={function(event){
          handleCheckoutShopping(event);
        }}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


