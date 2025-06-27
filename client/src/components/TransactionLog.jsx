import { useTreasury } from "../context/TreasuryContext";
const TransactionLog = () => {
  const { transactions } = useTreasury();
  return (
    <div className="mt-6 bg-white p-4">
      <h2>Transaction Log</h2>
      {transactions.map(tx => <div key={tx.id}><strong>{tx.from}</strong> → <strong>{tx.to}</strong> {tx.amount} ({tx.currency})<br/>{tx.note} <small>{new Date(tx.timestamp).toLocaleString()}</small></div>)}
    </div>
  );
};
export default TransactionLog;