export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface Guarantee {
  icon: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  experienceYears: number;
  establishedYear: number;
  facilitySize: string;
  location: string;
  fullAddress: string;
  phone: string;
  rawPhone: string;
  whatsapp: string;
  whatsappLink: string;
  email: string;
  operatingHours: string;
  emergencyShift: string;
  stats: {
    projectsCompleted: string;
    experienceYears: string;
    skilledArtisans: string;
    onTimeInstallation: string;
  };
  milestones: Milestone[];
  workflow: WorkflowStep[];
  guarantees: Guarantee[];
}

export const companyData: CompanyInfo = {
  name: 'Chayam Advertising & Events',
  tagline: 'Precision Signage, Flex Printing & Retail Branding Excellence',
  experienceYears: 20,
  establishedYear: 2004,
  facilitySize: '15,000 Sq.Ft Manufacturing Facility',
  location: 'North Karassery, Mukkam, Kozhikode, Kerala',
  fullAddress: 'North Karassery, Mukkam, Kozhikode, Kerala - 673602',
  phone: '+91 9048239785',
  rawPhone: '9048239785',
  whatsapp: '+91 9048239785',
  whatsappLink: 'https://wa.me/919048239785',
  email: 'chayamadvertising@gmail.com',
  operatingHours: 'Monday - Saturday: 10:00 AM - 10:00 PM',
  emergencyShift: '24/7 Shift Operations for Emergency Rush Orders',

  stats: {
    projectsCompleted: '2 Lakh+',
    experienceYears: '20+ Years',
    skilledArtisans: '50+ Skilled Artisans',
    onTimeInstallation: '99% On-Time Delivery',
  },

  milestones: [
    {
      year: '2004',
      title: 'Founding of Chayam Advertising',
      description: 'Established in North Karassery, Mukkam, Kozhikode with a vision to revolutionize outdoor retail flex banner printing and local shopfront signage across Malabar.',
    },
    {
      year: '2012',
      title: '15,000 Sq.Ft Production Hub Expansion',
      description: 'Upgraded to a state-of-the-art 15,000 sq.ft industrial facility equipped with heavy-duty Mimaki printing presses, laser cutters, and metal fabrication workshops.',
    },
    {
      year: '2017',
      title: 'Flatbed UV & 3D LED Channel Letter Pioneer',
      description: 'Pioneered direct UV flatbed artwork printing on acrylic/glass and high-efficiency Samsung IP67 LED 3D architectural letters across Kerala.',
    },
    {
      year: '2023+',
      title: 'Trusted Partner for National Brands',
      description: 'Empowering premier retail giants (Malabar Gold, Kalyan Silks, Bhima, Seematti, Joyalukkas, Peter England) with nationwide multi-store architectural branding.',
    },
  ],

  workflow: [
    {
      step: 1,
      title: 'Site Survey & Laser Measurements',
      subtitle: 'Technical Assessment',
      description: 'Our senior structural engineers perform precise laser dimensions, facade structural analysis, and wind load calculations at your location.',
      duration: 'Day 1',
    },
    {
      step: 2,
      title: '3D Vector CAD & Photorealistic Render',
      subtitle: 'Design Validation',
      description: 'We generate high-resolution 3D daytime and night illumination renders overlaying your actual storefront photos for exact client approval.',
      duration: 'Day 2',
    },
    {
      step: 3,
      title: 'Precision CAD/CAM & Laser Engineering',
      subtitle: 'Material Crafting',
      description: 'High-precision CNC router cutting, fiber laser trimming, and imported acrylic heat bending inside our Mukkam production factory.',
      duration: 'Day 3 - 4',
    },
    {
      step: 4,
      title: 'In-House Fabrication & 48-Hour Burn-in Test',
      subtitle: 'Quality Testing',
      description: 'Full channel letter assembly, Samsung IP67 LED wiring, Meanwell power setup, and 48-hour continuous illumination stress testing.',
      duration: 'Day 5',
    },
    {
      step: 5,
      title: 'On-Site Rigging & Certified Commissioning',
      subtitle: 'Professional Rigging',
      description: 'Equipped with heavy cranes, safety harnesses, and experienced riggers for seamless monsoon-proof structural installation.',
      duration: 'Day 6',
    },
  ],

  guarantees: [
    {
      icon: 'Award',
      title: 'Expertise in the Signage Industry',
      description: 'Over years of experience delivering high-quality indoor and outdoor signage across Kerala and India.',
    },
    {
      icon: 'Factory',
      title: 'End-to-End Solutions',
      description: 'From design and fabrication to installation, we handle every step of your signage project.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Precision & Quality',
      description: 'Every sign is crafted with attention to detail, durability, and visual impact.',
    },
    {
      icon: 'Cpu',
      title: 'Modern Technology',
      description: 'We use the latest tools and techniques, including LED 3D letters, and advanced printing, to ensure top-quality results.',
    },
    {
      icon: 'CheckCircle',
      title: 'Customized Approach',
      description: 'Every project is tailored to match your brand identity, goals, and space requirements.',
    },
    {
      icon: 'Heart',
      title: 'Trusted & Reliable',
      description: 'Serving businesses of all sizes, we are a trusted signage partner across Kerala and India.',
    },
  ],
};
