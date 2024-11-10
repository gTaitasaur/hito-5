const CardPizza = ({ pizza }) => {
  return (
    <div className="PizzaCard">
      <hr />
      <h3>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h3>
      <img src={pizza.img} alt={pizza.name} />
      <p><b>Descripción: </b>{pizza.desc}</p>
      <p><b>Precio:</b> ${pizza.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default CardPizza;
