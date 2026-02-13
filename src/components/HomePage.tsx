"use client";

import { useEffect, useState } from "react";
import { Column, Flex, Heading, Text, Button, Avatar } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { person, contact } from "@/resources/content";
import { RecentWriteups } from "@/components/home/RecentWriteups";
import CertificationsCarousel from "@/components/certifications/CertificationsCarousel";
import AboutContent from "@/components/about/AboutContent";

export default function HomePage() {
  const { t, language } = useLanguage();
  const [today, setToday] = useState(new Date());
  const [devStart] = useState(() => new Date("2021-01-01"));
  const [pentestStart] = useState(() => new Date("2025-03-01"));

  const createLocalizedLink = (path: string) => {
    return `/${language}${path}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  const formatDuration = (startDate: Date) => {
    const diffMs = today.getTime() - startDate.getTime();
    const totalWeeks = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7)));
    if (totalWeeks < 4) {
      return {
        value: totalWeeks,
        unit: totalWeeks === 1 ? t("home.metrics.unitWeek") : t("home.metrics.unitWeeks")
      };
    }

    const totalMonths = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.4375)));
    if (totalMonths < 12) {
      return {
        value: totalMonths,
        unit: totalMonths === 1 ? t("home.metrics.unitMonth") : t("home.metrics.unitMonths")
      };
    }

    const totalYears = Math.max(0, Math.floor(totalMonths / 12));
    return {
      value: totalYears,
      unit: totalYears === 1 ? t("home.metrics.unitYear") : t("home.metrics.unitYears")
    };
  };


  return (
    <Column fillWidth gap="xl" className="home-shell" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <section id="home" className="hero-section">
        <div className="hero-grid">
          <Column gap="l" style={{ position: "relative", zIndex: 1 }}>
            <Text className="section-kicker">{t("header.portfolio")}</Text>
            <Heading as="h1" variant="display-strong-xl" className="hero-title">
              <span className="hero-accent">{t("home.hero.headline")}</span>
            </Heading>
            <Text variant="body-default-l" className="hero-subtitle">
              {t("home.hero.subline")}
            </Text>
          </Column>

          <Column className="hero-panel" style={{ position: "relative", zIndex: 1 }}>
            <Flex horizontal="start" gap="m" vertical="center">
              <Avatar size="xl" src={person.avatar} />
              <Column gap="xs">
                <Heading as="h2" variant="heading-strong-l">
                  {person.name}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {t("about.role")}
                </Text>
              </Column>
            </Flex>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {t("about.description")}
            </Text>
            <div className="hero-metrics">
              {(() => {
                const devDuration = formatDuration(devStart);
                return (
                  <div className="hero-metric">
                    <Text className="hero-metric-label">{t("home.metrics.devLabel")}</Text>
                    <Heading as="h3" variant="heading-strong-l" className="hero-metric-value">
                      {devDuration.value}
                    </Heading>
                    <Text className="hero-metric-unit">{devDuration.unit}</Text>
                  </div>
                );
              })()}
              {(() => {
                const pentestDuration = formatDuration(pentestStart);
                return (
                  <div className="hero-metric">
                    <Text className="hero-metric-label">{t("home.metrics.pentestLabel")}</Text>
                    <Heading as="h3" variant="heading-strong-l" className="hero-metric-value">
                      {pentestDuration.value}
                    </Heading>
                    <Text className="hero-metric-unit">{pentestDuration.unit}</Text>
                  </div>
                );
              })()}
            </div>
          </Column>
        </div>
      </section>

      <section id="about" className="section-block section-about">
        <Column gap="m">
          <Text className="section-kicker">{t("navigation.about")}</Text>
          <Heading as="h2" variant="heading-strong-l" className="section-title">
            {t("about.title")}
          </Heading>
          <Text variant="body-default-l" className="section-description">
            {t("about.introduction.description")}
          </Text>
        </Column>

        <AboutContent />
      </section>

      <section id="work" className="section-block section-work">
        <Column gap="m">
          <Text className="section-kicker">{t("navigation.writeups")}</Text>
          <Heading as="h2" variant="heading-strong-l" className="section-title">
            {t("work.title")}
          </Heading>
          <Text variant="body-default-l" className="section-description">
            {t("work.subtitle")}
          </Text>
        </Column>
        <RecentWriteups />
      </section>

      <section id="certifications" className="section-block section-certifications">
        <Column gap="m">
          <Text className="section-kicker">{t("navigation.certifications")}</Text>
          <Heading as="h2" variant="heading-strong-l" className="section-title">
            {t("certifications.title")}
          </Heading>
          <Text variant="body-default-l" className="section-description">
            {t("certifications.description")}
          </Text>
        </Column>
        <CertificationsCarousel />
      </section>

      <section id="contact" className="section-block section-contact">
        <Column gap="m">
          <Text className="section-kicker">{t("contact.kicker")}</Text>
          <Heading as="h2" variant="heading-strong-l" className="section-title">
            {t("contact.title")}
          </Heading>
          <Text variant="body-default-l" className="section-description">
            {t("contact.subtitle")}
          </Text>
        </Column>
        <div className="contact-grid">
          <Link href={contact.email} style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="l" prefixIcon="email" className="contact-card">
              {t("contact.email")}
            </Button>
          </Link>
          <Link href={contact.whatsapp} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="l" prefixIcon="whatsapp" className="contact-card">
              {t("contact.whatsapp")}
            </Button>
          </Link>
          <Link href={contact.instagram} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="l" prefixIcon="instagram" className="contact-card">
              {t("contact.instagram")}
            </Button>
          </Link>
          <Link href={contact.linkedin} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="l" prefixIcon="linkedin" className="contact-card contact-card--wide">
              {t("contact.linkedin")}
            </Button>
          </Link>
          <Link href={contact.github} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="l" prefixIcon="github" className="contact-card contact-card--wide">
              {t("contact.github")}
            </Button>
          </Link>
        </div>
      </section>
    </Column>
  );
}
