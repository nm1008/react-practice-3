import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div className="App">
      <TipCalculator
        bill={bill}
        setBill={setBill}
        setTip={setTip}
        setFriendTip={setFriendTip}
      />
      <Total bill={bill} tip={tip} friendTip={friendTip} />
    </div>
  );
}

function TipCalculator({ bill, setBill, setTip, setFriendTip }) {
  return (
    <>
      <div>
        <label>How Much was the bill? </label>
        <input
          value={bill}
          type="number"
          placeholder="Amount..."
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div>
        <label>How did you like the service? </label>
        <select onChange={(e) => setTip(Number(e.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely Amazing!(20%)</option>
        </select>
      </div>

      <div>
        <label>How did your friend like the service? </label>
        <select onChange={(e) => setFriendTip(Number(e.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely Amazing!(20%)</option>
        </select>
      </div>
    </>
  );
}

function Total({ bill, tip, friendTip }) {
  const totalTip = (tip + friendTip) / 2;
  const totalAmount = bill + totalTip;

  return (
    <>
      <h1>
        You pay ${totalAmount} (${bill} + {totalTip} tip)
      </h1>
    </>
  );
}

export default App;
