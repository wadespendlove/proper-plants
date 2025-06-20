import OnClick from "./OnClick";

const Plants = ({
  plants,
  setSelectedPlant,
  plantsInCart,
  selectedPlant,
  setCart,
  cart,
}) => {
  return (
    <>
      <h2>Plants</h2>
      <section id="plant-container">
        {plants.map((individualPlant) => {
          return (
            <section id="plant-card" key={individualPlant.id}>
              <section id="plant-image">
                <p id="plant">{individualPlant.image}</p>
              </section>
              <h3>{individualPlant.name}</h3>
              <button
                onClick={() =>
                  OnClick(
                    individualPlant,
                    setSelectedPlant,
                    plants,
                    selectedPlant,
                    setCart,
                    cart
                  )
                }
              >
                Add to cart
              </button>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Plants;
