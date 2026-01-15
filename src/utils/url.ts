import { URL } from "url";

export function validUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export function buildShortUrl(host: string, slug: string): string {
  // Remove trailing slashes from host and leading slashes from slug to avoid double slashes
  const cleanHost = host.replace(/\/+$/, "");
  const cleanSlug = slug.replace(/^\/+/, "");
  return `${cleanHost}/${cleanSlug}`;
}
