import { useState } from "react";
import  Form  from "./Form";
import  Logo  from "./Logo";
import  PackingList from "./PackingList";
import Stats from "./Stats";


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Pad", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setAddItems] = useState([]);
  console.log(items, "items");
  function handleAddItem(item) {
    setAddItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setAddItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setAddItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setAddItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
