if (!selectedPlant) {
  return (individualPlant.quantity = 1);
}
individualPlant.quantity = individualPlant.quantity + 1;

const foundPlants = plantsInCart.find((individualPlant) => {
  individualPlant === selectedPlant;
});
plantsInCart.quantity = foundPlants ? plantsInCart.quantity + 1 : [];

plantsInCart.push(individualPlant);
{
  console.log(typeof plantsInCart);
}

// => {
//     return individualPlant === selectedPlant;
//   }); // individualPlant

// plantsInCart.quantity = foundPlants ? plantsInCart.quantity + 1 : [];

// const isPlantInCart = foundPlants ? plantsInCart : null;

// if (!selectedPlant) {
//   return (
//     <div id="cart-details">
//       <h2>Cart</h2>
//       <p>Your cart is empty</p>
//     </div>
//   );
// }
// return (
//   <div id="cart-details">
//     <h2>Cart</h2>
//     <section id="cart-items">
//       <p>
//         {cartItems.image} {cartItems.name}
//       </p>
//       <button>-</button> quantity <button>+</button>
//     </section>
//   </div>
// );
