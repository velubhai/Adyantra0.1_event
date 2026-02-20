export interface Coordinator {
  name: string
  contact: string
}

export interface EventItem {
  id: string
  name: string
  slogan: string
  image: string
  description: string
  rules: string[]
  venue: string
  coordinator: Coordinator
  googleFormLink: string
}

export interface EventCategory {
  id: string
  title: string
  image: string
  description: string
  events: EventItem[]
}

export const homeContent = {
  instructions: [
    "Registration fee is Rs.200 per participant (covers 2 events).",
    "A kit will be provided to all participants.",
    "No restrictions regarding participation. Events held simultaneously.",
    "College ID card is mandatory.",
    "Lunch and refreshments provided.",
    "Participation certificates for everyone.",
    "Open to all UG and PG students.",
  ],
  highlights: [
    "Registration Fee Rs. 200 (Lunch Included)",
    "30K Worth of Cash Gifts",
    "Crown of Excellence Award",
  ],
}

export const adyantraEvents: EventCategory[] = [
  {
    id: "paper-presentation",
    title: "Paper Presentation",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070",
    description: "Trends in Commerce, CS, and Multimedia.",
    events: [
      {
        id: "paper-pres",
        name: "Paper Presentation",
        slogan: "Ideas That Inspire.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
        description: "Present topics related to latest trends.",
        rules: ["Max 2 participants per team.", "Time limit: 8 mins + 2 mins Q&A.", "Submit abstract before deadline."],
        venue: "Seminar Hall A",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "https://forms.gle/kvAaMPDJyQVW1Y8z6",
      },
    ],
  },
  {
    id: "management",
    title: "Management Events",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000",
    description: "Business acumen and strategy.",
    events: [
      {
        id: "brand-buzz",
        name: "Brand Buzz (Adzap)",
        slogan: "Sell it like you own it!",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070",
        description: "Create the most entertaining advertisement.",
        rules: ["Team size: 4-5 members.", "Props allowed.", "No vulgarity."],
        venue: "Classroom 101",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "venture-vista",
        name: "Venture Vista (Business Plan)",
        slogan: "Pitch Perfect.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
        description: "Pitch your startup idea.",
        rules: ["Team size: 2-3 members.", "PPT mandatory."],
        venue: "Conference Room",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "mind-spread",
        name: "Mind Spread (Business Quiz)",
        slogan: "Knowledge is Power.",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070",
        description: "Quiz on global business trends.",
        rules: ["Team of 2.", "No mobile phones."],
        venue: "Main Audi",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "quest-hunt",
        name: "Quest Hunt (Treasure Hunt)",
        slogan: "Unlock the Mystery.",
        image: "https://images.unsplash.com/photo-1585507706365-736f73d8a594?q=80&w=2070",
        description: "Solve clues to find the treasure.",
        rules: ["Team of 4.", "Stay within campus."],
        venue: "College Grounds",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
    ],
  },
  {
    id: "cultural",
    title: "Cultural Events",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
    description: "Unleash your artistic soul.",
    events: [
      {
        id: "melodiva",
        name: "Melodiva (Singing)",
        slogan: "Voice of the Soul.",
        image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070",
        description: "Solo or duet singing.",
        rules: ["Time limit: 4 mins.", "Karaoke allowed."],
        venue: "Main Stage",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "rhythmia",
        name: "Rhythmia (Dance)",
        slogan: "Move to the Groove.",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069",
        description: "Group or solo dance battle.",
        rules: ["Time limit: 5 mins.", "Props allowed."],
        venue: "Main Stage",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "corpo-vogue",
        name: "Corpo Vogue (Corporate Walk)",
        slogan: "Walk with Confidence.",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976",
        description: "Fashion walk with corporate theme.",
        rules: ["Formal attire mandatory.", "Team of 6-8."],
        venue: "Ramp Area",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "mr-ms-adyantra",
        name: "Mr. & Ms. Adyantra 2k26",
        slogan: "The Face of the Fest.",
        image: "https://images.unsplash.com/photo-1485230946086-1d99d52b0762?q=80&w=2070",
        description: "Personality and talent hunt.",
        rules: ["3 Rounds: Intro, Talent, Q&A."],
        venue: "Main Audi",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
    ],
  },
  {
    id: "tech",
    title: "Tech Events",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    description: "Bytes, Bugs, and Brains.",
    events: [
      {
        id: "prompter",
        name: "Mr. & Ms. Prompter",
        slogan: "Master the Command.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
        description: "AI Prompt engineering.",
        rules: ["Generate accurate image/text."],
        venue: "Lab 3",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "logic-gates",
        name: "Logic Gates",
        slogan: "Think in Binary.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
        description: "Circuit debugging.",
        rules: ["Solve circuit in min time."],
        venue: "Electronics Lab",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "blind-coding",
        name: "Blind Coding",
        slogan: "Trust Your Fingers.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
        description: "Code with monitor off.",
        rules: ["No syntax errors.", "Time: 20 mins."],
        venue: "CS Lab 1",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
    ],
  },
  {
    id: "media",
    title: "Media Events",
    image: "https://images.unsplash.com/photo-1533227297464-96845562d223?q=80&w=2070",
    description: "Capture the moment.",
    events: [
      {
        id: "meme-craft",
        name: "Meme Craft",
        slogan: "Humor with Creativity.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=2070",
        description: "Poster/Meme making.",
        rules: ["Theme given on spot."],
        venue: "Drawing Hall",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "frame-fusion",
        name: "Frame Fusion (Short Film)",
        slogan: "Stories in Motion.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070",
        description: "Short film screening.",
        rules: ["Max 10 mins.", "Submit in Pen drive."],
        venue: "AV Room",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "snap-saga",
        name: "Snap Saga (Photography)",
        slogan: "Focus on the Good.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000",
        description: "Event photography.",
        rules: ["Photos taken within campus."],
        venue: "Campus Wide",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
    ],
  },
  {
    id: "sport",
    title: "Sport Events",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070",
    description: "Play Hard, Win Big.",
    events: [
      {
        id: "box-cricket",
        name: "Box Cricket",
        slogan: "Smash it out of the Box.",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067",
        description: "Underarm cricket.",
        rules: ["6 players.", "5 Overs."],
        venue: "Sports Ground",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "football-penalty",
        name: "Football Penalty",
        slogan: "One Kick, One Goal.",
        image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070",
        description: "Penalty shootout.",
        rules: ["5 shots per team."],
        venue: "Football Court",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
      {
        id: "free-fire",
        name: "Free Fire",
        slogan: "Booyah!",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
        description: "Mobile gaming.",
        rules: ["Squad mode.", "Bring own mobile."],
        venue: "Gaming Zone",
        coordinator: { name: "Name", contact: "Ph.no" },
        googleFormLink: "",
      },
    ],
  },
]

export function getEventById(categoryId: string, eventId: string): EventItem | undefined {
  const category = adyantraEvents.find((c) => c.id === categoryId)
  return category?.events.find((e) => e.id === eventId)
}

export function getCategoryById(categoryId: string): EventCategory | undefined {
  return adyantraEvents.find((c) => c.id === categoryId)
}

export function getAllEvents(): { category: EventCategory; event: EventItem }[] {
  return adyantraEvents.flatMap((category) =>
    category.events.map((event) => ({ category, event }))
  )
}
