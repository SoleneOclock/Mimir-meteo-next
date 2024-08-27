

function MeteoCard({city}: {city : string}) {
    return (
    <div className="border m-6 rounded-xl p-6 bg-sky-200 bg-opacity-60">
        <div className="font-bold">{city}</div>
        <div>18°C</div>
    </div>
    );
}

export default MeteoCard;