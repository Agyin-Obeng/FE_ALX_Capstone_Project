export default function EventCard({ title, location, date, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover rounded-md"
      />

      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-500">{date}</p>

      <p className="mt-2 font-semibold text-blue-600">GHS {price}</p>
    </div>
  );
}
