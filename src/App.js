import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Pad", quantity: 12, packed: true },
// ];

export default function App() {
  
  const [items, setAddItems] = useState([]);
console.log(items,"items")
  function handleAddItem(item) {
    setAddItems([...items, item]);
  }

  function handleDeleteItem(id){
  
    setAddItems((items) => items.filter((item) => item.id !== id));
}
 function handleToggleItem(id){
  setAddItems((items) =>
   items.map((item)=> 
   item.id === id ? {...item, packed :!item.packed} 
   :item 
   )
   );
 }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem}
       onToggleItem={handleToggleItem}/>
      
      {/* <Stats items={items} /> */}
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>🏝️Far Away 🧳</h1>
    </div>
  );
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("shoe");
  const [quantity, setQuantity] = useState(1);
 

 

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    
    onAddItems(newItem);
    
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({items,onDeleteItem,onToggleItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} 
          onToggleItem={onToggleItem} key={item.id} />
        ))}
      </ul>
    </div>
  );

function Item({item,onDeleteItem,onToggleItem}) {
  // console.log(item,"okay")
  return (
    <li>
      <input type="checkbox"
       checked={item.packed} 
      onChange = {()=> onToggleItem(item.id)} />
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick = {()=> onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
}

// function Stats({ items }) {
//   const totalItems = items.length;
//   const packedItems = items.filter(item => item.packed).length;
//   const packedPercentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

//   return (
//     <footer className="stats">
//       <em>
//         🧳 You have {totalItems} items on your list, and already packed {packedItems} ({packedPercentage}%)
//       </em>
//     </footer>
//   );

// }}
