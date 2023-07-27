import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function onsubmitHandler(e) {
    e.preventDefault();
    if (!description) return;
    if (!date) return;

    const newItem = { description, date, packed: false, id: Date.now() };

    onAddItems(newItem);

    console.log(newItem);

    setDescription("");
    setDate("");
  }

  return (
    <>
      <p className="date-title">Qty.</p>
      <form onSubmit={onsubmitHandler}>
        <input
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
