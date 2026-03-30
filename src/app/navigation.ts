export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "journal", label: "Journal" },
  { id: "reels", label: "Reels" },
  { id: "about", label: "About" },
  { id: "collaborate", label: "Stories" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];

export const SECTION_IDS: SectionId[] = NAV_ITEMS.map((item) => item.id);

export function scrollToSection(section: SectionId) {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
}
