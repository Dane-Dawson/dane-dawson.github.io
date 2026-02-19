export interface Painting {
    id: number;
    painting_title: string;
    img_src: string;
    youtube_src: string;
    season: number;
    episode: number;
    num_colors: number;
    colors: string[]; // Now an array thanks to your transform
    color_hex: string[]; // Now an array
  }
  
  export interface BobRossData {
    paintings: Painting[];
  }