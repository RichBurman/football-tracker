import players from "../data/players";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import "../styles/Players.css";

function Players() {
  return (
    <section className="page-container">
      <h1 className="page-title">Manchester United Squad</h1>

      <div className="players-grid">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
}

export default Players;
