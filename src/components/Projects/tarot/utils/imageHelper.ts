/**
 * Resolves the path for a tarot card image based on its short name.
 * Works for both local development and production builds.
 */
export const getCardImageUrl = (nameShort: string): string => {
    // Use Vite's URL constructor for reliable asset resolution
    return new URL(`../assets/cardImages/${nameShort}.jpg`, import.meta.url).href;
  };