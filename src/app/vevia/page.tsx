import { LinkInBio, linkInBioBackground, linkInBioButtons } from "@/components/linkinbio/LinkInBio";
import { LinkInBioChrome } from "@/components/linkinbio/LinkInBioChrome";
import { linkInBioMetadata } from "@/components/linkinbio/metadata";
import { CONTACT } from "@/lib/siteConfig";

const title = "VEVIA | הזמנות סיטונאיות";
const description =
  "משקאות מוגזים, מיצים וקפה. הזמנות סיטונאיות לבעלי עסקים — VEVIA מבית Al-Yosef Global.";

export const metadata = linkInBioMetadata({
  title,
  description,
  path: "/vevia",
  image: {
    url: "/brand/vevia-logo.png",
    width: 1600,
    height: 700,
    alt: "VEVIA",
  },
});

export default function VeviaLinkPage() {
  return (
    <LinkInBioChrome background={linkInBioBackground("vevia")}>
      <LinkInBio
        theme="vevia"
        logo={{ src: "/brand/vevia-logo.png", alt: "VEVIA" }}
        title="VEVIA"
        subtitle="משקאות מוגזים, מיצים וקפה · הזמנות סיטונאיות לבעלי עסקים"
        subtitleAr="مشروبات غازية، عصائر وقهوة · طلبات بالجملة لأصحاب المحلات"
        buttons={linkInBioButtons("שלום, אני מעוניין להזמין VEVIA לעסק שלי")}
        socials={CONTACT.social.vevia}
        otherBrand={{
          href: "/links",
          label: "Al-Yosef Global – כל המוצרים",
          ariaLabel: "Al-Yosef Global – כל המוצרים",
        }}
      />
    </LinkInBioChrome>
  );
}
