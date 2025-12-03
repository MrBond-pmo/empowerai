import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SafetyPanel } from "@/components/SafetyPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle, Play, Star } from "lucide-react";

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-black border-2 border-black">AI-Powered Learning</Badge>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Skill Development</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-bold">
            Personalized learning paths curated by AI to help you reach your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="neo-card bg-card hover:translate-x-1 hover:translate-y-1 transition-transform">
              <div className="h-48 bg-muted border-b-4 border-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-16 w-16 text-primary opacity-50" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="border-2 border-black font-bold">Tech</Badge>
                  <div className="flex items-center gap-1 text-yellow-500 font-black">
                    <Star className="h-4 w-4 fill-current" /> 4.8
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase mb-2">Introduction to Data Science</h3>
                <p className="text-sm font-bold text-muted-foreground mb-4">
                  Learn the basics of data analysis, visualization, and machine learning using Python.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-xs font-black uppercase">
                    <span>Progress</span>
                    <span>32%</span>
                  </div>
                  <Progress value={32} className="h-3 border-2 border-black" />
                </div>
                <Button className="w-full neo-button">Continue Learning</Button>
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