// Sustainability organization data for the European Green Atlas
// Each category contains organizations with their details

export interface Organization {
  name: string;
  description: string;
  icon: string;
  country: string;
  hq?: string;
  legal?: string;
  link: string;
  addedDate?: string; // ISO date string when the organization was added (YYYY-MM-DD)
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  organizations: Organization[];
}

export const categories: Category[] = [
  {
    id: 'climate-action',
    name: 'Climate Action',
    icon: '🌍',
    color: 'bg-[#22C55E]',
    organizations: [
      {
        name: 'European Climate Foundation',
        description:
          'Leading foundation working to accelerate Europe\'s transition to a climate-neutral society',
        icon: '🌡️',
        country: '🇳🇱',
        link: 'https://europeanclimate.org/',
      },
      {
        name: 'Climate-KIC',
        description:
          'EU\'s largest public-private innovation partnership focused on climate innovation',
        icon: '💡',
        country: '🇪🇺',
        link: 'https://www.climate-kic.org/',
      },
    ],
  },
  {
    id: 'circular-economy',
    name: 'Circular Economy',
    icon: '♻️',
    color: 'bg-[#10B981]',
    organizations: [
      {
        name: 'Ellen MacArthur Foundation',
        description:
          'Leading organization accelerating the transition to a circular economy',
        icon: '🔄',
        country: '🇬🇧',
        link: 'https://ellenmacarthurfoundation.org/',
      },
    ],
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    icon: '⚡',
    color: 'bg-[#FCD34D]',
    organizations: [
      {
        name: 'WindEurope',
        description:
          'Leading European wind energy association promoting wind power in Europe',
        icon: '💨',
        country: '🇧🇪',
        link: 'https://windeurope.org/',
      },
      {
        name: 'SolarPower Europe',
        description:
          'Association representing solar energy sector in Europe',
        icon: '☀️',
        country: '🇧🇪',
        link: 'https://www.solarpowereurope.org/',
      },
    ],
  },
  {
    id: 'sustainable-mobility',
    name: 'Sustainable Mobility',
    icon: '🚊',
    color: 'bg-[#3B82F6]',
    organizations: [
      {
        name: 'Transport & Environment',
        description:
          'European federation for clean transport and sustainable mobility',
        icon: '🚗',
        country: '🇧🇪',
        link: 'https://www.transportenvironment.org/',
      },
    ],
  },
  {
    id: 'esg-governance',
    name: 'ESG & Governance',
    icon: '📊',
    color: 'bg-[#8B5CF6]',
    organizations: [
      {
        name: 'Eurosif',
        description:
          'European Sustainable Investment Forum promoting sustainable finance',
        icon: '💼',
        country: '🇧🇪',
        link: 'https://www.eurosif.org/',
      },
    ],
  },
  {
    id: 'social-impact',
    name: 'Social Impact & Inclusion',
    icon: '🤝',
    color: 'bg-[#EC4899]',
    organizations: [
      {
        name: 'Ashoka Europe',
        description:
          'Network of social entrepreneurs creating systemic change across Europe',
        icon: '✨',
        country: '🇪🇺',
        link: 'https://www.ashoka.org/en-eu',
      },
      {
        name: 'Social Entrepreneurship Network Deutschland',
        description:
          'German network promoting social entrepreneurship and social innovation',
        icon: '🌟',
        country: '🇩🇪',
        link: 'https://www.send-ev.de/',
      },
    ],
  },
  {
    id: 'green-tech',
    name: 'Green Technology',
    icon: '💻',
    color: 'bg-[#06B6D4]',
    organizations: [
      {
        name: 'Green Digital Coalition',
        description:
          'EU initiative for digital technology solutions supporting Green Deal goals',
        icon: '🖥️',
        country: '🇪🇺',
        link: 'https://green-digital-coalition.ec.europa.eu/',
      },
    ],
  },
  {
    id: 'sustainable-finance',
    name: 'Sustainable Finance',
    icon: '💰',
    color: 'bg-[#14B8A6]',
    organizations: [
      {
        name: 'European Investment Bank',
        description:
          'EU\'s climate bank providing financing for sustainable projects',
        icon: '🏦',
        country: '🇱🇺',
        link: 'https://www.eib.org/',
      },
    ],
  },
  {
    id: 'biodiversity',
    name: 'Biodiversity & Conservation',
    icon: '🦋',
    color: 'bg-[#84CC16]',
    organizations: [
      {
        name: 'BirdLife Europe',
        description:
          'Partnership of conservation organizations protecting wild birds and habitats',
        icon: '🐦',
        country: '🇧🇪',
        link: 'https://www.birdlife.org/europe-and-central-asia/',
      },
    ],
  },
  {
    id: 'sustainable-agriculture',
    name: 'Sustainable Agriculture',
    icon: '🌾',
    color: 'bg-[#A3E635]',
    organizations: [
      {
        name: 'IFOAM Organics Europe',
        description:
          'European umbrella organization for organic food and farming',
        icon: '🥬',
        country: '🇧🇪',
        link: 'https://www.organicseurope.bio/',
      },
    ],
  },
  {
    id: 'research-education',
    name: 'Research & Education',
    icon: '📚',
    color: 'bg-[#7C3AED]',
    organizations: [
      {
        name: 'European Environment Agency',
        description:
          'EU agency providing independent information on the environment',
        icon: '🔬',
        country: '🇩🇰',
        link: 'https://www.eea.europa.eu/',
      },
      {
        name: 'Potsdam Institute for Climate Impact Research',
        description:
          'Leading research institute for global change, climate impacts and sustainable development',
        icon: '🎓',
        country: '🇩🇪',
        link: 'https://www.pik-potsdam.de/',
      },
    ],
  },
  {
    id: 'eu-policy',
    name: 'EU Policy & Frameworks',
    icon: '🇪🇺',
    color: 'bg-[#003399]',
    organizations: [
      {
        name: 'European Commission - Green Deal',
        description:
          'EU\'s roadmap for making Europe climate neutral by 2050',
        icon: '📋',
        country: '🇪🇺',
        link: 'https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal_en',
      },
    ],
  },
  {
    id: 'waste-management',
    name: 'Waste & Resource Management',
    icon: '🗑️',
    color: 'bg-[#78716C]',
    organizations: [
      {
        name: 'Zero Waste Europe',
        description:
          'Network of communities working towards eliminating waste in Europe',
        icon: '♻️',
        country: '🇧🇪',
        link: 'https://zerowasteeurope.eu/',
      },
    ],
  },
  {
    id: 'water-management',
    name: 'Water & Ocean Conservation',
    icon: '💧',
    color: 'bg-[#0EA5E9]',
    organizations: [
      {
        name: 'Surfrider Foundation Europe',
        description:
          'NGO dedicated to protecting oceans, waves, and beaches across Europe',
        icon: '🌊',
        country: '🇫🇷',
        link: 'https://surfrider.eu/',
      },
    ],
  },
  {
    id: 'funding-grants',
    name: 'Funding & Grant Programs',
    icon: '💶',
    color: 'bg-[#F59E0B]',
    organizations: [
      {
        name: 'LIFE Programme',
        description:
          'EU\'s funding instrument for environment and climate action projects',
        icon: '🎯',
        country: '🇪🇺',
        link: 'https://cinea.ec.europa.eu/programmes/life_en',
      },
      {
        name: 'Horizon Europe',
        description:
          'EU\'s key funding programme for research and innovation including green tech',
        icon: '🔬',
        country: '🇪🇺',
        link: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en',
      },
    ],
  },
];
