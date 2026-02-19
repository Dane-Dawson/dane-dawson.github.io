import React from 'react';
import './TarotCard.css';
import { getCardImageUrl } from '../utils/imageHelper';

export interface TarotCardData {
  type: string;
  value: string;
  value_int: number;
  desc: string;
  name: string;
  name_short: string;
  meaning_up: string;
  meaning_rev: string;
  arcana?: string;
  suit?: string;
}

interface TarotCardProps {
  card: TarotCardData;
  isReversed?: boolean;
}

const TarotCard: React.FC<TarotCardProps> = ({ card, isReversed = false }) => {
  const meaning = isReversed ? card.meaning_rev : card.meaning_up;

  return (
    <article className={`tarot-card ${isReversed ? 'tarot-card--reversed' : ''}`}>
      <header className="tarot-card__header">
        <span className="tarot-card__type">{card.type} Arcana</span>
        <h3 className="tarot-card__title">{card.name}</h3>
        <div className="tarot-card__sub-header">
          {card.suit && <span className="tarot-card__suit">Suit: {card.suit}</span>}
          {card.arcana && <span className="tarot-card__arcana-num">Rank: {card.arcana}</span>}
        </div>
      </header>

      <div className="tarot-card__image-container">
        <img 
          src={getCardImageUrl(card.name_short)} 
          alt={card.name} 
          className="tarot-card__image" 
        />
      </div>

      <div className="tarot-card__scroll-area">
        <section className="tarot-card__section">
          <span className="tarot-card__label">Meaning ({isReversed ? 'Rev' : 'Up'})</span>
          <p className="tarot-card__text">{meaning}</p>
        </section>

        <section className="tarot-card__section">
          <span className="tarot-card__label">Description</span>
          <p className="tarot-card__text tarot-card__text--desc">{card.desc}</p>
        </section>
      </div>
    </article>
  );
};

export default TarotCard;