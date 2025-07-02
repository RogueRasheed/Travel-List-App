import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackagingList from "./PackagingList";

const initialItems = [
  { description: "Girlfriend", quantity: 1, packed: false, id: 1 },
  { description: "Sunglasses", quantity: 5, packed: false, id: 2 },
  { description: "Beach Shirts", quantity: 4, packed: false, id: 3 },
];

export default function App() {
  const [items, setItems] = useState([initialItems[0], initialItems[1], initialItems[2]]);
  
  function handleAddItems(item) {
  setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  } 

  function handleToggleItem(id) {
    setItems(items => 
      items.map(item => 
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  } 

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList items={items} onDeleteItem={handleDeleteItem} 
      onClearList={handleClearList}
      onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  );
}





 