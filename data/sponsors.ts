export interface Sponsor {
  name: string
  logo: string
}

export interface SponsorTier {
  id: string
  title: string
  sponsors: Sponsor[]
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "sponsors",
    title: "Sponsors",
    sponsors: [
      // Add your sponsor logos here
      // { name: "Company Name", logo: "/images/sponsors/company.png" },
    ],
  },
  {
    id: "co-sponsors",
    title: "Co-Sponsors",
    sponsors: [],
  },
  {
    id: "supported-by",
    title: "Supported By",
    sponsors: [],
  },
  {
    id: "organised-by",
    title: "Organised By",
    sponsors: [],
  },
]
