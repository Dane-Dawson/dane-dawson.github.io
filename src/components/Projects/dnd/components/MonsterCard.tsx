import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer, Tooltip, Legend 
} from 'recharts';
import CustomRadarTooltip from './CustomRadarTooltip';
import type { Monster } from '../types';
import "./MonsterCard.css";

interface MonsterCardProps {
  monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  const abilityData = [
    { subject: 'STR', value: monster.STR, modifier: monster.STR_mod, fullMark: 30 },
    { subject: 'DEX', value: monster.DEX, modifier: monster.DEX_mod, fullMark: 30 },
    { subject: 'CON', value: monster.CON, modifier: monster.CON_mod, fullMark: 30 },
    { subject: 'INT', value: monster.INT, modifier: monster.INT_mod, fullMark: 30 },
    { subject: 'WIS', value: monster.WIS, modifier: monster.WIS_mod, fullMark: 30 },
    { subject: 'CHA', value: monster.CHA, modifier: monster.CHA_mod, fullMark: 30 },
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
            {monster.size} {monster.type}, {monster.alignment}
          </p>
          
          <div className="monster-stats-banner">
            <div className="stat-item">
              <span className="label">Armor Class</span>
              <span className="value">{monster["Armor Class"]} ({monster.armor_type})</span>
            </div>
            
            <div className="stat-item">
              <span className="label">Hit Points</span>
              <span className="value">{monster["Hit Points"]} ({monster.hit_point_die})</span>
            </div>

            <div className="stat-item">
              <span className="label">Speed</span>
              <span className="value">{monster.Speed || '30 ft.'}</span>
            </div>
            
            <div className="stat-item">
              <span className="label">Challenge</span>
              <span className="value">{monster.Challenge} ({monster.xp || '0'} XP)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="attributes-section">
        <div className="radar-chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={abilityData}>
              <PolarGrid stroke="#444" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#d4af37', fontSize: 12 }} />
              <Tooltip content={<CustomRadarTooltip />} />
              <Legend iconType="diamond" verticalAlign="bottom" />
              <Radar
                name="Base Stats"
                dataKey="value"
                stroke="#d4af37"
                fill="#d4af37"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="ability-scores-column">
          {abilityData.map((stat) => (
            <div className="stat-block" key={stat.subject}>
              <span className="label">{stat.subject}</span>
              <span>{stat.value} {stat.modifier}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="monster-sections">
          
            <h3 className="section-header">Traits</h3>
        {monster.Traits && monster.Traits.map((trait, i) => (
          <p key={`trait-${i}`} dangerouslySetInnerHTML={{ __html: trait }} />
        ))}

        {monster.Actions && monster.Actions.length > 0 && (
          <>
            <h3 className="section-header">Actions</h3>
            {monster.Actions.map((action, i) => (
              <p key={`action-${i}`} dangerouslySetInnerHTML={{ __html: action }} />
            ))}
          </>
        )}

        {monster["Legendary Actions"] && monster["Legendary Actions"].length > 0 && (
          <>
            <h3 className="section-header">Legendary Actions</h3>
            {monster["Legendary Actions"].map((lAction, i) => (
              <p key={`legendary-${i}`} dangerouslySetInnerHTML={{ __html: lAction }} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MonsterCard;