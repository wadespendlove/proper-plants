const DynamicCart = ({ plants, selectedPlant, cart, setCart }) => {
  return (
    <section id="cart-items">
      <ul>
        {cart.map((individualPlant) => {
          return (
            <div id="cart-items" key={individualPlant.id}>
              <li>
                {individualPlant.image} {individualPlant.name}
              </li>
              <button
                onClick={() => {
                  const updatedCart = cart
                    .map((plant) => {
                      if (plant.id === individualPlant.id) {
                        return { ...plant, quantity: plant.quantity - 1 };
                      }
                      return plant;
                    })
                    .filter((plant) => plant.quantity > 0);
                  setCart(updatedCart);
                }}
              >
                -
              </button>{" "}
              {individualPlant.quantity}{" "}
              <button
                onClick={() => {
                  const updatedCart = cart.map((plant) => {
                    if (plant.id === individualPlant.id) {
                      return { ...plant, quantity: plant.quantity + 1 };
                    }
                  });
                  setCart(updatedCart);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default DynamicCart;
