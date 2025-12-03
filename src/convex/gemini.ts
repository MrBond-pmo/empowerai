import { action } from "./_generated/server";
import { v } from "convex/values";

export const chat = action({
  args: { message: v.string() },
  handler: async (ctx, args) => {
    // In a real implementation, this would call the Gemini API
    // For now, we'll simulate a response
    
    const responses = [
      "I can help you with that! Based on your profile, I recommend focusing on Python skills.",
      "That's a great question. For safety in that area, I suggest using our live location sharing feature.",
      "I found 3 new job openings that match your criteria. Would you like to see them?",
      "Connecting you with a mentor in the tech industry could be very beneficial for your career growth.",
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return randomResponse;
  },
});
