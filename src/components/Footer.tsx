import { Facebook, Instagram, Linkedin, Shield, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-card text-card-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary border-2 border-black">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Empower<span className="text-primary">AI</span></span>
            </div>
            <p className="text-sm font-medium max-w-xs">
              A unified AI platform dedicated to women's empowerment through skills, careers, mentorship, and safety.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background border-2 border-black hover:bg-primary hover:text-white transition-colors rounded-md">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background border-2 border-black hover:bg-primary hover:text-white transition-colors rounded-md">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background border-2 border-black hover:bg-primary hover:text-white transition-colors rounded-md">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background border-2 border-black hover:bg-primary hover:text-white transition-colors rounded-md">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 uppercase">Platform</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="#skills" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Skill Development</a></li>
              <li><a href="#jobs" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Career Guidance</a></li>
              <li><a href="#mentorship" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Mentorship Hub</a></li>
              <li><a href="#safety" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Safety Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 uppercase">Support</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="#" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Help Center</a></li>
              <li><a href="#" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Safety Policy</a></li>
              <li><a href="#" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary hover:underline decoration-2 underline-offset-2">Contact Us</a></li>
            </ul>
          </div>

          <div className="bg-background border-4 border-black p-4 rounded-lg neo-shadow-sm">
            <h3 className="font-black text-lg mb-2 uppercase text-primary">Responsible AI</h3>
            <p className="text-xs font-medium mb-2">
              Powered by Gemini 2.5 Flash. We prioritize data privacy and ethical AI use.
            </p>
            <div className="text-xs font-bold text-muted-foreground">
              © 2024 EmpowerAI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
