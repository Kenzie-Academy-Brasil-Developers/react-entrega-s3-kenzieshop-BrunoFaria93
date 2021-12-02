import styles from "./styles.css";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/user/thunks";
import { logoutAction } from "../../store/modules/user/actions";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from 'react-hot-toast'
const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

const logout = () => {
    dispatch(logoutAction(''))
    localStorage.clear()
    history.push('/login')
    toast.success(`Volte sempre!`)
    setTimeout(function(){ 
        window.location.reload(false)
    }, 500);
}


  return (
    <header className="header">
      <button className="logo" onClick={() => history.push('/')}>
        KenzieShop
      </button>
      <div className="nav">
        <button className="cart" onClick={() => history.push("/cart")}>
          <FiShoppingCart className="cart-icon" />
          <span className="spanCart">{cart.length}</span>
        </button>

        <button className="cart" onClick={() => logout()}>
          <FiLogOut className="cart-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
