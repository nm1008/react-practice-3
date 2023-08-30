export default function Total({ bill, tip, friendTip }) {
  const totalTip = (tip + friendTip) / 2;
  const totalAmount = bill + totalTip;

  if (tip === 0 && friendTip === 0) {
    return (
      <h1>
        You pay ${bill} (${bill} + $0 tip)
      </h1>
    );
  }

  return (
    <>
      <h1>
        You pay ${totalAmount} (${bill} + ${totalTip} tip)
      </h1>
    </>
  );
}
