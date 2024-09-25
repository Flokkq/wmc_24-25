import "./App.css";
import Item from "./models/Item";
import ItemList from "./view/ItemList";

const items: Item[] = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
  },
  {
    id: 2,
    name: "Chair",
    category: "Furniture",
    price: 150,
  },
  {
    id: 3,
    name: "Book",
    category: "Stationery",
    price: 20,
  },
];

const removeItem = (item: number) => {
  items.filter((i) => i.id != item);
};

function App() {
  return <ItemList items={items} onRemove={removeItem} />;
}

export default App;
