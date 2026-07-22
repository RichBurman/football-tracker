import { useState } from "react";
import players from "../data/players";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import "../styles/players.css";
import FilterButton from "../components/FilterButton/FilterButton";

function Players() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("All");

  const positions = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];

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
        {searchTerm && (
          <button onClick={() => setSearchTerm("")}>Clear</button>
        )}{" "}
      </div>

      <p className="player-count">
        Showing {filteredPlayers.length} of {players.length} players
      </p>

      <div className="filter-buttons">
        {positions.map((position) => (
          <FilterButton
            key={position}
            label={position}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
        ))}
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
