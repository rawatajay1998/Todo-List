import { useState } from "react";
import ListItem from "./ListItem";

function PackingList({ items, onDeleteItems, onToggleItem, onClearAll }) {
  return (
    <>
      <ul className={`packing-list ${items.length < 1 ? "empty" : ""}`}>
        {items.map((packingItem) => {
          return (
            <ListItem
              onDeleteItems={onDeleteItems}
              packingItem={packingItem}
              onToggleItem={onToggleItem}
              onClearAll={onClearAll}
              key={packingItem.desciption}
            />
          );
        })}
      </ul>
      <button className="clear-all" onClick={onClearAll}>
        Clear All
      </button>
    </>
  );
}

export default PackingList;
