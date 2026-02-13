import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { CustomMDX, ScrollToHash } from "@/components";
import { AvatarGroup, Button, Column, Heading, HeadingNav, Icon, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import ptTranslations from "@/translations/pt.json";
import enTranslations from "@/translations/en.json";
import esTranslations from "@/translations/es.json";
import jaTranslations from "@/translations/ja.json";
import ruTranslations from "@/translations/ru.json";
import frTranslations from "@/translations/fr.json";
import deTranslations from "@/translations/de.json";
import koTranslations from "@/translations/ko.json";

const locales = ["pt", "en", "es", "ja", "ru", "fr", "de", "ko"];

const translationsMap: Record<string, typeof ptTranslations> = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
  ja: jaTranslations,
  ru: ruTranslations,
  fr: frTranslations,
  de: deTranslations,
  ko: koTranslations
};

export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts
    .filter((post) => post !== null)
    .flatMap((post) =>
      locales.map((locale) => ({
        locale,
        slug: post!.slug
      }))
    );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]).filter((post) => post !== null);
  const post = posts.find((item) => item!.slug === slugPath);

  if (!post) return {};

  const title = `${post!.metadata.title} - ${person.name}`;
  const description = post!.metadata.summary;
  const imageUrl = `${baseURL}/api/og/generate?title=${encodeURIComponent(title)}`;
  const canonicalPath = `/${routeParams.locale}/work/${post!.slug}`;

  return {
    title,
    description,
    keywords: ["cybersecurity", "full stack developer", "CTF", "offensive security", "defensive security", "web development", "security researcher"],
    authors: [{ name: person.name }],
    creator: person.name,
    publisher: person.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      type: "article",
      locale: routeParams.locale,
      url: `${baseURL}${canonicalPath}`,
      siteName: `${person.name}'s Portfolio`,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: post!.metadata.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@lg_bueno",
      creator: "@lg_bueno",
      title,
      description,
      images: [imageUrl]
    },
    alternates: {
      canonical: `${baseURL}${canonicalPath}`
    }
  };
}

export default async function Work({
  params
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]).filter((post) => post !== null);
  const post = posts.find((item) => item!.slug === slugPath);

  if (!post) {
    notFound();
  }

  const translations = translationsMap[routeParams.locale] || ptTranslations;
  const navLabel = translations.navigation?.writeups || "Work";
  const onThisPageLabel = translations.common?.onThisPage || "On this page";

  const avatars = post!.metadata.team?.map((person) => ({
    src: person.avatar
  })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m" />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
          <Schema
            as="article"
            baseURL={baseURL}
            path={`/${routeParams.locale}/work/${post!.slug}`}
            title={post!.metadata.title}
            description={post!.metadata.summary}
            datePublished={post!.metadata.publishedAt}
            dateModified={post!.metadata.publishedAt}
            image={post!.metadata.image || `/api/og/generate?title=${encodeURIComponent(post!.metadata.title)}`}
            author={{
              name: person.name,
              url: `${baseURL}/${routeParams.locale}${about.path}`,
              image: `${baseURL}${person.avatar}`
            }}
          />
          <Button
            data-border="rounded"
            href={`/${routeParams.locale}#work`}
            weight="default"
            variant="tertiary"
            size="s"
            prefixIcon="chevronLeft"
          >
            {navLabel}
          </Button>
          <Heading variant="display-strong-s">{post!.metadata.title}</Heading>
          <Row gap="12" vertical="center">
            {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post!.metadata.publishedAt && formatDate(post!.metadata.publishedAt, false, routeParams.locale)}
            </Text>
          </Row>
          <Column as="article" fillWidth>
            <CustomMDX source={post!.content} />
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
        <Row gap="12" paddingLeft="2" vertical="center" onBackground="neutral-medium" textVariant="label-default-s">
          <Icon name="document" size="xs" />
          {onThisPageLabel}
        </Row>
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
