import React from "react";
import Item from "../models/Item";

interface ItemListProperties {
  items: Item[];
  onRemove: (id: number) => void;
}

const ItemList: React.FC<ItemListProperties> = (props: ItemListProperties) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.category} - ${item.price}
          <button onClick={() => props.onRemove(item.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
