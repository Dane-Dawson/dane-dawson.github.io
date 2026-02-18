import React from 'react';
import type { Monster } from '../types';
import "./MonsterCard.css"

interface MonsterCardProps {
  monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  return (
    <div className="monster-card">
      <img src={monster.img_url} alt={monster.name} className="monster-image" />
      <h2>{monster.name}</h2>
      <p className="monster-meta">
        <em>{monster.size} {monster.type}, {monster.alignment}</em>
      </p>
      
      <div className="stats-grid">
        <p><strong>AC:</strong> {monster["Armor Class"]} ({monster.armor_type})</p>
        <p><strong>HP:</strong> {monster["Hit Points"]} ({monster.hit_point_die})</p>
        <p><strong>CR:</strong> {monster.Challenge} ({monster.xp.toLocaleString()} XP)</p>
      </div>

      <div className="ability-scores">
        <span>STR: {monster.STR} {monster.STR_mod}</span>
        <span>DEX: {monster.DEX} {monster.DEX_mod}</span>
        <span>CON: {monster.CON} {monster.CON_mod}</span>
      </div>

      <div className="monster-sections">
        <h3>Traits</h3>
        {monster.Traits.map((trait, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: trait }} />
        ))}

        <h3>Actions</h3>
        {monster.Actions.map((action, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: action }} />
        ))}
      </div>
    </div>
  );
};

export default MonsterCard;