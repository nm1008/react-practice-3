export function Reset({ setBill, setTip, setFriendTip }) {
  function reset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  return (
    <>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
