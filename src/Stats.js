function Stats({ items }) {
  const itemsList = items.length;
  const packedItemsList = items.filter((item) => item.packed).length;

  return (
    <p className="stats">
      You have <strong>{itemsList} items</strong> in ypur list.
      <strong> {packedItemsList} items </strong> Items have peen checked.
    </p>
  );
}

export default Stats;
