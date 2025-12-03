"use node";
import { action } from "./_generated/server";
import { v } from "convex/values";

export const chat = action({
  args: { message: v.string() },
  handler: async (ctx, args) => {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return "I'm sorry, but the Gemini API key is not configured. Please add GEMINI_API_KEY to the environment variables.";
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: args.message,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API Error:", errorText);
        return "I'm having trouble connecting to my brain right now. Please try again later.";
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts.length > 0) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return "I didn't understand that. Could you rephrase?";
      }
    } catch (error) {
      console.error("Gemini Action Error:", error);
      return "An internal error occurred while processing your request.";
    }
  },
});
