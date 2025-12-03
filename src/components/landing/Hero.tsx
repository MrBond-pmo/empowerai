import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Briefcase, BookOpen, Shield, Users } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
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
          <Badge className="bg-accent text-white border-2 border-black px-4 py-1 text-sm font-black uppercase tracking-wider neo-shadow-sm">
            {t.hero.badge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
            {t.hero.title} <span className="text-primary bg-primary/10 px-2 rounded-lg">{t.hero.potential}</span>
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
            >
              <Bot className="mr-2 h-5 w-5" /> {t.hero.talkToAI}
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
              <div className="neo-card bg-secondary p-6 rotate-[-2deg] cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate("/jobs")}>
                <Briefcase className="h-8 w-8 mb-2" />
                <h3 className="font-black text-xl">{t.features.smartJobs}</h3>
                <p className="text-xs font-bold">Context-aware matching</p>
              </div>
              <div className="neo-card bg-primary text-white p-6 rotate-[2deg] cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate("/safety")}>
                <Shield className="h-8 w-8 mb-2" />
                <h3 className="font-black text-xl">{t.features.safetyFirst}</h3>
                <p className="text-xs font-bold">Real-time threat detection</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="neo-card bg-accent text-white p-6 rotate-[1deg] cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate("/skills")}>
                <BookOpen className="h-8 w-8 mb-2" />
                <h3 className="font-black text-xl">{t.features.upskilling}</h3>
                <p className="text-xs font-bold">Personalized paths</p>
              </div>
              <div className="neo-card bg-yellow-400 text-black p-6 rotate-[-1deg] cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate("/mentorship")}>
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
  );
}