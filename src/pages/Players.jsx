import { useState } from "react";
import players from "../data/players";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import "../styles/Players.css";

function Players() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <section className="page-container">
      <h1 className="page-title">Manchester United Squad</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="players-grid">
        {filteredPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
}

export default Players;
