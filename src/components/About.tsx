import {
  Shield,
  Search,
  Cloud,
  Lock,
  Server,
  Bug,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Terminal,
  Key,
  Cpu,
  Code,
  ClipboardCheck
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const expertise = [
    {
      icon: Shield,
      title: "Security Operations",
      description:
        "SOC Monitoring, Incident Response, Threat Detection, SIEM & SOAR Operations.",
    },
    {
      icon: Search,
      title: "Threat Hunting",
      description:
        "MITRE ATT&CK, Threat Intelligence, Investigation & Detection Engineering.",
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description:
        "AWS, Azure, GCP Security, GuardDuty, Security Hub & Defender for Cloud.",
    },
    {
      icon: Lock,
      title: "Identity Security",
      description:
        "CyberArk, Okta, Entra ID, PAM, MFA, RBAC & Zero Trust Architecture.",
    },
    {
      icon: Server,
      title: "DevSecOps",
      description:
        "Terraform, Kubernetes, Docker, Secure SDLC, Checkmarx & Veracode.",
    },
    {
      icon: Bug,
      title: "Vulnerability Management",
      description:
        "Qualys, Tenable, Nessus, Rapid7, Penetration Testing & Risk Reduction.",
    },
  ];

  const summaryPoints = [
    "Cybersecurity Engineer with 4+ years of experience in Security Operations Center (SOC), Incident Response, Cyber Threat Detection, Vulnerability Management, and Information Security across financial, healthcare, and enterprise environments.",
    "Skilled in SIEM, SOAR, and endpoint security using Splunk, Microsoft Sentinel, QRadar, CrowdStrike Falcon, SentinelOne, and Cortex XDR to strengthen threat detection and response capabilities.",
    "Hands-on experience securing AWS, Azure, and GCP environments, implementing IAM controls with CyberArk, Okta, and Entra ID, and protecting enterprise networks through Zero Trust and Network Security practices.",
    "Experienced in DevSecOps, penetration testing, security automation, and compliance initiatives supporting NIST, PCI-DSS, HIPAA, SOX, FFIEC, and ISO 27001 requirements."
  ];

  const skillGroups = [
    {
      title: "Cybersecurity & Security Operations",
      icon: Shield,
      headingColor: "text-blue-600 dark:text-blue-400",
      tagClass: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-100/50 dark:border-blue-900/40 hover:bg-blue-100/60 dark:hover:bg-blue-950/60",
      skills: [
        "Cybersecurity", "Information Security", "InfoSec", "SOC", 
        "Security Operations", "Security Engineering", "Threat Detection", 
        "Threat Hunting", "Incident Response", "Security Monitoring", 
        "Detection Engineering", "Threat Intelligence", "Risk Management", 
        "IT Security", "SOAR"
      ]
    },
    {
      title: "SIEM, EDR & Endpoint Security",
      icon: Terminal,
      headingColor: "text-rose-600 dark:text-rose-400",
      tagClass: "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-100/50 dark:border-rose-900/40 hover:bg-rose-100/60 dark:hover:bg-rose-950/60",
      skills: [
        "Splunk Enterprise Security", "Microsoft Sentinel", "IBM QRadar", 
        "Elastic SIEM", "CrowdStrike Falcon", "SentinelOne", "Cortex XDR", 
        "Carbon Black", "Microsoft Defender for Endpoint", "UEBA", 
        "Security Event Correlation"
      ]
    },
    {
      title: "Network Security & IAM",
      icon: Key,
      headingColor: "text-amber-600 dark:text-amber-400",
      tagClass: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-100/50 dark:border-amber-900/40 hover:bg-amber-100/60 dark:hover:bg-amber-950/60",
      skills: [
        "Palo Alto NGFW", "Fortinet FortiGate", "Cisco ASA", "IDS/IPS", 
        "Snort", "Suricata", "WAF", "VPN", "TCP/IP", "DNS", "Wireshark", 
        "IAM", "PAM", "CyberArk", "Okta", "Microsoft Entra ID (Azure AD)", 
        "Ping Identity", "SSO", "MFA", "RBAC", "Conditional Access", "Zero Trust"
      ]
    },
    {
      title: "Cloud Security & Infrastructure",
      icon: Cloud,
      headingColor: "text-sky-600 dark:text-sky-400",
      tagClass: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-100/50 dark:border-sky-900/40 hover:bg-sky-100/60 dark:hover:bg-sky-950/60",
      skills: [
        "AWS", "Microsoft Azure", "GCP", "AWS Security Hub", "GuardDuty", 
        "CloudTrail", "Microsoft Defender for Cloud", "GCP Security Command Center", 
        "Cloud Operations", "Docker", "Kubernetes", "OPA", "Falco", 
        "HashiCorp Vault", "Terraform"
      ]
    },
    {
      title: "Vulnerability Management & Testing",
      icon: Bug,
      headingColor: "text-orange-600 dark:text-orange-400",
      tagClass: "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 border border-orange-100/50 dark:border-orange-900/40 hover:bg-orange-100/60 dark:hover:bg-orange-950/60",
      skills: [
        "Nessus", "Tenable.io", "Tenable.sc", "Qualys", "Rapid7 InsightVM", 
        "OpenVAS", "Vulnerability Assessment", "Penetration Testing", 
        "Burp Suite Pro", "Metasploit", "OWASP ZAP", "Nmap", "Kali Linux"
      ]
    },
    {
      title: "Application Security & DevSecOps",
      icon: Cpu,
      headingColor: "text-indigo-600 dark:text-indigo-400",
      tagClass: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-900/40 hover:bg-indigo-100/60 dark:hover:bg-indigo-950/60",
      skills: [
        "DevSecOps", "Secure SDLC", "OWASP Top 10", "SAST", "DAST", 
        "Semgrep", "Checkmarx", "Veracode", "CI/CD Security", "IaC Security"
      ]
    },
    {
      title: "Programming & Automation",
      icon: Code,
      headingColor: "text-emerald-600 dark:text-emerald-400",
      tagClass: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-100/50 dark:border-emerald-900/40 hover:bg-emerald-100/60 dark:hover:bg-emerald-950/60",
      skills: [
        "Python", "PowerShell", "Bash", "SQL", "Go", "JavaScript", 
        "Ansible", "Security Automation", "API Integrations"
      ]
    },
    {
      title: "Incident Response & Forensics",
      icon: Search,
      headingColor: "text-violet-600 dark:text-violet-400",
      tagClass: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300 border border-violet-100/50 dark:border-violet-900/40 hover:bg-violet-100/60 dark:hover:bg-violet-950/60",
      skills: [
        "Incident Response", "Root Cause Analysis", "Malware Analysis", 
        "Threat Investigation", "Digital Forensics", "IR Playbooks"
      ]
    },
    {
      title: "Governance, Risk & Compliance (GRC)",
      icon: ClipboardCheck,
      headingColor: "text-teal-600 dark:text-teal-400",
      tagClass: "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-100/50 dark:border-teal-900/40 hover:bg-teal-100/60 dark:hover:bg-teal-950/60",
      skills: [
        "NIST CSF", "NIST 800-53", "NIST 800-207", "ISO 27001", 
        "PCI-DSS", "HIPAA", "GDPR", "SOX ITGC", "SOC 2", "CIS Controls", 
        "MITRE ATT&CK", "FFIEC", "GLBA"
      ]
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-background"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Cybersecurity Engineer with 4+ years of experience specializing in Security Operations, Cyber Threat Detection, Cloud Security, and Information Assurance.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="flex items-center gap-1.5 bg-card border border-border px-4 py-2 rounded-full text-sm text-muted-foreground shadow-portfolio-light hover:border-primary/30 transition-all">
                <MapPin className="h-4 w-4 text-primary" />
                Tulsa, OK
              </span>
              <a
                href="mailto:Lakshmivallepu1726@gmail.com"
                className="flex items-center gap-1.5 bg-card border border-border px-4 py-2 rounded-full text-sm text-muted-foreground shadow-portfolio-light hover:border-primary/30 hover:text-primary transition-all"
              >
                <Mail className="h-4 w-4 text-primary" />
                Lakshmivallepu1726@gmail.com
              </a>
              <a
                href="tel:+19186092378"
                className="flex items-center gap-1.5 bg-card border border-border px-4 py-2 rounded-full text-sm text-muted-foreground shadow-portfolio-light hover:border-primary/30 hover:text-primary transition-all"
              >
                <Phone className="h-4 w-4 text-primary" />
                +1 (918) 609-2378
              </a>
              <a
                href="https://www.linkedin.com/in/lakshmi-vallepu-99a846339/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-card border border-border px-4 py-2 rounded-full text-sm text-muted-foreground shadow-portfolio-light hover:border-primary/30 hover:text-primary transition-all"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </a>
              <span className="flex items-center gap-1.5 bg-card border border-border px-4 py-2 rounded-full text-sm text-muted-foreground shadow-portfolio-light hover:border-primary/30 transition-all">
                <Globe className="h-4 w-4 text-primary" />
                Portfolio
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-portfolio-medium mb-16 border border-border">
            <h3 className="text-3xl font-bold mb-6 text-card-foreground">
              Professional Summary
            </h3>
            <ul className="space-y-4">
              {summaryPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-base">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10">
              Core Expertise
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {expertise.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-card rounded-2xl p-6 shadow-portfolio-medium border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group) => {
                const IconComponent = group.icon;
                return (
                  <div
                    key={group.title}
                    className="bg-card rounded-2xl p-6 shadow-portfolio-medium border border-border flex flex-col justify-between hover:shadow-portfolio-heavy hover:scale-[1.02] transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 rounded-lg bg-muted border border-border">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </span>
                        <h4 className="font-bold text-base md:text-lg text-card-foreground">
                          {group.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${group.tagClass}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="bg-card rounded-3xl p-8 shadow-portfolio-medium border border-border">
            <h3 className="text-3xl font-bold text-center mb-8">
              Education
            </h3>
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-bold">
                Master of Science in Information Assurance and Cybersecurity
              </h4>
              <p className="text-primary font-semibold mt-2 text-lg">
                Gannon University | Erie, PA
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Specialized in Security Operations, Threat Detection, Incident Response, Cloud Security, Vulnerability Management, Digital Forensics, IAM, SIEM, SOAR, and Enterprise Security Engineering.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
