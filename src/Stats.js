export default function Stats({ items }){

if(!items || items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your travel list</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round ((numPacked / numItems * 100));
  return (
    <div> 
      <footer className="stats">
        <em>You have {numItems} items on your list, and you already packed {numPacked} and that is {percentage}%</em>
      </footer>
    </div>
  );
}