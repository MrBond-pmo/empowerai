import { Footer } from "@/components/Footer";
import { GeminiChat } from "@/components/GeminiChat";
import { Navbar } from "@/components/Navbar";
import { SafetyPanel } from "@/components/SafetyPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/use-auth";
import { BookOpen, Briefcase, CheckCircle, Clock, Loader2, Target, TrendingUp, Trophy, User } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Sidebar / Main Content */}
          <div className="flex-1 space-y-8">
            
            {/* Welcome Section */}
            <section className="neo-card p-8 bg-secondary text-black relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-4xl font-black uppercase mb-2">Welcome back, {user?.name || "Friend"}!</h1>
                <p className="text-lg font-bold mb-6 max-w-xl">
                  You're on a 5-day learning streak. Keep up the momentum to unlock your "Data Science" badge.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-black text-white border-2 border-white hover:bg-black/80 font-bold">
                    Resume Learning
                  </Button>
                  <Button variant="outline" className="bg-transparent border-2 border-black font-bold">
                    View Profile
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                <Trophy className="h-64 w-64" />
              </div>
            </section>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="neo-card p-4 bg-accent text-black">
                <div className="flex justify-between items-start mb-2">
                  <BookOpen className="h-6 w-6" />
                  <span className="text-2xl font-black">12</span>
                </div>
                <p className="text-xs font-bold uppercase">Courses Completed</p>
              </div>
              <div className="neo-card p-4 bg-primary text-white">
                <div className="flex justify-between items-start mb-2">
                  <Target className="h-6 w-6" />
                  <span className="text-2xl font-black">85%</span>
                </div>
                <p className="text-xs font-bold uppercase">Skill Score</p>
              </div>
              <div className="neo-card p-4 bg-yellow-400 text-black">
                <div className="flex justify-between items-start mb-2">
                  <Briefcase className="h-6 w-6" />
                  <span className="text-2xl font-black">5</span>
                </div>
                <p className="text-xs font-bold uppercase">Jobs Applied</p>
              </div>
              <div className="neo-card p-4 bg-purple-500 text-white">
                <div className="flex justify-between items-start mb-2">
                  <Clock className="h-6 w-6" />
                  <span className="text-2xl font-black">24h</span>
                </div>
                <p className="text-xs font-bold uppercase">Learning Time</p>
              </div>
            </div>

            {/* Recommended Jobs */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" /> Recommended Jobs
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="neo-card p-6 bg-card hover:translate-x-1 hover:translate-y-1 transition-transform cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-black">Senior UX Designer</h3>
                        <p className="text-sm font-bold text-muted-foreground mb-2">TechCorp Solutions • Remote</p>
                        <div className="flex gap-2 mb-4">
                          <Badge variant="outline" className="border-2 border-black font-bold bg-secondary/20">Full-time</Badge>
                          <Badge variant="outline" className="border-2 border-black font-bold bg-accent/20">Design</Badge>
                          <Badge variant="outline" className="border-2 border-black font-bold bg-primary/20">Women Friendly</Badge>
                        </div>
                      </div>
                      <Button size="sm" className="border-2 border-black font-bold">Apply Now</Button>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      95% Match with your profile
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Path */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-secondary" /> Your Learning Path
              </h2>
              <div className="neo-card p-6 bg-card">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-black">Advanced React Patterns</span>
                      <span className="font-bold text-primary">75%</span>
                    </div>
                    <Progress value={75} className="h-4 border-2 border-black bg-muted [&>div]:bg-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-black">UI/UX Fundamentals</span>
                      <span className="font-bold text-secondary">40%</span>
                    </div>
                    <Progress value={40} className="h-4 border-2 border-black bg-muted [&>div]:bg-secondary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-black">AI for Designers</span>
                      <span className="font-bold text-accent">10%</span>
                    </div>
                    <Progress value={10} className="h-4 border-2 border-black bg-muted [&>div]:bg-accent" />
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-96 space-y-8">
            <GeminiChat />
            
            <div className="neo-card p-6 bg-purple-100 text-black">
              <h3 className="font-black text-lg uppercase mb-4">Upcoming Mentorship</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-black p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-black text-sm">Sarah Connor</p>
                      <p className="text-xs font-bold text-gray-500">Tech Lead @ Skynet</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold mb-3">
                    <Clock className="h-3 w-3" /> Today, 4:00 PM
                  </div>
                  <Button size="sm" className="w-full border-2 border-black font-bold bg-purple-500 text-white hover:bg-purple-600">
                    Join Meeting
                  </Button>
                </div>
              </div>
            </div>

            <div className="neo-card p-6 bg-yellow-100 text-black">
              <h3 className="font-black text-lg uppercase mb-4">Daily Challenge</h3>
              <p className="text-sm font-bold mb-4">Complete the "Accessibility in Design" quiz to earn 50 points.</p>
              <Button variant="outline" className="w-full border-2 border-black font-bold bg-white text-black hover:bg-gray-50">
                Start Quiz
              </Button>
            </div>
          </div>

        </div>
      </main>

      <SafetyPanel />
      <Footer />
    </div>
  );
}