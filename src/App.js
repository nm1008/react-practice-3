import { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import FriendTip from "./FriendTip";
import Total from "./Total";
import { Reset } from "./Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Tip setTip={setTip} />
      <FriendTip setFriendTip={setFriendTip} />
      <Total bill={bill} tip={tip} friendTip={friendTip} />
      <Reset setBill={setBill} setTip={setTip} setFriendTip={setFriendTip} />
    </div>
  );
}

export default App;
