import players from "../data/players";
import PlayerCard from "../components/PlayerCard/PlayerCard";

function Players() {
  return (
    <section className="page-container">
      <h1 className="page-title">Manchester United Squad</h1>

      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </section>
  );
}

export default Players;
