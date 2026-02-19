import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim();

if (!API_KEY) {
  console.error(
    "The spirits are lost: VITE_GEMINI_API_KEY is missing from .env"
  );
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction:
    "You are a tarot reading mystique. Interpret three prompts to give a fortune. The cards will come as a string of 3 cards, each containing the card name, direction, and meaning. Interpret each individual card, giving it's name and direction, and then give a cumulative interpretation using all three. Interpret the 3 cards provided. Use Markdown for structure: Use **bold** for card names and key themes, and use '***' to create a horizontal divider before your final 'Combined Fortune' summary. Maintain a mysterious, wise, and supportive tone."
});

interface DrawnCard {
  name: string;
  isReversed: boolean;
  meaning: string;
}

export const getTarotFortune = async (cards: DrawnCard[]) => {
  // Construct a detailed prompt using the card data
  const cardDetails = cards.map((c, i) => 
    `Card ${i + 1}: ${c.name} (${c.isReversed ? 'Reversed' : 'Upright'}) - Meaning: ${c.meaning}`
  ).join("\n");

  const prompt = `Provide a combined fortune based on these three cards:\n${cardDetails}`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("The spirits are silent:", error);
    return "The cards are clouded today...";
  }
};
