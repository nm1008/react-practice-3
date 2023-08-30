export default function Tip({ setTip }) {
  return (
    <div>
      <label>How did you like the service? </label>
      <select onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely Amazing!(20%)</option>
      </select>
    </div>
  );
}
