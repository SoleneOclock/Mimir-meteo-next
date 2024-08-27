import MeteoCard from "./../components/MeteoCard";

export default function Home() {
  console.log("execution home");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <MeteoCard city="Paris" />
      <MeteoCard city="Montpellier" />
    </div>
  );
}
