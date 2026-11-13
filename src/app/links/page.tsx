import { LinkInBio, linkInBioBackground, linkInBioButtons } from "@/components/linkinbio/LinkInBio";
import { LinkInBioChrome } from "@/components/linkinbio/LinkInBioChrome";
import { linkInBioMetadata } from "@/components/linkinbio/metadata";
import { CONTACT } from "@/lib/siteConfig";

const title = "Al-Yosef Global | יבוא והפצת משקאות ומזון";
const description =
  "יבוא, הפצה ופיתוח מותגים. משקאות ומזון לעסקים — Al-Yosef Global.";

export const metadata = linkInBioMetadata({
  title,
  description,
  path: "/links",
  image: {
    url: "/brand/alyosef-logo.png",
    width: 1080,
    height: 1080,
    alt: "Al-Yosef Global",
  },
});

export default function AlyosefLinksPage() {
  return (
    <LinkInBioChrome background={linkInBioBackground("alyosef")}>
      <LinkInBio
        theme="alyosef"
        logo={{ src: "/brand/alyosef-logo.png", alt: "Al-Yosef Global" }}
        title="Al-Yosef Global"
        subtitle="יבוא, הפצה ופיתוח מותגים · משקאות ומזון לעסקים"
        subtitleAr="استيراد، توزيع وتطوير علامات تجارية · مشروبات وأغذية للمصالح"
        buttons={linkInBioButtons("שלום, אני מעוניין בהזמנה סיטונאית")}
        socials={CONTACT.social.alyosef}
        otherBrand={{
          href: "/vevia",
          label: "המותג שלנו: VEVIA",
          ariaLabel: "המותג שלנו: VEVIA",
        }}
      />
    </LinkInBioChrome>
  );
}
