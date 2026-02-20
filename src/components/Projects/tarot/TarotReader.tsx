import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { toPng } from "html-to-image";
import { getTarotFortune } from "./utils/APICall";
import TarotCard from "./components/TarotCard";
import MysticBackground from "./components/MysticBackground";
import { tarotDeck } from "./assets/tarotDeck";
import "./TarotReader.css";

const TarotReader: React.FC = () => {
  const [fortune, setFortune] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [drawnCards, setDrawnCards] = useState<
    { card: any; isReversed: boolean }[]
  >([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Reference for the image capture
  const fortuneRef = useRef<HTMLDivElement>(null);

  const drawThreeCards = () => {
    setFortune("");
    setErrorMsg(null); // Clear errors on a new draw
    const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    const results = selected.map((card) => ({
      card,
      isReversed: Math.random() > 0.5,
    }));
    setDrawnCards(results);
  };

  const handleReveal = async () => {
    if (drawnCards.length < 3) return;
    setLoading(true);
    setErrorMsg(null); // Clear previous errors

    try {
      const cardsForAPI = drawnCards.map((d) => ({
        name: d.card.name,
        isReversed: d.isReversed,
        meaning: d.isReversed ? d.card.meaning_rev : d.card.meaning_up,
      }));

      const result = await getTarotFortune(cardsForAPI);
      setFortune(result);
    } catch (error: any) {
      // Set the mystical error message from APICall.tsx to state
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  const saveFortuneImage = async () => {
    if (fortuneRef.current === null) return;

    try {
      const dataUrl = await toPng(fortuneRef.current, {
        cacheBust: true,
        backgroundColor: "#0a0a0a",
      });

      const link = document.createElement("a");
      link.download = "my-tarot-fortune.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("The vision failed to manifest:", err);
    }
  };

  const resetDisplay = () => {
    setFortune("");
    setDrawnCards([]);
    setErrorMsg(null); // Clear error on reset
  };

  return (
    <main className="tarot-reader">
      <MysticBackground />

      {/* PHASE: LOADING (The Swirling Animation) */}
      {loading && (
        <div className="mystic-loader fade-in">
          <div className="mystic-loader__orb">
            <div className="mystic-loader__ring"></div>
            <div className="mystic-loader__ring mystic-loader__ring--outer"></div>
          </div>
          <p className="mystic-loader__text">Consulting the Spirits...</p>
        </div>
      )}

      {/* PHASE 1: THE DRAW */}
      {!fortune && !loading && (
        <div className="tarot-reader__setup fade-in">
          <h1 className="tarot-reader__title">The Mystique's Vision</h1>

          <div className="tarot-reader__controls">
            <button className="btn btn--secondary" onClick={drawThreeCards}>
              {drawnCards.length > 0 ? "Re-draw Cards" : "Draw Three Cards"}
            </button>
          </div>

          <section className="tarot-spread">
            {drawnCards.map((item, index) => (
              <TarotCard
                key={`${item.card.name_short}-${index}`}
                card={item.card}
                isReversed={item.isReversed}
              />
            ))}
          </section>

          {/* Conditional Error Display for 429 or general errors */}
          {errorMsg && (
            <div className="mystic-error fade-in">
              <p className="mystic-error__text"><em>{errorMsg}</em></p>
              <button className="btn btn--text" onClick={() => setErrorMsg(null)}>
                Dismiss
              </button>
            </div>
          )}

          {drawnCards.length > 0 && (
            <div className="tarot-reader__controls">
              <button
                className="btn btn--primary"
                onClick={handleReveal}
                disabled={loading}
              >
                Reveal Your Fortune
              </button>
            </div>
          )}
        </div>
      )}

      {/* PHASE 2: THE FORTUNE */}
      {fortune && !loading && (
        <section className="fortune-display fade-in">
          <div ref={fortuneRef} className="fortune-capture-area">
            <div className="fortune-display__content">
              <ReactMarkdown>{fortune}</ReactMarkdown>
            </div>
          </div>

          <div className="tarot-reader__controls" style={{ marginTop: "3rem" }}>
            <button className="btn btn--secondary" onClick={resetDisplay}>
              Return to the Circle
            </button>
            <button className="btn btn--primary" onClick={saveFortuneImage}>
              Save as Image
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default TarotReader;