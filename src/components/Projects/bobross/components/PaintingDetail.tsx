import React from 'react';
import data from '../assets/bob-ross.json';
import type { BobRossData } from '../types';
import './PaintingDetail.css';
import bobOverlay from '../assets/bob-painting.png'

interface DetailProps {
  paintingId: number;
  onBack: () => void;
}

const PaintingDetail: React.FC<DetailProps> = ({ paintingId, onBack }) => {
  const { paintings } = data as BobRossData;
  const painting = paintings.find(p => p.id === paintingId);

  if (!painting) return <button onClick={onBack} className="back-btn">Back</button>;

  return (
    <div className="detail-view">
      <button onClick={onBack} className="back-btn">← Back to Gallery</button>
      
      <div className="canvas-wrapper">
        {/* The "Window" Container */}
        <div className="painting-window">
          {/* Layer 1: The Painting (Behind) */}
          <img 
            src={painting.img_src} 
            alt={painting.painting_title} 
            className="painting-layer" 
          />
          
          {/* Layer 2: Bob Ross (In Front) */}
          <img 
            src={bobOverlay} 
            alt="Bob Ross Overlay" 
            className="overlay-layer" 
          />
        </div>
      </div>

      <div className="content-section">
        <h1 className="detail-title">{painting.painting_title}</h1>
        <p className="detail-meta">Season {painting.season}, Episode {painting.episode}</p>
        
        <div className="palette-section">
          <h3>Palette Used</h3>
          <div className="swatch-grid">
            {painting.color_hex.map((hex, i) => (
              <div key={i} className="swatch-item">
                <div 
                  className="color-circle" 
                  style={{ backgroundColor: hex }} 
                  title={painting.colors[i]}
                />
                <span>{painting.colors[i]}</span>
              </div>
            ))}
          </div>
        </div>
        
        <a href={painting.youtube_src} target="_blank" rel="noreferrer" className="watch-btn">
          Watch Bob Paint This →
        </a>
      </div>
    </div>
  );
};

export default PaintingDetail;