import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Phone, MapPin, Mic } from "lucide-react";

export default function Safety() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black uppercase mb-4">Safety Intelligence</h1>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl">
            Real-time safety tools and AI-powered threat analysis to keep you secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="neo-card p-8 bg-destructive text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white rounded-full border-4 border-black">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-3xl font-black uppercase">Emergency SOS</h2>
            </div>
            <p className="font-bold mb-8 text-lg">
              Instantly alert your emergency contacts and local authorities with your live location.
            </p>
            <Button className="w-full h-20 text-2xl font-black bg-white text-destructive border-4 border-black hover:bg-gray-100 uppercase">
              Trigger SOS
            </Button>
          </div>

          <div className="neo-card p-8 bg-primary text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white rounded-full border-4 border-black">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-black uppercase">AI Guardian</h2>
            </div>
            <p className="font-bold mb-8 text-lg">
              Analyze your surroundings or conversations for potential threats using Gemini AI.
            </p>
            <div className="flex gap-4">
              <Button className="flex-1 h-16 font-black bg-white text-primary border-4 border-black hover:bg-gray-100">
                <Mic className="mr-2 h-6 w-6" /> Record Audio
              </Button>
              <Button className="flex-1 h-16 font-black bg-white text-primary border-4 border-black hover:bg-gray-100">
                <MapPin className="mr-2 h-6 w-6" /> Share Location
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="neo-card p-6 bg-card">
            <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5" /> Emergency Contacts
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-between border-2 border-black font-bold h-12">
                Police Control Room <span>100</span>
              </Button>
              <Button variant="outline" className="w-full justify-between border-2 border-black font-bold h-12">
                Women's Helpline <span>1091</span>
              </Button>
              <Button variant="outline" className="w-full justify-between border-2 border-black font-bold h-12">
                Domestic Abuse <span>181</span>
              </Button>
            </div>
          </div>

          <div className="neo-card p-6 bg-card">
            <h3 className="text-xl font-black uppercase mb-4">Safe Zones</h3>
            <div className="h-48 bg-gray-200 border-2 border-black rounded-lg flex items-center justify-center font-bold text-muted-foreground">
              Map View Placeholder
            </div>
          </div>

          <div className="neo-card p-6 bg-card">
            <h3 className="text-xl font-black uppercase mb-4">Legal Rights</h3>
            <ul className="space-y-2 font-medium text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                Right to Zero FIR
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                Right to Privacy while recording statement
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                Right to not be arrested at night
              </li>
            </ul>
            <Button variant="link" className="mt-2 px-0 font-black text-primary">View All Rights</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
