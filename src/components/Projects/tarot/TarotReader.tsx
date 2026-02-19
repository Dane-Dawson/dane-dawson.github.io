import React, { useState } from 'react';
import { getTarotFortune } from './utils/APICall';
import TarotCard from './components/TarotCard';
import MysticBackground from './components/MysticBackground';
import { tarotDeck } from './assets/tarotDeck';
import './TarotReader.css';

const TarotReader: React.FC = () => {
  const [fortune, setFortune] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [drawnCards, setDrawnCards] = useState<{ card: any; isReversed: boolean }[]>([]);

  const drawThreeCards = () => {
    const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    const results = selected.map(card => ({
      card,
      isReversed: Math.random() > 0.5
    }));
    setDrawnCards(results);
  };
  const handleReveal = async () => {
    if (drawnCards.length < 3) return;
  
    setLoading(true);
    try {
      // Format the drawn cards for the API
      const cardsForAPI = drawnCards.map(d => ({
        name: d.card.name,
        isReversed: d.isReversed,
        meaning: d.isReversed ? d.card.meaning_rev : d.card.meaning_up
      }));
  
      const result = await getTarotFortune(cardsForAPI);
      setFortune(result);
    } catch (error) {
      setFortune("The stars are crossed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="tarot-reader">
        <MysticBackground />
      <h1 className="tarot-reader__title">The Mystique's Vision</h1>
      
      <div className="tarot-reader__controls">
        <button className="btn btn--secondary" onClick={drawThreeCards}>
          Draw Three Cards
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

      <div className="tarot-reader__controls">
        <button 
          className="btn btn--primary" 
          onClick={handleReveal} 
          disabled={loading || drawnCards.length === 0}
        >
          {loading ? "Interpreting..." : "Reveal Fortune"}
        </button>
      </div>

      {fortune && !loading && (
        <section className="fortune-display">
          <div className="fortune-display__content" 
               dangerouslySetInnerHTML={{ __html: fortune.replace(/\n/g, '<br />') }} />
        </section>
      )}
    </main>
  );
};

export default TarotReader;