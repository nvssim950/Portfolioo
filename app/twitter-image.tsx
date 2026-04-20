import { PROFILE } from "@/lib/data";
import OGImage from "./opengraph-image";

export const alt = `${PROFILE.name} — ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OGImage;
