/**
 * Safely serializes an object for dangerouslySetInnerHTML in JSON-LD script tags.
 * Escapes '<' to '\u003c' to prevent XSS script breakout attacks.
 */
export function safeJsonLd(schemaObj: unknown): { __html: string } {
  const jsonStr = JSON.stringify(schemaObj) || "{}";
  return {
    __html: jsonStr.replace(/</g, "\\u003c"),
  };
}
