import { useState } from "react";

export default function TransferForm() {
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`Transfer ${amount} to ${toAccount}`);
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Recipient Account"
        value={toAccount}
        onChange={(e) => setToAccount(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
