import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Calendar } from "lucide-react";

export default function Mentorship() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black uppercase mb-4">Mentorship Hub</h1>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl">
            Connect with experienced women leaders for guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="neo-card p-6 bg-card flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-gray-200 border-4 border-border mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-gray-500" />
              </div>
              <h3 className="text-xl font-black uppercase mb-1">Dr. Sarah Smith</h3>
              <p className="text-sm font-bold text-primary mb-4">CTO @ TechGlobal</p>
              
              <p className="text-sm font-medium text-muted-foreground mb-6">
                "Passionate about helping women break into tech leadership roles. 15+ years of experience."
              </p>

              <div className="flex gap-2 mb-6 flex-wrap justify-center">
                <Badge variant="secondary" className="border-2 border-border">Leadership</Badge>
                <Badge variant="secondary" className="border-2 border-border">Technology</Badge>
              </div>

              <div className="flex gap-2 w-full mt-auto">
                <Button className="flex-1 border-2 border-border font-bold bg-accent text-white hover:bg-accent/90">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat
                </Button>
                <Button variant="outline" className="flex-1 border-2 border-border font-bold">
                  <Calendar className="mr-2 h-4 w-4" /> Book
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
