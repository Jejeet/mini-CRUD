export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your box!</em>
      </p>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! ready to go ✈️"
          : `🧳 You have {totalItems} items on your list, and already packed 
        {packedItems} ({packedPercentage}%)`}
      </em>
    </footer>
  );
}
