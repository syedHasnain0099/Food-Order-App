import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../utils/formatting";
import { CartContext } from "../context/CartContext";
import { UserProgressContext } from "../context/UserProgressContext";
import Button from "./UI/Button";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getCartTotal, addToCart, removeFromCart } =
    useContext(CartContext);

  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? () => hideCart() : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            name={cartItem.name}
            quantity={cartItem.quantity}
            price={cartItem.price}
            onIncrease={() => addToCart(cartItem)}
            onDecrease={() => removeFromCart(cartItem)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(getCartTotal())}</p>
      <p className="modal-actions">
        <Button textOnly onClick={() => hideCart()}>
          {" "}
          Close
        </Button>
        {cartItems.length > 1 && (
          <Button onClick={() => showCheckout()}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
