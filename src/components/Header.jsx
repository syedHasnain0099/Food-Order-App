import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../context/CartContext";
import { UserProgressContext } from "../context/UserProgressContext";
const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const totalCartItems = cartItems.reduce(
    (totalNumberOfItems, cartItem) => totalNumberOfItems + cartItem.quantity,
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logoImg" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={() => showCart()}>
          Cart {totalCartItems}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
