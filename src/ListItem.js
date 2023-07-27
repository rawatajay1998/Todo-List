import { motion } from "framer-motion";

function ListItem({ packingItem, onDeleteItems, onToggleItem }) {
  return (
    <>
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
        <li className="packingItem">
          <input
            type="checkbox"
            value={packingItem.packed}
            onChange={() => onToggleItem(packingItem.id)}
          />

          <div className={`des-qty ${packingItem.packed ? "packed" : ""}`}>
            <span className="date">{packingItem.date}</span>{" "}
            <span className="description">{packingItem.description}</span>
          </div>

          <button
            className="delete-btn"
            onClick={() => onDeleteItems(packingItem.id)}
          >
            &times;
          </button>
        </li>
      </motion.div>
    </>
  );
}

export default ListItem;
