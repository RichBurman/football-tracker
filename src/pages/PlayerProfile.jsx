import { useParams, Link } from "react-router-dom";
import "../styles/playerProfile.css";
import players from "../data/players";

function PlayerProfile() {
  const { id } = useParams();
  const player = players.find((p) => p.id === id);

  if (!player) {
    return <p>Player not found.</p>;
  }

  return (
    <section className="page-container">
      <Link to="/players" className="back-button">
        ← Back to Squad
      </Link>
      <h1 className="page-title">{player.name}</h1>

      <div className="player-profile">
        <div className="player-info">
          <h2>Player Information</h2>

          <p>
            <strong>Position:</strong> {player.position}
          </p>

          <p>
            <strong>Squad Number:</strong> #{player.number}
          </p>

          <p>
            <strong>Nationality:</strong> {player.nationality}
          </p>

          <p>
            <strong>Age:</strong> {player.age}
          </p>
        </div>

        <div className="player-statistics">
          <h2>Season Statistics</h2>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>{player.appearances}</h3>
              <p>Appearances</p>
            </div>

            <div className="stat-card">
              <h3>{player.goals}</h3>
              <p>Goals</p>
            </div>

            <div className="stat-card">
              <h3>{player.assists}</h3>
              <p>Assists</p>
            </div>

            <div className="stat-card">
              <h3>{player.minutes}</h3>
              <p>Minutes</p>
            </div>

            <div className="stat-card">
              <h3>{player.yellowCards}</h3>
              <p>Yellow Cards</p>
            </div>

            <div className="stat-card">
              <h3>{player.redCards}</h3>
              <p>Red Cards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayerProfile;
