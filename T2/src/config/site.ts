import { BANNER } from "@/lib/images";

export const SITE = {
  name: "BABYSHARK99",
  url: "https://yourdomain.com",
  lang: "th",
  locale: "th_TH",
  ogImage: BANNER.src,
  ogImageWidth: BANNER.width,
  ogImageHeight: BANNER.height,
} as const;

export const BRAND_NAME = "BABYSHARK99";

export const EXTERNAL_LINK = "https://teddybear88.cc/?action=register&marketingRef=69a96f72f1cf19528db9c319";

export const LINE = {
  id: "@tedx1",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/promotions/", label: "โปรโมชั่น" },
  { href: "/contact/", label: "ติดต่อเรา" },
] as const;

export function isActivePath(currentPath: string, href: string): boolean {
  return currentPath === href || (href !== "/" && currentPath.startsWith(href));
}
