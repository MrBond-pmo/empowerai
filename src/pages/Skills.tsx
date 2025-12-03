import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle, Play, Star } from "lucide-react";

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black uppercase mb-4">Skill Development</h1>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl">
            Personalized learning paths powered by AI to help you achieve your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="neo-card bg-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg border-2 border-black">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded border-2 border-black font-bold text-xs">
                  <Star className="h-3 w-3 fill-black" /> 4.8
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Digital Marketing</h3>
              <p className="text-sm font-bold text-muted-foreground mb-4">
                Master social media, SEO, and content marketing strategies.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-black uppercase">
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-3 border-2 border-black" />
              </div>
              <Button className="w-full neo-button">Continue Learning</Button>
            </CardContent>
          </Card>

          <Card className="neo-card bg-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-secondary/10 p-3 rounded-lg border-2 border-black">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded border-2 border-black font-bold text-xs">
                  <Star className="h-3 w-3 fill-black" /> 4.9
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Data Science Basics</h3>
              <p className="text-sm font-bold text-muted-foreground mb-4">
                Introduction to Python, data analysis, and visualization.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-black uppercase">
                  <span>Progress</span>
                  <span>12%</span>
                </div>
                <Progress value={12} className="h-3 border-2 border-black" />
              </div>
              <Button className="w-full neo-button">Continue Learning</Button>
            </CardContent>
          </Card>

          <Card className="neo-card bg-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-accent/10 p-3 rounded-lg border-2 border-black">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded border-2 border-black font-bold text-xs">
                  <Star className="h-3 w-3 fill-black" /> 4.7
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Financial Literacy</h3>
              <p className="text-sm font-bold text-muted-foreground mb-4">
                Managing personal finances, investments, and business accounts.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-black uppercase">
                  <span>Progress</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-3 border-2 border-black" />
              </div>
              <Button className="w-full neo-button">Start Course</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
