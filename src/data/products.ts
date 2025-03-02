import { IconType } from "react-icons";
import { FaLeaf, FaSpa, FaShower, FaMoon } from "react-icons/fa";
import { GiFlowerPot, GiHerbsBundle } from "react-icons/gi";

export interface Product {
  id: string;
  titleKey: string;
  title: string;
  thaiTitle: string;
  description: string;
  thaiDescription: string; 
  price: string;
  image: string;
  tags: string[];
  icon: IconType;
}

// Featured products for homepage
export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "1",
    titleKey: "product.facialSerum",
    title: "Facial Serum",
    thaiTitle: "Lorem ipsum",
    description: "A special formula enriched with Centella Asiatica and Aloe Vera extracts that helps rejuvenate skin and reduce fine lines.",
    thaiDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum magna in tortor finibus, sit amet facilisis metus dapibus.",
    price: "$34.99",
    image: "accent.emerald",
    tags: ["Facial Care", "Anti-aging"],
    icon: FaLeaf
  },
  {
    id: "2",
    titleKey: "product.facialMask",
    title: "Facial Mask",
    thaiTitle: "Lorem ipsum",
    description: "A mask that restores facial moisture with extracts from flowers and Thai herbs, perfect for dry and combination skin.",
    thaiDescription: "Mauris at faucibus ligula. Praesent sit amet est ut sem pharetra commodo at sed ipsum. Vestibulum ante ipsum primis in faucibus.",
    price: "$24.99",
    image: "accent.sapphire",
    tags: ["Facial Care", "Hydrating"],
    icon: GiFlowerPot
  },
  {
    id: "3", 
    titleKey: "product.bodyCream",
    title: "Body Cream",
    thaiTitle: "Lorem ipsum",
    description: "A body cream that softens and moisturizes skin with fragrant natural herbs, transforming dry skin into smooth, supple skin.",
    thaiDescription: "Fusce varius justo at nulla tempus molestie. Nam vel odio ac mauris egestas volutpat. Etiam venenatis, risus ac finibus faucibus.",
    price: "$29.99",
    image: "accent.teal",
    tags: ["Body Care", "Moisturizing"],
    icon: GiHerbsBundle
  }
];

// All products for product page
export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  {
    id: "4",
    titleKey: "product.handBalm",
    title: "Jasmine Hand Balm",
    thaiTitle: "Lorem ipsum",
    description: "Thai jasmine scented hand balm for silky smooth hands.",
    thaiDescription: "Aenean sagittis erat eget dui posuere, vel lacinia tellus condimentum.",
    price: "$18.99",
    image: "accent.amber",
    tags: ["Hand Care", "Scented"],
    icon: FaMoon
  },
  {
    id: "5",
    titleKey: "product.bodyScrub",
    title: "Lemongrass Body Scrub",
    thaiTitle: "Lorem ipsum",
    description: "Natural exfoliating scrub with lemongrass and coconut.",
    thaiDescription: "Integer vitae vestibulum sem, id hendrerit mauris.",
    price: "$22.99",
    image: "brand.400",
    tags: ["Body Care", "Exfoliating"],
    icon: FaShower
  },
  {
    id: "6",
    titleKey: "product.hairOil",
    title: "Coconut Hair Oil",
    thaiTitle: "Lorem ipsum",
    description: "Nourishing hair oil with organic coconut and herbs.",
    thaiDescription: "Etiam convallis urna sit amet finibus commodo.",
    price: "$26.99",
    image: "accent.ruby",
    tags: ["Hair Care", "Nourishing"],
    icon: FaSpa
  }
];

// Product application guides for How To Use page
export interface ProductGuide {
  title: string;
  titleKey: string;
  description: string;
  thaiDescription: string;
  icon: IconType;
  steps: string[];
  thaiSteps: string[];
}

export const PRODUCT_GUIDES: ProductGuide[] = [
  {
    title: "Facial Serum",
    titleKey: "product.facialSerum",
    description: "Our hydrating serum with Centella Asiatica extract rejuvenates and reduces fine lines.",
    thaiDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: FaLeaf,
    steps: [
      "Cleanse face thoroughly and pat slightly damp",
      "Apply 3-4 drops to fingertips",
      "Gently press and pat onto face and neck",
      "Allow to absorb before applying moisturizer",
      "Use morning and evening for best results"
    ],
    thaiSteps: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam"
    ]
  },
  {
    title: "Face Mask",
    titleKey: "product.facialMask",
    description: "A nourishing mask that restores moisture with natural Thai herbs.",
    thaiDescription: "Vestibulum sit amet nisl facilisis, luctus massa in, bibendum turpis.",
    icon: FaSpa,
    steps: [
      "Apply to clean face, avoiding the eye area",
      "Leave on for 15-20 minutes",
      "Rinse thoroughly with lukewarm water",
      "Follow with serum and moisturizer",
      "Use 1-2 times weekly"
    ],
    thaiSteps: [
      "Donec at convallis lectus",
      "Morbi commodo, felis sed commodo",
      "Cras sagittis metus at sapien",
      "Etiam vel elit ut enim lobortis",
      "Praesent eget aliquam lectus"
    ]
  },
  {
    title: "Body Cream",
    titleKey: "product.bodyCream",
    description: "Rich body cream that hydrates and nourishes with natural botanicals.",
    thaiDescription: "Donec bibendum urna in sem dignissim, vel tempor lectus cursus.",
    icon: FaMoon,
    steps: [
      "Apply to clean, dry skin after bathing",
      "Use circular motions to massage into skin",
      "Focus on dry areas like elbows and knees",
      "Allow to absorb before dressing",
      "Use daily for continuous hydration"
    ],
    thaiSteps: [
      "Fusce at diam at odio dictum",
      "Nulla facilisi. In at lorem neque",
      "Phasellus eget tincidunt risus",
      "Aenean malesuada fermentum",
      "Vivamus vel sapien et ligula"
    ]
  },
  {
    title: "Body Scrub",
    titleKey: "product.bodyScrub",
    description: "Natural exfoliating scrub with lemongrass to reveal smoother skin.",
    thaiDescription: "Curabitur malesuada magna quis ex rhoncus, in semper magna vestibulum.",
    icon: FaShower,
    steps: [
      "Use in the shower on damp skin",
      "Apply in gentle circular motions",
      "Massage for 2-3 minutes",
      "Rinse thoroughly with warm water",
      "Follow with body cream",
      "Use 1-2 times weekly"
    ],
    thaiSteps: [
      "Quisque sit amet mauris tempus",
      "Aliquam molestie ipsum id ligula",
      "Nullam a est id dolor vestibulum",
      "Donec non diam in magna",
      "Sed tempus ultrices sapien",
      "Mauris vel eros a massa"
    ]
  }
];