"use client";

import { Heading, Text } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";

const joinList = (items: string[]) => items.filter(Boolean).join(", ");

export default function AboutContent() {
  const { t } = useLanguage();

  const programmingSkills = [
    t("about.technicalSkills.development.python"),
    t("about.technicalSkills.development.javascript"),
    t("about.technicalSkills.development.cpp"),
    t("about.technicalSkills.development.bash"),
    t("about.technicalSkills.development.sql")
  ];

  const frameworks = [
    t("about.technicalSkills.development.react"),
    t("about.technicalSkills.development.nodejs")
  ];

  const tools = [
    t("about.technicalSkills.tools.kali"),
    t("about.technicalSkills.tools.windowsServer"),
    t("about.technicalSkills.tools.ubuntu"),
    t("about.technicalSkills.tools.nmap"),
    t("about.technicalSkills.tools.burpSuite"),
    t("about.technicalSkills.tools.wireshark"),
    t("about.technicalSkills.tools.metasploit"),
    t("about.technicalSkills.tools.others")
  ];

  const securitySkills = [
    t("about.technicalSkills.security.pentesting"),
    t("about.technicalSkills.security.malware"),
    t("about.technicalSkills.security.forensics"),
    t("about.technicalSkills.security.vulnerability"),
    t("about.technicalSkills.security.ctfs")
  ];

  return (
    <div className="section-grid" style={{ marginTop: "28px" }}>
      <div className="info-card">
        <Heading as="h3" variant="heading-strong-m">
          {t("about.workExperience.title")}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {t("about.workExperience.currentJob.title")} · {t("about.workExperience.currentJob.company")}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {t("about.workExperience.currentJob.description1")}
        </Text>
        <details className="about-details">
          <summary>{t("common.showTimeline")}</summary>
          <div className="about-timeline">
            <div className="about-timeline-item">
              <span className="about-timeline-date">{t("about.workExperience.currentJob.period")}</span>
              <div className="about-timeline-content">
                <strong>{t("about.workExperience.currentJob.title")}</strong>
                <span>{t("about.workExperience.currentJob.company")}</span>
              </div>
            </div>
            <div className="about-timeline-item">
              <span className="about-timeline-date">{t("about.workExperience.backendIntern.period")}</span>
              <div className="about-timeline-content">
                <strong>{t("about.workExperience.backendIntern.title")}</strong>
                <span>{t("about.workExperience.backendIntern.company")}</span>
              </div>
            </div>
            <div className="about-timeline-item">
              <span className="about-timeline-date">{t("about.workExperience.frontendIntern.period")}</span>
              <div className="about-timeline-content">
                <strong>{t("about.workExperience.frontendIntern.title")}</strong>
                <span>{t("about.workExperience.frontendIntern.company")}</span>
              </div>
            </div>
          </div>
        </details>
      </div>

      <div className="info-card">
        <Heading as="h3" variant="heading-strong-m">
          {t("about.academicBackground.title")}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {t("about.academicBackground.bachelor.degree")}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {t("about.academicBackground.bachelor.institution")}
        </Text>
      </div>

      <div className="info-card">
        <Heading as="h3" variant="heading-strong-m">
          {t("about.technicalSkills.title")}
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {joinList([
            t("about.technicalSkills.development.python"),
            t("about.technicalSkills.development.javascript"),
            t("about.technicalSkills.development.react"),
            t("about.technicalSkills.development.nodejs")
          ])}
          .
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {joinList([
            t("about.technicalSkills.security.pentesting"),
            t("about.technicalSkills.security.malware"),
            t("about.technicalSkills.security.forensics")
          ])}
          .
        </Text>
        <details className="about-details">
          <summary>{t("common.showMoreSkills")}</summary>
          <div className="about-skill-group">
            <h4>{t("about.technicalSkills.groups.programming")}</h4>
            <p>{joinList(programmingSkills)}.</p>
          </div>
          <div className="about-skill-group">
            <h4>{t("about.technicalSkills.groups.frameworks")}</h4>
            <p>{joinList(frameworks)}.</p>
          </div>
          <div className="about-skill-group">
            <h4>{t("about.technicalSkills.groups.tools")}</h4>
            <p>{joinList(tools)}.</p>
          </div>
          <div className="about-skill-group">
            <h4>{t("about.technicalSkills.groups.security")}</h4>
            <p>{joinList(securitySkills)}.</p>
          </div>
        </details>
      </div>
    </div>
  );
}
