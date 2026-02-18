import React from 'react';
// Import Recharts components
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import type { Monster } from '../types';
import "./MonsterCard.css";

interface MonsterCardProps {
  monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  // Format data for the Radar Chart
  const abilityData = [
    { subject: 'STR', value: monster.STR, fullMark: 30 },
    { subject: 'DEX', value: monster.DEX, fullMark: 30 },
    { subject: 'CON', value: monster.CON, fullMark: 30 },
    { subject: 'INT', value: monster.INT, fullMark: 30 },
    { subject: 'WIS', value: monster.WIS, fullMark: 30 },
    { subject: 'CHA', value: monster.CHA, fullMark: 30 },
  ];

  return (
    <div className="monster-card">
      <div className="monster-card-top">
        <div className="monster-image-container">
          <img src={monster.img_url} alt={monster.name} className="monster-image" />
        </div>
        
        <div className="monster-header-info">
          <h2>{monster.name}</h2>
          <p className="monster-meta">
            <em>{monster.size} {monster.type}, {monster.alignment}</em>
          </p>
          
          <div className="stats-grid">
            <p><strong>AC:</strong> {monster["Armor Class"]} ({monster.armor_type})</p>
            <p><strong>HP:</strong> {monster["Hit Points"]} ({monster.hit_point_die})</p>
            <p><strong>CR:</strong> {monster.Challenge} ({monster.xp.toLocaleString()} XP)</p>
          </div>

          {/* NEW: Radar Chart Container */}
          <div className="radar-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={abilityData}>
                <PolarGrid stroke="#444" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#d4af37', fontSize: 12 }} />
                <Radar
                  name={monster.name}
                  dataKey="value"
                  stroke="#d4af37"
                  fill="#d4af37"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
        <div className="ability-scores">
          <div className="stat-block">
            <span className="label">STR</span>
            <span>{monster.STR} {monster.STR_mod}</span>
          </div>
          <div className="stat-block">
            <span className="label">DEX</span>
            <span>{monster.DEX} {monster.DEX_mod}</span>
          </div>
          <div className="stat-block">
            <span className="label">CON</span>
            <span>{monster.CON} {monster.CON_mod}</span>
          </div>
          <div className="stat-block">
            <span className="label">INT</span>
            <span>{monster.INT} {monster.INT_mod}</span>
          </div>
          <div className="stat-block">
            <span className="label">WIS</span>
            <span>{monster.WIS} {monster.WIS_mod}</span>
          </div>
          <div className="stat-block">
            <span className="label">CHA</span>
            <span>{monster.CHA} {monster.CHA_mod}</span>
          </div>
        </div>
  
        <div className="monster-sections">
          {monster.Skills && monster.Skills.length > 0 && (
            <p><strong>Skills:</strong> {monster.Skills.join(', ')}</p>
          )}
          {monster.Senses && (
            <p><strong>Senses:</strong> {monster.Senses.join(', ')}</p>
          )}
          <p><strong>Languages:</strong> {monster.Languages.join(', ')}</p>
  
          <h3>Traits</h3>
          {monster.Traits.map((trait, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: trait }} />
          ))}
  
          <h3>Actions</h3>
          {monster.Actions.map((action, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: action }} />
          ))}
  
          {monster["Legendary Actions"] && monster["Legendary Actions"].length > 0 && (
            <>
              <h3>Legendary Actions</h3>
              {monster["Legendary Actions"].map((action, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: action }} />
              ))}
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default MonsterCard;