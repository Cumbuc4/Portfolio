"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Column, Heading, Text, Flex, Icon } from "@once-ui-system/core";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHash";
import { useLanguage } from "@/contexts/LanguageContext";

interface Post {
  slug: string;
  metadata: {
    title: string;
    summary?: string;
    description?: string;
    publishedAt?: string;
    date?: string;
    images?: string[];
  };
}

export function RecentWriteups() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  const createLocalizedLink = (path: string) => {
    return `/${language}${path}`;
  };
  const localeMap: Record<string, string> = {
    pt: "pt-BR",
    en: "en-US",
    es: "es-ES",
    ja: "ja-JP",
    ru: "ru-RU",
    fr: "fr-FR",
    de: "de-DE",
    ko: "ko-KR"
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data.slice(0, 3));
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Column gap="l" horizontal="center" paddingY="xl">
        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          {t("common.loading")}
        </Text>
      </Column>
    );
  }

  const slots = 3;
  const visiblePosts = posts.slice(0, 1);
  const placeholders = Math.max(0, slots - visiblePosts.length);

  return (
    <Column gap="l" paddingTop="l" style={{ width: "100%" }}>
      <div className="writeups-grid">
        {visiblePosts.map((post) => (
          <Link
            key={post.slug}
            href={createLocalizedLink(`/work/${post.slug}`)}
            style={{ textDecoration: "none" }}
            className="writeup-card"
          >
            <Column gap="m" style={{ position: "relative", zIndex: 1 }}>
              {post.metadata.images && post.metadata.images.length > 0 && (
                <Flex
                  horizontal="center"
                  style={{
                    width: "100%",
                    height: "180px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid var(--border-1)",
                    background: "var(--glass-1)"
                  }}
                >
                  <Image
                    src={getImageUrl(post.metadata.images[0])}
                    alt={post.metadata.title}
                    width={360}
                    height={180}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Flex>
              )}
              <Heading as="h3" variant="heading-strong-m" className="writeup-title">
                {post.metadata.title}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {post.metadata.summary || post.metadata.description || t("common.noData")}
              </Text>
              <Text className="writeup-meta">
                {new Date(post.metadata.publishedAt || post.metadata.date || Date.now()).toLocaleDateString(
                  localeMap[language] || "en-US",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                  }
                )}
              </Text>
            </Column>
          </Link>
        ))}
        {Array.from({ length: placeholders }).map((_, index) => (
          <div key={`placeholder-${index}`} className="writeup-card writeup-card--placeholder">
            <Column gap="m" style={{ position: "relative", zIndex: 1 }}>
              <Flex
                horizontal="center"
                vertical="center"
                gap="s"
                style={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "16px",
                  border: "1px dashed var(--border-1)",
                  background: "var(--glass-1)"
                }}
              >
                <Icon name="rocket" size="m" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {t("common.comingSoon")}
                </Text>
              </Flex>
              <Heading as="h3" variant="heading-strong-m" className="writeup-title">
                {t("common.comingSoon")}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {t("common.comingSoonSubtitle")}
              </Text>
              <Text className="writeup-meta">—</Text>
            </Column>
          </div>
        ))}
      </div>
    </Column>
  );
}
