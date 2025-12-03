import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black uppercase mb-4">Smart Jobs</h1>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl">
            AI-matched opportunities that fit your skills, location, and preferences.
          </p>
        </div>

        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="neo-card p-6 bg-card hover:translate-x-1 hover:translate-y-1 transition-transform">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-black uppercase">Senior UX Designer</h3>
                    <Badge className="bg-green-500 text-white border-2 border-border">95% Match</Badge>
                  </div>
                  <p className="text-lg font-bold mb-4">TechCorp Solutions</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 font-bold text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" /> Remote / Bangalore
                    </div>
                    <div className="flex items-center gap-2 font-bold text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" /> ₹12L - ₹18L PA
                    </div>
                    <div className="flex items-center gap-2 font-bold text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" /> Full-time
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-2 border-border font-bold">Figma</Badge>
                    <Badge variant="outline" className="border-2 border-border font-bold">React</Badge>
                    <Badge variant="outline" className="border-2 border-border font-bold">User Research</Badge>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-2 min-w-[150px]">
                  <Button className="neo-button w-full">Apply Now</Button>
                  <Button variant="outline" className="border-2 border-border font-bold w-full">Save Job</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
