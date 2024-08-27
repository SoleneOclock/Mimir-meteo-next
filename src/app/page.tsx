import Card from "@/components/Card";

export default function Home() {
  console.log("execution home");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <Card city="Paris" />
      <Card city="Montpellier" />
    </div>
  );
}
