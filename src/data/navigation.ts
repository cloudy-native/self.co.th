export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  translationKey: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    translationKey: "nav.home"
  },
  {
    label: "Products",
    href: "/products",
    translationKey: "nav.products"
  },
  {
    label: "About Us",
    href: "/about",
    translationKey: "nav.about"
  },
  {
    label: "How to Use",
    href: "/how-to-use-2",
    translationKey: "nav.howToUse"
  },
  {
    label: "Contact",
    href: "/contact",
    translationKey: "nav.contact"
  },
];

export const LANGUAGE_OPTIONS = {
  en: 'English',
  th: 'Lorem ipsum'
};