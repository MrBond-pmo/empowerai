import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SafetyPanel } from "@/components/SafetyPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MapPin, Phone, Shield, ShieldAlert } from "lucide-react";

export default function Safety() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-destructive text-white border-2 border-black">24/7 Support</Badge>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Safety Intelligence</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-bold">
            Real-time threat analysis, emergency response, and legal guidance powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="neo-card p-8 bg-destructive text-white">
                <ShieldAlert className="h-16 w-16 mb-6" />
                <h2 className="text-3xl font-black uppercase mb-4">Emergency SOS</h2>
                <p className="font-bold mb-8 text-lg">
                    Instantly alert your emergency contacts and local authorities with your live location and audio recording.
                </p>
                <Button className="w-full bg-white text-destructive border-4 border-black h-20 text-2xl font-black hover:bg-gray-100">
                    ACTIVATE SOS
                </Button>
            </div>

            <div className="space-y-6">
                <div className="neo-card p-6 bg-card flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary rounded-full border-2 border-black flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase">AI Threat Analysis</h3>
                        <p className="text-sm font-bold text-muted-foreground">Analyze messages or audio for potential threats.</p>
                    </div>
                </div>
                <div className="neo-card p-6 bg-card flex items-center gap-4">
                    <div className="h-12 w-12 bg-accent rounded-full border-2 border-black flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase">Safe Route Planner</h3>
                        <p className="text-sm font-bold text-muted-foreground">Find the safest path based on real-time data.</p>
                    </div>
                </div>
                <div className="neo-card p-6 bg-card flex items-center gap-4">
                    <div className="h-12 w-12 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center">
                        <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase">Legal Helpline</h3>
                        <p className="text-sm font-bold text-muted-foreground">Instant access to legal rights and counsel.</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <SafetyPanel />
      <Footer />
    </div>
  );
}