export type OrgType = "cultural" | "religious" | "student" | "professional" | "youth";

export interface Organization {
  id: string;
  name: string;
  fullName?: string;
  description: string;
  type: OrgType;
  website?: string;
  facebook?: string;
  email?: string;
  phone?: string;
  city?: string;
  foundedYear?: number;
}

export const organizations: Organization[] = [
  {
    id: "tbsnc",
    name: "TBSNC",
    fullName: "Triangle Bangladeshi Society of North Carolina",
    description:
      "The primary cultural organization for Bangladeshis in the Research Triangle. Organizes Eid celebrations, Pohela Boishakh, Bijoy Dibos, and year-round community programs. One of the oldest and most active Bangladeshi organizations in NC.",
    type: "cultural",
    website: "https://www.tbsnc.org",
    city: "Raleigh",
  },
  {
    id: "banc",
    name: "BANC",
    fullName: "Bangladeshi Association of North Carolina",
    description:
      "Community welfare and networking organization supporting Bangladeshis across North Carolina. Works on community development, social services, and cultural preservation.",
    type: "cultural",
    website: "https://www.bancnc.org",
    city: "Raleigh",
  },
  {
    id: "bsa-ncsu",
    name: "BSA @ NC State",
    fullName: "Bangladeshi Students Association at NC State University",
    description:
      "Student organization at NC State University supporting Bangladeshi and Bengali-speaking students with social, cultural, and professional programs. Hosts annual iftar dinners, cultural nights, and orientations for new students.",
    type: "student",
    website: "https://orgs.ncsu.edu/bsa",
    city: "Raleigh",
    foundedYear: 2000,
  },
  {
    id: "bpocnc",
    name: "BPOCNC",
    fullName: "Bangladeshi Professionals Organization of Carolinas",
    description:
      "Professional networking organization for Bangladeshi professionals across North and South Carolina. Organizes the annual RTP Bangla Cricket Tournament, professional networking events, and career development programs.",
    type: "professional",
    city: "Research Triangle",
  },
  {
    id: "muna-nc",
    name: "MUNA",
    fullName: "Muslim Ummah of North America — NC",
    description:
      "North Carolina arm of MUNA (Muslim Ummah of North America), a national Bangladeshi Muslim 501(c)(3) nonprofit founded in 1990. Focused on Islamic education, youth programs, dawah, family services, and community relief. Active in 22 states.",
    type: "religious",
    website: "https://muslimummah.org",
    phone: "(301) 252-7553",
    city: "National (NC members)",
    foundedYear: 1990,
  },
  {
    id: "baian",
    name: "Baian",
    fullName: "Baian — Triangle NC",
    description:
      "A community organization serving Bangladeshis in the Research Triangle area. Primarily active through local community networks. Contact via community members at local masjids or TBSNC events for more information.",
    type: "religious",
    city: "Research Triangle",
  },
  {
    id: "probaho",
    name: "Probaho",
    fullName: "Probaho — Triangle NC",
    description:
      "A Bengali cultural organization in the Research Triangle area. 'Probaho' (প্রবাহ) means 'flow' or 'current' in Bengali — reflecting the organization's mission of keeping Bengali culture alive in the diaspora. Active through community events and gatherings.",
    type: "cultural",
    city: "Research Triangle",
  },
  {
    id: "icar",
    name: "ICAR / ICR",
    fullName: "Islamic Center of Raleigh",
    description:
      "One of the largest Islamic centers in the Triangle. Hosts daily prayers, Jummah, an Islamic school (ICR Academy), youth programs, and community events. A gathering place for Muslims across the greater Raleigh area.",
    type: "religious",
    website: "https://www.icraleigh.com",
    phone: "(919) 834-9572",
    city: "Raleigh",
    foundedYear: 1981,
  },
  {
    id: "icm",
    name: "ICM",
    fullName: "Islamic Center of Morrisville",
    description:
      "Serving the rapidly growing Muslim community in Morrisville and Cary. Large facility with full-time Islamic school, gym, and community hall. Particularly active with the South Asian community in western Wake County.",
    type: "religious",
    website: "https://www.icmorrisville.org",
    phone: "(919) 481-9492",
    city: "Morrisville",
  },
  {
    id: "jiar",
    name: "JIAR",
    fullName: "Jamaat Ibad Ar-Rahman",
    description:
      "The largest Muslim community organization in Durham, chartered in NC in 1981. Operates two masjid facilities including Parkwood Masjid, runs Al-Huda Academy (full-time Islamic elementary school), Al Misbah Quran Academy, and provides community services including funeral and marriage services.",
    type: "religious",
    website: "https://ibadarrahman.org",
    phone: "(919) 237-2968",
    city: "Durham",
    foundedYear: 1981,
  },
];

export const ORG_TYPE_META: Record<OrgType, { label: string; emoji: string; color: string; bg: string }> = {
  cultural:     { label: "Cultural",     emoji: "🎨", color: "text-amber-700 dark:text-amber-400",  bg: "bg-amber-50 dark:bg-amber-950/40" },
  religious:    { label: "Religious",    emoji: "🕌", color: "text-teal-700 dark:text-teal-400",    bg: "bg-teal-50 dark:bg-teal-950/40" },
  student:      { label: "Student",      emoji: "🎓", color: "text-blue-700 dark:text-blue-400",    bg: "bg-blue-50 dark:bg-blue-950/40" },
  professional: { label: "Professional", emoji: "💼", color: "text-purple-700 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/40" },
  youth:        { label: "Youth",        emoji: "⭐", color: "text-green-700 dark:text-green-400",  bg: "bg-green-50 dark:bg-green-950/40" },
};
