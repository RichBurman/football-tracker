import "./PlayerCard.css";
import { Link } from "react-router-dom";

function PlayerCard({ player }) {
  return (
    <Link to={`/players/${player.id}`} className="player-link">
      <div className="player-card">
        <h2>{player.name}</h2>

        <p className="player-position">{player.position}</p>

        <p className="player-number">#{player.number}</p>

        <div className="player-stats">
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>
          <p>Appearances: {player.appearances}</p>
        </div>
      </div>
    </Link>
  );
}

export default PlayerCard;
