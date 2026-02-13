"use client";

import { Flex, Text, Button } from "@once-ui-system/core";
import { person, social } from "@/resources/content";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <Flex
      as="footer"
      fillWidth
      horizontal="center"
      vertical="center"
      className="site-footer"
    >
      <Flex horizontal="center" vertical="center" fillWidth gap="l" wrap>
        <Text variant="body-default-s" onBackground="neutral-weak">
          © {currentYear} {person.name}. {t("footer.copyright")}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {t("footer.madeWith")}
        </Text>
      </Flex>
    </Flex>
  );
}
