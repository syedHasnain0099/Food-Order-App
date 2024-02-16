import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  const showCart = () => {
    setProgress("cart");
  };

  const hideCart = () => {
    setProgress("");
  };
  const showCheckout = () => {
    setProgress("checkout");
  };
  const hideCheckout = () => {
    setProgress("");
  };

  return (
    <UserProgressContext.Provider
      value={{ progress, showCart, hideCart, showCheckout, hideCheckout }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};
