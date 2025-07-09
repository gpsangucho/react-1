import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartView() {
  const { items, addItem, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {items.map(item:any => (
          <li key={item.id}>
            {item.name} <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: Date.now(), name: 'Nuevo producto' })}>Agregar producto</button>
    </div>
  );
}