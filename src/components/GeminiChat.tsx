import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAction } from "convex/react";
import { Bot, Send, Sparkles, User } from "lucide-react";
import { useState } from "react";

export function GeminiChat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI Career & Safety Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatAction = useAction(api.gemini.chat);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    const newMessages = [
      ...messages,
      { role: "user", content: userMessage }
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatAction({ message: userMessage });
      setMessages([
        ...newMessages,
        { role: "assistant", content: response }
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "I'm having trouble connecting right now. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="neo-card h-[500px] flex flex-col bg-background overflow-hidden">
      <div className="bg-primary p-4 border-b-4 border-black flex items-center gap-3">
        <div className="bg-white p-2 rounded-full border-2 border-black">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-black text-white text-lg uppercase">AI Assistant</h3>
          <p className="text-xs text-white/80 font-bold">Powered by Advanced AI</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`h-8 w-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-accent' : 'bg-secondary'}`}>
                  {msg.role === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-black" />}
                </div>
                <div className={`p-3 rounded-lg border-2 border-black font-medium text-sm ${msg.role === 'user' ? 'bg-accent text-white' : 'bg-secondary text-black'}`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-2 max-w-[80%] flex-row">
                <div className="h-8 w-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-secondary">
                  <Bot className="h-4 w-4 text-black" />
                </div>
                <div className="p-3 rounded-lg border-2 border-black font-medium text-sm bg-secondary text-black">
                  Thinking...
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t-4 border-black bg-card">
        <div className="flex gap-2">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about careers, skills, or safety..."
            className="border-2 border-black focus-visible:ring-0 font-bold"
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading} className="bg-black text-white hover:bg-black/80 border-2 border-black">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}