export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-blue-100 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Account Balances</h2>
        <ul className="text-sm space-y-1">
          <li>USD Treasury: $1,000,000</li>
          <li>NGN Treasury: ₦150,000,000</li>
          <li>KES Treasury: KSh 20,000,000</li>
        </ul>
      </div>
      <div className="p-4 bg-green-100 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Recent Transfers</h2>
        <ul className="text-sm space-y-1">
          <li>$50,000 → Nigeria FX Market</li>
          <li>₦20M → Zenith Holdings</li>
          <li>KSh 2M ← M-Pesa Treasury</li>
        </ul>
      </div>
    </div>
  )
}
// This component displays a simple dashboard with account balances and recent transfers.