import React from 'react';
import data from '../bob-ross.json';
import type { BobRossData } from '../types';
import './PaintingDetail.css';

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
      
      <div className="frame-container">
        <div className="wood-frame">
          <img src={painting.img_src} alt={painting.painting_title} />
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