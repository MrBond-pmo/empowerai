import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, Shield, User } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
    { code: "ml", name: "മലയാളം (Malayalam)" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-border bg-background neo-shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary border-2 border-border">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Mahile<span className="text-primary">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold">
          <a href="/skills" className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.skills}</a>
          <a href="/jobs" className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.jobs}</a>
          <a href="/mentorship" className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.mentorship}</a>
          <a href="/safety" className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.safety}</a>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-2 border-border font-bold hidden sm:flex gap-2">
                <Globe className="h-4 w-4" />
                {languages.find(l => l.code === language)?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-2 border-border font-bold bg-card">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code} 
                  onClick={() => setLanguage(lang.code)}
                  className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            className="neo-button hidden sm:flex bg-accent text-white hover:bg-accent/90"
            onClick={() => navigate("/auth")}
          >
            <User className="mr-2 h-4 w-4" /> {t.nav.login}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden border-2 border-border">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}