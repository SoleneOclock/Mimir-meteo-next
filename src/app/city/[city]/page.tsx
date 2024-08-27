import type { Weather } from "@/@types/weather";

async function CityPage({ params }: { params: { city: string } }) {
  // on veut recup la valeur du param dynamique de l'URL pour savoir quelle est le nom de la ville
  console.log(params);
  const { city } = params;

  // on recupère la clé depuis le fichier de variables d'environnemets
  // on cherche dans la variable globale process.env
  const API_KEY = process.env.API_KEY;

  // on peut fetch les infos direct coté server avant d'envoyer la page
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  const data = (await result.json()) as Weather;

  return (
    <div>
      <h2>{city}</h2>
      {data.weather[0].description}
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
}

export default CityPage;
