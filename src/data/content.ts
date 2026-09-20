export const site = {
  name: "Kiruthickrosan K",
  shortName: "KR",
  role: "Software Developer",
  email: "kiruthickrosan1developer@gmail.com", // REPLACE
  location: "India",
  resume: "/resume/Kiruthickrosan-Resume.pdf",
  roles: ["Backend Developer", "Java Developer", "Problem Solver", "SDE Aspirant"],
};

export const socials = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/kiruthickrosan-k/" },
  { label: "GitHub", icon: "github", href: "https://github.com/Kiruthickrosan" },
  { label: "LeetCode", icon: "leetcode", href: "https://leetcode.com/u/kiruthickrosan/" },
  {
    label: "HackerRank",
    icon: "hackerrank",
    href: "https://www.hackerrank.com/profile/kiruthickrosan41",
  },
  { label: "Email", icon: "mail", href: `mailto:${site.email}` },
];

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  github: string;
  demo: string;
  featured?: boolean;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  results: string;
};

export const projects: Project[] = [
  {
    slug: "fintrack",
    title: "FinTrack",
    eyebrow: "Smart finance platform",
    image: "",
    featured: true,
    summary:
      "A focused expense, income, and investment tracker designed around clear financial decisions.",
    description:
      "A responsive finance workspace bringing transaction management, portfolio tracking, dashboards, and everyday CRUD flows into one coherent product.",
    stack: ["React", "JavaScript", "REST APIs", "PWA"],
    features: [
      "Expense & income tracking",
      "Investment overview",
      "Financial dashboard",
      "PWA & Android experience",
    ],
    github: "https://github.com/REPLACE_ME/fintrack",
    demo: "https://REPLACE_ME.example.com",
    problem:
      "Personal finance data is often fragmented across tools and difficult to review at a glance.",
    solution:
      "FinTrack consolidates day-to-day transactions and investments into a single, responsive workflow.",
    architecture: "Responsive client → REST API → application services → persistent data store.",
    challenges:
      "Maintaining consistent financial state across editing, filtering, charts, and offline-aware experiences.",
    results: "Project outcomes and measured impact are awaiting verified data.",
  },
  {
    slug: "youtube-rag",
    title: "YouTube RAG Chat",
    eyebrow: "Retrieval system",
    image: "",
    summary:
      "Transcript processing and semantic retrieval for context-aware answers grounded in video content.",
    description:
      "A question-answering workflow that indexes video transcripts, retrieves relevant context, and produces grounded responses.",
    stack: ["RAG", "Semantic Search", "OpenAI API", "YouTube"],
    features: ["Transcript processing", "Context retrieval", "Semantic search", "Grounded answers"],
    github: "https://github.com/REPLACE_ME/youtube-rag",
    demo: "https://REPLACE_ME.example.com",
    problem: "Long videos make it difficult to find and revisit precise technical information.",
    solution: "Index transcripts and retrieve relevant sections before generating each answer.",
    architecture: "Video transcript → chunks → embeddings → vector retrieval → grounded response.",
    challenges: "Chunk quality, context relevance, and answer grounding.",
    results: "Project outcomes are awaiting verified data.",
  },
  {
    slug: "ai-travel-agent",
    title: "AI Travel Agent",
    eyebrow: "Planning assistant",
    image: "",
    summary:
      "An AI-assisted itinerary system for hotels, restaurants, routes, and day-by-day planning.",
    description:
      "A planning experience that turns travel preferences into a structured itinerary with practical recommendations.",
    stack: ["AI", "REST APIs", "Route Planning"],
    features: [
      "Itinerary planning",
      "Hotel suggestions",
      "Restaurant discovery",
      "Route optimization",
    ],
    github: "https://github.com/REPLACE_ME/ai-travel-agent",
    demo: "https://REPLACE_ME.example.com",
    problem: "Travel planning requires coordinating scattered information and constraints.",
    solution: "Combine intent-driven planning with structured recommendation tools.",
    architecture: "User intent → planner → travel data services → itinerary composer.",
    challenges: "Balancing useful detail, route efficiency, and changing preferences.",
    results: "Project outcomes are awaiting verified data.",
  },
  {
  slug: "personal-portfolio",
  title: "Personal Portfolio",
  eyebrow: "Animated developer portfolio",
  image: "/images/portfolio-cover.png",

  summary:
    "A modern, interactive developer portfolio showcasing my projects, technical skills, coding profiles, and professional experience.",

  description:
    "A responsive personal portfolio designed to present my software development journey through smooth animations, interactive 3D visuals, project showcases, skills, articles, and professional contact links.",

  stack: [
    "React",
    "Framer Motion",
    "Three.js",
    "JavaScript",
    "CSS"
  ],

  features: [
    "Interactive 3D hero",
    "Smooth page transitions",
    "Animated project showcase",
    "Skills and technology icons",
    "Coding profile links",
    "Responsive design",
    "Downloadable resume",
    "Contact integration"
  ],

  github: "https://github.com/Kiruthickrosan/prism-code-port",
  demo: "YOUR_LIVE_PORTFOLIO_URL",

  problem:
    "A developer portfolio needs to communicate technical skills, projects, and experience while remaining visually engaging, responsive, and easy to navigate.",

  solution:
    "Built an interactive React-based portfolio with Framer Motion animations, Three.js 3D visuals, responsive layouts, centralized technology icons, and dedicated sections for projects, skills, articles, coding profiles, and contact information.",

  architecture:
    "React application → reusable components → page sections → Framer Motion animations + Three.js visual layer → responsive CSS",

  challenges:
    "Balancing rich animations with usability, maintaining responsive layouts across screen sizes, integrating interactive 3D elements, and keeping the visual design professional rather than overly complex.",

  results:
    "Created a responsive personal portfolio that presents projects, technical skills, coding profiles, professional experience, and contact information through an interactive developer-focused experience."
}
];

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Java", icon: "java", note: "Backend services and object-oriented systems" },
      {
        name: "JavaScript",
        icon: "javascript",
        note: "Interactive products and server applications",
      },
      { name: "SQL", icon: "sql", note: "Data modeling and relational queries" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", note: "Component-driven interfaces" },
      { name: "HTML5", icon: "html5", note: "Semantic web structure" },
      { name: "CSS3", icon: "css3", note: "Responsive visual systems" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs", note: "API and service development" },
      { name: "Express.js", icon: "express", note: "RESTful application layers" },
      { name: "REST APIs", icon: "api", note: "Resource-oriented interfaces" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "mongodb", note: "Document-oriented storage" },
      { name: "MySQL", icon: "mysql", note: "Relational data systems" },
      { name: "Oracle", icon: "oracle", note: "Enterprise relational databases" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git", note: "Version control workflows" },
      { name: "GitHub", icon: "github", note: "Collaboration and delivery" },
      { name: "VS Code", icon: "vscode", note: "Development environment" },
      { name: "Postman", icon: "postman", note: "API testing and documentation" },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "Data Structures", icon: "data-structures", note: "Efficient data organization" },
      { name: "Algorithms", icon: "algorithms", note: "Complexity-aware problem solving" },
      { name: "OOP", icon: "oop", note: "Maintainable object design" },
      { name: "DBMS", icon: "dbms", note: "Database systems and transactions" },
      { name: "REST APIs", icon: "api", note: "Resource-oriented interfaces" },
    ],
  },
];

export const articles = [
  {
    title: "My DSA Revision Journey",
    topic: "Problem Solving",
    date: "Date to be added",
    time: "Reading time TBD",
    tags: ["DSA", "Learning"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7506263847457112064/",
    description:
      "A practical system for revisiting patterns, retaining concepts, and improving problem-solving consistency.",
  },
  {
    title: "Binary Search Beyond the Template",
    topic: "Algorithms",
    date: "Date to be added",
    time: "Reading time TBD",
    tags: ["Binary Search", "Java"],
    href: "https://www.geeksforgeeks.org/dsa/binary-search/",
    description:
      "Reasoning about boundaries, invariants, and the class of problems binary search can solve.",
  },
  {
    title: "Inside Java HashMap & HashSet",
    topic: "Java",
    date: "Date to be added",
    time: "Reading time TBD",
    tags: ["Java", "Collections"],
    href: "https://www.geeksforgeeks.org/java/difference-between-hashmap-and-hashset/",
    description:
      "A conceptual tour of hashing, collisions, equality, and the choices behind everyday Java collections.",
  },
  {
    title: "Building FinTrack",
    topic: "Engineering",
    date: "Date to be added",
    time: "Reading time TBD",
    tags: ["React", "Architecture"],
    href: "https://REPLACE_ME.example.com/fintrack",
    description:
      "Product and engineering lessons from turning financial workflows into a coherent application.",
  },
];

export const profiles = [
  {
    platform: "LeetCode",
    username: "@Kiruthickrosan",
    icon: "code",
    blurb: "Problem Solving • DSA • Competitive Programming",
    href: "https://leetcode.com/u/kiruthickrosan/",
  },
  {
    platform: "HackerRank",
    username: "@kiruthickrosan41",
    icon: "terminal",
    blurb: "Algorithms • Java • Technical Practice",
    href: "https://www.hackerrank.com/profile/kiruthickrosan41",
  },
  {
    platform: "GitHub",
    username: "@Kiruthickrosan K",
    icon: "github",
    blurb: "Projects • Source Code • Engineering Experiments",
    href: "https://github.com/Kiruthickrosan",
  },
];

export const journey = [
  {
    year: "Foundation",
    title: "Computer science fundamentals",
    text: "Built a base in programming, object-oriented design, databases, and software engineering concepts.",
  },
  {
    year: "Practice",
    title: "Data structures & algorithms",
    text: "Developed a consistent problem-solving practice focused on patterns, trade-offs, and clear reasoning.",
  },
  {
    year: "Building",
    title: "Real-world applications",
    text: "Applied those foundations across full-stack systems, API-led products, and AI-assisted workflows.",
  },
  {
    year: "Now",
    title: "Backend engineering focus",
    text: "Deepening Java, scalable service design, data systems, and production-minded engineering.",
  },
];

// Add only verified values here. Null values render as “Add verified metric”.
export const statistics = [
  { label: "DSA problems solved", value: 130 as number | null, suffix: "+" },
  { label: "Major projects", value: 15 as number | null, suffix: "+" },
  { label: "Videos processed", value: 20 as number | null, suffix: "+" },
  { label: "Media annotations", value: 12 as number | null, suffix: "+" },
];
