import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);