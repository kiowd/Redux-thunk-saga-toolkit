import React, { useState, useEffect } from "react";
import {connect, useDispatch, useSelector} from 'react-redux';
import {addToCartAction, removeFromCartAction, setAlertAction} from '../redux/cartActions'

const items = [
  {
    id: 1,
    name: "overwatch",
    price: 15
  },
  {
    id: 2,
    name: "fortnite",
    price: 25
  },
  {
    id: 3,
    name: "minecraft",
    price: 35
  }
];


const Shop = ({cart, cartTotal, addToCartAction, removeFromCartAction}) => {
  //const [cart, setCart] = useState([]);
  //const [alert, setAlert] = useState("");
  //const [cartTotal, setCartTotal] = useState(0);

  const { alert } = useSelector((state)=> state.alertReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   total();
  // }, [cart]);

  // const total = () => {
  //   let totalVal = 0;
  //   for (let i in cart) {
  //     totalVal += cart[i].price;
  //   }

  //   setCartTotal(totalVal);
  // };

  const addToCart = (el) => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === el.id) addIt = false;
    }
    if (addIt) {
      //setCart([...cart, el]);
      addToCartAction(el, cart);
     // setAlert("");
     dispatch(setAlertAction(''));
    } 
    //else setAlert(`${el.name} is already in your cart`);
    else dispatch(setAlertAction(`${el.name} is already in your cart`));
  };

  const removeFromCart = (el) => {
    // let hardCopy = [...cart];
    // hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
   // setCart(hardCopy);
    removeFromCartAction(el, cart, cartTotal);
  //  setAlert("");
  dispatch(setAlertAction(''));

  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input className='btn' type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input className='btn' type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      <h3>STORE</h3>
      <div className='mg'>{listItems}</div>
      <h3>CART</h3>
      <div className='checkout'>{cartItems}</div>
      <div className='total'>Total: ${cartTotal}</div>
      <div className='warning'>Alert Message: {alert}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    cartTotal: state.cartReducer.cartTotal


  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAction: (cart, cartTotal) => dispatch(addToCartAction(cart, cartTotal)),
    removeFromCartAction: (item,cart, cartTotal) => dispatch(removeFromCartAction(item,cart, cartTotal))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
