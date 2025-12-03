import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AlertTriangle, Mic, Phone, ShieldAlert, X } from "lucide-react";
import { useState } from "react";

export function SafetyPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            className="h-16 w-16 rounded-full bg-destructive text-white border-4 border-black neo-shadow hover:scale-105 transition-transform flex flex-col items-center justify-center gap-1"
          >
            <ShieldAlert className="h-6 w-6" />
            <span className="text-[10px] font-black uppercase">SOS</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0 border-4 border-black neo-shadow bg-card" side="top" align="end">
          <div className="bg-destructive text-white p-4 border-b-4 border-black flex justify-between items-center">
            <h3 className="font-black text-lg uppercase flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Safety Companion
            </h3>
            <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-black/20" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="bg-background border-2 border-black p-3 rounded-lg">
              <p className="text-sm font-bold mb-2">AI Threat Analysis</p>
              <p className="text-xs text-muted-foreground">Describe your situation or record audio. Gemini 2.5 Flash will analyze and suggest actions.</p>
            </div>

            <div className="flex gap-2">
              <Button 
                className={`flex-1 border-2 border-black font-bold ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-secondary text-black'}`}
                onClick={() => setIsRecording(!isRecording)}
              >
                <Mic className="mr-2 h-4 w-4" />
                {isRecording ? "Recording..." : "Record Audio"}
              </Button>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black uppercase text-muted-foreground">Emergency Contacts</p>
              <Button variant="outline" className="w-full justify-start border-2 border-black hover:bg-destructive/10 font-bold">
                <Phone className="mr-2 h-4 w-4 text-destructive" />
                Police (100)
              </Button>
              <Button variant="outline" className="w-full justify-start border-2 border-black hover:bg-destructive/10 font-bold">
                <Phone className="mr-2 h-4 w-4 text-destructive" />
                Women's Helpline (1091)
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
