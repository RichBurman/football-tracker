import "./PlayerCard.css";


function PlayerCard({ player }) {
    return (
        <div className="player-card">
            <h2>{player.name}</h2>
            <p><strong>Position:</strong> {player.position}</p>
            <p><strong>Number:</strong> {player.number}</p>
            <p><strong>Nationality:</strong> {player.nationality}</p>
            <p><strong>Appearances:</strong> {player.appearances}</p>
            <p><strong>Goals:</strong> {player.goals}</p>
            <p><strong>Assists:</strong> {player.assists}</p>
        </div>
    );
}

export default PlayerCard;