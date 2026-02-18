import fs from 'fs';

const data = JSON.parse(fs.readFileSync('db_final.json', 'utf8'));

const finalData = data.monsters.map(monster => {
  const newMonster = { ...monster };

  // 1. Armor Class: "17 (Natural Armor)" -> 17, "Natural Armor"
  if (newMonster["Armor Class"]) {
    const acMatch = newMonster["Armor Class"].match(/(\d+)\s*(?:\((.*)\))?/);
    if (acMatch) {
      newMonster["Armor Class"] = parseInt(acMatch[1], 10);
      newMonster.armor_type = acMatch[2] ? acMatch[2].trim() : "";
    }
  }

  // 2. Hit Points: "135 (18d10 + 36)" -> 135, "18d10 + 36"
  if (newMonster["Hit Points"]) {
    const hpMatch = newMonster["Hit Points"].match(/(\d+)\s*(?:\((.*)\))?/);
    if (hpMatch) {
      newMonster["Hit Points"] = parseInt(hpMatch[1], 10);
      newMonster.hit_point_die = hpMatch[2] ? hpMatch[2].trim() : "";
    }
  }

  // 3. Speed: "10 ft., swim 40 ft." -> ["10 ft.", "swim 40 ft."]
  if (typeof newMonster.Speed === 'string') {
    newMonster.Speed = newMonster.Speed.split(',').map(s => s.trim()).filter(s => s !== "");
  }

  // 4. Senses: Split by comma
  if (typeof newMonster.Senses === 'string') {
    newMonster.Senses = newMonster.Senses.split(',').map(s => s.trim()).filter(s => s !== "");
  }

  // 5. Challenge & XP: "10 (5,900 XP)" -> 10, 5900
  if (newMonster.Challenge) {
    const challengeMatch = newMonster.Challenge.match(/([\d/]+)\s*\(([\d,]+)\s*XP\)/);
    if (challengeMatch) {
      // Handle fractional CRs like "1/4" by keeping them as strings or evaluating
      const crRaw = challengeMatch[1];
      newMonster.Challenge = crRaw.includes('/') ? crRaw : parseInt(crRaw, 10);
      
      // Remove comma from XP and convert to Int
      newMonster.xp = parseInt(challengeMatch[2].replace(/,/g, ''), 10);
    }
  }

  return newMonster;
});

fs.writeFileSync('db_complete.json', JSON.stringify({ monsters: finalData }, null, 2));
console.log("Final transformation complete! Check db_complete.json");