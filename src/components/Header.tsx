"use client";

import Link from "next/link";
import { Flex, Heading, Text, Button, Avatar, Column } from "@once-ui-system/core";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { person } from "@/resources/content";

export function Header() {
  const { t, language } = useLanguage();

  const createLocalizedLink = (path: string) => {
    return `/${language}${path}`;
  };

  return (
    <Flex
      as="header"
      fillWidth
      horizontal="space-between"
      vertical="center"
      padding="m"
      className="site-header"
    >
      <Flex horizontal="start" vertical="center" gap="m">
        <Link href={createLocalizedLink("")} style={{ textDecoration: "none" }}>
          <Flex horizontal="start" vertical="center" gap="m">
            <Avatar size="m" src={person.avatar} />
            <Column gap="xs" style={{ alignItems: "flex-start" }}>
              <Heading as="h1" variant="heading-strong-m" style={{ margin: 0 }}>
                {person.name}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {t("header.portfolio")}
              </Text>
            </Column>
          </Flex>
        </Link>
      </Flex>

      <Flex horizontal="center" gap="m" hide="s">
        <Link href={createLocalizedLink("")} style={{ textDecoration: "none" }}>
          <Button variant="tertiary" size="s" className="nav-button">
            {t("navigation.home")}
          </Button>
        </Link>
        <Link href={createLocalizedLink("#about")} style={{ textDecoration: "none" }}>
          <Button variant="tertiary" size="s" className="nav-button">
            {t("navigation.about")}
          </Button>
        </Link>
        <Link href={createLocalizedLink("#work")} style={{ textDecoration: "none" }}>
          <Button variant="tertiary" size="s" className="nav-button">
            {t("navigation.writeups")}
          </Button>
        </Link>
        <Link href={createLocalizedLink("#certifications")} style={{ textDecoration: "none" }}>
          <Button variant="tertiary" size="s" className="nav-button">
            {t("navigation.certifications")}
          </Button>
        </Link>
      </Flex>

      <Flex horizontal="center" vertical="center" gap="m">
        <LanguageSelector />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
