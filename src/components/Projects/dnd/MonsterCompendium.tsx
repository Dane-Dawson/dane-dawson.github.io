import React from 'react';
import monsterDataRaw from './monsters.json';
import type { Monster, MonsterData } from './types';

// Cast the JSON to our type for full IntelliSense
const data = monsterDataRaw as unknown as MonsterData;

const MonsterList: React.FC = () => {
  return (
    <div className="monster-container">
      {data.monsters.map((monster: Monster) => (
        <div key={monster.name} className="monster-card">
          <h2>{monster.name}</h2>
          <p><em>{monster.size} {monster.type}, {monster.alignment}</em></p>
          
          <div className="stats">
            <p><strong>AC:</strong> {monster["Armor Class"]} ({monster.armor_type})</p>
            <p><strong>HP:</strong> {monster["Hit Points"]} ({monster.hit_point_die})</p>
            <p><strong>XP:</strong> {monster.xp.toLocaleString()}</p>
          </div>

          <h3>Traits</h3>
          {monster.Traits.map((trait, index) => (
            // Since traits contain HTML tags like <em>, 
            // we use dangerouslySetInnerHTML to render them correctly
            <p key={index} dangerouslySetInnerHTML={{ __html: trait }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MonsterList;