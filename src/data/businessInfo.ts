export interface BusinessConfig {
  name: string;
  brandName: string;
  owner: string;
  address: string;
  cityStateZip: string;
  phone: string;
  phoneRaw: string;
  legacyPhone: string;
  googleMapsUrl: string;
  experienceYears: string;
  rating: number;
  reviewCount: number;
  hours: string;
  emergencyNotice: string;
  serviceAreas: string[];
}

export const BUSINESS_INFO: BusinessConfig = {
  name: "Nene's Drain Cleaning Services",
  brandName: "NeNe's Drain Cleaning & Plumbing",
  owner: "Daniel Pumar",
  address: "1510 Josephine Street",
  cityStateZip: "Key West, FL 33040",
  phone: "(305) 797-6477",
  phoneRaw: "3057976477",
  legacyPhone: "(305) 294-8936",
  googleMapsUrl: "https://www.google.com/maps/place/Nene's+Drain+Cleaning+Services/@24.5541683,-81.7803001,17z/data=!3m1!4b1!4m6!3m5!1s0x88d1b6cc968b32d3:0x156c3f99a205fd81!8m2!3d24.5541683!4d-81.7803001!16s%2Fg%2F1tfxyt_b!5m1!1e1",
  experienceYears: "20+ Years Family-Owned Legacy",
  rating: 4.9,
  reviewCount: 49,
  hours: "Monday – Friday: 9:00 AM – 4:00 PM | Saturday – Sunday: 9:00 AM – 5:00 PM",
  emergencyNotice: "24/7 Emergency Dispatch for Toilet Floods, Mainline Backups & Burst Pipes",
  serviceAreas: [
    "Key West",
    "Stock Island",
    "Key Haven",
    "Sugarloaf Key",
    "Cudjoe Key",
    "Summerland Key",
    "Big Pine Key",
    "Lower Florida Keys"
  ]
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  fullDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  idealFor: string;
  verifiedPricingNote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "drain-clearing",
    title: "Emergency Drain & Clog Clearing",
    shortDesc: "Fast mechanical snaking and clearing for stubborn slow-draining sinks, showers, bathtubs, and mainline blockages.",
    badge: "Most Requested",
    fullDesc: "Backed-up water causes immediate property damage and mold. Daniel arrives promptly with heavy-duty mechanical cable augers and rooters to punch through hair clogs, grease buildup, and foreign obstructions, restoring free-flowing drains immediately.",
    features: [
      "Kitchen sinks, shower basins & bathtub backups cleared fast",
      "Main cleanout snaking for whole-house slow drains",
      "Detailed diagnosis of why the backup occurred to prevent repeat issues",
      "Clean drop cloths and meticulous cleanup after every repair"
    ],
    specs: [
      { label: "Response", value: "Same-Day & Emergency Slots" },
      { label: "Equipment", value: "Commercial Motorized Cable Snakers" },
      { label: "Pricing", value: "Fair, Upfront Honest Rates" }
    ],
    idealFor: "Homeowners, vacation rentals, guest houses, and Key West condos",
    verifiedPricingNote: "Reviews report typical small fixes starting around $100–$200"
  },
  {
    id: "sewer-grease",
    title: "Sewer Line & Commercial Grease Maintenance",
    shortDesc: "Routine monthly and bi-monthly sewer and grease-line clearing specialized for Key West restaurants and businesses.",
    badge: "Commercial Grade",
    fullDesc: "Key West restaurants and hospitality venues face heavy grease trap and sewer strain that can shut down kitchens during peak service. Nene's provides scheduled preventative maintenance (monthly or bi-monthly) to keep restaurant drain lines odor-free and code-compliant.",
    features: [
      "Scheduled monthly or bi-monthly preventative cleaning contracts",
      "Kitchen floor drain, mop sink & grease line thorough scouring",
      "Minimizes downtime and avoids costly health inspection emergencies",
      "Trusted by busy Key West commercial kitchens and bars"
    ],
    specs: [
      { label: "Frequency", value: "Monthly or Bi-Monthly Schedules" },
      { label: "Coverage", value: "Commercial Kitchens & Restaurants" },
      { label: "Safety", value: "Full Monroe County Local Knowledge" }
    ],
    idealFor: "Restaurants, bars, hotels, commercial plazas, and catering kitchens",
    verifiedPricingNote: "Custom contract rates based on line length and frequency"
  },
  {
    id: "toilet-repair",
    title: "Toilet Unclogging, Repair & New Installation",
    shortDesc: "Urgent emergency flooding resolution, gurgling line diagnostics, flapper/valve rebuilds, and fresh toilet installs.",
    badge: "24/7 Priority",
    fullDesc: "From Sunday evening toilet overflows caused by kids flushing toys to worn-out fill valves constantly running and driving up water bills, Daniel resolves toilet emergencies quickly and installs new water-efficient fixtures seamlessly.",
    features: [
      "Sunday & holiday emergency response when overflows happen",
      "Toy, wipe, and stubborn obstruction retrieval without cracking porcelain",
      "Wax ring replacement, leak sealing, and flange repairs",
      "Complete new high-efficiency toilet installation and old unit haul-away"
    ],
    specs: [
      { label: "Speed", value: "Immediate Sunday & Evening Dispatch" },
      { label: "Care", value: "Nap-time & noise considerate service" },
      { label: "Parts", value: "Commercial-grade valves and seals" }
    ],
    idealFor: "Flooded bathrooms, running toilets, wobbly bases, toy clogs",
    verifiedPricingNote: "Quick diagnosis & upfront quote before turning a wrench"
  },
  {
    id: "water-heater",
    title: "Hot Water Heater Installation & Emergency Repair",
    shortDesc: "Same-day troubleshooting and replacement for blown water heaters, element failures, and temperature issues.",
    badge: "Essential Comfort",
    fullDesc: "Nothing halts a household like cold water. When water heaters fail or burst, Daniel responds promptly (even on weekends), diagnosing electrical elements, thermostats, and pressure relief valves or completing a clean new tank installation.",
    features: [
      "Weekend emergency replacements when tanks leak or fail",
      "Thermostat, heating element, and pressure valve replacements",
      "Code-compliant hurricane strap bracing and expansion tank installation",
      "Old tank disposal and complete system flush"
    ],
    specs: [
      { label: "Types", value: "Electric Tanks & Compact Units" },
      { label: "Turnaround", value: "Same-Day Water Heater Restorations" },
      { label: "Compliance", value: "Florida Keys hurricane strapping safe" }
    ],
    idealFor: "No hot water emergencies, leaking tanks, rusty water, rumbling noises",
    verifiedPricingNote: "Transparent pricing without typical contractor markups"
  },
  {
    id: "pipe-leak",
    title: "Plumbing Leak Detection & Pipe Repair",
    shortDesc: "Locating hidden pipe leaks, noisy cistern lines, shower valve issues, and pressure loss under homes.",
    badge: "Precision Repair",
    fullDesc: "Florida Keys water bills can spike dramatically when a hidden line or cistern connection leaks under the structure. Daniel has solved complex multi-visit leak puzzles that left other companies scratching their heads.",
    features: [
      "Cistern lines, rain gutter drainage, and outdoor sprinkler feed repairs",
      "Shower valve replacement, inverted hot/cold corrections",
      "Pinpoint leak repairs for copper, CPVC, and PEX piping",
      "Property manager emergency liaison with photo reports"
    ],
    specs: [
      { label: "Diagnostic", value: "Methodical root-cause investigation" },
      { label: "Communication", value: "Direct phone updates with Daniel" }
    ],
    idealFor: "High water bills, ceiling spots, shower valve issues, cistern plumbing",
    verifiedPricingNote: "Accurate diagnostics that save thousands in unnecessary re-pipes"
  },
  {
    id: "fixture-pressure",
    title: "Faucets, Disposals & Pressure Washing",
    shortDesc: "Kitchen & bath faucet replacements, garbage disposal swaps, dishwasher hookups, and exterior drain washing.",
    badge: "Full Service",
    fullDesc: "Whether it’s replacing a seized, corroded coastal faucet with specialized tools, wiring a new garbage disposal, or pressure washing exterior cleanouts, Nene’s provides dependable, multi-skilled craftsmanship.",
    features: [
      "Corroded coastal faucet removal without countertop damage",
      "Garbage disposal jams, replacements & dishwasher drainage",
      "Exterior pressure washing for driveways, grease areas & drains",
      "Over-the-phone troubleshooting assistance for simple problems"
    ],
    specs: [
      { label: "Tools", value: "Heavy coastal plumbing specialty tools" },
      { label: "Finish", value: "Watertight guarantee and immaculate cleanup" }
    ],
    idealFor: "Dripping faucets, seized handles, broken disposals, outdoor wash",
    verifiedPricingNote: "Fair, straightforward pricing"
  }
];

export interface VerifiedReview {
  author: string;
  badge: string;
  timeAgo: string;
  rating: number;
  content: string;
  servicesListed?: string[];
  priceTag?: string;
  ownerReply?: string;
}

export const REAL_REVIEWS: VerifiedReview[] = [
  {
    author: "Jennifer Howe",
    badge: "Local Guide · 19 reviews",
    timeAgo: "4 months ago",
    rating: 5,
    content: "Wow!!!!! Daniel came out right away- handled my VIP clients RV with the utmost care! This is a great company and he’s got a great name! Your father taught you well! I cannot RAVE enough about this company!! Highly recommend and now HOORAY TO THE BEST PLUMBERS IN THE KEYS!!! Thank you so much for helping me out with speedy service and integrity!!!!!",
    servicesListed: ["Drain cleaning", "Plumbing inspection"],
    priceTag: "Great price ($1–100)"
  },
  {
    author: "Liz Goldstone",
    badge: "3 reviews · Key West",
    timeAgo: "8 months ago",
    rating: 5,
    content: "Daniel was exceptionally thoughtful as well as very professional. He took our grandchild’s naptime into consideration which went above and beyond regular service calls! He solved our issues in no time because he was very knowledgeable and worked very efficiently. I will call again with any plumbing needs and will recommend them to friends in the future! Thanks Daniel!!",
    servicesListed: ["Drain cleaning", "Faucet repair", "Plumbing leak repair"],
    ownerReply: "Thank you so much!!!!!"
  },
  {
    author: "Roger Suarez",
    badge: "6 reviews · Florida Keys",
    timeAgo: "2 months ago",
    rating: 5,
    content: "My second bathroom toilet flooded I tried to fix it myself. I called on a Sunday evening Daniel came over to fix it immediately. I was very impressed because he came directly from being on the boat all day. After he promptly got it fixed, he let me know that my 3 year old son was flushing things (toys) down the toilet that he wasn’t supposed to. I highly recommend Nene’s if you are looking for the services they provide.",
    servicesListed: ["Toilet repair", "Emergency drain clear"],
    ownerReply: "Thank you for your great review!!!"
  },
  {
    author: "Becky Cobo",
    badge: "Local Guide · 19 reviews · Property Manager",
    timeAgo: "2 months ago",
    rating: 5,
    content: "I highly recommend Nene’s! I am a property manager and anytime I call Daniel, he answers my calls, shows up immediately and always does an amazing job. Not to mention he has a 5 star personality as well.",
    servicesListed: ["Toilet repair", "Water heater installation", "Drain cleaning", "Plumbing leak detection"],
    priceTag: "Reasonable price"
  },
  {
    author: "Cameron Scott",
    badge: "4 reviews",
    timeAgo: "Recent",
    rating: 5,
    content: "Absolutely phenomenal service from start to finish! We found ourselves in a tough spot after hours, and instead of leaving us hanging, they went above and beyond to come out and save the day! Dependable, honest, and professional throughout. It’s refreshing to find a company that genuinely cares about its customers.",
    servicesListed: ["Drain cleaning", "Sewer cleaning", "Sewer repair", "Plumbing leak repair"],
    priceTag: "Great price"
  },
  {
    author: "Jordan Lydamore",
    badge: "Sugarloaf Key Homeowner",
    timeAgo: "2 years ago",
    rating: 5,
    content: "My family and I just recently purchased a home in Sugarloaf Key and had a couple problems coming from the bathroom (smell, toilet not shutting off and shower valve). We were referred to Daniel at Nene's drain cleaning and THANK GOD we did! We had gone through two other companies that were outrageous. Daniel resolved every issue we had and went above and beyond—1/3 of what they would have charged! 10 out of 10 Daniel GREAT JOB!",
    servicesListed: ["Plumbing repair", "Leak detection", "Shower valve rebuild"],
    priceTag: "1/3 cost of competitors"
  },
  {
    author: "Valerie Parker",
    badge: "2 reviews",
    timeAgo: "8 months ago",
    rating: 5,
    content: "Can’t say enough good about Daniel and the service he provided. He was quick and efficient and even when our old faucet presented a challenge needing more tools and a solution, he didn’t flinch. Problem solved, fixed, and done. Daniel’s positive attitude, energy, and knowledge left us with a beautiful new faucet in record time!! Thanks, Daniel and Nene’s Plumbing.",
    servicesListed: ["Faucet installation"],
    priceTag: "Great price"
  },
  {
    author: "Brooke Scott",
    badge: "Local Guide · 23 reviews",
    timeAgo: "Recent",
    rating: 5,
    content: "The most honest plumber around! He’s the only plumber I will ever hire because I know the job will get done right. He’s extremely communicative, punctual, and reliable, which are qualities anyone can appreciate. It’s hard to find someone you can truly trust, and he’s exactly that. I highly recommend him to anyone looking for an honest, dependable plumber!",
    ownerReply: "Thank you so so much!!!!!!!"
  },
  {
    author: "Andrea R Weitz",
    badge: "10 reviews · Key West",
    timeAgo: "8 months ago",
    rating: 5,
    content: "I have a garden sprinkler system which works off of gutters that go into my cistern beneath the house. Four different plumbing companies could not get it working correctly until Nene's drain cleaning services. They trouble shot in several visits until they located the specific multiple problems. And my plants are extremely happy they did a terrific job.",
    priceTag: "Great price ($100–200)"
  }
];
