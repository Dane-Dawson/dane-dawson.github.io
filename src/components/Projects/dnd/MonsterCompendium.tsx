import React, { useState, useMemo } from 'react';
import monsterDataRaw from './monsters.json';
import MonsterCard from './components/MonsterCard';
import SearchBar from './components/SearchBar';
import type { Monster, MonsterData } from './types';
import './MonsterCompendium.css';

const data = monsterDataRaw as unknown as MonsterData;

const MonsterCompendium: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <div className="compendium-overlay">
      <header className="compendium-header">
        <h1>Bestiary</h1>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      </header>

      <div className="monster-grid">
        {filteredMonsters.length > 0 ? (
          filteredMonsters.map((m) => (
            <MonsterCard key={m.name} monster={m} />
          ))
        ) : (
          <div className="no-results">No monsters found matching "{searchQuery}"</div>
        )}
      </div>
    </div>
  );
};

export default MonsterCompendium;