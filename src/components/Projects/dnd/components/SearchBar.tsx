// SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search monsters by name, type, or alignment..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="monster-search-input"
      />
    </div>
  );
};

export default SearchBar;