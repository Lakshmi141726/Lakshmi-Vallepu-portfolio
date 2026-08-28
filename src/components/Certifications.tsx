import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const certifications = [
    {
      name: "CompTIA Security+ (SY0-701)",
      description:
        "Industry-recognized cybersecurity certification covering network security, threat management, risk mitigation, security operations, and incident response.",
      link: "#",
    },
    {
      name: "IBM Cybersecurity Analyst Professional Certificate",
      description:
        "Coursera professional certification covering cybersecurity fundamentals, threat intelligence, incident response, SIEM tools, and security operations.",
      link: "#",
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      description:
        "Coursera certification focused on cybersecurity foundations, security monitoring, threat detection, risk management, and incident handling.",
      link: "#",
    },
    {
      name: "Microsoft Cybersecurity Analyst Professional Certificate",
      description:
        "Professional certification covering Microsoft security solutions, threat protection, vulnerability management, and security operations analysis.",
      link: "#",
    },
    {
      name: "IBM IT Support and Cybersecurity Specialist Professional Certificate",
      description:
        "Comprehensive Coursera certification covering IT support, system administration, networking, cybersecurity principles, and troubleshooting.",
      link: "#",
    },
    {
      name: "Microsoft Security Operations Analyst Professional Certificate",
      description:
        "Professional certification focused on security monitoring, incident investigation, threat hunting, Microsoft Sentinel, and SOC operations.",
      link: "#",
    },
  ];


  return (
    <section id="certifications" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Certifications
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Verified professional credentials in Cybersecurity, Threat Analysis, and Security Operations.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`group bg-card rounded-2xl p-8 shadow-portfolio-light hover:shadow-portfolio-medium transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-border hover:border-primary/30 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={`View ${cert.name} certification`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-hero-gradient rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;