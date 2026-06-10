export const SITE = {
  name: "WINTERS789",
  url: "https://yourdomain.com",
  lang: "th",
  locale: "th_TH",
} as const;

export const BRAND_NAME = "WINTERS789";

export const EXTERNAL_LINK = "https://www.youtube.com/";

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
