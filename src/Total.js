export default function Total({ bill, tip, friendTip }) {
  const totalTip = (tip + friendTip) / 2;
  const totalAmount = bill + totalTip;


  return (
    <>
      <h1>
        You pay ${totalAmount} (${bill} + ${totalTip} tip)
      </h1>
    </>
  );
}
