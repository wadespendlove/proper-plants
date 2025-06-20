const OnClick = (
  individualPlant,
  setSelectedPlant,
  plants,
  selectedPlant,
  setCart,
  cart
) => {
  setSelectedPlant(individualPlant);
  const foundPlant = plants.find((selectedPlant) => {
    return selectedPlant === individualPlant;
  });
  if (!foundPlant) return;
  const alreadyInCart = cart.some(
    (individualPlant) => individualPlant.id === foundPlant.id
  );
  if (alreadyInCart) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === foundPlant.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
  } else {
    const cartItem = { ...foundPlant, quantity: 1 };
    setCart((cart) => [cartItem, ...cart]);
  }
};

export default OnClick;
