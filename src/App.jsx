import { useState } from "react";
import PLANTS from "./data.js";
import Plants from "./Plants.jsx";
import Cart from "./Cart.jsx";

export default function App() {
  const [plants, setplant] = useState(PLANTS);
  const [plantsInCart, setPlantsInCart] = useState([]);
  const [cart, setCart] = useState(plantsInCart);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const cartItems = [];
  return (
    <>
      <h1>ProperPlants</h1>
      <section id="plant-store">
        <section id="plant-listing">
          <Plants
            plants={plants}
            setSelectedPlant={setSelectedPlant}
            plants={plants}
            selectedPlant={selectedPlant}
            setCart={setCart}
            cart={cart}
          />
        </section>
        <section id="cart">
          <Cart
            plants={plants}
            selectedPlant={selectedPlant}
            cart={cart}
            setCart={setCart}
          />
        </section>
      </section>
    </>
  );
}
