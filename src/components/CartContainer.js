import React, { useEffect} from "react";
// component
import CartItem from "./CartItem";
// redux stuff
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
// redux action
import shoppingCartReducer, {clearCard} from "../redux/ducks/shopping-card";
import {getTotals} from "../redux/ducks/shopping-card";

const CartContainer = () => {

  const {cardItems, total} = useSelector(state => state.shoppingCard)
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cardItems])

  const handleClear = () => {
      dispatch(clearCard())
  }

  if (cardItems.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cardItems.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
        <button onClick={handleClear} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
