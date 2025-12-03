import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useLanguage } from "@/context/LanguageContext";

export function CTA() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-accent text-white border-t-4 border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">{t.sections.ready}</h2>
        <p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
          Join thousands of women transforming their lives with the power of AI. Safe, inclusive, and empowering.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-black border-4 border-border text-xl h-20 px-12 font-black neo-shadow hover:bg-gray-100 hover:scale-105 transition-all"
          onClick={() => navigate("/auth")}
        >
          {t.sections.join}
        </Button>
      </div>
    </section>
  );
}
