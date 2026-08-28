import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Lakshmivallepu1726@gmail.com",
      href: "mailto:Lakshmivallepu1726@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (918) 609-2378",
      href: "tel:+19186092378",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tulsa, OK ",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "lakshmi-vallepu",
      href: "https://www.linkedin.com/in/lakshmi-vallepu-99a846339/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 overflow-visible">
            <h2 className={`text-4xl md:text-5xl font-bold leading-[1.3] mb-6 pb-2 bg-hero-gradient bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Let's Connect
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              With a strong background in Cybersecurity engineering, threat monitoring, and cloud compliance, I am always open to collaborating on securing infrastructure and building robust security architectures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Description Card */}
            <div className={`text-center max-w-2xl mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Open to New Opportunities & Collaborations</h3>
              <p className="text-muted-foreground leading-relaxed">
                With experience in designing security operations workflows, hardening cloud architectures, and automating compliance, I’m always eager to take on impactful security challenges. Let’s connect and explore how we can strengthen your organization's security posture.
              </p>
            </div>

            {/* Info Cards Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-portfolio-medium border border-border hover:border-primary/30 hover:shadow-portfolio-heavy transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h4 className="font-bold text-card-foreground mb-2 text-lg">
                    {info.label}
                  </h4>

                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all text-sm font-semibold"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm font-semibold">
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;