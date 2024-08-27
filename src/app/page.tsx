import MeteoCard from "@/components/meteoCard";

export default function Home() {
  return (
    <main className="h-screen p-6">
      <h1 className="text-xl text-center text-pink-500">Widget Meteo</h1>

      
      <MeteoCard city="Paris"/>
      <MeteoCard city="Montpellier"/>
    </main>
  );
}
