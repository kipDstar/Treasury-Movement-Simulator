import { useState } from "react";
import { useTreasury } from "../context/TreasuryContext";
import { fxRates } from "../data/fxRates";

const TransferForm = () => {
  const { accounts, transferFunds } = useTreasury();
  const [fromId, setFromId] = useState(""), [toId, setToId] = useState(""), [amount, setAmount] = useState(""), [note, setNote] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const from = accounts.find(a => a.id == fromId), to = accounts.find(a => a.id == toId);
    const fxRate = from.currency === to.currency ? 1 : fxRates[from.currency]?.[to.currency] || 1;
    transferFunds({ fromId: from.id, toId: to.id, amount, note, fxRate });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <select value={fromId} onChange={e => setFromId(e.target.value)}>{accounts.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}</select>
      <select value={toId} onChange={e => setToId(e.target.value)}>{accounts.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}</select>
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <input value={note} onChange={e => setNote(e.target.value)} placeholder="Note" />
      <button type="submit">Transfer</button>
    </form>
  );
};
export default TransferForm;
// This component provides a form for transferring funds between accounts, allowing users to select the source and destination accounts, enter the amount, and add a note.