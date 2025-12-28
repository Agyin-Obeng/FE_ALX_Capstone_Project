export default function CheckoutHistoryPage() {
  const history =
    JSON.parse(localStorage.getItem("checkoutHistory")) || [];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout History</h1>

      {history.length === 0 ? (
        <p className="text-gray-600">
          You haven’t purchased any tickets yet.
        </p>
      ) : (
        <div className="space-y-4">
          {history.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex justify-between"
            >
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Tickets: {item.quantity}
                </p>
              </div>
              <p className="font-bold text-blue-600">
                GHS {item.total}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
