import React from "react";
// redux stuff
import {useDispatch} from "react-redux";
// redux action
import {removeItem} from "../redux/ducks/shopping-card";
import {increaseItem} from "../redux/ducks/shopping-card";
import {decreaseItem} from "../redux/ducks/shopping-card";

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch()

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    const handleIncreaseItem = (id) => {
        dispatch(increaseItem(id))
    }

    const handleDecreaseItem = (id) => {
        dispatch(decreaseItem(id))
    }
    return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={()=> handleRemoveItem(id)}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={()=> handleIncreaseItem(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={()=> handleDecreaseItem({id, img, title, price, amount})}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
