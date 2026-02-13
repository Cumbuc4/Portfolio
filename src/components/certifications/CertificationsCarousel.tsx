"use client";

import { useState, useEffect } from "react";
import { Column, Flex, Heading, Text, Button } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHash";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  description: string;
  date: string;
  category: string;
  subcategory?: string;
}

// Hook para detectar tamanho da tela de forma segura
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}

const certifications: Certification[] = [
  // CATEGORIA 1: ENDPOINT & EDR - BITDEFENDER
  {
    id: "bitdefender-business",
    title: "Bitdefender Business",
    issuer: "Bitdefender",
    image: "bd_business",
    description: "Certificação em segurança de endpoint para ambientes empresariais.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-encryption",
    title: "Bitdefender Encryption",
    issuer: "Bitdefender",
    image: "bd_encryption",
    description: "Certificação em criptografia de disco completo para proteção de dados corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-comercial",
    title: "Bitdefender Comercial",
    issuer: "Bitdefender",
    image: "bd_comercial",
    description: "Certificação em fundamentos comerciais das soluções de segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-cybersecurity-essentials",
    title: "Bitdefender Cybersecurity Essentials",
    issuer: "Bitdefender",
    image: "bd_cybersecurity_essentials",
    description: "Certificação em fundamentos essenciais de cibersegurança e proteção da informação.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-premium",
    title: "Bitdefender Premium",
    issuer: "Bitdefender",
    image: "bd_premium",
    description: "Certificação em segurança de endpoint com recursos premium, incluindo análise de risco e proteção avançada.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-patch",
    title: "Bitdefender Patch",
    issuer: "Bitdefender",
    image: "bd_patch",
    description: "Certificação em gerenciamento automatizado de patches e atualizações de segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-partner",
    title: "Bitdefender Partner",
    issuer: "Bitdefender",
    image: "bd_partner",
    description: "Certificação técnica e comercial para parceiros da plataforma GravityZone.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },
  {
    id: "bitdefender-enterprise",
    title: "Bitdefender Enterprise",
    issuer: "Bitdefender",
    image: "bd_enterprise",
    description: "Certificação em segurança de endpoint para ambientes empresariais com recursos avançados de detecção e resposta.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "Bitdefender"
  },

  // CROWDSTRIKE
  {
    id: "crowdstrike-100",
    title: "FALCON 100: Falcon Platform Architecture Overview ",
    issuer: "CrowdStrike",
    image: "cs_100",
    description: "Certificação em arquitetura geral da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-101",
    title: "FALCON 101: Falcon Platform Essentials",
    issuer: "CrowdStrike",
    image: "cs_101",
    description: "Certificação nos conceitos essenciais da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-102",
    title: "FALCON 102: Falcon Platform Onboarding Configuration",
    issuer: "CrowdStrike",
    image: "cs_102",
    description: "Certificação em configuração de onboarding da plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-104",
    title: "FALCON 104: Getting Started with the Endpoint Security Module",
    issuer: "CrowdStrike",
    image: "cs_104",
    description: "Certificação introdutória em segurança de endpoint com o módulo Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-105",
    title: "FALCON 105: Sensor Installation, Configuration and Troubleshooting",
    issuer: "CrowdStrike",
    image: "cs_105",
    description: "Certificação em instalação, configuração e troubleshooting de sensores Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-106",
    title: "FALCON 106: Customizing Dashboards in Falcon",
    issuer: "CrowdStrike",
    image: "cs_106",
    description: "Certificação em personalização de dashboards na plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-107",
    title: "FALCON 107: Falcon Firewall Management Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_107",
    description: "Certificação nos fundamentos de gerenciamento de firewall na plataforma Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-109",
    title: "FALCON 109: Using MITRE ATT&CK and Falcon Detection Methods to Understand Security Risk",
    issuer: "CrowdStrike",
    image: "cs_109",
    description: "Certificação em uso da MITRE ATT&CK e métodos de detecção da Falcon para análise de risco.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-114",
    title: "FALCON 114: Falcon Fusion SOAR Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_114",
    description: "Certificação nos fundamentos do Falcon Fusion SOAR.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-115",
    title: "FALCON 115: Create a Falcon Fusion SOAR Workflow",
    issuer: "CrowdStrike",
    image: "cs_115",
    description: "Certificação em criação de workflows automatizados com Falcon Fusion SOAR.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-120",
    title: "FALCON 120: Investigation Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_120",
    description: "Certificação nos fundamentos de investigação de incidentes em ambientes corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-121",
    title: "ITSEC 121: Vulnerability Management Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_121",
    description: "Certificação nos fundamentos da gestão de vulnerabilidades em ambientes corporativos.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-122",
    title: "ITSEC 122: Asset Management Fundamentals",
    issuer: "CrowdStrike",
    image: "cs_122",
    description: "Certificação nos fundamentos de gestão de ativos de TI e segurança.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  {
    id: "crowdstrike-160",
    title: "FALCON 160: Falcon for Mobile",
    issuer: "CrowdStrike",
    image: "cs_160",
    description: "Certificação em proteção de dispositivos móveis com a solução Falcon.",
    date: "2025",
    category: "Endpoint & EDR",
    subcategory: "CrowdStrike"
  },
  
  // PENETRATION TESTING - HACK THE BOX
  {
    id: "htb-academician",
    title: "Hack The Box - Academician",
    issuer: "Hack The Box",
    image: "htb_academician",
    description: "Introduction to Academy module completed",
    date: "2025",
    category: "Penetration Testing",
    subcategory: "Hack The Box"
  },
  {
    id: "htb-your-request-is-my-demand",
    title: "Hack The Box - Your Request Is My Demand",
    issuer: "Hack The Box",
    image: "htb_your_request",
    description: "Web Requests module completed",
    date: "2025",
    category: "Penetration Testing",
    subcategory: "Hack The Box"
  },

  // TRYHACKME
  {
    id: "thm-pre-security",
    title: "TryHackMe - Pre-Security",
    issuer: "TryHackMe",
    image: "thm_pre_security",
    description: "Completing the 'Pre-Security' learning path",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-networking-nerd",
    title: "TryHackMe - Networking Nerd",
    issuer: "TryHackMe",
    image: "thm_networking_nerd",
    description: "Completing the 'Network Fundamentals' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-world-wide-web",
    title: "TryHackMe - World Wide Web",
    issuer: "TryHackMe",
    image: "thm_world_wide_web",
    description: "Completing the 'How The Web Works' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-webbed",
    title: "TryHackMe - Webbed",
    issuer: "TryHackMe",
    image: "thm_webbed",
    description: "Understands how the world wide web works",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },
  {
    id: "thm-cat-linux",
    title: "TryHackMe - cat linux.txt",
    issuer: "TryHackMe",
    image: "thm_cat_linux",
    description: "Being competent in Linux",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "TryHackMe"
  },

  //DESEC
  {
    id: "desec-network-analyst",
    title: "DESEC - Network Analyst",
    issuer: "DESEC",
    image: "desec_network_analyst",
    description: "Completing the 'Network Analyst' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "DESEC"
  },
  {
    id: "desec-pentest-fundamentals",
    title: "DESEC - Pentest Fundamentals",
    issuer: "DESEC",
    image: "desec_pentest_fundamentals",
    description: "Completing the 'Pentest Fundamentals' module",
    date: "2024",
    category: "Penetration Testing",
    subcategory: "DESEC"
  },

  // NETWORK & CLOUD SECURITY - SOPHOS
  {
    id: "sophos-engineer",
    title: "Sophos Firewall Certified Engineer v21.0 (ET80)",
    issuer: "Sophos",
    image: "sophos_engineer",
    description: "Implementação e gerenciamento de firewalls Sophos",
    date: "2025",
    category: "Network & Cloud Security",
    subcategory: "Sophos"
  },

  // Segura
  {
    id: "segura-pam-core-access-control",
    title: "PAM Core Access Control",
    issuer: "Segura",
    image: "segura_pam_core",
    description: "Achieved the 'PAM Core Access Control' certification track",
    date: "2025",
    category: "Network & Cloud Security",
    subcategory: "Segura"
  },
];

export default function CertificationsCarousel() {
  const { width } = useWindowSize();
  const { t } = useLanguage();
  const isMobile = width <= 768;
  const isTablet = width <= 1024 && width > 768;
  
  const [currentCategory, setCurrentCategory] = useState("Endpoint & EDR");
  const [currentSubcategory, setCurrentSubcategory] = useState("Bitdefender");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Get unique categories
  const categories = Array.from(new Set(certifications.map(cert => cert.category)));
  const issuerCount = new Set(certifications.map(cert => cert.issuer)).size;
  const totalCerts = certifications.length;
  
  // Get subcategories for current category
  const subcategories = Array.from(
    new Set(
      certifications
        .filter(cert => cert.category === currentCategory)
        .map(cert => cert.subcategory)
        .filter(Boolean)
    )
  );
  
  // Filter certifications by current category and subcategory
  const filteredCertifications = certifications.filter(
    cert => cert.category === currentCategory && 
    (cert.subcategory === currentSubcategory || !cert.subcategory)
  );

  // Ensure currentIndex is within bounds
  const safeCurrentIndex = Math.min(currentIndex, Math.max(0, filteredCertifications.length - 1));

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredCertifications.length <= 1 || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === filteredCertifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredCertifications.length, isHovering]);

  // Update currentIndex if it's out of bounds
  useEffect(() => {
    if (filteredCertifications.length > 0 && currentIndex >= filteredCertifications.length) {
      setCurrentIndex(0);
    }
  }, [filteredCertifications.length, currentIndex]);

  // Reset index when category or subcategory changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentCategory, currentSubcategory]);

  // Update subcategory when category changes
  useEffect(() => {
    if (subcategories.length > 0 && subcategories[0] && !subcategories.includes(currentSubcategory)) {
      setCurrentSubcategory(subcategories[0]);
    }
  }, [currentCategory, subcategories, currentSubcategory]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === filteredCertifications.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? filteredCertifications.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCert = filteredCertifications[safeCurrentIndex];

  // If no certifications, show empty state
  if (filteredCertifications.length === 0) {
    return (
      <Column fillWidth gap="xl" paddingY="l" className="certifications-container">
        <Heading as="h2" variant="display-strong-s" align="center">
          {t('certifications.subtitle')}
        </Heading>
        
        <Flex horizontal="center">
          <Text variant="body-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: "600px" }}>
            {t('certifications.description')}
          </Text>
        </Flex>

        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          {t('common.noData')}
        </Text>
      </Column>
    );
  }

  // Safety check for currentCert
  if (!currentCert) {
    return (
      <Column fillWidth gap="xl" paddingY="l" className="certifications-container">
        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          {t('common.loading')}
        </Text>
      </Column>
    );
  }

  return (
    <Column fillWidth gap="xl" paddingY="l" className="certifications-container">
      <Flex horizontal="center" gap="m" wrap className="certifications-stats">
        <Column className="stats-card">
          <Text className="stats-label">{t("certifications.stats.total")}</Text>
          <Heading as="h3" variant="heading-strong-l" className="stats-value">
            {totalCerts}
          </Heading>
        </Column>
        <Column className="stats-card">
          <Text className="stats-label">{t("certifications.stats.categories")}</Text>
          <Heading as="h3" variant="heading-strong-l" className="stats-value">
            {categories.length}
          </Heading>
        </Column>
        <Column className="stats-card">
          <Text className="stats-label">{t("certifications.stats.issuers")}</Text>
          <Heading as="h3" variant="heading-strong-l" className="stats-value">
            {issuerCount}
          </Heading>
        </Column>
      </Flex>
      {/* Category Tabs */}
      <Flex horizontal="center" gap="m" wrap className="certifications-filters">
        {categories.map((category) => (
          <Button
            key={category}
            variant={currentCategory === category ? "primary" : "secondary"}
            size="m"
            onClick={() => setCurrentCategory(category)}
            style={{
              borderRadius: "30px",
              padding: "16px 28px",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "700",
              transition: "all 0.3s ease",
              boxShadow: currentCategory === category 
                ? "0 12px 35px rgba(59, 184, 176, 0.35)" 
                : "0 4px 15px rgba(6, 10, 12, 0.12)",
              transform: currentCategory === category ? "translateY(-2px)" : "translateY(0)",
              background: currentCategory === category 
                ? "linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-amber) 100%)" 
                : "var(--glass-1)",
              backdropFilter: "blur(20px)",
              border: currentCategory === category 
                ? "2px solid rgba(59, 184, 176, 0.35)" 
                : "1px solid var(--border-1)"
            }}
          >
            {category}
          </Button>
        ))}
      </Flex>

      {/* Subcategory Tabs */}
      {subcategories.length > 0 && (
        <Flex horizontal="center" gap="s" wrap className="certifications-filters">
          {subcategories.map((subcategory) => (
            <Button
              key={subcategory}
              variant={currentSubcategory === subcategory ? "primary" : "tertiary"}
              size="s"
              onClick={() => setCurrentSubcategory(subcategory!)}
              style={{
                borderRadius: "25px",
                padding: "10px 20px",
                fontSize: isMobile ? "12px" : "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                background: currentSubcategory === subcategory 
                  ? "linear-gradient(135deg, var(--accent-amber) 0%, var(--accent-rust) 100%)" 
                  : "var(--glass-1)",
                backdropFilter: "blur(15px)",
                border: currentSubcategory === subcategory 
                  ? "2px solid rgba(242, 176, 76, 0.35)" 
                  : "1px solid var(--border-1)"
              }}
            >
              {subcategory}
            </Button>
          ))}
        </Flex>
      )}

      {/* Carousel */}
      <Column
        fillWidth
        maxWidth="l"
        className="certifications-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="certifications-stage">
          <div className="certifications-image-frame">
            <Image
              src={`/api/images?hash=${currentCert.image}`}
              alt={currentCert.title}
              width={isMobile ? 320 : isTablet ? 380 : 440}
              height={isMobile ? 220 : isTablet ? 260 : 300}
              className="certifications-image"
              onError={(e) => {
                console.error("Failed to load image:", currentCert.image);
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {!currentCert.image && (
              <Flex horizontal="center" vertical="center" className="certifications-image-fallback">
                <Text variant="body-default-m">{t("common.noData")}</Text>
              </Flex>
            )}
          </div>

          <div className="certifications-content">
            <Heading as="h2" variant="heading-strong-l" className="certifications-title">
              {currentCert.title}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" className="certifications-description">
              {currentCert.description}
            </Text>
            <Flex gap="s" vertical="center" wrap className="certifications-metadata">
              <Text className="certifications-pill">{currentCert.issuer}</Text>
              <Text className="certifications-divider">•</Text>
              <Text className="certifications-pill">{currentCert.date}</Text>
              <Text className="certifications-divider">•</Text>
              <Text className="certifications-pill">{currentCert.category}</Text>
            </Flex>

            {filteredCertifications.length > 1 && (
              <Flex gap="m" vertical="center" wrap className="certifications-controls">
                <Button
                  variant="tertiary"
                  size="s"
                  prefixIcon="chevronLeft"
                  onClick={prevSlide}
                  className="certifications-nav-button"
                >
                  {t("common.previous")}
                </Button>
                <Text className="certifications-counter">
                  {safeCurrentIndex + 1} / {filteredCertifications.length}
                </Text>
                <Button
                  variant="tertiary"
                  size="s"
                  suffixIcon="chevronRight"
                  onClick={nextSlide}
                  className="certifications-nav-button"
                >
                  {t("common.next")}
                </Button>
                <Button
                  variant="tertiary"
                  size="s"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  prefixIcon={isAutoPlaying ? "pause" : "play"}
                  className="certifications-autoplay"
                >
                  {isAutoPlaying ? t("common.pause") : t("common.play")}
                </Button>
              </Flex>
            )}
          </div>
        </div>

        {filteredCertifications.length > 1 && (
          <div className="certifications-thumbs">
            {filteredCertifications.map((cert, index) => (
              <button
                key={cert.id}
                type="button"
                className={`certifications-thumb ${index === safeCurrentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={cert.title}
              >
                <Image
                  src={`/api/images?hash=${cert.image}`}
                  alt={cert.title}
                  width={72}
                  height={52}
                />
              </button>
            ))}
          </div>
        )}
      </Column>
    </Column>
  );
}
