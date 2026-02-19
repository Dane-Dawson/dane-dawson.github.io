export interface Monster {
  name: string;
  size: string;
  type: string;
  alignment: string;
  "Armor Class": number;
  armor_type: string;
  "Hit Points": number;
  hit_point_die: string;
  Speed: string[];
  STR: number;
  STR_mod: string;
  DEX: number;
  DEX_mod: string;
  CON: number;
  CON_mod: string;
  INT: number;
  INT_mod: string;
  WIS: number;
  WIS_mod: string;
  CHA: number;
  CHA_mod: string;
  "Saving Throws"?: string[];
  Skills?: string[];
  Senses: string[];
  Languages: string[];
  Challenge: number | string; // number for 10, string for "1/4"
  xp: number;
  Traits: string[];
  Actions: string[];
  "Legendary Actions"?: string[];
  img_url: string;
}

export interface MonsterData {
  monsters: Monster[];
}
