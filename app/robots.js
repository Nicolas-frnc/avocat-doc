import { Settings } from "@/lib/meta";
export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${Settings.metadataBase}/sitemap.xml`,
    };
}
