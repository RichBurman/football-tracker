function FixtureCard({ fixture }) {
  return (
    <div className="fixture-card">
      <h2>
        Manchester United vs {fixture.opponent}
      </h2>

      <p>{fixture.date}</p>

      <p>{fixture.time}</p>

      <p>{fixture.competition}</p>

      <p>{fixture.venue}</p>
    </div>
  );
}

export default FixtureCard;