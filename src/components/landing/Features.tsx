import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Briefcase, Shield, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-card border-y-4 border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">{t.sections.poweredBy} <span className="text-primary">Gemini 2.5 Flash</span></h2>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI engine understands your context, language, and goals to provide hyper-personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="neo-card bg-background hover:bg-secondary/10 transition-colors">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-primary rounded-lg border-2 border-black flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Personalized Learning</h3>
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

          <Card className="neo-card bg-background hover:bg-accent/10 transition-colors md:-mt-8">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-accent rounded-lg border-2 border-black flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Career Guidance</h3>
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

          <Card className="neo-card bg-background hover:bg-yellow-400/10 transition-colors">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-yellow-400 rounded-lg border-2 border-black flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Safety Intelligence</h3>
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
  );
}
