import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Cybersecurity Engineer",
      company: "BOK Financial Corporation",
      location: "Tulsa, OK",
      period: "Feb 2026 - Present",
      points: [
        "Strengthened cloud security posture across AWS, Azure, and GCP using Security Hub, GuardDuty, CloudTrail, and Microsoft Defender for Cloud, improving visibility of critical financial assets by 35%.",
        "Architected Identity and Access Management (IAM) controls through CyberArk, Entra ID, MFA, RBAC, and Conditional Access policies, reducing privileged access risks by 40% across banking applications.",
        "Engineered SIEM and SOAR detection use cases in Splunk, Microsoft Sentinel, and QRadar, enabling automated incident response workflows that reduced mean response times by 45%.",
        "Optimized endpoint security operations by integrating CrowdStrike Falcon, SentinelOne, and Cortex XDR, increasing threat detection coverage across 4,000+ enterprise endpoints.",
        "Directed vulnerability management initiatives using Tenable, Qualys, and Rapid7 InsightVM, partnering with infrastructure teams to remediate 95% of critical vulnerabilities within SLA targets.",
        "Implemented DevSecOps security controls using Checkmarx, Veracode, Terraform, Kubernetes, OPA, and Falco, reducing security findings in production deployments by 30%.",
        "Collaborated with application, cloud, and infrastructure teams to conduct penetration testing and security assessments, preventing high-risk vulnerabilities from reaching production systems.",
        "Automated compliance monitoring and security reporting through Python and PowerShell scripting, eliminating over 20 hours of manual effort monthly and improving audit readiness."
      ]
    },
    {
      title: "Cybersecurity Engineer",
      company: "Banner Health",
      location: "California, USA",
      period: "Feb 2025 - Dec 2025",
      points: [
        "Managed Security Operations Center (SOC) monitoring using Splunk, Microsoft Sentinel, QRadar, and Elastic SIEM, reducing alert investigation time by 30% across healthcare environments.",
        "Conducted proactive threat hunting exercises utilizing MITRE ATT&CK, UEBA, and threat intelligence sources, identifying multiple suspicious activities before operational impact.",
        "Enhanced endpoint protection capabilities through CrowdStrike Falcon, SentinelOne, Cortex XDR, and Carbon Black, reducing false-positive alerts by 25%.",
        "Secured multi-cloud healthcare workloads using AWS GuardDuty, CloudTrail, Microsoft Defender for Cloud, and GCP Security Command Center, improving cloud security compliance.",
        "Performed vulnerability assessments and penetration testing with Nessus, Qualys, Burp Suite, Metasploit, OpenVAS, and Nmap, driving remediation of over 150 critical findings.",
        "Coordinated incident response activities with IT, network, and compliance teams, decreasing mean time to containment by 35% during cybersecurity investigations.",
        "Integrated application security controls into DevSecOps pipelines using Semgrep, Checkmarx, Kubernetes security scanning, and OWASP Top 10 practices, reducing pre-production vulnerabilities.",
        "Investigated advanced cyber threat indicators using SIEM telemetry, EDR alerts, and threat intelligence platforms, strengthening overall detection coverage across clinical systems."
      ]
    },
    {
      title: "Information Security Engineer",
      company: "Cognizant",
      location: "Hyderabad, India",
      period: "Jan 2021 - Nov 2023 ",
      points: [
        "Executed enterprise vulnerability management programs using Qualys, Nessus, and Tenable, reducing critical security exposures by 40% across business applications.",
        "Established secure SDLC practices through Checkmarx, SonarQube, and automated security testing integrations, improving application security compliance across development teams.",
        "Streamlined security operations through Python and PowerShell automation, reducing repetitive manual tasks by 25% and improving operational efficiency.",
        "Hardened cloud and SaaS environments by implementing IAM, MFA, DLP, and Zero Trust security controls, strengthening protection of sensitive organizational data.",
        "Partnered with development, infrastructure, and governance teams to perform security assessments and risk reviews, supporting successful internal and external audits.",
        "Improved SIEM and SOAR effectiveness by integrating Splunk, Microsoft Sentinel, QRadar, and Cortex XSOAR workflows, accelerating incident triage and investigation processes."
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/10" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Professional Experience
            </h2>
            <p
              className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Over 4 years of proven expertise protecting critical infrastructures, implementing advanced threat detection, and automating security controls.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className={`relative pl-8 md:pl-10 transition-all duration-1000 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {/* Timeline Dot Icon */}
                <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-primary shadow-portfolio-light group-hover:scale-110 transition-transform">
                  <Briefcase className="h-4 w-4 text-primary" />
                </span>

                {/* Experience Card */}
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-portfolio-medium border border-border hover:border-primary/30 hover:shadow-portfolio-heavy transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium text-lg mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4 text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-full">
                        <MapPin className="h-4 w-4 text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements List */}
                  <ul className="space-y-3.5">
                    {exp.points.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
