import { ArrowDown, Shield, Lock, Key, Terminal, Cloud, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient"
    >
      {/* Background decoration (blobs) */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Elements (Cybersecurity Icons) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
        {/* Shield Icon - Top Left */}
        <div
          className="absolute top-[20%] left-[10%] w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-portfolio-heavy animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Shield className="h-8 w-8 text-white opacity-85" />
        </div>

        {/* Lock Icon - Top Right */}
        <div
          className="absolute top-[25%] right-[12%] w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-portfolio-heavy animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          <Lock className="h-7 w-7 text-white opacity-85" />
        </div>

        {/* Terminal Icon - Middle Left */}
        <div
          className="absolute top-[50%] left-[5%] w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-portfolio-heavy animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Terminal className="h-7 w-7 text-white opacity-80" />
        </div>

        {/* Key Icon - Middle Right */}
        <div
          className="absolute top-[55%] right-[7%] w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-portfolio-heavy animate-float"
          style={{ animationDelay: "3s" }}
        >
          <Key className="h-8 w-8 text-white opacity-85" />
        </div>

        {/* Cloud Icon - Bottom Left */}
        <div
          className="absolute bottom-[20%] left-[15%] w-15 h-15 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-portfolio-heavy animate-float"
          style={{ animationDelay: "4s" }}
        >
          <Cloud className="h-7 w-7 text-white opacity-80" />
        </div>

        {/* Cpu Icon - Bottom Right */}
        <div
          className="absolute bottom-[25%] right-[15%] w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-portfolio-heavy animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Cpu className="h-7 w-7 text-white opacity-80" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-8">
          {/* Centered Content */}
          <div className="animate-fade-in">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-6 inline-block tracking-wider uppercase">
              Cybersecurity Engineer
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              <span className="block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Lakshmi Vallepu
                </span>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Protecting cloud infrastructures, optimizing threat operations, and securing enterprise architectures. 
              Over 4 years of hands-on experience in SOC, Incident Response, Vulnerability Management, and DevSecOps.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-portfolio-heavy w-48 py-6 text-base font-semibold"
                size="lg"
              >
                View My Projects
                <ArrowDown className="ml-2 h-4.5 w-4.5 text-primary" />
              </Button>

              <a href="/resume.pdf" download className="block">
                <Button
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-portfolio-heavy w-48 py-6 text-base font-semibold"
                  size="lg"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
