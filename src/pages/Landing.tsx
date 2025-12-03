import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SafetyPanel } from "@/components/SafetyPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Bot, Briefcase, Check, Heart, Shield, Sparkles, User, Users } from "lucide-react";
import { useNavigate } from "react-router";

export default function Landing() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Badge className="bg-accent text-black border-2 border-black px-4 py-1 text-sm font-black uppercase tracking-wider neo-shadow-sm">
              {t.hero.badge}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
              {t.hero.title}
            </h1>
            <p className="text-xl font-bold text-muted-foreground max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="neo-button text-lg h-16"
                onClick={() => navigate("/dashboard")}
              >
                {t.hero.getStarted} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-4 border-black text-lg h-16 font-bold neo-shadow hover:bg-accent hover:text-white transition-all"
                onClick={() => navigate("/dashboard")}
              >
                <Bot className="mr-2 h-5 w-5" /> {t.hero.talkToGemini}
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="neo-card bg-secondary text-black p-6 rotate-[-2deg]">
                  <Briefcase className="h-8 w-8 mb-2" />
                  <h3 className="font-black text-xl">{t.features.smartJobs}</h3>
                  <p className="text-xs font-bold">Context-aware matching</p>
                </div>
                <div className="neo-card bg-primary text-white p-6 rotate-[2deg]">
                  <Shield className="h-8 w-8 mb-2" />
                  <h3 className="font-black text-xl">{t.features.safetyFirst}</h3>
                  <p className="text-xs font-bold">Real-time threat detection</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="neo-card bg-accent text-black p-6 rotate-[1deg]">
                  <BookOpen className="h-8 w-8 mb-2" />
                  <h3 className="font-black text-xl">{t.features.upskilling}</h3>
                  <p className="text-xs font-bold">Personalized paths</p>
                </div>
                <div className="neo-card bg-yellow-400 text-black p-6 rotate-[-1deg]">
                  <Users className="h-8 w-8 mb-2" />
                  <h3 className="font-black text-xl">{t.features.mentorship}</h3>
                  <p className="text-xs font-bold">Global community</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-black rounded-full border-4 border-white z-0"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-primary rounded-full border-4 border-black z-20"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="skills" className="py-20 bg-card border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">{t.sections.poweredBy} <span className="text-primary">Advanced AI</span></h2>
            <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI engine understands your context, language, and goals to provide hyper-personalized support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="neo-card bg-background hover:bg-secondary/10 transition-colors cursor-pointer" onClick={() => navigate("/skills")}>
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-primary rounded-lg border-2 border-black flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{t.features.upskilling}</h3>
                <p className="font-medium text-muted-foreground mb-6">
                  AI creates custom curriculums based on your career goals, education level, and local job market trends.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Adaptive difficulty</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Regional language support</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Progress tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="neo-card bg-background hover:bg-accent/10 transition-colors md:-mt-8 cursor-pointer" onClick={() => navigate("/jobs")}>
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-accent rounded-lg border-2 border-black flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{t.features.smartJobs}</h3>
                <p className="font-medium text-muted-foreground mb-6">
                  Smart job matching that understands gaps in resumes (like maternity breaks) and suggests relevant opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Resume analyzer</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Interview prep bot</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Remote work filter</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="neo-card bg-background hover:bg-yellow-400/10 transition-colors cursor-pointer" onClick={() => navigate("/safety")}>
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-yellow-400 rounded-lg border-2 border-black flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{t.features.safetyFirst}</h3>
                <p className="font-medium text-muted-foreground mb-6">
                  Real-time threat analysis of situations via text or audio, providing immediate guidance and alerts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> SOS activation</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Location sharing</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-green-500" /> Legal rights info</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentorship" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase">{t.sections.ready} <span className="text-black bg-secondary px-2 rounded-lg">{t.features.mentorship}</span></h2>
              <p className="text-xl font-bold text-muted-foreground">
                Connect with women leaders who have walked your path. Our AI matches you based on industry, language, and shared experiences.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Badge className="bg-white text-black border-2 border-black text-lg py-2 px-4 hover:bg-gray-100">Tech</Badge>
                <Badge className="bg-white text-black border-2 border-black text-lg py-2 px-4 hover:bg-gray-100">Business</Badge>
                <Badge className="bg-white text-black border-2 border-black text-lg py-2 px-4 hover:bg-gray-100">Arts</Badge>
                <Badge className="bg-white text-black border-2 border-black text-lg py-2 px-4 hover:bg-gray-100">Science</Badge>
              </div>
              <Button className="neo-button-secondary mt-4" onClick={() => navigate("/mentorship")}>
                Find a Mentor
              </Button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="neo-card p-4 bg-background">
                <div className="h-16 w-16 rounded-full bg-zinc-800 border-2 border-black mb-4 mx-auto flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-center font-black">Dr. Anjali</p>
                <p className="text-center text-xs font-bold text-muted-foreground">AI Researcher</p>
              </div>
              <div className="neo-card p-4 bg-background mt-8">
                <div className="h-16 w-16 rounded-full bg-zinc-800 border-2 border-black mb-4 mx-auto flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-center font-black">Sarah J.</p>
                <p className="text-center text-xs font-bold text-muted-foreground">Product Lead</p>
              </div>
              <div className="neo-card p-4 bg-background">
                <div className="h-16 w-16 rounded-full bg-zinc-800 border-2 border-black mb-4 mx-auto flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-center font-black">Lakshmi R.</p>
                <p className="text-center text-xs font-bold text-muted-foreground">Entrepreneur</p>
              </div>
              <div className="neo-card p-4 bg-background mt-8">
                <div className="h-16 w-16 rounded-full bg-zinc-800 border-2 border-black mb-4 mx-auto flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-center font-black">Meera K.</p>
                <p className="text-center text-xs font-bold text-muted-foreground">Legal Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-primary text-white border-y-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">{t.sections.impact}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-black mb-2">50k+</div>
              <div className="text-lg font-bold uppercase">Women Upskilled</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">12k+</div>
              <div className="text-lg font-bold uppercase">Jobs Secured</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">5k+</div>
              <div className="text-lg font-bold uppercase">Mentors Active</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">24/7</div>
              <div className="text-lg font-bold uppercase">Safety Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">{t.sections.community}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-card p-8 bg-card">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Heart key={i} className="h-5 w-5 text-primary fill-primary" />)}
              </div>
              <p className="font-bold text-lg mb-6">"After my career break, I felt lost. MahileAI's personalized path helped me learn Python in Tamil, and I landed a remote job last month!"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-black">Kavitha M.</p>
                  <p className="text-xs font-bold text-muted-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
            <div className="neo-card p-8 bg-card md:translate-y-4">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Heart key={i} className="h-5 w-5 text-primary fill-primary" />)}
              </div>
              <p className="font-bold text-lg mb-6">"The safety feature is a game changer. I travel late for work, and having the AI companion monitor my journey gives me so much peace of mind."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-black">Sneha P.</p>
                  <p className="text-xs font-bold text-muted-foreground">Bangalore, India</p>
                </div>
              </div>
            </div>
            <div className="neo-card p-8 bg-card">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Heart key={i} className="h-5 w-5 text-primary fill-primary" />)}
              </div>
              <p className="font-bold text-lg mb-6">"I found an amazing mentor who guided me through starting my own business. The vernacular support made it so easy to connect."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-black">Lakshmi S.</p>
                  <p className="text-xs font-bold text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-black border-t-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">{t.sections.ready}</h2>
          <p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
            Join thousands of women transforming their lives with the power of AI. Safe, inclusive, and empowering.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black border-4 border-black text-xl h-20 px-12 font-black neo-shadow hover:bg-gray-100 hover:scale-105 transition-all"
            onClick={() => navigate("/auth")}
          >
            {t.sections.join}
          </Button>
        </div>
      </section>

      <SafetyPanel />
      <Footer />
    </div>
  );
}