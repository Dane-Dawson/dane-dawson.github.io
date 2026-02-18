import React, { useState, useMemo } from 'react';
import monsterDataRaw from './monsters.json';
import MonsterCard from './components/MonsterCard';
import SearchBar from './components/SearchBar';
import type { Monster, MonsterData } from './types';
import './MonsterCompendium.css';

const data = monsterDataRaw as unknown as MonsterData;

const MonsterCompendium: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);

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

  // View 1: The Detailed Single Card
  if (selectedMonster) {
    return (
      <div className="compendium-overlay">
        <header className="compendium-header">
          <button className="back-btn" onClick={() => setSelectedMonster(null)}>
            ← Back to List
          </button>
          <h1>{selectedMonster.name}</h1>
          <div style={{ width: '40px' }} /> {/* Spacer for centering */}
        </header>
        <div className="focused-card-container">
          <MonsterCard monster={selectedMonster} />
        </div>
      </div>
    );
  }

  // View 2: The Searchable List
  return (
    <div className="compendium-overlay">
      <header className="compendium-header">
        <h1>Bestiary</h1>
        <div className="header-actions">
          <span className="count-tag">
            {filteredMonsters.length} Monsters found
          </span>
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </div>
      </header>

      <div className="monster-list-view">
        <div className="list-header">
          <span>Name</span>
          <span>Type</span>
          <span>CR</span>
          <span>AC</span>
          <span>HP</span>
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
            <span className="m-ac">{m["Armor Class"]}</span>
            <span className="m-hp">{m["Hit Points"]}</span>
          </div>
        ))}
        {filteredMonsters.length === 0 && (
          <div className="no-results">No monsters found matching "{searchQuery}"</div>
        )}
      </div>
    </div>
  );
};

export default MonsterCompendium;