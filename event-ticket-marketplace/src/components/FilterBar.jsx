export default function FilterBar() {
  return (
    <div className="flex gap-4 mt-4">
      <select className="px-4 py-2 border rounded-lg">
        <option>All Categories</option>
        <option>Concert</option>
        <option>Conference</option>
        <option>Sports</option>
      </select>

      <select className="px-4 py-2 border rounded-lg">
        <option>Any Price</option>
        <option>Free</option>
        <option>Paid</option>
      </select>
    </div>
  );
}
