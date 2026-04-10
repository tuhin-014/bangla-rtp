export type PostCategory =
  | "needs"
  | "offers"
  | "help"
  | "stories"
  | "ride_share"
  | "lost_found";

export interface SamplePost {
  id: string;
  author_id: string;
  category: PostCategory;
  title: string;
  body: string;
  contact_info?: string;
  photo_url?: string;
  city?: string;
  flagged: boolean;
  flag_count: number;
  created_at: string;
  updated_at: string;
  // Joined
  author_display_name: string;
  author_city?: string;
  comment_count: number;
}

export const CATEGORY_META: Record<
  PostCategory,
  { label: string; emoji: string; color: string; bg: string }
> = {
  needs:      { label: "Needs",        emoji: "🙋", color: "text-blue-700 dark:text-blue-400",   bg: "bg-blue-50 dark:bg-blue-950/40" },
  offers:     { label: "Offers",       emoji: "🎁", color: "text-green-700 dark:text-green-400", bg: "bg-green-50 dark:bg-green-950/40" },
  help:       { label: "Help",         emoji: "💙", color: "text-purple-700 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/40" },
  stories:    { label: "Stories",      emoji: "📖", color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/40" },
  ride_share: { label: "Ride Share",   emoji: "🚗", color: "text-teal-700 dark:text-teal-400",   bg: "bg-teal-50 dark:bg-teal-950/40" },
  lost_found: { label: "Lost & Found", emoji: "🔍", color: "text-red-700 dark:text-red-400",     bg: "bg-red-50 dark:bg-red-950/40" },
};

export const samplePosts: SamplePost[] = [
  {
    id: "post-1",
    author_id: "user-1",
    category: "needs",
    title: "Looking for a Bangla-speaking pediatrician near Cary",
    body: "Assalamu Alaikum everyone! We just moved to Morrisville last month with our 2-year-old daughter. We're really hoping to find a pediatrician who speaks Bengali — it would make so much easier when explaining symptoms. Our daughter is on WakeMed's insurance. Has anyone seen a Bangla-speaking pediatrician in the Cary/Morrisville area? JazakAllah khair.",
    city: "Morrisville",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Nusrat A.",
    author_city: "Morrisville",
    comment_count: 4,
  },
  {
    id: "post-2",
    author_id: "user-2",
    category: "offers",
    title: "Free: Moving boxes and packing materials — Cary",
    body: "Salaam! We just finished unpacking after our move from Raleigh and have about 30 large and medium moving boxes, a big roll of bubble wrap, and some packing paper. All free — just come pick them up. First come first served. Located near Kildaire Farm Rd and Cary Parkway. DM or call to coordinate. Please take them soon — we need the space!",
    contact_info: "WhatsApp: (919) 555-2001",
    city: "Cary",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Kamal H.",
    author_city: "Cary",
    comment_count: 7,
  },
  {
    id: "post-3",
    author_id: "user-3",
    category: "ride_share",
    title: "Ride share to NYC for Eid ul-Adha weekend — June 5-8",
    body: "Assalamu Alaikum! I'm driving to New York (Jackson Heights, Queens area) for Eid weekend — June 5 (Thursday evening) and returning June 8 (Sunday evening). Have 3 seats available. Would prefer Bangladeshi passengers for company! Splitting gas costs. Car is a 2022 Toyota Highlander, lots of trunk space. Please message me if interested — need to confirm by May 28.",
    contact_info: "Call/WhatsApp: (919) 555-3001",
    city: "Raleigh",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Rafiq U.",
    author_city: "Raleigh",
    comment_count: 12,
  },
  {
    id: "post-4",
    author_id: "user-4",
    category: "lost_found",
    title: "Lost: Brown leather wallet near Islamic Association of Raleigh",
    body: "Assalamu Alaikum brothers and sisters. I lost my brown leather wallet last Friday (April 12) near the Islamic Association of Raleigh — either in the parking lot or inside near the prayer hall. It contains my NC driver's license, a debit card, and some cash. If anyone found it, please contact me. JazakAllah khair. May Allah reward you.",
    contact_info: "Email: lost.wallet.rtp@gmail.com or call (919) 555-4001",
    city: "Raleigh",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Farhan S.",
    author_city: "Raleigh",
    comment_count: 3,
  },
  {
    id: "post-5",
    author_id: "user-5",
    category: "stories",
    title: "Our first Pohela Boishakh in North Carolina — memories ❤️",
    body: "Last year was our first Pohela Boishakh away from Bangladesh. My wife and I were both feeling a bit homesick leading up to it — it's always been such a special celebration back home. But the BANC community here in RTP organized such a beautiful program at Marbles Kids Museum. There was music, dance, food — ilish bhaja, panta bhat, the works. My daughter, who is only 4, wore a white and red sari for the first time. Watching her run around with other Bangladeshi kids in the park, I felt so grateful for this community. It doesn't replace home, but it reminds us that home can be rebuilt anywhere. Looking forward to this year's celebration. See you all there!",
    city: "Raleigh",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Imran & Dilruba",
    author_city: "Cary",
    comment_count: 18,
  },
  {
    id: "post-6",
    author_id: "user-6",
    category: "help",
    title: "Tips for new H-1B arrivals in Raleigh — what I wish I knew",
    body: "Salaam everyone. I've been in RTP for 6 years now, and I remember how overwhelming the first few months were. Here are the things I wish someone had told me:\n\n1. **Get a phone SIM first** — T-Mobile's $25/month prepaid plan works great, no SSN needed.\n2. **Don't sign a long-term lease immediately** — try a month-to-month extended stay while you get the feel for each area.\n3. **Morrisville is expensive but convenient** — great schools, close to RTP. Apex is cheaper with equally good schools.\n4. **SSN takes 2-4 weeks** — apply after 10 business days from entry. The Durham SSA office is less crowded than Raleigh.\n5. **Join the ICM community** — the Friday khutbah is great, and you'll meet people who've been here for years and are happy to help.\n6. **Set up Wise early** for sending money back home — much better rates than Western Union.\n\nAny other tips from the community? Add in the comments!",
    city: "Morrisville",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Shafiq R.",
    author_city: "Morrisville",
    comment_count: 23,
  },
  {
    id: "post-7",
    author_id: "user-7",
    category: "needs",
    title: "Anyone know a good Bangladeshi tailoring / alterations service nearby?",
    body: "Need to get a few salwar kameez altered — some are slightly too long and one needs the sleeves shortened. Back home I'd just go to the local tailor but I haven't been able to find anyone here who does this kind of work. Anyone know a desi tailor in the Cary or Morrisville area? Not looking for fancy boutique prices — just basic alterations. Rina's Boutique was recommended but is there anyone else?",
    city: "Cary",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Tahmina K.",
    author_city: "Cary",
    comment_count: 6,
  },
  {
    id: "post-8",
    author_id: "user-8",
    category: "offers",
    title: "Offering free Bangla language classes for kids on weekends — Morrisville",
    body: "Assalamu Alaikum! I'm a retired school teacher from Dhaka (taught Bangla literature for 20 years) and I'm now settled in Morrisville with my son's family. I've noticed many Bangladeshi kids here are losing touch with their mother tongue. I'd love to offer free Bangla reading and writing classes for children aged 5-12 on Saturday mornings at ICM (subject to hall availability). No charge — this is my small contribution to the community. Parents would need to arrange carpools. Please reply if interested so I can gauge numbers. Classes would be 1 hour, 9:30-10:30 AM.",
    city: "Morrisville",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Akhtar Sir",
    author_city: "Morrisville",
    comment_count: 31,
  },
  {
    id: "post-9",
    author_id: "user-9",
    category: "ride_share",
    title: "Weekly ride share: Morrisville → RTP (Cisco campus) weekdays",
    body: "Looking for 1-2 people to share rides to the Cisco RTP campus from Morrisville. I live in the Cambridge neighborhood and drive to Cisco's main campus 4-5 days/week. Happy to alternate driving. Departure ~8:30 AM, return ~5:30-6 PM. This would cut commute costs significantly and reduce stress on I-40. DM me if interested.",
    contact_info: "LinkedIn: linkedin.com/in/arif-rtp",
    city: "Morrisville",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Arif N.",
    author_city: "Morrisville",
    comment_count: 5,
  },
  {
    id: "post-10",
    author_id: "user-10",
    category: "lost_found",
    title: "Found: Set of keys with a green keychain — Patel Brothers parking lot",
    body: "Found a set of car and house keys with a small green/teal Bangladesh flag keychain in the Patel Brothers (Cary) parking lot this afternoon (April 10, around 3 PM). Handed them to the customer service desk inside — ask for the manager and describe your keychain/keys to claim. May Allah make it easy.",
    city: "Cary",
    flagged: false,
    flag_count: 0,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    author_display_name: "Sabina M.",
    author_city: "Cary",
    comment_count: 2,
  },
];
