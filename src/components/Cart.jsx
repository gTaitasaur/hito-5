import { pizzaCart } from "../data/pizzas.js";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const incrementQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, count: Math.max(pizza.count - 1, 0) } : pizza
    ));
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);

  return (
    <div>
      {cart.map(({ id, name, price, count, img }) => (
        <div key={id}>
          <img src={img} alt={name} style={{ width: "100px", height: "100px" }} />
          <h3>{name}</h3>
          <p>Precio: ${price}</p>
          <p>Cantidad: {count}</p>
          <button onClick={() => incrementQuantity(id)}>+</button>
          <button onClick={() => decrementQuantity(id)}>-</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
