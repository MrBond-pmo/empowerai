import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">{t.sections.community}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="neo-card p-8 bg-card">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Heart key={i} className="h-5 w-5 text-primary fill-primary" />)}
            </div>
            <p className="font-bold text-lg mb-6">"After my career break, I felt lost. EmpowerAI's personalized path helped me learn Python in Tamil, and I landed a remote job last month!"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-300 border-2 border-border"></div>
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
              <div className="h-10 w-10 rounded-full bg-gray-300 border-2 border-border"></div>
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
              <div className="h-10 w-10 rounded-full bg-gray-300 border-2 border-border"></div>
              <div>
                <p className="font-black">Lakshmi S.</p>
                <p className="text-xs font-bold text-muted-foreground">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
