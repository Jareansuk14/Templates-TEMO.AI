import fs from "node:fs";
import path from "node:path";
import { BRAND_NAME } from "@/config/site";

const SECTIONS_DIR = "src/components/sections";

function stripLeadingBrand(text: string): string {
  const trimmed = text.trim();
  if (!trimmed.startsWith(BRAND_NAME)) return trimmed;
  return trimmed.slice(BRAND_NAME.length).trimStart();
}

function readFileSafe(relPath: string): string {
  const filePath = path.join(process.cwd(), relPath);
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf-8");
}

function matchHeading(content: string, id: string): string {
  if (!content) return "";
  const pattern = new RegExp(
    `<h1[^>]*\\bid="${id}"[^>]*>([\\s\\S]*?)<\\/h1>`
  );
  const match = content.match(pattern);
  if (!match?.[1]) return "";
  return stripLeadingBrand(match[1].trim());
}

function matchDescription(content: string, id: string): string {
  if (!content) return "";
  const pattern = new RegExp(
    `<p[^>]*\\bid="${id}"[^>]*>\\s*([\\s\\S]*?)\\s*<\\/p>`
  );
  return content.match(pattern)?.[1]?.trim() ?? "";
}

function getSeoHeading(relPath: string, id: string): string {
  return matchHeading(readFileSafe(relPath), id);
}

function getSeoDescription(relPath: string, id: string): string {
  return matchDescription(readFileSafe(relPath), id);
}

function scanSections(
  id: string,
  matcher: (content: string, id: string) => string
): string {
  const dir = path.join(process.cwd(), SECTIONS_DIR);
  if (!fs.existsSync(dir)) return "";

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".astro")) continue;
    const result = matcher(fs.readFileSync(path.join(dir, file), "utf-8"), id);
    if (result) return result;
  }
  return "";
}

export function getMainSeoHeading(): string {
  return scanSections("main-seo", matchHeading);
}

export function getMainSeoDescription(): string {
  return scanSections("sub-main-seo", matchDescription);
}

export function getPromotionSeoHeading(): string {
  return getSeoHeading("src/pages/promotions.astro", "promotion-seo");
}

export function getPromotionSeoDescription(): string {
  return getSeoDescription("src/pages/promotions.astro", "sub-promotion-seo");
}

export function getContactSeoHeading(): string {
  return getSeoHeading("src/pages/contact.astro", "contact-seo");
}

export function getContactSeoDescription(): string {
  return getSeoDescription("src/pages/contact.astro", "sub-contact-seo");
}
