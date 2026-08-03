import { useState } from "react";
import "./App.css";
function Summary({ totalItems, purchasedItems }) {
  return (
    <section className="summary">
      <p>Total items: {totalItems}</p>
      <p>Purchased: {purchasedItems}</p>
    </section>
  );
}
function ItemForm({ onAddItem }) {
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onAddItem(value);
    setText("");
  }
  return (
    <form onSubmit={handleSubmit} className="item-form">
      <input
        aria-label="item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add an item"
      />
      <button type="submit">Add</button>
    </form>
  );
}
function ShoppingItem({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="shopping-item">
      <span
        style={{ textDecoration: item.purchased ? "line-through" : "none" }}
      >
        {item.text}
      </span>
      <div className="actions">
        <button onClick={() => onToggleItem(item.id)}>
          {item.purchased ? "Unmark" : "Mark as purchased"}
        </button>
        <button onClick={() => onDeleteItem(item.id)}>Delete</button>
      </div>
    </li>
  );
}
function ShoppingList({ items, onToggleItem, onDeleteItem }) {
  if (!items || items.length === 0) return <p>No items yet.</p>;
  return (
    <ul className="shopping-list">
      {items.map((it) => (
        <ShoppingItem
          key={it.id}
          item={it}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
export default function App() {
  const [items, setItems] = useState([]);
  function addItem(text) {
    const newItem = { id: Date.now().toString(), text, purchased: false };
    setItems((s) => [newItem, ...s]);
  }
  function toggleItem(id) {
    setItems((s) =>
      s.map((it) => (it.id === id ? { ...it, purchased: !it.purchased } : it)),
    );
  }
  function deleteItem(id) {
    setItems((s) => s.filter((it) => it.id !== id));
  }

  const purchasedItems = items.filter((it) => it.purchased).length;

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
        <ItemForm onAddItem={addItem} />
        <Summary totalItems={items.length} purchasedItems={purchasedItems} />
        <ShoppingList
          items={items}
          onToggleItem={toggleItem}
          onDeleteItem={deleteItem}
        />
      </div>
    </main>
  );
}
