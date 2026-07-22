import { useState } from "react";
import players from "../data/players";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import "../styles/players.css";

function Players() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("All");

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPosition =
      selectedPosition === "All" || player.position === selectedPosition;

    return matchesSearch && matchesPosition;
  });
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

      <div className="filter-buttons">
        <button
          className={selectedPosition === "All" ? "active-filter" : ""}
          onClick={() => setSelectedPosition("All")}
        >
          All
        </button>
        <button
          className={selectedPosition === "Goalkeeper" ? "active-filter" : ""}
          onClick={() => setSelectedPosition("Goalkeeper")}
        >
          Goalkeeper
        </button>

        <button
          className={selectedPosition === "Defender" ? "active-filter" : ""}
          onClick={() => setSelectedPosition("Defender")}
        >
          Defender
        </button>

        <button
          className={selectedPosition === "Midfielder" ? "active-filter" : ""}
          onClick={() => setSelectedPosition("Midfielder")}
        >
          Midfielder
        </button>

        <button
          className={selectedPosition === "Forward" ? "active-filter" : ""}
          onClick={() => setSelectedPosition("Forward")}
        >
          Forward
        </button>
      </div>

      {filteredPlayers.length === 0 && (
        <p className="no-results">No players found.</p>
      )}

      <div className="players-grid">
        {filteredPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
}

export default Players;
