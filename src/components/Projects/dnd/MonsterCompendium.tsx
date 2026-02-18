import React, { useState, useMemo } from 'react';
import monsterDataRaw from './monsters.json';
import MonsterCard from './components/MonsterCard';
import SearchBar from './components/SearchBar';
import MonsterAnalytics from './components/MonsterAnalytics';
import type { Monster, MonsterData } from './types';
import './MonsterCompendium.css';

const data = monsterDataRaw as unknown as MonsterData;

type SortKey = 'name' | 'type' | 'Challenge' | 'Armor Class' | 'Hit Points';

const MonsterCompendium: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  
  // Sorting State
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' } | null>(null);

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

  // Logic to handle sorting, including fractions for CR
  const sortedMonsters = useMemo(() => {
    let sortableItems = [...filteredMonsters];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key as keyof Monster];
        let bValue = b[sortConfig.key as keyof Monster];

        // Helper to convert "1/4" or "1/8" to decimals for accurate sorting
        const parseValue = (val: any, key: SortKey) => {
          if (key === 'Challenge') {
            if (typeof val === 'number') return val;
            const parts = String(val).split('/');
            return parts.length === 2 ? Number(parts[0]) / Number(parts[1]) : Number(val);
          }
          return typeof val === 'string' ? val.toLowerCase() : val;
        };

        const finalA = parseValue(aValue, sortConfig.key);
        const finalB = parseValue(bValue, sortConfig.key);

        if (finalA < finalB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (finalA > finalB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [filteredMonsters, sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortClass = (key: SortKey) => {
    if (!sortConfig || sortConfig.key !== key) return "";
    return sortConfig.direction === 'asc' ? "sort-asc" : "sort-desc";
  };

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
            <span onClick={() => requestSort('name')} className={getSortClass('name')}>Name</span>
            <span onClick={() => requestSort('type')} className={getSortClass('type')}>Type</span>
            <span onClick={() => requestSort('Challenge')} className={getSortClass('Challenge')}>CR</span>
            <span onClick={() => requestSort('Armor Class')} className={`hide-mobile ${getSortClass('Armor Class')}`}>AC</span>
            <span onClick={() => requestSort('Hit Points')} className={`hide-mobile ${getSortClass('Hit Points')}`}>HP</span>
          </div>
          {sortedMonsters.map((m) => (
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
          {sortedMonsters.length === 0 && (
            <div className="no-results">No monsters found matching "{searchQuery}"</div>
          )}
        </div>
      </div>

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