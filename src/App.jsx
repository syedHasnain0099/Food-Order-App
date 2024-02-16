import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./context/CartContext";
import { UserProgressProvider } from "./context/UserProgressContext";
function App() {
  return (
    <UserProgressProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;
