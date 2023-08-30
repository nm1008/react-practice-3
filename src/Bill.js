export default function Bill({ bill, setBill }) {
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
    </>
  );
}
