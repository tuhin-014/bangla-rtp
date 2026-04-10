export type ListingType = "for_sale" | "rental" | "job_offered" | "job_wanted" | "service";

export type ListingStatus = "active" | "sold" | "expired";

export interface MarketplaceListing {
  id: string;
  type: ListingType;
  title: string;
  description: string;
  price?: string;
  category: string;
  city: string;
  contact_name: string;
  contact_phone?: string;
  contact_email?: string;
  whatsapp?: string;
  photo_url?: string;
  posted_at: string;
  expires_at: string;
  status: ListingStatus;
  author_id?: string;
}

export const LISTING_TYPE_META: Record<
  ListingType,
  { label: string; emoji: string; color: string; bg: string; border: string }
> = {
  for_sale:    { label: "For Sale",        emoji: "💰", color: "text-amber-700 dark:text-amber-400",  bg: "bg-amber-50 dark:bg-amber-950/40",  border: "border-amber-200 dark:border-amber-900" },
  rental:      { label: "Rental",          emoji: "🏠", color: "text-blue-700 dark:text-blue-400",    bg: "bg-blue-50 dark:bg-blue-950/40",    border: "border-blue-200 dark:border-blue-900" },
  job_offered: { label: "Job Available",   emoji: "💼", color: "text-green-700 dark:text-green-400",  bg: "bg-green-50 dark:bg-green-950/40",  border: "border-green-200 dark:border-green-900" },
  job_wanted:  { label: "Looking for Work",emoji: "🔍", color: "text-purple-700 dark:text-purple-400",bg: "bg-purple-50 dark:bg-purple-950/40",border: "border-purple-200 dark:border-purple-900" },
  service:     { label: "Service",         emoji: "🛠️", color: "text-teal-700 dark:text-teal-400",    bg: "bg-teal-50 dark:bg-teal-950/40",    border: "border-teal-200 dark:border-teal-900" },
};

export const FOR_SALE_CATEGORIES = ["Furniture", "Electronics", "Baby & Kids", "Clothing", "Cars & Vehicles", "Kitchen", "Books", "Other"];
export const RENTAL_CATEGORIES   = ["Apartment", "Room / Roommate", "Sublet", "House", "Item Rental"];
export const JOB_CATEGORIES      = ["Tech / IT", "Restaurant / Food", "Healthcare", "Retail", "Driving", "Other"];
export const SERVICE_CATEGORIES  = ["Tutoring", "Moving Help", "Babysitting / Childcare", "Henna / Beauty", "Cooking", "Handyman", "Other"];

export const LISTING_SUBCATEGORIES: Record<ListingType, string[]> = {
  for_sale:    FOR_SALE_CATEGORIES,
  rental:      RENTAL_CATEGORIES,
  job_offered: JOB_CATEGORIES,
  job_wanted:  JOB_CATEGORIES,
  service:     SERVICE_CATEGORIES,
};

const now = new Date();
function daysAgo(n: number) {
  return new Date(now.getTime() - n * 86400000).toISOString();
}
function daysFromNow(n: number) {
  return new Date(now.getTime() + n * 86400000).toISOString();
}

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: "ml-001",
    type: "for_sale",
    title: "Moving out — leather sofa, great condition, $150",
    description:
      "Dark brown faux-leather 3-seat sofa, about 3 years old. No tears or stains. Moving to a smaller apartment and can't take it with me. Pickup from Raleigh 27606. Cash only. Available this weekend.",
    price: "$150",
    category: "Furniture",
    city: "Raleigh",
    contact_name: "Karim B.",
    contact_phone: "(919) 555-0181",
    whatsapp: "(919) 555-0181",
    posted_at: daysAgo(1),
    expires_at: daysFromNow(29),
    status: "active",
  },
  {
    id: "ml-002",
    type: "rental",
    title: "2BR apartment sublease June–August, $1,200/mo",
    description:
      "Looking for someone to take over my 2BR/1BA lease for the summer (June 1 – Aug 31). Fully furnished option available. Walking distance to Crossroads Mall. Pets okay with deposit. Bangladeshi-friendly building.",
    price: "$1,200/month",
    category: "Sublet",
    city: "Cary",
    contact_name: "Farida H.",
    contact_phone: "(984) 555-0247",
    contact_email: "farida.h@email.com",
    whatsapp: "(984) 555-0247",
    posted_at: daysAgo(2),
    expires_at: daysFromNow(28),
    status: "active",
  },
  {
    id: "ml-003",
    type: "job_offered",
    title: "Hiring kitchen staff — halal restaurant, Morrisville",
    description:
      "We are a busy halal restaurant in Morrisville looking for a full-time kitchen helper. Must be available weekends. Halal work environment. Bengali and Urdu speakers welcome. Experience preferred but will train the right person. Competitive pay + meal.",
    price: "$15–18/hr",
    category: "Restaurant / Food",
    city: "Morrisville",
    contact_name: "Restaurant Manager",
    contact_phone: "(919) 555-0312",
    whatsapp: "(919) 555-0312",
    posted_at: daysAgo(3),
    expires_at: daysFromNow(27),
    status: "active",
  },
  {
    id: "ml-004",
    type: "job_wanted",
    title: "Software engineer seeking opportunities — H-1B transfer ready",
    description:
      "Experienced software engineer (7 years, backend + cloud) currently on H-1B at an RTP company. Looking for new opportunities — H-1B transfer only, no cap needed. Skills: Java, Python, AWS, Kubernetes. LinkedIn available on request. Bengali/English speaker.",
    category: "Tech / IT",
    city: "Raleigh",
    contact_name: "Tanvir A.",
    contact_email: "tanvir.dev@email.com",
    posted_at: daysAgo(4),
    expires_at: daysFromNow(26),
    status: "active",
  },
  {
    id: "ml-005",
    type: "service",
    title: "Weekend moving help — $30/hr, own truck",
    description:
      "Need help moving? I have a pickup truck and can help with local moves in the Triangle on weekends. Strong, reliable, careful with your items. Bengali speaker. Rate is $30/hr, 3-hour minimum. Book at least a week in advance.",
    price: "$30/hr",
    category: "Moving Help",
    city: "Durham",
    contact_name: "Rakib M.",
    contact_phone: "(919) 555-0429",
    whatsapp: "(919) 555-0429",
    posted_at: daysAgo(2),
    expires_at: daysFromNow(28),
    status: "active",
  },
  {
    id: "ml-006",
    type: "for_sale",
    title: "FREE — baby clothes 0–12 months, boys",
    description:
      "Giving away a full bag of baby boy clothes, sizes 0–12 months. Mix of Carter's, Old Navy, and generic brands. Washed and in good condition. No torn items. You pick up from Cary 27511. First come, first served — text me.",
    price: "Free",
    category: "Baby & Kids",
    city: "Cary",
    contact_name: "Nadia R.",
    contact_phone: "(984) 555-0516",
    whatsapp: "(984) 555-0516",
    posted_at: daysAgo(1),
    expires_at: daysFromNow(29),
    status: "active",
  },
  {
    id: "ml-007",
    type: "for_sale",
    title: "Queen mattress, like new — $200 OBO",
    description:
      "12-inch memory foam queen mattress, used for only 6 months. Moving abroad. Originally $450 from Costco. No stains, comes with a mattress cover. Pickup from north Raleigh. Price is firm at $200 but will consider $180 if you can pick up this weekend.",
    price: "$200",
    category: "Furniture",
    city: "Raleigh",
    contact_name: "Shafiq K.",
    contact_phone: "(919) 555-0637",
    posted_at: daysAgo(5),
    expires_at: daysFromNow(25),
    status: "active",
  },
  {
    id: "ml-008",
    type: "rental",
    title: "Roommate wanted — 2BR Cary apartment, $650/room",
    description:
      "Looking for a clean, responsible Muslim male roommate for a 2BR/2BA apartment in Cary near Cary Towne Center. Rent $650 + utilities split. No smoking, no pets. Halal household. Bengali/Urdu speaker preferred but not required. Available from May 1.",
    price: "$650/month",
    category: "Room / Roommate",
    city: "Cary",
    contact_name: "Imran S.",
    contact_phone: "(919) 555-0723",
    whatsapp: "(919) 555-0723",
    posted_at: daysAgo(6),
    expires_at: daysFromNow(24),
    status: "active",
  },
  {
    id: "ml-009",
    type: "service",
    title: "Math tutor — high school & SAT prep, Bengali speaker",
    description:
      "UNC-Chapel Hill grad student offering math tutoring for grades 9–12 and SAT/ACT prep. 5+ years experience, can teach in Bengali or English. $25/hr online, $35/hr in-person in Chapel Hill/Carrboro. Free 30-min trial session. References available.",
    price: "$25–35/hr",
    category: "Tutoring",
    city: "Chapel Hill",
    contact_name: "Tasnim U.",
    contact_phone: "(984) 555-0814",
    contact_email: "tasnim.tutors@email.com",
    posted_at: daysAgo(7),
    expires_at: daysFromNow(23),
    status: "active",
  },
  {
    id: "ml-010",
    type: "job_offered",
    title: "Part-time barista / counter staff — halal cafe",
    description:
      "Small halal cafe in Morrisville hiring part-time staff for evenings and weekends. Responsibilities: serve customers, operate coffee machine, keep café clean. Training provided. Bengali and English required. $14/hr starting. Apply in person or WhatsApp.",
    price: "$14/hr",
    category: "Restaurant / Food",
    city: "Morrisville",
    contact_name: "Café Owner",
    contact_phone: "(919) 555-0918",
    whatsapp: "(919) 555-0918",
    posted_at: daysAgo(3),
    expires_at: daysFromNow(27),
    status: "active",
  },
  {
    id: "ml-011",
    type: "service",
    title: "Bengali cooking classes — authentic deshi recipes, weekends",
    description:
      "Learn to cook authentic Bangladeshi dishes from scratch. Classes held at my home kitchen in Cary on Saturdays. Menu rotates: hilsa curry, kacchi biryani, shorshe ilish, mishti doi, pithas. $40/session. Small groups (max 4 students). Taught in Bengali and English.",
    price: "$40/session",
    category: "Cooking",
    city: "Cary",
    contact_name: "Amena B.",
    contact_phone: "(919) 555-1023",
    whatsapp: "(919) 555-1023",
    posted_at: daysAgo(8),
    expires_at: daysFromNow(22),
    status: "active",
  },
  {
    id: "ml-012",
    type: "for_sale",
    title: "Women's salwar kameez lot — 10 pieces, $80",
    description:
      "Selling a lot of 10 women's salwar kameez sets. Mix of cotton and georgette fabric. Sizes: 3 small, 4 medium, 3 large. Worn 1–2 times each, excellent condition. Mostly Eid and special occasion pieces. $80 for the full lot, no separating. Pickup in Durham.",
    price: "$80",
    category: "Clothing",
    city: "Durham",
    contact_name: "Laila F.",
    contact_phone: "(984) 555-1142",
    whatsapp: "(984) 555-1142",
    posted_at: daysAgo(2),
    expires_at: daysFromNow(28),
    status: "active",
  },
  {
    id: "ml-013",
    type: "service",
    title: "Professional henna artist — weddings, Eid & events",
    description:
      "Experienced henna artist specializing in South Asian and Arabic bridal designs. Available for weddings, holud, Eid gatherings, and corporate events across the Triangle. Bridal packages start at $150. Day-of touch-up available. Portfolio on WhatsApp request.",
    price: "From $50",
    category: "Henna / Beauty",
    city: "Raleigh",
    contact_name: "Roksana M.",
    contact_phone: "(919) 555-1267",
    whatsapp: "(919) 555-1267",
    posted_at: daysAgo(4),
    expires_at: daysFromNow(26),
    status: "active",
  },
  {
    id: "ml-014",
    type: "for_sale",
    title: "2021 Honda Civic — clean, halal title transfer",
    description:
      "Selling my 2021 Honda Civic EX, gray, 38,000 miles. Clean title, no accidents, all service records. Bluetooth, backup camera, sunroof. Happy to do a halal (interest-free) arrangement if both parties agree. Serious buyers only — test drive in Raleigh.",
    price: "$18,500",
    category: "Cars & Vehicles",
    city: "Raleigh",
    contact_name: "Jamal H.",
    contact_phone: "(919) 555-1389",
    whatsapp: "(919) 555-1389",
    posted_at: daysAgo(1),
    expires_at: daysFromNow(29),
    status: "active",
  },
  {
    id: "ml-015",
    type: "rental",
    title: "Furnished room in Durham — $700/mo, near Duke",
    description:
      "Private furnished bedroom available in a 3BR home near Duke University. Shared kitchen, living room, and 2 bathrooms. Utilities included. Quiet, clean household. No smoking, no alcohol. Month-to-month or 6-month lease. Graduate students and professionals preferred.",
    price: "$700/month",
    category: "Room / Roommate",
    city: "Durham",
    contact_name: "Nasrin T.",
    contact_phone: "(984) 555-1451",
    contact_email: "nasrin.t@email.com",
    posted_at: daysAgo(9),
    expires_at: daysFromNow(21),
    status: "active",
  },
];
