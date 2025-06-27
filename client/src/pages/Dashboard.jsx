import AccountCard from "../components/AccountCard";
import TransferForm from "../components/TransferForm";
import TransactionLog from "../components/TransactionLog";
import { useTreasury } from "../context/TreasuryContext";

const Dashboard = () => {
  const { accounts } = useTreasury();
  return (
    <div className="p-6">
      <h1>Treasury Simulator</h1>
      <div className="grid md:grid-cols-3 gap-4">{accounts.map(acc => <AccountCard key={acc.id} account={acc} />)}</div>
      <TransferForm />
      <TransactionLog />
    </div>
  );
};
export default Dashboard;

// This component serves as the main dashboard for the Treasury Movement Simulator, displaying account cards, a transfer form, and a transaction log.