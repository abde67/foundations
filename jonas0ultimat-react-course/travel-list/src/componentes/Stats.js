export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  else {
    const numItems = items.length;
    const numPaked = items.filter((item) => item.packed).length;
    const pesentage = Math.round((numPaked / numItems) * 100);
    return (
      <footer className="stats">
        <p>
          {pesentage === 100
            ? "you got everything! ready to go ✈"
            : `you take ${numItems} item on ur list, and u already packed ${numPaked}(
        ${pesentage}%)`}
        </p>
      </footer>
    );
  }
}
