import React, { useEffect } from "react";
import { motion } from "framer-motion";
import data from "../assets/bob-ross.json";
import type { BobRossData } from "../types";
import "./PaintingDetail.css";
import bobOverlay from "../assets/bob-painting.png";

interface DetailProps {
  paintingId: number;
  onBack: () => void;
}

const PaintingDetail: React.FC<DetailProps> = ({ paintingId, onBack }) => {
  const { paintings } = data as BobRossData;
  const painting = paintings.find((p) => p.id === paintingId);

  if (!painting)
    return (
      <button onClick={onBack} className="back-btn">
        Back
      </button>
    );

  const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="detail-view">
      <button onClick={onBack} className="back-btn">
        ← Back to Gallery
      </button>

      <div className="detail-main-content">
        <div className="canvas-wrapper">
          <motion.div
            className="painting-window"
            layoutId={`painting-img-${painting.id}`}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src={painting.img_src}
              alt={painting.painting_title}
              className="painting-layer"
            />
            <img
              src={bobOverlay}
              alt="Bob Ross Overlay"
              className="overlay-layer"
            />
          </motion.div>
        </div>

        <div className="content-section">
          <h1 className="detail-title">{painting.painting_title}</h1>
          <p className="detail-meta">
            Season {painting.season}, Episode {painting.episode}
          </p>

          <div className="palette-section">
            <h3>Palette Used</h3>
            <div className="colors-tag-list">
              {painting.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-tag"
                  style={
                    {
                      "--paint-color": painting.color_hex[index],
                    } as React.CSSProperties
                  }
                >
                  <span className="color-indicator"></span>
                  {color}
                </span>
              ))}
            </div>
            <div className="palette-container">
              <div className="palette-wood-base">
                {painting.color_hex.map((hex, i) => {
                  const angle = (i / (painting.color_hex.length - 1)) * 180;
                  return (
                    <div
                      key={i}
                      className="swatch-drop"
                      style={
                        {
                          "--angle": `${angle}deg`,
                          "--distance": "130px",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className="color-circle"
                        style={{ backgroundColor: hex }}
                        title={painting.colors[i]}
                      />
                      <span className="swatch-label">{painting.colors[i]}</span>
                    </div>
                  );
                })}
                <div className="palette-thumb-hole"></div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <a
            href={painting.youtube_src}
            target="_blank"
            rel="noreferrer"
            className="watch-btn"
          >
            <span className="btn-line-one">Open in ▶️ YouTube</span>
            <br />
            <span className="btn-line-two">↓ Or Watch Below!</span>
          </a>
      <div className="video-section">
        <h3>Watch the Episode</h3>
        <div className="video-responsive">
          <iframe
            width="560"
            height="315"
            src={getEmbedUrl(painting.youtube_src)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetail;
