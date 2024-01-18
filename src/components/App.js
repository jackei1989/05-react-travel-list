import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);

  function handlerAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handlerDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlerToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handlerClearList() {
    const confirmed = window.confirm("Are you sure clear list?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handlerAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handlerDeleteItem}
        onToggleItem={handlerToggleItem}
        onClearList={handlerClearList}
      />
      <Stats items={items} />
    </div>
  );
}
