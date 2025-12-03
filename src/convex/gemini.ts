import { action } from "./_generated/server";
import { v } from "convex/values";

// This is a mock implementation since we don't have the actual Gemini API key configured yet.
// In a real implementation, you would use the Google Generative AI SDK.
export const sendMessage = action({
  args: {
    messages: v.array(
      v.object({
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const lastMessage = args.messages[args.messages.length - 1];
    
    let response = "I am MahileAI, your assistant. How can I help you today?";

    if (lastMessage.content.toLowerCase().includes("job")) {
      response = "I can help you find jobs that match your skills. Based on your profile, I recommend looking at our 'Smart Jobs' section for opportunities in Tech and Design.";
    } else if (lastMessage.content.toLowerCase().includes("safety")) {
      response = "Your safety is our priority. If you are in an emergency, please use the SOS button immediately. I can also analyze your current location safety if you share it.";
    } else if (lastMessage.content.toLowerCase().includes("skill") || lastMessage.content.toLowerCase().includes("learn")) {
      response = "Upskilling is a great way to advance. I recommend starting with our 'Digital Literacy' or 'Python Basics' courses available in the Skills section.";
    } else if (lastMessage.content.toLowerCase().includes("mentor")) {
      response = "We have many mentors available. You can connect with women leaders in your field through our Mentorship page.";
    }

    return response;
  },
});