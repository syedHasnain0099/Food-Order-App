import React, { useContext, useState } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../context/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button.jsx";
import { UserProgressContext } from "../context/UserProgressContext.jsx";
import Input from "./UI/Input";
const Checkout = () => {
  const { getCartTotal, cartItems, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const consumerData = Object.fromEntries(fd.entries());
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            items: cartItems,
            customer: consumerData,
          },
        }),
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={() => hideCheckout()}>
        <h2>Success !</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
        <p className="modal-actions">
          <Button
            onClick={() => {
              clearCart();
              hideCheckout();
              setData("");
            }}
          >
            Okay
          </Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={progress === "checkout"} onClose={() => hideCheckout()}>
      <form onSubmit={handleSubmit}>
        {" "}
        <h2>Checkout</h2>
        <p>Total Amount :{currencyFormatter.format(getCartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={() => hideCheckout()}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
