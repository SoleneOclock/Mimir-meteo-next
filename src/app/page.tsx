import MeteoCard from "@/components/MeteoCard";

export default function Home() {
  console.log("execution home");
  return (
    <div>
      <MeteoCard city="Paris" />
      <MeteoCard city="Montpellier" />
    </div>
  );
}
