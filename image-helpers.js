// STUB: no Wix-media resizing; images load as plain <img> from their original URL.
export const IMAGE_LOAD_MODE = { OPTIMIZED:"optimized", ORIGINAL:"original", FALLBACK:"fallback" };
export const parseWixMediaUrl = () => null;
export const getOriginalImageUrl = (src) => src;
export const nextImageLoadMode = (m) => (m === "optimized" ? "original" : "fallback");
