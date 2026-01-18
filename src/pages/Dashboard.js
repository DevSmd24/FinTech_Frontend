import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h2>Account Overview</h2>
      <div className="grid">
        <StatCard title="Balance" value="$25,430" />
        <StatCard title="Today’s Transfers" value="3" />
        <StatCard title="Portfolio Value" value="$12,300" />
      </div>
    </div>
  );
}
