import DynamicCart from "./DynamicCart.jsx";

const Cart = ({ plants, selectedPlant, cart, setCart }) => {
  if (!selectedPlant || cart.length === 0) {
    return (
      <div id="cart-details">
        <h2>Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }
  return (
    <div id="cart-details">
      <h2>Cart</h2>
      <DynamicCart
        plants={plants}
        selectedPlant={selectedPlant}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Cart;
