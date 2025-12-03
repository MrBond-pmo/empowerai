import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function Mentorship() {
  const { t } = useLanguage();

  return (
    <section id="mentorship" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase">{t.sections.ready} <span className="text-secondary bg-secondary/10 px-2 rounded-lg">{t.features.mentorship}</span></h2>
            <p className="text-xl font-bold text-muted-foreground">
              Connect with women leaders who have walked your path. Our AI matches you based on industry, language, and shared experiences.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Badge className="bg-background border-2 border-border text-lg py-2 px-4">Tech</Badge>
              <Badge className="bg-background border-2 border-border text-lg py-2 px-4">Business</Badge>
              <Badge className="bg-background border-2 border-border text-lg py-2 px-4">Arts</Badge>
              <Badge className="bg-background border-2 border-border text-lg py-2 px-4">Science</Badge>
            </div>
            <Button className="neo-button-secondary mt-4">
              Find a Mentor
            </Button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="neo-card p-4 bg-background">
              <div className="h-16 w-16 rounded-full bg-gray-300 border-2 border-border mb-4 mx-auto"></div>
              <p className="text-center font-black">Dr. Anjali</p>
              <p className="text-center text-xs font-bold text-muted-foreground">AI Researcher</p>
            </div>
            <div className="neo-card p-4 bg-background mt-8">
              <div className="h-16 w-16 rounded-full bg-gray-300 border-2 border-border mb-4 mx-auto"></div>
              <p className="text-center font-black">Sarah J.</p>
              <p className="text-center text-xs font-bold text-muted-foreground">Product Lead</p>
            </div>
            <div className="neo-card p-4 bg-background">
              <div className="h-16 w-16 rounded-full bg-gray-300 border-2 border-border mb-4 mx-auto"></div>
              <p className="text-center font-black">Lakshmi R.</p>
              <p className="text-center text-xs font-bold text-muted-foreground">Entrepreneur</p>
            </div>
            <div className="neo-card p-4 bg-background mt-8">
              <div className="h-16 w-16 rounded-full bg-gray-300 border-2 border-border mb-4 mx-auto"></div>
              <p className="text-center font-black">Meera K.</p>
              <p className="text-center text-xs font-bold text-muted-foreground">Legal Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
