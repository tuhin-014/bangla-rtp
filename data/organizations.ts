export type OrgType = "cultural" | "religious" | "student" | "professional" | "youth" | "sports";

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
    id: "probaho",
    name: "Probaho",
    fullName: "Probaho — Triangle NC",
    description:
      "A Bengali cultural organization in the Research Triangle area. 'Probaho' (প্রবাহ) means 'flow' or 'current' in Bengali — reflecting the organization's mission of keeping Bengali culture alive in the diaspora. Active through community events and gatherings.",
    type: "cultural",
    city: "Research Triangle",
  },
  {
    id: "trivuj",
    name: "Trivuj",
    fullName: "Trivuj — Triangle Music Project",
    description:
      "Nonprofit dedicated to promoting peace and love through Bangla music in the Research Triangle. Hosts Rabindra Sangeet, Nazrul Geeti, folk, and modern Bangla music performances and cultural events for the Bengali community in RTP.",
    type: "cultural",
    facebook: "https://www.facebook.com/trivujtmp/",
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
    id: "rbt",
    name: "Royal Bengal Tiger",
    fullName: "Royal Bengal Tiger Cricket Club",
    description:
      "Bangladeshi cricket club based in the Research Triangle area. Participates in local leagues and community tournaments. Open to new players. Contact via community networks for practice schedules and match info.",
    type: "sports",
    facebook: "https://www.facebook.com/share/1Hgcfvj2m1/?mibextid=wwXIfr",
    city: "Research Triangle",
  },
  {
    id: "rtp-tigers",
    name: "RTP Tigers",
    fullName: "RTP Tigers Cricket Club",
    description:
      "Community cricket team for Bangladeshi players in the Research Triangle Park area. Regular practice sessions and weekend matches. No public website; active through community networks and local Bangladeshi groups.",
    type: "sports",
    city: "Research Triangle",
  },
  {
    id: "baian",
    name: "BAIAN",
    fullName: "Bangladeshi American Islamic Association North Carolina",
    description:
      "Bangladeshi Muslim community organization active in the Research Triangle area. Hosts family nights, Bangladeshi food festivals, and community gatherings — events have been held at Parkwood Masjid in Durham. No public website; active through community networks.",
    type: "religious",
    city: "Durham",
  },
];

export const ORG_TYPE_META: Record<OrgType, { label: string; emoji: string; color: string; bg: string }> = {
  cultural:     { label: "Cultural",     emoji: "🎨", color: "text-amber-700 dark:text-amber-400",  bg: "bg-amber-50 dark:bg-amber-950/40" },
  religious:    { label: "Religious",    emoji: "🕌", color: "text-teal-700 dark:text-teal-400",    bg: "bg-teal-50 dark:bg-teal-950/40" },
  student:      { label: "Student",      emoji: "🎓", color: "text-blue-700 dark:text-blue-400",    bg: "bg-blue-50 dark:bg-blue-950/40" },
  professional: { label: "Professional", emoji: "💼", color: "text-purple-700 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/40" },
  youth:        { label: "Youth",        emoji: "⭐", color: "text-green-700 dark:text-green-400",  bg: "bg-green-50 dark:bg-green-950/40" },
  sports:       { label: "Sports",       emoji: "🏏", color: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/40" },
};
