import { existsSync } from "node:fs";
import { join } from "node:path";

const publicDir = join(process.cwd(), "public");

export function publicAssetExists(assetPath: string | undefined): assetPath is string {
  if (!assetPath || !assetPath.startsWith("/")) return false;

  const normalizedPath = assetPath.split("?")[0].replace(/^\/+/, "");
  return existsSync(join(publicDir, normalizedPath));
}
