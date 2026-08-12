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
  status: "Completed" | "Ongoing" | "Under Construction" | "Under Management";
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
    id: "ridgeview-residences",
    name: "The Ridgeview Residences",
    location: "Lekki, Lagos",
    category: "residential",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format",
    beforeLabel: "Site Before",
    afterLabel: "Completed",
    beforeAlt: "Vacant residential site in Lekki before development",
    afterAlt: "Completed residential estate in Lekki with finished facade",
    beforeAfterNote:
      "The site began as undeveloped land with access and drainage to be resolved before any vertical work could start. The finished scheme introduced a coordinated residential layout, improved frontage and a clearer arrival sequence for future occupants.",
    scopeOfWork: ["Site preparation", "Drainage planning", "Structural build-out", "Facade finishing", "External works"],
    outcomeStats: [
      { label: "Units delivered", value: 12 },
      { label: "Primary blocks", value: 2 },
      { label: "Delivery stage", value: 100, suffix: "%" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80&auto=format",
    ],
  },
  {
    id: "dekunle-business-court",
    name: "Dekunle Business Court",
    location: "Ikeja, Lagos",
    category: "commercial",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format",
    beforeLabel: "Old Site",
    afterLabel: "Current Build",
    beforeAlt: "Existing low-rise site in Ikeja before redevelopment",
    afterAlt: "Commercial building under construction in Ikeja",
    beforeAfterNote:
      "The property started as a fragmented low-rise plot with limited frontage efficiency. The current scheme reorganizes the site around a more visible commercial frontage and a stronger internal circulation pattern.",
    scopeOfWork: ["Demolition and clearing", "Foundation works", "Frame construction", "MEP coordination"],
    outcomeStats: [
      { label: "Floors planned", value: 5 },
      { label: "Current progress", value: 68, suffix: "%" },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80&auto=format",
    ],
  },
  {
    id: "harbour-view-towers",
    name: "Harbour View Towers",
    location: "Victoria Island, Lagos",
    category: "construction",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80&auto=format",
    beforeLabel: "Existing Plot",
    afterLabel: "Tower in Progress",
    beforeAlt: "Vacant waterfront plot in Victoria Island before construction",
    afterAlt: "High-rise tower under construction in Victoria Island",
    beforeAfterNote:
      "This plot was cleared for vertical development after the site survey confirmed the footprint could support the intended massing. The build now concentrates on the structural frame, service cores and envelope sequencing.",
    scopeOfWork: ["Site survey", "Structural frame", "Core construction", "Envelope sequencing"],
    outcomeStats: [
      { label: "Tower count", value: 2 },
      { label: "Construction stage", value: 41, suffix: "%" },
    ],
  },
  {
    id: "serene-court-villas",
    name: "Serene Court Villas",
    location: "Ibeju-Lekki, Lagos",
    category: "residential",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80&auto=format",
    beforeLabel: "Vacant Site",
    afterLabel: "Finished Villas",
    beforeAlt: "Vacant residential site in Ibeju-Lekki before development",
    afterAlt: "Completed villa cluster in Ibeju-Lekki",
    beforeAfterNote:
      "The project began on a raw land parcel with no usable circulation or services. Delivery focused on turning the site into a coherent villa cluster with defined access, drainage and repeatable unit layouts.",
    scopeOfWork: ["Land clearing", "Road formation", "Unit construction", "Utilities and drainage"],
    outcomeStats: [
      { label: "Villas delivered", value: 8 },
      { label: "Shared access roads", value: 1 },
    ],
  },
  {
    id: "parkview-apartments",
    name: "Parkview Apartments",
    location: "Ikoyi, Lagos",
    category: "management",
    status: "Under Management",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format",
    beforeLabel: "Previous State",
    afterLabel: "Managed Asset",
    beforeAlt: "Apartment block before structured property management in Ikoyi",
    afterAlt: "Apartment block under active property management in Ikoyi",
    beforeAfterNote:
      "Management began with an asset that needed clearer maintenance routines and a more disciplined tenant experience. The current approach focuses on upkeep, response time and preserving long-term asset value.",
    scopeOfWork: ["Maintenance scheduling", "Tenant coordination", "Asset reporting"],
    outcomeStats: [
      { label: "Units managed", value: 24 },
      { label: "Response window", value: 24, suffix: "hrs" },
    ],
  },
  {
    id: "dekunle-corporate-hub",
    name: "Dekunle Corporate Hub",
    location: "Abuja",
    category: "commercial",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format",
    afterImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80&auto=format",
    beforeLabel: "Initial Plot",
    afterLabel: "Corporate Hub",
    beforeAlt: "Commercial plot in Abuja before development",
    afterAlt: "Modern commercial building progressing in Abuja",
    beforeAfterNote:
      "The site was initially defined by its location rather than by any usable building stock. The current phase is transforming that land into a branded commercial address with a clearer tenant-facing identity.",
    scopeOfWork: ["Feasibility review", "Site planning", "Frame erection", "Tenant servicing"],
    outcomeStats: [
      { label: "Gross floor area", value: 4200, suffix: "sqm" },
      { label: "Current status", value: 1, suffix: " site" },
    ],
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
  address: "12 Marina Business District, Lagos, Nigeria",
  phone: "+234 800 000 0000",
  email: "info@dekunlehomes.com",
  hours: "Mon – Fri, 9:00 AM – 5:00 PM",
};
