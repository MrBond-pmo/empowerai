import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SafetyPanel } from "@/components/SafetyPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, User, Users } from "lucide-react";

export default function Mentorship() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-400 text-black border-2 border-black">Community</Badge>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Find Your Mentor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-bold">
            Connect with experienced women leaders who can guide you through your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} className="neo-card bg-card text-center hover:-translate-y-2 transition-transform">
              <CardContent className="p-6 pt-8">
                <div className="h-24 w-24 mx-auto bg-zinc-800 rounded-full border-4 border-black mb-4 relative flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                    <div className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 rounded-full border-2 border-black"></div>
                </div>
                <h3 className="text-lg font-black uppercase">Dr. Sarah Smith</h3>
                <p className="text-sm font-bold text-muted-foreground mb-4">CTO @ TechGlobal</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <Badge variant="secondary" className="border border-black">Leadership</Badge>
                    <Badge variant="secondary" className="border border-black">Tech</Badge>
                </div>
                <div className="flex gap-2">
                    <Button className="flex-1 border-2 border-black font-bold" variant="outline">Profile</Button>
                    <Button className="flex-1 bg-primary text-white border-2 border-black font-bold">
                        <MessageCircle className="h-4 w-4" />
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <SafetyPanel />
      <Footer />
    </div>
  );
}