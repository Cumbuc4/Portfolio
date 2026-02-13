"use client";

import { useState, useEffect, useRef } from "react";
import { Flex, Button, Text } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";

const languageNames = {
  pt: "🇧🇷 Português",
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
  ja: "🇯🇵 日本語",
  ru: "🇷🇺 Русский",
  fr: "🇫🇷 Français",
  de: "🇩🇪 Deutsch",
  ko: "🇰🇷 한국어"
};

const languageCodes = {
  pt: "PT",
  en: "EN",
  es: "ES",
  ja: "JA",
  ru: "RU",
  fr: "FR",
  de: "DE",
  ko: "KO"
};

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as any);
    setIsOpen(false);
  };

  return (
    <Flex vertical="center" style={{ position: "relative" }} ref={dropdownRef}>
      <Button
        variant="tertiary"
        size="s"
        onClick={() => setIsOpen(!isOpen)}
        className="nav-button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {languageCodes[language as keyof typeof languageCodes]}
      </Button>

      {isOpen && (
        <Flex
          vertical="start"
          className="language-dropdown"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "8px",
            background: "var(--glass-2)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--border-1)",
            borderRadius: "16px",
            padding: "8px",
            boxShadow: "0 8px 32px rgba(6, 10, 12, 0.2)",
            zIndex: 1100,
            minWidth: "140px",
            maxWidth: "calc(100vw - 24px)",
            maxHeight: "min(70vh, 360px)",
            overflowY: "auto",
            overscrollBehavior: "contain"
          }}
        >
          {Object.entries(languageNames).map(([code, name]) => (
            <Button
              key={code}
              variant="tertiary"
              size="s"
              onClick={() => handleLanguageChange(code)}
              className="language-option"
              style={{
                borderRadius: "12px",
                padding: "8px 12px",
                fontSize: "12px",
                fontWeight: "500",
                background: code === language
                  ? "linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-amber) 100%)"
                  : "transparent",
                border: "none",
                width: "100%",
                justifyContent: "flex-start",
                transition: "all 0.2s ease",
                marginBottom: "4px"
              }}
            >
              <Text
                style={{
                  color: code === language ? "#0f1a21" : "var(--text-strong)",
                  fontSize: "12px",
                  fontWeight: code === language ? "600" : "500"
                }}
              >
                {name}
              </Text>
            </Button>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
