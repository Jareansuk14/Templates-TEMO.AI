import { publicAssetExists } from "@/lib/assets";

export type SiteImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type PromoImage = SiteImage;

export type SeoArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** พื้นหลังทั้งเว็บ (public root) */
export const BACKGROUND = {
  src: "/images/BG.webp",
  width: 1920,
  height: 1080,
} as const;

const IMAGE_MIME_BY_EXT: Record<string, string> = {
  svg: "image/svg+xml",
  png: "image/png",
  webp: "image/webp",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
};

/** Hero banner */
export const BANNER = {
  src: "/images/banner.webp",
  alt: "คำอธิบาย",
  width: 1600,
  height: 900,
} as const;

export const HERO_MASCOT: SiteImage = {
  src: "/images/hero-mascot.webp",
  alt: "คำอธิบาย",
  width: 1024,
  height: 1024,
};

export const CTA_MASCOT: SiteImage = {
  src: "/images/cta-mascot.webp",
  alt: "คำอธิบาย",
  width: 1024,
  height: 1024,
};

/** SEO Mascot (ตัวละครโปร่งใส) */
export const SEO_MASCOT: SiteImage = {
  src: "/images/seo-mascot.webp",
  alt: "คำอธิบาย",
  width: 1024,
  height: 1024,
};

/** ปุ่ม Play */
export const PLAY_BUTTON = {
  src: "/images/play.webp",
  width: 512,
  height: 240,
} as const;

/** Header logo */
export const LOGO = {
  src: "/images/logo.webp",
  width: 512,
  height: 512,
} as const;

/** ปุ่ม Hero / CTA */
export const ACTION_BUTTONS = {
  login: {
    src: "/images/login.webp",
    alt: "เข้าสู่ระบบ",
    width: 512,
    height: 240,
  },
  register: {
    src: "/images/register.webp",
    alt: "สมัครสมาชิก",
    width: 512,
    height: 240,
  },
  contact: {
    src: "/images/contact.webp",
    alt: "ติดต่อเรา",
    width: 512,
    height: 240,
  },
} as const satisfies Record<string, SiteImage>;

/** เกม 6 ประเภท */
export const GAME_CARDS: SiteImage[] = [
  { alt: "คำอธิบาย", src: "/images/game1.webp", width: 240, height: 512, },
  { alt: "คำอธิบาย", src: "/images/game2.webp", width: 240, height: 512, },
  { alt: "คำอธิบาย", src: "/images/game3.webp", width: 240, height: 512, },
  { alt: "คำอธิบาย", src: "/images/game4.webp", width: 240, height: 512, },
  { alt: "คำอธิบาย", src: "/images/game5.webp", width: 240, height: 512, },
  { alt: "คำอธิบาย", src: "/images/game6.webp", width: 240, height: 512 },
];

/** ค่ายเกม */
export const PROVIDER: SiteImage = {
  src: "/images/provider.webp",
  alt: "[รายชื่อค่ายเกม เช่น: PG Slot, Pragmatic Play, Evolution Gaming, SA Gaming]",
  width: 1362,
  height: 382,
};

/** โปรโมชั่น (หน้า promotions + preview หน้าแรก) */
export const PROMOS: PromoImage[] = [
  { src: "/images/promo1.webp", alt: "[ชื่อโปรโมชั่น 1 — เช่น: โบนัสต้อนรับ 100%]", width: 1600, height: 900 },
  { src: "/images/promo2.webp", alt: "[ชื่อโปรโมชั่น 2 — เช่น: โบนัสรายวัน 20%]", width: 1600, height: 900 },
  { src: "/images/promo3.webp", alt: "[ชื่อโปรโมชั่น 3 — เช่น: คืนยอดเสีย 5%]", width: 1600, height: 900 },
  { src: "/images/promo4.webp", alt: "[ชื่อโปรโมชั่น 4 — เช่น: แนะนำเพื่อน รับ X%]", width: 1600, height: 900 },
];

/** รูปบทความ SEO */
export const SEO_ARTICLE_IMAGES: Record<string, SeoArticleImage> = {
  "seo-1": { src: "/images/seo1.webp", alt: "คำอธิบาย", width: 1600, height: 900 },
  "seo-2": { src: "/images/seo2.webp", alt: "คำอธิบาย", width: 1600, height: 900 },
  "seo-3": { src: "/images/seo3.webp", alt: "คำอธิบาย", width: 1600, height: 900 },

};

/** QR ติดต่อ LINE */
export const LINE_QR: SiteImage = {
  src: "/images/QR.webp",
  width: 180,
  height: 180,
  alt: "",
};

export const PROMO_PREVIEW_SIZE = { width: 1200, height: 525 } as const;

export function getPromoPreview(count = 3): PromoImage[] {
  return PROMOS.slice(0, count);
}

export function getLogoSrc(): string {
  return LOGO.src;
}

export function getOgImageSrc(): string {
  return BANNER.src;
}

export function getOgImageAlt(): string {
  return BANNER.alt;
}

/** MIME ของรูปตามนามสกุล (favicon / meta) */
export function getImageMimeType(src: string): string {
  const ext = src.split("?")[0].split(".").pop()?.toLowerCase() ?? "";
  return IMAGE_MIME_BY_EXT[ext] ?? "image/png";
}

export function getLogoMimeType(): string {
  return getImageMimeType(getLogoSrc());
}

export function hasBannerImage(): boolean {
  return publicAssetExists(BANNER.src);
}

export function getBackgroundSrc(): string {
  return BACKGROUND.src;
}

export function hasBackgroundImage(): boolean {
  return publicAssetExists(BACKGROUND.src);
}

export function resolvePreloadImage(path: string | undefined): string | undefined {
  return publicAssetExists(path) ? path : undefined;
}
