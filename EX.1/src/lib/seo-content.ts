import { BRAND_NAME } from "@/config/site";
import { HERO } from "@/data/content/hero";
import { PROMOTIONS_PAGE } from "@/data/content/promotionsPage";
import { CONTACT_PAGE } from "@/data/content/contactPage";

function stripLeadingBrand(text: string): string {
  const trimmed = text.trim();
  if (!trimmed.startsWith(BRAND_NAME)) return trimmed;
  return trimmed.slice(BRAND_NAME.length).trimStart();
}

export function getMainSeoHeading(): string {
  return stripLeadingBrand(HERO.heading);
}

export function getMainSeoDescription(): string {
  return HERO.description.trim();
}

export function getPromotionSeoHeading(): string {
  return stripLeadingBrand(PROMOTIONS_PAGE.heading);
}

export function getPromotionSeoDescription(): string {
  return PROMOTIONS_PAGE.description.trim();
}

export function getContactSeoHeading(): string {
  return stripLeadingBrand(CONTACT_PAGE.heading);
}

export function getContactSeoDescription(): string {
  return CONTACT_PAGE.description.trim();
}
