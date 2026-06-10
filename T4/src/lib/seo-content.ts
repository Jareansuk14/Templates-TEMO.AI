import fs from "node:fs";
import path from "node:path";

function getSeoHeading(relPath: string, id: string): string {
  const filePath = path.join(process.cwd(), relPath);
  if (!fs.existsSync(filePath)) return "";

  const content = fs.readFileSync(filePath, "utf-8");
  const pattern = new RegExp(
    `<h1[^>]*\\bid="${id}"[^>]*><span[^>]*>[^<]*</span>([\\s\\S]*?)<\\/h1>`
  );
  const match = content.match(pattern);
  return match?.[1]?.trim() ?? "";
}

function getSeoDescription(relPath: string, id: string): string {
  const filePath = path.join(process.cwd(), relPath);
  if (!fs.existsSync(filePath)) return "";

  const content = fs.readFileSync(filePath, "utf-8");
  const pattern = new RegExp(
    `<p[^>]*\\bid="${id}"[^>]*>\\s*([\\s\\S]*?)\\s*<\\/p>`
  );
  const match = content.match(pattern);
  return match?.[1]?.trim() ?? "";
}

export function getMainSeoHeading(): string {
  return getSeoHeading("src/components/Hero.astro", "main-seo");
}

export function getMainSeoDescription(): string {
  return getSeoDescription("src/components/Hero.astro", "sub-main-seo");
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
