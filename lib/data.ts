export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/about#services" },
  { label: "Projects", href: "/projects" },
  { label: "Investment", href: "/investment" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Properties Managed" },
  { value: 12, suffix: "+", label: "Years of Vision" },
  { value: 8, suffix: "", label: "Active Investment Opportunities" },
];

export const VALUES = [
  "Integrity",
  "Quality",
  "Professionalism",
  "Excellence",
  "Speed",
  "Transparency",
];

export const TIMELINE = [
  {
    title: "The starting point",
    body: "We reversed the usual order: engineering first, sales second.",
  },
  {
    title: "Building the practice",
    body: "Grew from single contracts to full-scale development and management.",
  },
  {
    title: "Where we stand today",
    body: "Four pillars, one standard: construction, development, management, investment.",
  },
];

export type Service = {
  num: string;
  title: string;
  body: string;
  icon: "construction" | "development" | "management" | "land" | "investment" | "supervision" | "consultancy";
};

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Construction",
    body: "Full-scale construction management from groundbreaking to final inspection, engineered and supervised in-house.",
    icon: "construction",
  },
  {
    num: "02",
    title: "Real Estate Development",
    body: "End-to-end development, from land assessment and design through to delivery of finished, market-ready property.",
    icon: "development",
  },
  {
    num: "03",
    title: "Property Management",
    body: "Day-to-day management of residential and commercial assets, protecting both occupancy and long-term value.",
    icon: "management",
  },
  {
    num: "04",
    title: "Land Banking",
    body: "Strategic land acquisition in growth corridors, secured and documented ahead of market appreciation.",
    icon: "land",
  },
  {
    num: "05",
    title: "Joint Investment",
    body: "Structured co-investment on selected developments, giving partners a transparent stake in real returns.",
    icon: "investment",
  },
  {
    num: "06",
    title: "Project Supervision",
    body: "Independent, engineer-led supervision of third-party projects to protect quality, budget and timelines.",
    icon: "supervision",
  },
  {
    num: "07",
    title: "Engineering Consultancy",
    body: "Technical advisory for developers and institutions who need engineering judgment before they commit capital.",
    icon: "consultancy",
  },
];

export type Project = {
  id: string;
  name: string;
  location: string;
  category: "construction" | "residential" | "commercial" | "management";
  status: "Completed" | "Ongoing" | "Under Construction" | "Under Management" | "Status TBD";
  role: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  beforeAlt: string;
  afterAlt: string;
  beforeAfterNote?: string;
  scopeOfWork?: string[];
  outcomeStats?: { label: string; value: number; suffix?: string }[];
  galleryImages?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "lyfe-place",
    name: "Lyfe Place",
    location: "Admiralty Way, Lekki, Lagos",
    category: "commercial",
    status: "Under Construction",
    role: "Site Supervisor",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1600&q=80&auto=format",
    beforeLabel: "Site Before",
    afterLabel: "Under Construction",
    beforeAlt: "Site before construction at Lyfe Place on Admiralty Way, Lekki",
    afterAlt: "Lyfe Place under construction on Admiralty Way, Lekki",
  },
  {
    id: "medbury-medical-services",
    name: "Medbury Medical Services",
    location: "Ikeja, Lagos",
    category: "commercial",
    status: "Status TBD",
    role: "Renovation",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format",
    beforeLabel: "Before Renovation",
    afterLabel: "After Renovation",
    beforeAlt: "Medbury Medical Services before renovation in Ikeja",
    afterAlt: "Medbury Medical Services after renovation in Ikeja",
  },
  {
    id: "medlyfe-wellness",
    name: "Medlyfe Wellness (Medlyfe Longevity and Wellness Center)",
    location: "Lekki Phase 1, Lagos",
    category: "commercial",
    status: "Completed",
    role: "General Construction",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1600&q=80&auto=format",
    beforeLabel: "Site Before",
    afterLabel: "Completed",
    beforeAlt: "Site before construction of Medlyfe Wellness in Lekki Phase 1",
    afterAlt: "Completed Medlyfe Wellness center in Lekki Phase 1",
  },
  {
    id: "cuddle-building",
    name: "Cuddle Building",
    location: "Bodulon Road, Ikoyi, Lagos",
    category: "residential",
    status: "Ongoing",
    role: "Project Management",
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1560185008-b033106af5c3?w=1600&q=80&auto=format",
    beforeLabel: "Site Before",
    afterLabel: "Ongoing",
    beforeAlt: "Site before construction of Cuddle Building on Bodulon Road, Ikoyi",
    afterAlt: "Cuddle Building under construction on Bodulon Road, Ikoyi",
  },
  {
    id: "residential-development-ipaja",
    // TODO: confirm real project name
    name: "Residential Development — Ipaja",
    location: "Ipaja, Lagos",
    category: "residential",
    status: "Ongoing",
    role: "General Construction",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80&auto=format",
    beforeLabel: "Site Before",
    afterLabel: "Ongoing",
    beforeAlt: "Residential construction site in Ipaja before work began",
    afterAlt: "Residential construction project ongoing in Ipaja",
  },
  {
    id: "residential-development-awoyaya",
    // TODO: confirm real project name
    name: "Residential Development — Awoyaya",
    location: "Awoyaya, Lagos",
    category: "residential",
    status: "Ongoing",
    role: "General Construction",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80&auto=format",
    beforeLabel: "Site Before",
    afterLabel: "Ongoing",
    beforeAlt: "Residential construction site in Awoyaya before work began",
    afterAlt: "Residential construction project ongoing in Awoyaya",
  },
];

export const PROJECT_FILTERS = [
  { label: "All", value: "all" },
  { label: "Construction", value: "construction" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Property Management", value: "management" },
] as const;

export const COMPARISON = {
  traditional: [
    "Sells first, builds later, with limited technical oversight on site.",
    "Documentation and payment milestones are opaque to the buyer.",
    "Relationship ends once the property is handed over.",
    "Execution speed depends heavily on outside contractors.",
  ],
  dekunle: [
    "Every project is engineered and supervised before it is ever marketed.",
    "Transparent process, with documentation shared at every milestone.",
    "Ongoing property management keeps the relationship, and the value, alive.",
    "In-house engineering teams mean faster, professionally executed delivery.",
  ],
};

export const INVESTMENT_STEPS = [
  {
    n: "01",
    title: "Consultation",
    body: "We review your investment goals against current land and development opportunities.",
  },
  {
    n: "02",
    title: "Investment",
    body: "Terms, timelines and expected returns are documented before any capital changes hands.",
  },
  {
    n: "03",
    title: "Development",
    body: "Our engineering and construction teams execute the project under continuous supervision.",
  },
  {
    n: "04",
    title: "Returns",
    body: "Assets are sold, leased or managed, with returns distributed according to agreed terms.",
  },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Discovery", body: "Understanding the site, the client and the intended use." },
  { n: "02", title: "Planning", body: "Feasibility, budgeting and regulatory approvals." },
  { n: "03", title: "Engineering", body: "Structural, civil and MEP design work." },
  { n: "04", title: "Construction", body: "Supervised build-out against the approved plan." },
  { n: "05", title: "Delivery", body: "Final inspection, documentation and handover." },
  { n: "06", title: "Management", body: "Ongoing property and asset management." },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dekunle Homes supervised our build the way an engineering firm would, not a sales office. Every stage was documented, and the finished building matched the drawings exactly.",
    name: "Adaeze Okonkwo",
    role: "Commercial Property Owner, Lagos",
    initials: "A.O.",
  },
  {
    quote:
      "As a joint investment partner, I appreciated how clearly the returns and milestones were laid out from day one. There were no surprises at handover.",
    name: "Tunde Balogun",
    role: "Joint Investment Partner",
    initials: "T.B.",
  },
  {
    quote:
      "Property management has been proactive rather than reactive. Issues get flagged and resolved before they affect our tenants.",
    name: "Folake Eze",
    role: "Residential Landlord, Ikoyi",
    initials: "F.E.",
  },
];

export const PARTNERS = [
  "MERIDIAN CAPITAL",
  "ASHFORD BANK",
  "LAGOS LAND TRUST",
  "STONEBRIDGE LEGAL",
  "NORTHGATE INSURANCE",
];

export const INQUIRY_TYPES = [
  "Property Purchase",
  "Joint Investment",
  "Construction",
  "Property Management",
  "Partnerships",
  "General Enquiries",
];

export const CONTACT = {
  address: "5B Bethel Street, Surulere, Lagos",
  phone: "+234 814 723 9528",
  email: "adekunleabe159@gmail.com",
  hours: "Mon – Fri, 9:00 AM – 5:00 PM",
};
