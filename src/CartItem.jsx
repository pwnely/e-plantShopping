
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';
import { updateQuantity, removeItem, addItem, } from './CartSlice';


const CartItem = ({onContinueShopping}) => {
    if (typeof onContinueShopping !== 'function') {throw new Error(message,'onContinueShopping is required and must be a function');
}


  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, +0);
  };

  const handleContinueShopping = () => {
    navigate('/product-list'); 
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    
   
 (item.quantity >1 )
   
        dispatch(addItem(item));
        console.log("incrementing item:", item.name, item.quantity,)

 
};

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.name, quantity: item.quantity - 1 })); // Correct dispatch
    } else {
      dispatch(removeItem(item.name)); 
    }
    console.log("decrementing item:", item.name, item.quantity,)
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}> {}
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">Total:{calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount"></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;


