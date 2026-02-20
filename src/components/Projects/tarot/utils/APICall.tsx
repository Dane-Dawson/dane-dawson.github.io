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
  generationConfig: {
    thinkingConfig: {
      includeThoughts: false, // Prevents the model from returning the reasoning chain
      thinkingBudget: 0,      // SET TO 0: This disables the "thinking" tokens entirely
    },
    maxOutputTokens: 800,     // Caps the response length to save on output costs
    temperature: 0.7,         // Slightly lower temperature keeps the model more focused
    topP: 0.9,
  } as any,
  systemInstruction:
    "You are a tarot reading mystique. Interpret three prompts to give a fortune. The cards will come as a string of 3 cards, each containing the card name, direction, and meaning. Interpret each individual card, giving it's name and direction, and then give a cumulative interpretation using all three. Interpret the 3 cards provided. Use Markdown for structure: Use **bold** for card names and key themes, and use '***' to create a horizontal divider before your final 'Combined Fortune' summary. Maintain a mysterious, wise, and supportive tone."
});

interface DrawnCard {
  name: string;
  isReversed: boolean;
  meaning: string;
}

export const getTarotFortune = async (cards: DrawnCard[]) => {
  const cardDetails = cards.map((c, i) => 
    `Card ${i + 1}: ${c.name} (${c.isReversed ? 'Reversed' : 'Upright'}) - Meaning: ${c.meaning}`
  ).join("\n");

  const prompt = `Provide a combined fortune based on these three cards:\n${cardDetails}`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error: any) {
    // Check for rate limit error (429)
    if (error.status === 429 || error.message?.includes("429")) {
      throw new Error("The celestial gateway is temporarily closed. The spirits are resting—please try your reading again another time.");
    }
    
    console.error("The spirits are clouded:", error);
    throw new Error("A shadow has fallen over the cards. We cannot see your future right now.");
  }
};
