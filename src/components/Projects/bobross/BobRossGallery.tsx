import React, { useState, useMemo } from 'react';
import PaintingDetail from "./components/PaintingDetail";
import PaintingList from './components/PaintingList';
import data from './bob-ross.json';
import type { BobRossData } from './types';
import './BobRossGallery.css';

const BobRossGallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');

  const { paintings } = data as BobRossData;

  const seasons = useMemo(() => {
    const seasonSet = new Set(paintings.map(p => p.season));
    return ['All', ...Array.from(seasonSet).sort((a, b) => a - b)];
  }, [paintings]);

  const filteredPaintings = useMemo(() => {
    return paintings.filter((painting) => {
      const matchesSearch = painting.painting_title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesSeason = 
        selectedSeason === 'All' || painting.season === Number(selectedSeason);
      return matchesSearch && matchesSeason;
    });
  }, [searchTerm, selectedSeason, paintings]);

  return (
    <div className="gallery-container">
      {selectedId === null ? (
        <>
          <header className="gallery-header">
            <h1>The Joy of Painting Archive</h1>
            
            <div className="controls">
              <input
                className="search-input"
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="season-select"
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
              >
                {seasons.map(s => (
                  <option key={s} value={s}>
                    {s === 'All' ? 'All Seasons' : `Season ${s}`}
                  </option>
                ))}
              </select>
            </div>
            <p className="results-count">Showing {filteredPaintings.length} paintings</p>
          </header>

          <PaintingList 
            paintings={filteredPaintings} 
            onSelectPainting={(id) => setSelectedId(id)} 
          />
        </>
      ) : (
        <PaintingDetail 
          paintingId={selectedId} 
          onBack={() => setSelectedId(null)} 
        />
      )}
    </div>
  );
};

export default BobRossGallery;