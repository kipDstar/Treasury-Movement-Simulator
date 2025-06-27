const AccountCard = ({ account }) => (
  <div className="bg-white shadow p-4 rounded">
    <h2 className="font-bold">{account.name}</h2>
    <p>{account.currency}</p>
    <p>{account.balance.toLocaleString()}</p>
  </div>
);
export default AccountCard;