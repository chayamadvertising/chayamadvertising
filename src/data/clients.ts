export interface ClientBrand {
  name: string;
  category: string;
  location: string;
  initials: string;
  color: string;
  logo?: string;
}

export interface IndustryVertical {
  title: string;
  description: string;
  image: string;
  projectsCount: string;
}

export const clientBrandsData: ClientBrand[] = [
  { name: 'Koyilatt Gold & Diamonds', category: 'Jewelry & Retail', location: 'Kerala', initials: 'KG', color: '#9D174D', logo: '/images/clients/koyilatt.jpg' },
  { name: 'Malabar Gold & Diamonds', category: 'Jewelry & Luxury Retail', location: 'Global Headquarters', initials: 'MG', color: '#D97706', logo: '/images/clients/malabar.jpg' },
  { name: 'Diya Gold & Diamonds', category: 'Jewelry & Retail', location: 'India | UAE', initials: 'DG', color: '#6B21A8', logo: '/images/clients/diya.jpg' },
  { name: 'myG Future', category: 'Electronics & Retail', location: 'Kerala', initials: 'MF', color: '#15803D', logo: '/images/clients/myg.png' },
  { name: 'Nakshathra Gold & Diamonds', category: 'Jewelry & Retail', location: 'Mukkam', initials: 'NG', color: '#0D9488', logo: '/images/clients/nakshathra.jpg' },
  { name: 'Kalyan Silks', category: 'Textiles & Retail', location: 'Global', initials: 'KS', color: '#E11D48', logo: '/images/clients/kalyan.jpg' },
  { name: 'Hi-Focus', category: 'Technology', location: 'India', initials: 'HF', color: '#1E3A8A', logo: '/images/clients/hifocus.jpg' },
  { name: 'KMCT Medical College', category: 'Healthcare & Education', location: 'Kozhikode', initials: 'KM', color: '#D97706', logo: '/images/clients/kmct.jpg' },
  { name: 'Vedhika Wedding Centre', category: 'Wedding & Fashion', location: 'Kerala', initials: 'VW', color: '#9D174D', logo: '/images/clients/vedhika.jpg' },
  { name: 'Pranavam Ayurveda', category: 'Healthcare', location: 'Kerala', initials: 'PA', color: '#4338CA', logo: '/images/clients/pranavam.jpg' },
  { name: 'HDFC Bank', category: 'Banking & Finance', location: 'India', initials: 'HB', color: '#09b37d', logo: '/images/clients/hdfc.jpg' },
  { name: 'Trends', category: 'Retail & Fashion', location: 'India', initials: 'TR', color: '#B45309', logo: '/images/clients/trends.png' },
  { name: 'EMS Co-operative Hospital', category: 'Healthcare', location: 'Kerala', initials: 'EM', color: '#E11D48', logo: '/images/clients/ems.jpg' },
  { name: 'Edhini Ayurveda Hospital', category: 'Healthcare', location: 'Kerala', initials: 'EA', color: '#15803D', logo: '/images/clients/edhini.jpg' },
  { name: 'Ahalia Foundation Eye Hospital', category: 'Healthcare', location: 'Kerala', initials: 'AF', color: '#E11D48', logo: '/images/clients/ahalia.jpg' },
];

export const industryVerticalsData: IndustryVertical[] = [
  { title: 'Retail & Shopping Malls', description: 'Illuminated storefront signage and suspended brand displays for luxury retail environments.', image: '/images/mall_atrium_1786602880179.jpg', projectsCount: '500+ Showrooms' },
  { title: 'Restaurants & Cafes', description: 'Custom LED neon flex quote signs, warm ambient entry logos, and clear acrylic menu boards.', image: '/images/restaurant_cafe_sign_v2.jpg', projectsCount: '350+ Outlets' },
  { title: 'Corporate Offices', description: '3D frosted acrylic logo signage on the reception feature wall and modern glass-walled office environments.', image: '/images/corporate_hq_1786601930160.jpg', projectsCount: '250+ Offices' },
  { title: 'Healthcare & Clinics', description: 'Directional wayfinding signs and illuminated clinic brand logos mounted on clean white walls.', image: '/images/hospital_reception_1786602242632.jpg', projectsCount: '120+ Healthcare Centers' },
  { title: 'Hotels & Hospitality', description: 'Elegant backlit brass hotel name signage and warm luxury lighting for high-end hospitality.', image: '/images/hotel_lobby_1786602383612.jpg', projectsCount: '180+ Hotels' },
  { title: 'Educational Institutions', description: 'Campus directional signage, auditorium stage banners, and administrative building emblems.', image: '/images/university_campus_1786602695059.jpg', projectsCount: '90+ Campuses' },
  { title: 'Fitness Centers & Gyms', description: 'High-contrast wall graphics, motivational neon quote signs, and exterior LED lightboxes.', image: '/images/fitness_gym_signage.jpg', projectsCount: '140+ Gyms' },
  { title: 'Real Estate & Builders', description: 'Freestanding monument signs with developer branding for high-rise luxury apartments.', image: '/images/luxury_apartment_1786602682364.jpg', projectsCount: '210+ Projects' },
  { title: 'Automotive Services', description: 'Pylon totem towers, showroom glass graphics, and commercial delivery vehicle fleet wraps.', image: '/images/automotive_dealership_1786602715957.jpg', projectsCount: '80+ Dealerships' },
  { title: 'Banking & Finance', description: 'ATM kiosk illuminated wraps, branch facade flex banners, and illuminated logo cubes.', image: '/images/banking_finance_signage.jpg', projectsCount: '300+ Branches' },
  { title: 'Event Management', description: 'Turnkey exhibition stall fabrication, backdrop rigging, tension fabric displays, and neon stages.', image: '/images/event_management_stage.jpg', projectsCount: '450+ Events' },
  { title: 'Manufacturing & Industrial', description: 'Heavy steel outdoor entrance signs, safety hazard signages, and factory building letters.', image: '/images/manufacturing_industrial_sign.jpg', projectsCount: '160+ Factories' },
];
