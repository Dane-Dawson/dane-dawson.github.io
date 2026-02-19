import React from "react";
import { motion } from "framer-motion";
import type { Painting } from "../types";
import "./PaintingList.css";

interface ListProps {
  paintings: Painting[];
  onSelectPainting: (id: number) => void;
}

const PaintingList: React.FC<ListProps> = ({ paintings, onSelectPainting }) => {
  return (
    <div className="painting-grid">
      {paintings.map((painting) => (
        <div
          key={painting.id}
          className="painting-card"
          onClick={() => onSelectPainting(painting.id)}
        >
          <motion.div
            className="image-wrapper"
            layoutId={`painting-img-${painting.id}`}
          >
            <img src={painting.img_src} alt={painting.painting_title} />
          </motion.div>
          <div className="card-info">
            <h3>{painting.painting_title}</h3>
            <span className="episode-tag">
              Season {painting.season} • Episode {painting.episode}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaintingList;
