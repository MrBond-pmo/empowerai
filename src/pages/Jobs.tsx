import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SafetyPanel } from "@/components/SafetyPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, Search } from "lucide-react";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary text-black border-2 border-black">Smart Matching</Badge>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Career Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-bold">
            Find jobs that value your skills and offer the flexibility you need.
          </p>
        </div>

        <div className="neo-card p-6 bg-accent text-white mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search for jobs, skills, or companies..." className="pl-10 bg-white text-black border-2 border-black font-bold h-12" />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Location (e.g. Remote, Bangalore)" className="pl-10 bg-white text-black border-2 border-black font-bold h-12" />
            </div>
            <Button className="neo-button bg-primary text-white h-12 px-8">Search Jobs</Button>
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="neo-card p-6 bg-card hover:bg-secondary/10 transition-colors">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex gap-4">
                  <div className="h-16 w-16 bg-white border-2 border-black rounded-lg flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase">Senior Product Designer</h3>
                    <p className="text-sm font-bold text-muted-foreground">TechCorp Inc. • Posted 2 days ago</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="border-2 border-black bg-green-100">Remote</Badge>
                      <Badge variant="outline" className="border-2 border-black bg-blue-100">Full-time</Badge>
                      <Badge variant="outline" className="border-2 border-black bg-purple-100">Women Friendly</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="font-black text-lg">₹25L - ₹35L / yr</span>
                  <Button className="neo-button-secondary">Apply Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SafetyPanel />
      <Footer />
    </div>
  );
}
