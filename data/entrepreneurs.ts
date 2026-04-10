// Sample seed data — replace with real community listings

export type EntrepreneurCategory =
  | "Catering"
  | "Clothing & Fashion"
  | "Tutoring"
  | "Beauty"
  | "Events"
  | "Photography"
  | "Handmade Crafts"
  | "Baking"
  | "Other";

export interface Entrepreneur {
  id: string;
  business_name: string;
  owner_name: string;
  category: EntrepreneurCategory;
  short_description: string;
  long_description?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  service_area: string[];
  years_in_business?: number;
  price_range?: string;
  photo_url?: string;
  approved: boolean;
}

export const entrepreneurs: Entrepreneur[] = [
  {
    id: "fatimas-home-kitchen",
    business_name: "Fatima's Home Kitchen",
    owner_name: "Fatima Begum",
    category: "Catering",
    short_description:
      "Authentic Bangladeshi home cooking for your events. Specialising in biryani, rezala, polao, and traditional wedding spreads.",
    long_description:
      "Fatima has been cooking for the RTP community for 5 years. From intimate dinner parties to large Eid gatherings of 100+, she offers fresh, halal, home-style Bangladeshi food made with love. Custom menus available. Order at least 3 days in advance.",
    phone: "(919) 555-1100",
    whatsapp: "(919) 555-1100",
    email: "fatima.kitchen.rtp@gmail.com",
    instagram: "@fatimashomedishes",
    service_area: ["Cary", "Morrisville", "Raleigh"],
    years_in_business: 5,
    price_range: "$$",
    approved: true,
  },
  {
    id: "rinas-boutique",
    business_name: "Rina's Boutique",
    owner_name: "Rina Chowdhury",
    category: "Clothing & Fashion",
    short_description:
      "Traditional Bangladeshi sarees, salwar kameez, lehengas, and kids' eid outfits. Custom stitching and alterations available.",
    long_description:
      "Rina imports directly from Dhaka — Jamdani sarees, Muslin, Dhakai Katan, and casual salwar sets. She also does custom tailoring and can stitch garments from your own fabric. Perfect for Eid, Pohela Boishakh, weddings, and everyday wear.",
    phone: "(919) 555-1200",
    whatsapp: "(919) 555-1200",
    instagram: "@rinasboutique_rtp",
    service_area: ["Raleigh", "Durham", "Cary"],
    years_in_business: 3,
    approved: true,
  },
  {
    id: "dr-ahmed-tutoring",
    business_name: "Ahmed's Academic Tutoring",
    owner_name: "Dr. Nasir Ahmed",
    category: "Tutoring",
    short_description:
      "Math, Physics, and SAT/ACT prep by a PhD-holding engineer. Grades 6–12 and college-level courses. Bengali and English instruction.",
    long_description:
      "Dr. Nasir holds a PhD in Electrical Engineering from NC State and has been tutoring students in the RTP area for 4 years. Specialises in Algebra, Pre-Calculus, Calculus, Physics, and standardised test prep. Both in-person (Durham/Cary) and online sessions available. First session free.",
    phone: "(919) 555-1300",
    email: "nasir.tutoring@gmail.com",
    whatsapp: "(919) 555-1300",
    service_area: ["Durham", "Cary", "Morrisville", "Chapel Hill"],
    years_in_business: 4,
    price_range: "$",
    approved: true,
  },
  {
    id: "henna-by-sabrina",
    business_name: "Henna by Sabrina",
    owner_name: "Sabrina Islam",
    category: "Beauty",
    short_description:
      "Professional mehndi / henna artistry for weddings, Eid, baby showers, and parties. Bridal packages available.",
    long_description:
      "Sabrina has been doing henna for over 8 years, trained in traditional Bangladeshi, Arabic, and Indian styles. She's done mehndi for hundreds of brides across the Triangle. She travels to your home or event venue. Bridal packages include hands, arms, and feet. Book 2+ weeks ahead for weddings.",
    phone: "(919) 555-1400",
    whatsapp: "(919) 555-1400",
    instagram: "@henna_by_sabrina_rtp",
    service_area: ["Morrisville", "Cary", "Raleigh", "Durham"],
    years_in_business: 8,
    price_range: "$$",
    approved: true,
  },
  {
    id: "sweet-dhaka-bakery",
    business_name: "Sweet Dhaka Bakery",
    owner_name: "Nusrat Jahan",
    category: "Baking",
    short_description:
      "Custom cakes, cupcakes, and traditional Bengali sweets. Eid cakes, birthday cakes, and mishti doi a specialty.",
    long_description:
      "Nusrat bakes out of her Cary home kitchen and has been supplying the RTP community with delicious cakes and sweets for 2 years. She does custom decorated cakes (fondant and buttercream), cupcake towers, and traditional Bangladeshi sweets like mishti doi, sandesh, and rasgolla. Halal ingredients only. Orders require 5 days' notice.",
    whatsapp: "(919) 555-1500",
    instagram: "@sweetdhaka_bakery",
    email: "sweetdhaka.bakery@gmail.com",
    service_area: ["Cary", "Morrisville"],
    years_in_business: 2,
    price_range: "$$",
    approved: true,
  },
  {
    id: "bengal-events",
    business_name: "Bengal Events & Decor",
    owner_name: "Karim & Dilruba Rahman",
    category: "Events",
    short_description:
      "Full-service Bangladeshi wedding and event planning. Venue decoration, floral arrangements, catering coordination, and cultural programmes.",
    long_description:
      "Bengal Events specialises in South Asian weddings, Akd ceremonies, gaye holud, and large cultural gatherings. We handle decoration (stage, floral, lighting), catering liaison, entertainment booking, and day-of coordination. We've organised events at ICM, local banquet halls, and outdoor venues across the Triangle. Consultation is free.",
    phone: "(919) 555-1600",
    whatsapp: "(919) 555-1600",
    email: "bengalevents.rtp@gmail.com",
    instagram: "@bengal_events_rtp",
    service_area: ["Raleigh", "Durham", "Cary", "Morrisville", "Chapel Hill"],
    years_in_business: 6,
    price_range: "$$$",
    approved: true,
  },
  {
    id: "shakil-photography",
    business_name: "Shakil Photography",
    owner_name: "Shakil Hossain",
    category: "Photography",
    short_description:
      "Professional photography for weddings, Eid celebrations, maternity, newborn, and family portraits. Cinematography available.",
    long_description:
      "Shakil is a full-time professional photographer with 7 years of experience, specialising in South Asian weddings. He covers the full wedding weekend — gaye holud, Akd, walima — and delivers edited photos within 4 weeks. Drone footage and same-day edits available for extra charge. Based in the Triangle, available throughout North Carolina.",
    phone: "(919) 555-1700",
    whatsapp: "(919) 555-1700",
    email: "shakil.photo.rtp@gmail.com",
    instagram: "@shakilphotography_nc",
    service_area: ["Raleigh", "Durham", "Cary", "Morrisville"],
    years_in_business: 7,
    price_range: "$$$",
    approved: true,
  },
  {
    id: "handmade-by-ayesha",
    business_name: "Handmade by Ayesha",
    owner_name: "Ayesha Siddiqui",
    category: "Handmade Crafts",
    short_description:
      "Handwoven Jamdani-inspired table runners, cushion covers, wall art, and personalised home decor. Unique Bangladeshi heritage gifts.",
    long_description:
      "Ayesha combines traditional Bangladeshi weaving patterns with contemporary home decor. Each piece is handmade and unique. She also takes custom orders — personalised embroidered gifts, Eid hampers, and wedding favours. Ships nationwide. Local pickup available in Chapel Hill.",
    email: "handmade.ayesha@gmail.com",
    instagram: "@handmade_by_ayesha",
    service_area: ["Chapel Hill", "Durham", "Carrboro"],
    years_in_business: 3,
    price_range: "$$",
    approved: true,
  },
  {
    id: "community-mithai",
    business_name: "Community Mithai",
    owner_name: "Amena Khatun",
    category: "Catering",
    short_description:
      "Homemade Bengali sweets — mishti doi, kalojam, sandesh, ledikeni, and seasonal mithai for Eid, Eid ul-Adha, and Pohela Boishakh.",
    long_description:
      "Amena has been making traditional Bengali sweets using her grandmother's recipes for the past 6 years. Her mishti doi is legendary in the community. She takes orders for community events, masjid programmes, and home celebrations. Minimum order 2 kg. Order 1 week in advance for large quantities.",
    phone: "(919) 555-1800",
    whatsapp: "(919) 555-1800",
    service_area: ["Cary", "Morrisville"],
    years_in_business: 6,
    price_range: "$",
    approved: true,
  },
  {
    id: "dhaka-tiffin-service",
    business_name: "Dhaka Tiffin Service",
    owner_name: "Hasina Akter",
    category: "Catering",
    short_description:
      "Daily tiffin/meal delivery for working professionals and students. Fresh Bangladeshi home cooking delivered to your door on weekdays.",
    long_description:
      "Tired of eating out? Hasina provides weekly meal subscriptions with fresh Bangladeshi home food — rice, dal, sabzi, and a protein dish every weekday. Menu rotates daily. Subscription plans: 5-day or 3-day per week. Delivery in the Morrisville/Cary area. Great for H1B workers and students who miss home-cooked Bangladeshi meals.",
    phone: "(919) 555-1900",
    whatsapp: "(919) 555-1900",
    instagram: "@dhakatiffin_rtp",
    service_area: ["Morrisville", "Cary"],
    years_in_business: 1,
    price_range: "$",
    approved: true,
  },
];
