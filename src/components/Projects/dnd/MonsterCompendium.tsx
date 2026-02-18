import React, { useState, useMemo } from 'react';
import monsterDataRaw from './monsters.json';
import MonsterCard from './components/MonsterCard';
import SearchBar from './components/SearchBar';
import MonsterAnalytics from './components/MonsterAnalytics';
import type { Monster, MonsterData } from './types';
import './MonsterCompendium.css';

const data = monsterDataRaw as unknown as MonsterData;

const MonsterCompendium: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const filteredMonsters = useMemo(() => {
    return data.monsters.filter((monster: Monster) => {
      const searchStr = searchQuery.toLowerCase();
      return (
        monster.name.toLowerCase().includes(searchStr) ||
        monster.type.toLowerCase().includes(searchStr) ||
        monster.alignment.toLowerCase().includes(searchStr)
      );
    });
  }, [searchQuery]);

  if (selectedMonster) {
    return (
      <div className="compendium-overlay">
        <header className="compendium-header">
          <button className="back-btn" onClick={() => setSelectedMonster(null)}>
            ← Back to List
          </button>
          <h1>{selectedMonster.name}</h1>
          <div style={{ width: '40px' }} />
        </header>
        <div className="focused-card-container">
          <MonsterCard monster={selectedMonster} />
        </div>
      </div>
    );
  }

  return (
    <div className="compendium-overlay">
      <header className="compendium-header">
        <h1>Bestiary</h1>
        <div className="header-actions">
          {/* Visible on Desktop */}
          <button 
            className={`stats-toggle-btn ${showAnalytics ? 'active' : ''}`}
            onClick={() => setShowAnalytics(!showAnalytics)}
          >
            {showAnalytics ? 'Hide Stats' : 'Show Stats'}
          </button>
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </div>
      </header>

      <div className="compendium-content">
        {showAnalytics && filteredMonsters.length > 0 && (
          <div className="analytics-section">
            <MonsterAnalytics monsters={filteredMonsters} />
          </div>
        )}

        <div className="monster-list-view">
          <div className="list-header">
            <span>Name</span>
            <span>Type</span>
            <span>CR</span>
            <span className="hide-mobile">AC</span>
            <span className="hide-mobile">HP</span>
          </div>
          {filteredMonsters.map((m) => (
            <div 
              key={m.name} 
              className="monster-list-item"
              onClick={() => setSelectedMonster(m)}
            >
              <span className="m-name">{m.name}</span>
              <span className="m-type">{m.type}</span>
              <span className="m-cr">{m.Challenge}</span>
              <span className="m-ac hide-mobile">{m["Armor Class"]}</span>
              <span className="m-hp hide-mobile">{m["Hit Points"]}</span>
            </div>
          ))}
          {filteredMonsters.length === 0 && (
            <div className="no-results">No monsters found matching "{searchQuery}"</div>
          )}
        </div>
      </div>

      {/* Visible only on Mobile */}
      <button 
        className={`fab-stats-btn ${showAnalytics ? 'active' : ''}`}
        onClick={() => setShowAnalytics(!showAnalytics)}
        aria-label="Toggle Analytics"
      >
        {showAnalytics ? '✕' : '📊'}
      </button>
    </div>
  );
};

export default MonsterCompendium;