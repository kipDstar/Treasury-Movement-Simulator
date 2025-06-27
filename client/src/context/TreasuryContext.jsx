import { createContext, useContext, useEffect, useState } from "react";
const TreasuryContext = createContext();
export const useTreasury = () => useContext(TreasuryContext);

export const TreasuryProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/accounts/").then(res => res.json()).then(setAccounts);
    fetch("http://localhost:5000/api/transactions/").then(res => res.json()).then(setTransactions);
  }, []);

  const transferFunds = ({ fromId, toId, amount, note, fxRate = 1 }) => {
    fetch("http://localhost:5000/api/transactions/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from_id: fromId, to_id: toId, amount, note, fx_rate: fxRate, timestamp: new Date().toISOString() })
    }).then(res => {
      if (res.ok) {
        fetch("http://localhost:5000/api/accounts/").then(res => res.json()).then(setAccounts);
        fetch("http://localhost:5000/api/transactions/").then(res => res.json()).then(setTransactions);
      }
    });
  };

  return <TreasuryContext.Provider value={{ accounts, transactions, transferFunds }}>{children}</TreasuryContext.Provider>;
};
// This context provides access to treasury accounts and transactions, allowing components to fetch and update data.