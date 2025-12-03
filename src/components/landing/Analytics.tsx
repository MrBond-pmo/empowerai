import { useLanguage } from "@/context/LanguageContext";

export function Analytics() {
  const { t } = useLanguage();

  return (
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
  );
}
