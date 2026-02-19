import React, { useState, useMemo } from 'react';
import PaintingDetail from "./components/PaintingDetail";
import PaintingList from './components/PaintingList';
import data from './assets/bob-ross.json';
import type { BobRossData } from './types';
import './BobRossGallery.css';

const BobRossGallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  
  // State for both ends of the color range
  const [minColors, setMinColors] = useState<number>(0);
  const [maxColorsFilter, setMaxColorsFilter] = useState<number>(100); 

  const { paintings } = data as BobRossData;

  // Dynamically determine the max colors in the dataset
  const { seasons, absoluteMax } = useMemo(() => {
    const seasonSet = new Set(paintings.map(p => p.season));
    const counts = paintings.map(p => p.num_colors);
    const maxVal = Math.max(...counts, 0);
    return {
      seasons: ['All', ...Array.from(seasonSet).sort((a, b) => (Number(a) - Number(b)))],
      absoluteMax: maxVal
    };
  }, [paintings]);

  // Ensure the max filter doesn't start lower than the data allows
  useMemo(() => {
    if (maxColorsFilter === 100) setMaxColorsFilter(absoluteMax);
  }, [absoluteMax]);

  const filteredPaintings = useMemo(() => {
    return paintings.filter((painting) => {
      const matchesSearch = painting.painting_title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesSeason = 
        selectedSeason === 'All' || painting.season === Number(selectedSeason);
      
      // Range logic: must be between min and max
      const matchesColorRange = 
        painting.num_colors >= minColors && painting.num_colors <= maxColorsFilter;
      
      return matchesSearch && matchesSeason && matchesColorRange;
    });
  }, [searchTerm, selectedSeason, minColors, maxColorsFilter, paintings]);

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

              {/* Color Range Column */}
              <div className="color-controls-column">
                <div className="range-group">
                  <label>Min Colors: {minColors}</label>
                  <input 
                    type="range" 
                    min="0" 
                    max={absoluteMax} 
                    value={minColors} 
                    onChange={(e) => setMinColors(Math.min(Number(e.target.value), maxColorsFilter))}
                  />
                </div>
                <div className="range-group">
                  <label>Max Colors: {maxColorsFilter}</label>
                  <input 
                    type="range" 
                    min="0" 
                    max={absoluteMax} 
                    value={maxColorsFilter} 
                    onChange={(e) => setMaxColorsFilter(Math.max(Number(e.target.value), minColors))}
                  />
                </div>
              </div>
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