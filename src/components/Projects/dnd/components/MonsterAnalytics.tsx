import React from 'react';
import { 
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, Label 
} from 'recharts';
import type { Monster } from '../types';

interface Props {
  monsters: Monster[];
}

const COLORS = ['#d4af37', '#b8860b', '#8e7931', '#f0e68c', '#daa520', '#c5a059'];

const MonsterAnalytics: React.FC<Props> = ({ monsters }) => {
  const totalCount = monsters.length;

  // --- CR Data Processing ---
  const crMap: Record<string, number> = {};
  monsters.forEach(m => {
    const cr = String(m.Challenge);
    crMap[cr] = (crMap[cr] || 0) + 1;
  });
  const crData = Object.entries(crMap)
    .map(([name, count]) => ({ name: `CR ${name}`, count }))
    .sort((a, b) => a.count - b.count);

  // --- Type Data Processing with "Other" grouping ---
  const typeMap: Record<string, number> = {};
  monsters.forEach(m => {
    typeMap[m.type] = (typeMap[m.type] || 0) + 1;
  });

  const sortedTypes = Object.entries(typeMap).sort((a, b) => b[1] - a[1]);
  const topTypes = sortedTypes.slice(0, 5);
  const otherTypes = sortedTypes.slice(5);
  
  const typeData = topTypes.map(([name, value]) => ({ name, value }));
  if (otherTypes.length > 0) {
    const otherSum = otherTypes.reduce((acc, curr) => acc + curr[1], 0);
    typeData.push({ name: 'Other', value: otherSum });
  }

  return (
    <div className="analytics-dashboard">
      <div className="chart-wrapper">
        <h4>CR Distribution</h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={crData}>
            <XAxis dataKey="name" stroke="#888" fontSize={10} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #d4af37' }}
              itemStyle={{ color: '#d4af37' }}
            />
            <Bar dataKey="count" fill="#d4af37" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-wrapper pie-chart-wrapper">
        <h4>Monster Type Breakdown</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={typeData}
              innerRadius={60} // Slightly larger inner radius for the label
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {typeData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              {/* Central Label Implementation */}
              <Label 
                value={totalCount} 
                position="center" 
                fill="#fff" 
                style={{ fontSize: '24px', fontWeight: 'bold' }} 
              />
              <Label 
                value="Total" 
                position="center" 
                dy={20} 
                fill="#d4af37" 
                style={{ fontSize: '12px', textTransform: 'uppercase' }} 
              />
            </Pie>
            <Tooltip />
            <Legend 
              layout="vertical" 
              align="right" 
              verticalAlign="middle" 
              iconType="circle"
              wrapperStyle={{ paddingLeft: '10px', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonsterAnalytics;