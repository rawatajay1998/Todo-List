import "./App.css";
import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  const [animate, setAnimate] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function hadleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handlerClearAll() {
    setItems([]);
    setAnimate();
    console.log(animate);
  }

  return (
    <div className="App">
      <h1 className="logo">Todo List</h1>
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={hadleToggleItem}
        onClearAll={handlerClearAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
