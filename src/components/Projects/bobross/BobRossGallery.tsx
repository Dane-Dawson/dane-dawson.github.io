import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PaintingDetail from "./components/PaintingDetail";
import PaintingList from "./components/PaintingList";
import data from "./assets/bob-ross.json";
import type { BobRossData } from "./types";
import "./BobRossGallery.css";

const BobRossGallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState<string>("All");
  const [minColors, setMinColors] = useState<number>(0);
  const [maxColorsFilter, setMaxColorsFilter] = useState<number>(100);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const { paintings } = data as BobRossData;

  const { seasons, absoluteMax, masterPalette } = useMemo(() => {
    const seasonSet = new Set(paintings.map((p) => p.season));
    const counts = paintings.map((p) => p.num_colors);
    const colorMap = new Map<string, string>();

    paintings.forEach((p) => {
      p.colors.forEach((color, i) => {
        if (!colorMap.has(color)) colorMap.set(color, p.color_hex[i]);
      });
    });

    return {
      seasons: [
        "All",
        ...Array.from(seasonSet).sort((a, b) => Number(a) - Number(b)),
      ],
      absoluteMax: Math.max(...counts, 0),
      masterPalette: Array.from(colorMap.entries()).map(([name, hex]) => ({
        name,
        hex,
      })),
    };
  }, [paintings]);

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const handleSelectPainting = (id: number) => {
    window.scrollTo(0, 0);
    setSelectedId(id);
  };

  const handleBack = () => {
    setSelectedId(null);
  };

  const filteredPaintings = useMemo(() => {
    return paintings.filter((painting) => {
      const matchesSearch = painting.painting_title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesSeason =
        selectedSeason === "All" || painting.season === Number(selectedSeason);
      const matchesRange =
        painting.num_colors >= minColors &&
        painting.num_colors <= maxColorsFilter;
      const matchesColors =
        selectedColors.length === 0 ||
        selectedColors.every((color) => painting.colors.includes(color));

      return matchesSearch && matchesSeason && matchesRange && matchesColors;
    });
  }, [
    searchTerm,
    selectedSeason,
    minColors,
    maxColorsFilter,
    selectedColors,
    paintings,
  ]);

  return (
    <div className="gallery-container">
      <AnimatePresence mode="wait">
        {selectedId === null ? (
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <header className="gallery-header">
              <h1>The Joy of Painting Archive</h1>
              <div className="controls">
                <div className="main-filters">
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
                    {seasons.map((s) => (
                      <option key={s} value={s}>
                        {s === "All" ? "All Seasons" : `Season ${s}`}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="master-palette-container">
                  <label>
                    Filter by Paint Colors ({selectedColors.length}):
                  </label>
                  <div className="master-palette">
                    {masterPalette.map((color) => (
                      <button
                        key={color.name}
                        className={`palette-swatch ${
                          selectedColors.includes(color.name) ? "active" : ""
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                        onClick={() => toggleColor(color.name)}
                      />
                    ))}
                    {selectedColors.length > 0 && (
                      <button
                        className="clear-color"
                        onClick={() => setSelectedColors([])}
                      >
                        Reset Colors
                      </button>
                    )}
                  </div>
                </div>

                <div className="color-controls-column">
                  <div className="range-group">
                    <label>Min Colors: {minColors}</label>
                    <input
                      type="range"
                      min="0"
                      max={absoluteMax}
                      value={minColors}
                      onChange={(e) =>
                        setMinColors(
                          Math.min(Number(e.target.value), maxColorsFilter)
                        )
                      }
                    />
                  </div>
                  <div className="range-group">
                    <label>Max Colors: {maxColorsFilter}</label>
                    <input
                      type="range"
                      min="0"
                      max={absoluteMax}
                      value={maxColorsFilter}
                      onChange={(e) =>
                        setMaxColorsFilter(
                          Math.max(Number(e.target.value), minColors)
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <p className="results-count">
                {selectedColors.length > 0
                  ? `Paintings using selected colors: `
                  : "Showing "}
                {filteredPaintings.length} paintings
              </p>
            </header>

            <PaintingList
              paintings={filteredPaintings}
              onSelectPainting={handleSelectPainting}
            />
          </motion.div>
        ) : (
          <motion.div
            key="detail-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PaintingDetail paintingId={selectedId} onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BobRossGallery;
