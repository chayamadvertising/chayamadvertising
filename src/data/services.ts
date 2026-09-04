export interface MaterialSpec {
  name: string;
  value: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  heroImage: string;
  overviewTitle?: string;
  overviewImage?: string;
  icon: string;
  specs: MaterialSpec[];
  workflowChecklist: string[];
  targetIndustries: string[];
  serviceTypes?: { title: string; description: string }[];
  processSteps?: { title: string; description: string }[];
  recentInstallations: {
    title: string;
    client: string;
    location: string;
    image: string;
  }[];
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'led-signage',
    title: 'LED 3D Letter Signage',
    shortDesc: 'Front-lit and back-lit halo-effect acrylic and stainless steel 3D channel letters.',
    fullDesc: [
      'Chayam Advertising & Events specializes in high-impact 3D LED Channel Letter Signage that transforms storefronts into architectural landmarks. Utilizing state-of-the-art CNC metal bending and laser cutting at our 15,000 sq.ft Mukkam facility, we craft illuminated letters with crisp edges and uniform light output.',
      'Our signage systems are engineered to withstand Kerala extreme tropical weather, incorporating IP67 waterproof Samsung LED modules, Meanwell power supplies, and heavy-gauge Alucobond aluminum composite panels. Whether front-lit, halo-backlit, or side-emitting, every sign undergoes 48 hours of continuous illumination stress testing prior to installation.',
    ],
    heroImage: '/images/led_signage_malabar.jpg',
    overviewTitle: 'What is LED 3D Letter Signage?',
    overviewImage: '/images/led_signage_malabar.jpg',
    icon: 'Lightbulb',
    specs: [
      { name: 'LED Engine', value: 'Samsung 2835 / 5050 IP67 Waterproof Modules' },
      { name: 'Power Supply', value: 'Meanwell LRS Series Ultra-Slim Transformers' },
      { name: 'Face Material', value: '3mm Imported Cast Acrylic (Mitsubishi/Perspex)' },
      { name: 'Letter Returns', value: '0.8mm Stainless Steel (Gold/Rose Gold/Mirror) / Epoxy Powder Coated Aluminum' },
      { name: 'Backing Panel', value: '4mm PVDF Heavy-Duty Aluminum Composite Panel (ACP)' },
      { name: 'Illumination Type', value: 'Front-Lit, Halo Backlit, Edge-Lit, or Dual Emitting' },
      { name: 'Weather Rating', value: 'IP67 Waterproof & UV Resistant (100% Kerala Monsoon Proof)' },
      { name: 'Warranty', value: '3 Years Full System Warranty (5 Years on LEDs)' },
    ],
    workflowChecklist: [
      'Laser site measurement and structural facade analysis',
      '3D CAD vector rendering overlaying customer storefront photo',
      'CNC router cutting of acrylic face and stainless steel letter returns',
      'Automated channel letter return bending and TIG welding',
      'Internal Samsung IP67 LED grid arrangement and wiring',
      '48-hour continuous burn-in electrical safety testing',
      'Heavy crane & scaffolding on-site rigging with certified riggers',
    ],
    targetIndustries: [
      'Jewelry Showrooms',
      'Textile Mega Malls',
      'Hospitality & Star Hotels',
      'Supermarket Chains',
      'Corporate Headquarters',
    ],
    recentInstallations: [
      {
        title: 'Malabar Gold Flagship Facade Signage',
        client: 'Malabar Gold & Diamonds',
        location: 'Kozhikode City',
        image: '/images/led_signage_malabar.jpg',
      },
    ],
    faqs: [
      {
        question: 'How long do Samsung IP67 LED channel letters last in Kerala monsoon climate?',
        answer: 'Our LED channel letters are rated for 50,000+ hours of continuous operation (approx. 8-10 years). We use sealed silicone IP67 Samsung LEDs and anticorrosive stainless steel/aluminum returns that resist heavy rains, humidity, and coastal salt air.',
      },
    ],
  },
  {
    slug: 'indoor-advertising',
    title: 'Indoor Advertising',
    shortDesc: 'Transform your interior spaces with impactful signage solutions',
    fullDesc: [
      'Focuses on reception signs, custom wall graphics, directionals, and safety signs for commercial interior spaces. Transform your retail interior into an immersive brand experience. Chayam creates premium indoor advertising solutions ranging from rimless textile LED lightboxes to dimensional acrylic corporate reception logos.',
      'Designed for luxury showrooms, corporate offices, and shopping malls, our indoor branding elements combine sleek aesthetics with energy-efficient LED edge lighting. We craft custom wall graphics, illuminated glass displays, and wayfinding signage tailored to complement your interior architecture.',
    ],
    heroImage: '/images/indoor_hero.jpg',
    overviewTitle: 'What is Indoor Signage?',
    overviewImage: '/images/reception_signage.jpg',
    icon: 'Layout',
    specs: [
      { name: 'Lightbox Profile', value: 'Ultra-Slim 50mm / 80mm Anodized Aluminum Frame' },
      { name: 'Fabric Media', value: 'UV Printed Stretch Tension Fabric with Silicone Keder Edge' },
      { name: 'Internal Lighting', value: 'Edge-Lit High CRI (90+) LED Bar Strips' },
      { name: 'Reception Logos', value: 'Laser-Cut Solid Acrylic with Brushed Stainless Steel Veneer' },
      { name: 'Mounting Systems', value: 'Concealed Magnetic Fasteners / Stainless Steel Standoffs' },
      { name: 'Finish Options', value: 'Matt, Gloss, Brushed Gold, Rose Gold, Titanium Black' },
    ],
    workflowChecklist: [
      'Interior spatial measurement and lighting assessment',
      'Material swatch and lighting density sample presentation',
      'Precision laser cutting of acrylic and CNC aluminum extrusion slicing',
      'High-definition UV fabric printing with color-lock technology',
      'Clean-room assembly of edge-lit LED panel units',
      'Dust-free night installation inside operational retail spaces',
    ],
    targetIndustries: [
      'Retail & Malls',
      'Restaurants & Cafes',
      'Corporate Offices',
      'Healthcare & Clinics',
      'Hotels & Hospitality',
      'Educational Institutions',
      'Fitness Centers',
      'Real Estate',
      'Automotive',
      'Banking & Finance',
      'Event Management',
      'Manufacturing'
    ],
    serviceTypes: [
      { title: 'Reception Signage', description: 'Custom reception area signs, 3D company logos, and welcome displays.' },
      { title: 'Wall Graphics & Murals', description: 'Custom vinyl decals, brand graphics, and large-format wall prints.' },
      { title: 'Directional & Wayfinding', description: 'Floor graphics, room identification, and navigational signs.' },
      { title: 'Safety & Compliance Signs', description: 'Custom safety signs, emergency exit indicators, and compliance boards.' }
    ],
    recentInstallations: [
      {
        title: 'Modern Creative Agency Office Hallway',
        client: 'Creative Agency',
        location: 'Kozhikode',
        image: '/images/wall_mural.jpg',
      },
    ],
    faqs: [
      {
        question: 'Is it easy to update graphics on fabric lightboxes for seasonal promotions?',
        answer: 'Absolutely! Tension fabric lightboxes use silicone edge graphics (SEG). Your staff can easily pop out the old graphic and insert a new seasonal campaign fabric in under 3 minutes without tools.',
      },
    ],
  },
  {
    slug: 'outdoor-advertising',
    title: 'Outdoor Advertising',
    shortDesc: 'Durable, weather-resistant solutions for maximum brand visibility',
    fullDesc: [
      'Details weather-resistant building facades, 3D channel letters, monument signs, and roadside billboards. Dominate outdoor highways and high-traffic arterial roads across Kerala.',
      'From massive 100-foot highway billboards for major saree and jewelry brands to vinyl hoardings and promotional event banners, we deliver crisp image resolution, rich color depth, and robust wind-resistant banner stitching.'
    ],
    heroImage: '/images/outdoor_edhini.jpg',
    overviewTitle: 'What is Outdoor Signage?',
    overviewImage: '/images/outdoor_edhini.jpg',
    icon: 'Maximize',
    specs: [
      { name: 'Printing Press', value: 'Mimaki & Seiko Industrial High-Speed Wide-Format Printers' },
      { name: 'Banner Media', value: 'Frontlit Flex, Star Flex, Backlit Flex, Blockout Flex' },
      { name: 'Ink System', value: 'Heavy Solvent & Eco-Solvent Outdoor Weatherproof Inks' },
      { name: 'Max Seamless Width', value: '10 Feet Continuous Roll Width' },
      { name: 'Finishing Options', value: 'Eyelets, Rope Hemming, Rod Pockets, Heat Seam Welding' },
      { name: 'Outdoor Lifespan', value: 'Up to 2 Years Outdoor Fade Resistance in High UV Sun' },
    ],
    workflowChecklist: [
      'Prepress RIP software color calibration and resolution check',
      'High-speed multi-pass banner printing operation',
      'Heat-seam welding for oversized billboard panels',
      'Nickel-plated brass grommet installation along perimeter',
      'Quality check for color uniformity and tension durability',
      'On-site steel structure billboard mounting and tensioning',
    ],
    targetIndustries: [
      'Highway Billboard Media Agencies',
      'Retail Mega Sales & Season Campaigns',
      'Political & Cultural Conventions',
      'Real Estate Township Launches',
      'Film Releases & Entertainment Shows',
    ],
    serviceTypes: [
      { title: 'Channel Letters & 3D Signs', description: 'Premium LED channel letters with day-and-night illumination.' },
      { title: 'Pylon & Monument Signs', description: 'Freestanding commercial center signage built for long-distance road visibility.' },
      { title: 'Billboards & Hoardings', description: 'Large-format advertising displays along highways and high-traffic roads.' },
      { title: 'Awning & Canopy Signs', description: 'Functional brand shelter and storefront facade signage.' }
    ],
    recentInstallations: [
      {
        title: 'Tall Modern Freestanding Pylon Sign',
        client: 'Commercial Center',
        location: 'NH-66 Highway, Kozhikode',
        image: '/images/outdoor_edhini.jpg',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between regular flex and Star Flex?',
        answer: 'Star Flex has a smoother, high-gloss surface weave with higher GSM density. It yields vibrant print saturation, deeper blacks, and superior resistance to wind tears on highway billboards.',
      },
    ],
  },
  {
    slug: 'creative-designing',
    title: 'Creative Designing',
    shortDesc: 'Professional brand identity and visual communication design',
    fullDesc: [
      'Covers corporate brand identity, vector logo design, signage technical blueprints, and marketing collaterals.',
      'Our dedicated design studio works closely with clients to craft stunning visuals, ensuring your brand stands out with unique and memorable aesthetics.'
    ],
    heroImage: '/images/design_studio.jpg',
    overviewTitle: 'What is Creative Designing?',
    overviewImage: '/images/design_studio.jpg',
    icon: 'PenTool',
    specs: [
      { name: 'Software Stack', value: 'Adobe CC (Illustrator, Photoshop, InDesign), CorelDRAW' },
      { name: '3D Mockups', value: 'SketchUp, V-Ray, Blender for Architectural Visuals' },
      { name: 'Brand Guidelines', value: 'Typography, Color Palettes, Usage Rules' },
      { name: 'File Handoff', value: 'Print-Ready Vectors (AI, EPS, PDF), Web Formats' },
      { name: 'Turnaround Time', value: 'Initial Concepts in 48-72 Hours' },
      { name: 'Revisions', value: 'Standard 3 Rounds of Iterative Refinements' },
    ],
    workflowChecklist: [
      'Initial consultation and brand discovery questionnaire',
      'Moodboard creation and aesthetic direction alignment',
      'Vector logo conceptualization and typographic selection',
      'Digital rendering of signage mockups on actual building photos',
      'Client feedback integration and design refinement',
      'Preparation of final production-ready files'
    ],
    targetIndustries: [
      'New Business Startups',
      'Corporate Rebranding',
      'Retail Stores & Boutiques',
      'F&B (Restaurants & Cafes)',
      'Real Estate Developers'
    ],
    processSteps: [
      { title: 'Discovery & Research', description: 'Brand positioning and target audience analysis.' },
      { title: 'Concept Development', description: 'Developing multiple creative design directions.' },
      { title: 'Refinement & Execution', description: 'Tweaking selected concepts into production-ready vector files.' },
      { title: 'Production Support', description: 'Color-matching and seamless print file handoff.' }
    ],
    recentInstallations: [
      {
        title: 'Brand Identity & Vector Logo Mockups',
        client: 'Various Clients',
        location: 'Design Studio',
        image: '/images/design_studio.jpg',
      },
    ],
    faqs: [
      {
        question: 'Do you provide the source files after the design is approved?',
        answer: 'Yes, we provide all final designs in industry-standard vector formats (AI, EPS, PDF) along with high-resolution PNGs and JPGs for your internal use.',
      }
    ],
  },

  {
    slug: 'acrylic-works',
    title: 'Jali & Laser Cutting',
    shortDesc: 'Precision CNC laser cutting for metal screens, decorative jali panels, mementos, and trophies.',
    fullDesc: [
      'Acrylic is the cornerstone of modern architectural signage and luxury displays. At Chayam, we combine computerized CO2 laser cutting with skilled hand-craftsmanship to fabricate stunning 3D acrylic creations.',
      'Whether you require intricate lattice partition screens, custom illuminated counter displays, corporate mementos, or crystal-clear acrylic product holders, our precision cutting ensures smooth mirror-polished edges every single time.',
    ],
    heroImage: '/images/cnc_laser.jpg',
    overviewTitle: 'Precision CNC Laser Cutting',
    overviewImage: '/images/cnc_laser.jpg',
    icon: 'Scissors',
    specs: [
      { name: 'Cutting Technology', value: '150W High-Precision CO2 Laser & 3-Axis CNC Router' },
      { name: 'Thickness', value: '1mm to 25mm Solid Cast Acrylic Sheets, Metal Sheets' },
      { name: 'Edge Finishing', value: 'Diamond Edge Polishing, Hydrogen Flame Polishing, Beveling' },
      { name: 'Bending & Molding', value: 'Thermal Strip Bending & Vacuum Forming' },
      { name: 'Tolerances', value: '± 0.1mm Precision Repeatability' },
      { name: 'Adhesive System', value: 'Solvent Weld & UV Cured Optical Clear Adhesives' },
    ],
    workflowChecklist: [
      'CAD design vector path optimization and nesting',
      'Material masking inspection for zero surface scratch policy',
      'High-speed CO2 laser cutting / CNC machining',
      'Flame polishing and edge buffing',
      'Thermal bending and structural bonding assembly',
      'Final optical inspection and protective wrapping',
    ],
    targetIndustries: [
      'Jewelry & Watch Display Counters',
      'Corporate Award Ceremonies',
      'Electronics & Smartphone Experience Stores',
      'Cosmetic & Perfume Retail Outlets',
      'Exhibition & Display Kiosks',
    ],
    recentInstallations: [
      {
        title: 'Decorative Geometric Jali Architectural Pattern',
        client: 'Architectural Project',
        location: 'Kozhikode',
        image: '/images/cnc_laser.jpg',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between extruded and cast acrylic?',
        answer: 'We exclusively use imported 100% virgin cast acrylic. Cast acrylic offers superior optical clarity, zero yellowing, higher heat resistance, and cleaner flame-polished edges compared to cheaper extruded plastic sheets.',
      },
    ],
  },
  {
    slug: 'neon-signs',
    title: 'Memento & Trophy',
    shortDesc: 'Custom crafted corporate mementos, awards, and trophies with precision.',
    fullDesc: [
      'Recognize excellence with premium custom mementos and trophies. At Chayam, we blend acrylic, wood, and metal with precision laser engraving and UV printing to create awards that truly stand out.',
      'From corporate milestones to sports tournaments and academic achievements, we design and manufacture bespoke awards that reflect the prestige of the occasion.'
    ],
    heroImage: '/images/memento_awards.jpg',
    overviewTitle: 'Custom Mementos & Awards',
    overviewImage: '/images/memento_awards.jpg',
    icon: 'Award',
    specs: [
      { name: 'Materials', value: 'Premium Acrylic, Solid Wood, Crystal, Brass, Aluminum' },
      { name: 'Branding', value: 'UV Flatbed Printing, Laser Engraving, Sandblasting' },
      { name: 'Base Options', value: 'Tiered Wooden Bases, Polished Black Acrylic, Marble' },
      { name: 'Shapes', value: 'Custom Contour Cut to Brand Logo or Theme' },
      { name: 'Finishing', value: 'Hand-polished edges, gold/silver foiling accents' },
      { name: 'Packaging', value: 'Velvet-lined presentation boxes' },
    ],
    workflowChecklist: [
      'Conceptual 3D design based on event theme',
      'Material selection and combination prototyping',
      'CNC laser cutting and edge polishing',
      'Laser engraving of recipient names and details',
      'Direct UV color printing of logos and artwork',
      'Final assembly and quality inspection'
    ],
    targetIndustries: [
      'Corporate HR & Employee Recognition',
      'Schools, Colleges & Universities',
      'Sports Associations & Clubs',
      'NGOs & Government Organizations',
      'Event Management Companies'
    ],
    recentInstallations: [
      {
        title: 'Corporate Excellence Awards',
        client: 'Local Business Group',
        location: 'Calicut',
        image: '/images/memento_awards.jpg',
      }
    ],
    faqs: [
      {
        question: 'Can you create a custom shape for our mementos?',
        answer: 'Absolutely! With our CNC laser cutting technology, we can cut acrylic and wood into virtually any custom shape, including your exact company logo or event mascot.',
      }
    ]
  },
];
