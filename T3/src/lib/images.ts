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
  actionAlt: string;
};

/** พื้นหลังทั้งเว็บ (public root) */
export const BACKGROUND = {
  src: "/images/BG.webp",
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
  alt: "ข้อความ banner",
  width: 1536,
  height: 728,
} as const;

/** Header logo */
export const LOGO = {
  src: "/images/logo.webp",
  width: 128,
  height: 128,
} as const;

/** ปุ่ม Hero / CTA */
export const ACTION_BUTTONS = {
  login: {
    src: "/images/เข้าสู่ระบบ.webp",
    alt: "เข้าสู่ระบบ",
    width: 1867,
    height: 576,
  },
  register: {
    src: "/images/สมัครสมาชิก.webp",
    alt: "สมัครสมาชิก",
    width: 1867,
    height: 576,
  },
  contact: {
    src: "/images/ติดต่อเรา.webp",
    alt: "ติดต่อเรา",
    width: 1867,
    height: 576,
  },
} as const satisfies Record<string, SiteImage>;

/** เกม 4 ประเภท */
export const GAME_CARDS: SiteImage[] = [
  {
    alt: "game1",
    src: "/images/game1.webp",
    width: 1200,
    height: 801,
  },
  {
    alt: "game2",
    src: "/images/game2.webp",
    width: 1200,
    height: 801,
  },
  {
    alt: "game3",
    src: "/images/game3.webp",
    width: 1200,
    height: 801,
  },
  {
    alt: "game4",
    src: "/images/game4.webp",
    width: 1200,
    height: 801,
  },
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
  { src: "/images/promo1.webp", alt: "[ชื่อโปรโมชั่น 1 ]", width: 800, height: 500 },
  { src: "/images/promo2.webp", alt: "[ชื่อโปรโมชั่น 2 ]", width: 800, height: 500 },
  { src: "/images/promo3.webp", alt: "[ชื่อโปรโมชั่น 3]", width: 800, height: 500 },
  { src: "/images/promo4.webp", alt: "[ชื่อโปรโมชั่น 4 ]", width: 800, height: 500 },
  { src: "/images/promo5.webp", alt: "[ชื่อโปรโมชั่น 5 ]", width: 800, height: 500 },
  { src: "/images/promo6.webp", alt: "[ชื่อโปรโมชั่น 6 ]", width: 800, height: 500 },
];

/** รูปบทความ SEO + ปุ่ม play ต่อ section */
export const SEO_ARTICLE_IMAGES: Record<string, SeoArticleImage> = {
  "seo-1": {
    src: "/images/seo1.webp",
    alt: "[บทความ1]",
    width: 1200,
    height: 556,
    actionAlt: "[แบนเนอร์ CTA บทความ 1]",
  },
  "seo-2": {
    src: "/images/seo2.webp",
    alt: "[บทความ2]",
    width: 1200,
    height: 556,
    actionAlt: "[แบนเนอร์ CTA บทความ 2]",
  },
  "seo-3": {
    src: "/images/seo3.webp",
    alt: "[บทความ3]",
    width: 1200,
    height: 525,
    actionAlt: "[แบนเนอร์ CTA บทความ 3]",
  },
};

export const PLAY_BUTTON: SiteImage = {
  src: "/images/play.webp",
  width: 669,
  height: 373,
  alt: "",
};

/** QR ติดต่อ LINE */
export const LINE_QR: SiteImage = {
  src: "/images/QR.png",
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
