import fixtures from "../data/fixtures";
import FixtureCard from "../components/FixtureCard/FixtureCard";

function Fixtures() {
  return (
    <section className="page-container">
      <h1 className="page-title">
        Manchester United Fixtures
      </h1>

      <div>
        {fixtures.map((fixture) => (
          <FixtureCard 
            key={fixture.id} 
            fixture={fixture} 
          />
        ))}
      </div>

    </section>
  );
}

export default Fixtures;