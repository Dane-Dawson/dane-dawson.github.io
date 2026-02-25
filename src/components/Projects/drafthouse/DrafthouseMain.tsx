import React, { useState, useMemo } from 'react';
import type { Theatre } from './interfaces';
import theatresData from './theatres.json';
import TheatreMain from './TheatreMain';
import './DrafthouseMain.css';

const theatres: Theatre[] = theatresData;

const DrafthouseMain: React.FC = () => {
  const [selectedTheatreId, setSelectedTheatreId] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('ALL');

  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(theatres.map((t) => t.marketSlug)));
    return ['ALL', ...uniqueCities.sort()];
  }, []);

  const filteredTheatres = useMemo(() => {
    if (selectedCity === 'ALL') return theatres;
    return theatres.filter((t) => t.marketSlug === selectedCity);
  }, [selectedCity]);

  const handleBack = () => setSelectedTheatreId(null);

  if (selectedTheatreId) {
    return <TheatreMain theatreId={selectedTheatreId} onBack={handleBack} />;
  }

  return (
    <div className="container main-container-div">
      <header className="alamo-header">
        <div className="marquee-badge">NOW SHOWING</div>
        <h1 className="main-title">Feature Presentation: Choose Your Theater</h1>
        <p className="header-subtitle">PLEASE SILENCE YOUR PHONE • NO TALKING • NO TEXTING</p>
      </header>
      
      <div className="filter-bar">
        {cities.map((city) => (
          <button
            key={city}
            className={`filter-chip ${selectedCity === city ? 'active' : ''}`}
            onClick={() => setSelectedCity(city)}
          >
            {city.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="theatre-grid">
        {filteredTheatres.map((theatre) => (
          <div 
            key={theatre.id} 
            className="theatre-card"
            onClick={() => setSelectedTheatreId(theatre.id)}
          >
            <div>
              <span className="market-label">{theatre.marketSlug}</span>
              <h2 className="theatre-name">{theatre.name}</h2>
            </div>
            <div className="view-showtimes-link">
              VIEW SHOWTIMES →
            </div>
          </div>
        ))}
      </div>
      
      {filteredTheatres.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '40px', opacity: 0.5 }}>
          No theaters found in this city.
        </p>
      )}
    </div>
  );
};

export default DrafthouseMain;