export interface ProjectItem {
  id: string;
  title: string;
  category: 'LED Signage' | 'Indoor' | 'Outdoor' | 'Printing' | 'Custom Works';
  client: string;
  location: string;
  year: string;
  image: string;
  description: string;
  specs: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-koyilatt',
    title: 'Outdoor Flex Billboard Installation',
    category: 'Outdoor',
    client: 'Koyilatt Gold & Diamonds',
    location: 'Kerala Highway',
    year: '2026',
    image: '/images/billboard_koyilatt.jpg',
    description: 'A massive highway hoarding installed on a heavy-duty iron structure, featuring high-quality flex printing for maximum outdoor visibility.',
    specs: ['Outdoor Flex Printing', 'Structural Fabrication', 'Weather Resistant'],
  },
  {
    id: 'proj-diya',
    title: 'Highway Hoarding Print & Execution',
    category: 'Outdoor',
    client: 'Diya Gold & Diamonds',
    location: 'City Limits',
    year: '2026',
    image: '/images/billboard_diya.jpg',
    description: 'Wide-angle installation of a premium flex print advertisement on a city hoarding, ensuring vibrant color reproduction under natural light.',
    specs: ['Premium Flex', 'Large Format Printing', 'Turnkey Installation'],
  },
  {
    id: 'proj-vedhika',
    title: 'Wedding Mall Promotional Hoarding',
    category: 'Outdoor',
    client: 'Vedhika Wedding Mall',
    location: 'Mukkam Bypass',
    year: '2026',
    image: '/images/billboard_vedhika.jpg',
    description: 'Large-scale outdoor flex billboard installation showcasing rich, vibrant wedding colors with sharp text legibility for fast-moving traffic.',
    specs: ['Solvent Printing', 'Iron Structure Mount', 'High Visibility'],
  },
  {
    id: 'proj-1',
    title: 'Professional LED 3D Letter Signage',
    category: 'LED Signage',
    client: 'Corporate Client',
    location: 'Kerala',
    year: '2025',
    image: '/images/gallery_led_3d.jpg',
    description: 'Illuminated 3D golden brass channel letters with warm white backlit LED halo glow.',
    specs: ['3D Brass Channel Letters', 'LED Halo Glow', 'Twilight Ambience'],
  },
  {
    id: 'proj-2',
    title: 'Outdoor Commercial Building Signage',
    category: 'Outdoor',
    client: 'Shopping Complex',
    location: 'Kerala',
    year: '2025',
    image: '/images/gallery_outdoor_facade.jpg',
    description: 'Massive LED illuminated 3D signboard mounted on a sleek dark grey ACP facade.',
    specs: ['LED Illuminated 3D', 'ACP Facade', 'High Detail'],
  },
  {
    id: 'proj-3',
    title: 'Indoor Corporate & Reception Signage',
    category: 'Indoor',
    client: 'Corporate HQ',
    location: 'Kerala',
    year: '2025',
    image: '/images/gallery_indoor_corporate.jpg',
    description: 'Layered acrylic and brushed stainless steel company logo on a slatted wood panel wall.',
    specs: ['Layered Acrylic', 'Brushed Stainless Steel', 'Accent Downlighting'],
  },
  {
    id: 'proj-4',
    title: 'Large Format UV Printing Project',
    category: 'Printing',
    client: 'Design Studio',
    location: 'Kerala',
    year: '2025',
    image: '/images/gallery_uv_print.jpg',
    description: 'Vibrant, high-definition UV flatbed print on a glossy acrylic sheet.',
    specs: ['UV Flatbed Print', 'Glossy Acrylic', 'Scratch-resistant Finish'],
  },
  {
    id: 'proj-5',
    title: 'Custom Laser Cut & Jali Screen Works',
    category: 'Custom Works',
    client: 'Luxury Brand',
    location: 'Kerala',
    year: '2025',
    image: '/images/gallery_jali_cut.jpg',
    description: 'Intricate geometric laser-cut brass metal Jali screen panel for luxury interior partition.',
    specs: ['Laser-cut Brass', 'Jali Screen Panel', 'Geometric Patterns'],
  },
  {
    id: 'proj-6',
    title: 'Custom Memento & Acrylic Trophy',
    category: 'Custom Works',
    client: 'Corporate Client',
    location: 'Kerala',
    year: '2025',
    image: '/images/gallery_acrylic_trophy.jpg',
    description: 'Custom-crafted crystal clear acrylic awards with precision laser-engraved gold lettering.',
    specs: ['Crystal Clear Acrylic', 'Laser-engraved Gold', 'Black Reflective Base'],
  },
];
