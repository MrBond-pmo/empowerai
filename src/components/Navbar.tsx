import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/hooks/use-auth";
import { type Language } from "@/lib/translations";
import { Globe, Menu, Shield, User } from "lucide-react";
import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const { isAuthenticated } = useAuth();

  const languages: { code: string; name: Language }[] = [
    { code: "en", name: "English" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
    { code: "ml", name: "മലയാളം (Malayalam)" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-background neo-shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary border-2 border-black">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Mahile<span className="text-primary">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold">
          <button onClick={() => navigate("/skills")} className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.skills}</button>
          <button onClick={() => navigate("/jobs")} className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.jobs}</button>
          <button onClick={() => navigate("/mentorship")} className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.mentorship}</button>
          <button onClick={() => navigate("/safety")} className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">{t.nav.safety}</button>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-2 border-black font-bold hidden sm:flex gap-2">
                <Globe className="h-4 w-4" />
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-2 border-black font-bold bg-card">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code} 
                  onClick={() => setLanguage(lang.name)}
                  className="cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            className="neo-button hidden sm:flex bg-accent text-black hover:bg-accent/90"
            onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")}
          >
            <User className="mr-2 h-4 w-4" /> {isAuthenticated ? "Dashboard" : t.nav.login}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden border-2 border-black">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-4 border-black bg-background p-6">
              <div className="flex flex-col gap-6 mt-8">
                <button onClick={() => navigate("/skills")} className="text-xl font-black uppercase text-left hover:text-primary">{t.nav.skills}</button>
                <button onClick={() => navigate("/jobs")} className="text-xl font-black uppercase text-left hover:text-primary">{t.nav.jobs}</button>
                <button onClick={() => navigate("/mentorship")} className="text-xl font-black uppercase text-left hover:text-primary">{t.nav.mentorship}</button>
                <button onClick={() => navigate("/safety")} className="text-xl font-black uppercase text-left hover:text-primary">{t.nav.safety}</button>
                <div className="h-1 bg-border my-2"></div>
                <Button 
                  className="neo-button bg-accent text-black hover:bg-accent/90 w-full justify-start"
                  onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")}
                >
                  <User className="mr-2 h-4 w-4" /> {isAuthenticated ? "Dashboard" : t.nav.login}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}