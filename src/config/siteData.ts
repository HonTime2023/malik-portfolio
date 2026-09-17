export const siteConfig = {
  name: "Malik Pelumi Bello",
  shortName: "Malik Pelumi Bello",
  aiName: "Time",
  cvUrl: "/files/Malik-Pelumi-Bello-CV.pdf",
  role: "AI / ML Engineer",
  company: "Wema Bank Plc",
  companyDetail: "Data Analytics & AI Team",
  location: "Lagos, Nigeria",
  email: "belloayopelumi@gmail.com",
  tagline:
    "Turning uncertainty into advantage through data, models, and judgment.",
  subline:
    "Too much data and big AI but no clarity? I design, deploy, and scale machine learning and GenAI systems that turn messy, real-world data into decisions people can act on.",
  philosophy: [
    { text: "Data is", highlight: "Everywhere." },
    { text: "Advantage is", highlight: "Rare." },
    { text: "I Build", highlight: "the Difference." },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/malik-bello-data-scientist/",
    github: "https://github.com/HonTime2023",
    kaggle: "https://www.kaggle.com/bellomalik/code",
    medium: "https://medium.com/@belloayopelumi",
    researchgate: "https://www.researchgate.net/profile/Malik-Bello",
    orcid: "https://orcid.org/0009-0004-0906-2731",
    youtube: "https://www.youtube.com/@BelloMalik-Data",
    linktree: "https://linktr.ee/bellomalik",
    babskenky: "https://www.babskenky.com/",
  },
};

// Manually-curated for now — swap for a live Spotify "currently playing" call
// once the Spotify Developer app + OAuth is wired up (see /api/now-playing).
export const nowPlaying = {
  connected: false,
  track: "On Repeat",
  artist: "Playlist syncing soon",
  spotifyUrl: "https://open.spotify.com/",
};

export const metrics = [
  { label: "Years in Applied Data & AI", value: "5+" },
  { label: "Production ML / GenAI Systems Shipped", value: "15+" },
  { label: "Peer-Reviewed & Conference Publications", value: "3" },
  { label: "Core Domain", value: "Fintech · Public Sector · Research" },
];

export const capabilities = [
  {
    title: "Machine Learning Systems",
    desc: "Predictive modelling, classification, forecasting and decision-support engines trained on messy, real-world data.",
    tech: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "Graph Embeddings", "Time Series"],
  },
  {
    title: "Agentic & GenAI Engineering",
    desc: "Retrieval-augmented generation, tool-using agents and multimodal reasoning — including the harness and loop design that makes agents reliable, not just clever.",
    tech: ["Anthropic Claude", "Gemini", "AWS Bedrock", "LangChain", "RAG", "MCP", "Agent Harness Engineering", "Loop Engineering"],
  },
  {
    title: "Cloud & MLOps",
    desc: "Infrastructure-as-code, containerised services and monitored pipelines that take a notebook from idea to production.",
    tech: ["AWS", "Azure", "Terraform", "Docker", "FastAPI / Flask"],
  },
  {
    title: "Data Engineering & Analytics",
    desc: "ETL pipelines, dimensional modelling and BI reporting that keep decision-makers working from a single source of truth.",
    tech: ["SQL", "Power BI", "Tableau", "dbt", "PySpark"],
  },
  {
    title: "Statistics & Research Design",
    desc: "Quasi-experimental design, hypothesis testing and econometrics applied to education, social science and financial data.",
    tech: ["SPSS", "Stata", "Econometrics", "Geospatial Analysis"],
  },
  {
    title: "Optimisation & Graph Engineering",
    desc: "Combinatorial routing, assignment and sequential-decision problems solved with constraint programming, graph structures and reinforcement learning.",
    tech: ["OR-Tools", "GeoPandas", "Mapbox", "Vehicle Routing", "Graph Engineering", "Reinforcement Learning"],
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location: string;
  points: string[];
  current?: boolean;
  transition?: boolean; // links this entry visually to the one before it (a promotion, not a new job)
};

export const experience: ExperienceItem[] = [
  {
    period: "Feb 2026 — Present",
    role: "AI / ML Engineer",
    org: "Wema Bank Plc — Data Analytics & AI Team",
    location: "Marina, Lagos, Nigeria",
    current: true,
    transition: true,
    points: [],
  },
  {
    period: "Mar 2025 — Jan 2026",
    role: "Data Scientist",
    org: "Wema Bank Plc — Data Analytics & AI Team",
    location: "Marina, Lagos, Nigeria",
    points: [],
  },
  {
    period: "May 2024 — Jan 2025",
    role: "Data Analyst",
    org: "Directorate of ICT, Olabisi Onabanjo University",
    location: "Ago Iwoye, Ogun, Nigeria",
    points: [],
  },
  {
    period: "Feb 2024 — Dec 2024",
    role: "Data Science Intern",
    org: "3MTT Nigeria — The Founding Network",
    location: "Osogbo, Osun, Nigeria",
    points: [],
  },
  {
    period: "Jul 2024 — Aug 2024",
    role: "Data Analysis Intern",
    org: "HNG Internship 11",
    location: "Remote, Nigeria",
    points: [],
  },
  {
    period: "Jul 2024 — Aug 2024",
    role: "Tax Analysis Intern",
    org: "KPMG US — Forage Tax Simulation",
    location: "Remote, US",
    points: [],
  },
  {
    period: "Jul 2023 — Feb 2024",
    role: "Graduate Research Assistant",
    org: "Science & Technology Education Dept., Obafemi Awolowo University",
    location: "Ife, Osun, Nigeria",
    points: [],
  },
];

export const teaching = {
  role: "Data Analytics & Business Intelligence Tutor",
  org: "Baskenky",
  url: "https://www.babskenky.com/",
  desc: "Teaching analytics engineering, dbt, SQL, Python, Power BI, and Git/GitHub workflows to aspiring data professionals — translating production data practice into a structured, mentor-led curriculum.",
  topics: ["Analytics Engineering", "dbt", "SQL", "Git & GitHub", "Power BI", "Python for Analysts"],
};

export type Project = {
  name: string;
  category: "AI Engineering" | "ML & Data Science" | "Analytics" | "Research";
  year: string;
  description: string;
  stack: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
  status?: string;
};

export const projectsNote =
  "Every project below is personal work, built and published in my own time. Source code for professional work — including everything built for Wema Bank Plc — is covered by NDA and isn't shown here, though I'm glad to speak to the impact and approach in conversation.";

export const projects: Project[] = [
  {
    name: "AIDER — AI-Driven Emergency Response",
    category: "AI Engineering",
    year: "2025",
    description:
      "A real-time disaster-intelligence system built for Africa. AIDER fuses live weather data, breaking disaster news and satellite imagery, then uses multimodal AI to generate actionable emergency briefs for any location on the continent.",
    stack: ["Flask", "Google Gemini Pro Vision", "OpenWeather API", "Serper.dev", "NASA Earth API"],
    links: [
      { label: "GitHub", url: "https://github.com/HonTime2023/AIDER" },
      { label: "Kaggle Notebook", url: "https://www.kaggle.com/code/bellomalik/aider-bello-malik" },
      { label: "Medium Write-up", url: "https://medium.com/@belloayopelumi/aider-how-i-built-a-real-time-ai-disaster-assistant-for-africa-1964d5fe79c2" },
      { label: "Watch Demo", url: "https://www.youtube.com/watch?v=yAWXHt9sXNg&t=424s" },
    ],
    featured: true,
  },
  {
    name: "Intelligent Document Processing — AWS Bedrock RAG",
    category: "AI Engineering",
    year: "2025",
    description:
      "An end-to-end retrieval-augmented generation pipeline on AWS, built as an AI Engineer Nanodegree capstone: PDFs are ingested into S3, indexed into Aurora Serverless Postgres with pgvector/HNSW, and served through a Bedrock Knowledge Base Agent that reasons over the corpus with Claude — with category-classification prompt validation keeping a heavy-machinery support bot on-topic.",
    stack: ["AWS Bedrock", "Aurora Serverless (pgvector)", "Terraform", "Streamlit", "Claude"],
    links: [
      { label: "GitHub", url: "https://github.com/HonTime2023/Intelligent-Document-Processing-System-with-Amazon-Bedrock" },
    ],
    featured: true,
  },
  {
    name: "Maya — Voice-First AI Companion",
    category: "AI Engineering",
    year: "2026",
    description:
      "A voice-first personal AI assistant running on a single real-time speech pipeline. Maya holds natural conversation while calling out to a live toolbelt — weather, alarms and reminders, health tracking (sleep, water, mood, medication), Spotify playback, Telegram messaging, and an emergency SOS routine with repeating alerts and motion detection.",
    stack: ["Deepgram Voice Agent (STT+TTS)", "GPT-4o-mini", "OpenCV", "Telegram Bot API", "Spotify OAuth"],
    links: [],
    status: "Coming soon — in final packaging for public release",
  },
  {
    name: "ESAAM — Exploratory & Sensitivity Analysis App",
    category: "ML & Data Science",
    year: "2024",
    description:
      "A LightGBM-powered application built during the 3MTT Nigeria fellowship to predict Multi-dimensional Poverty Index (MPI) and quantify how tech-skills training moves the needle on poverty reduction — open-sourced as a knowledge showcase for fellow analysts.",
    stack: ["Python", "LightGBM", "Streamlit", "Sensitivity Analysis"],
    links: [
      { label: "GitHub", url: "https://github.com/HonTime2023/3MTTshowcase" },
      { label: "Full Report", url: "http://bit.ly/4i8dhDn" },
      { label: "Live App", url: "https://bit.ly/3X4Otma" },
    ],
    featured: true,
  },
  {
    name: "Multi-Agent Vehicle Routing (TSP/VRP)",
    category: "ML & Data Science",
    year: "2025",
    description:
      "A real-world variant of the Travelling Salesman Problem: ~3,957 geolocated points assigned across 41 agents, with routes optimised for minimum combined distance and balanced per-agent workload, respecting Earth-curvature distances.",
    stack: ["OR-Tools", "GeoPandas", "Mapbox", "Google Vision", "Tesseract OCR"],
    links: [
      { label: "GitHub", url: "https://github.com/HonTime2023/Traveling-Salesman-Problem-MVP-variant-" },
    ],
  },
  {
    name: "NYC Green Taxi Operations & Demand Intelligence",
    category: "Analytics",
    year: "2024",
    description:
      "A two-part capstone turning 1.73M raw NYC green-taxi trip records (2017–2020) into a dispatcher-ready analytics model: Python cleans and profiles the data, while a SQL Server build/analysis pipeline answers demand, revenue and zone-performance questions for operations decision-making.",
    stack: ["Python", "Pandas", "SQL Server (T-SQL)", "Data Cleaning", "EDA"],
    links: [],
  },
  {
    name: "Nepal Climate Risk & Resilience — \"Before the Water Rises\"",
    category: "ML & Data Science",
    year: "2026",
    description:
      "A data-storytelling app tracing Nepal's climate and disaster risk from 1990 to the 2026 Bhote Koshi flood — from hazard evidence, through exposure and vulnerability, to regression-backed evidence supporting a $100M resilience-fund allocation. Built on NASA POWER, HydroSHEDS, national census, DesInventar/UNDRR and UNDP RAPIDA data.",
    stack: ["Python", "Streamlit", "GeoPandas", "Regression Analysis"],
    links: [],
    featured: true,
  },
  {
    name: "Fellow Data Web-Scraper",
    category: "Analytics",
    year: "2024",
    description:
      "A purpose-built scraping pipeline that collected fellow-level training data from a specialised public database, feeding the dataset later used to train ESAAM's MPI model.",
    stack: ["Python", "Web Scraping", "Data Pipelines"],
    links: [{ label: "GitHub", url: "https://github.com/HonTime2023/Webscrapper" }],
  },
  {
    name: "Indeed Job Market Scraper & Insights",
    category: "Analytics",
    year: "2025",
    description:
      "A proxy-backed scraping pipeline over the Oxylabs API that collects and parses live Indeed job postings, then rolls them up into a cleaned dataset with market insights on roles, locations and demand.",
    stack: ["Python", "Oxylabs API", "Pandas"],
    links: [{ label: "GitHub", url: "https://github.com/HonTime2023/indeed-job-market-scraper" }],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  type: "Journal Article" | "Conference Presentation";
  url?: string;
};

export const publications: Publication[] = [
  {
    title: "Interactivity as a Retention Factor for Learning Biology with the Protégé Effect",
    venue: "Journal of Teaching and Learning, 19(1), 107–130",
    year: "2025",
    type: "Journal Article",
  },
  {
    title: "The Influence of Emigration Potential (Japa Syndrome) on the Teaching Motivation and Teaching Efficacy of Pre-Service Teachers",
    venue: "Sapientia Foundation Journal of Education, Sciences and Gender Studies, 6(3), 235–251",
    year: "2024",
    type: "Journal Article",
  },
  {
    title: "The Influence of Interactivity on the Long-Term Retention Benefits of Learning Biology Concepts with the Protégé Effect",
    venue: "12th International Mardin Artuklu Scientific Researches Conference, Mardin, Türkiye",
    year: "2024",
    type: "Conference Presentation",
  },
];

export const education = [
  {
    period: "Jan 2025 — Jan 2027",
    degree: "M.Sc. Financial Engineering",
    org: "WorldQuant University",
  },
  {
    period: "Feb 2024 — May 2025",
    degree: "Professional Diploma in Data Analytics",
    org: "Baze University, Abuja, Nigeria",
  },
  {
    period: "2023",
    degree: "B.Sc. Ed, Biology — First Class Honours (CGPA 4.83/5.0)",
    org: "Obafemi Awolowo University · Best Graduating Student, Faculty of Education",
  },
];

export type Recommendation = {
  name: string;
  title: string;
  relationship: string;
  quote: string;
  avatar?: string;
};

// Add LinkedIn recommendations here as they come in — shape matches the
// Recommendation type above. Leave empty to show the "coming soon" state.
export const recommendations: Recommendation[] = [];

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
};

export const certifications: Certification[] = [
  { title: "AI Engineer Nanodegree", issuer: "Udacity (AWS-backed)", date: "Nov 2025", url: "https://www.udacity.com/certificate/e/ace6e02-8152-11f0-9d43-3bcb633ee64b" },
  { title: "Certified Data Science Scholar (CDSS)", issuer: "International Institute of Independent Professionals & Scholars (IIIPS)", date: "Oct 2025" },
  { title: "Data Modeling in Power BI", issuer: "Microsoft, via Coursera", date: "Jul 2025", url: "https://coursera.org/verify/GFB3PL0Y8D3H" },
  { title: "Aspire Leaders Program", issuer: "Aspire Institute (Harvard-affiliated faculty)", date: "May 2025" },
  { title: "Microsoft Certified: Azure AI Engineer Fundamentals (AI-900)", issuer: "Microsoft" },
  { title: "AWS Introduction to AI", issuer: "Amazon Web Services" },
  { title: "Statistical Consulting", issuer: "Dataville — coursework in consulting practice, ethics, billing and statistical software packages" },
];

export type Community = {
  title: string;
  issuer: string;
  url?: string;
};

export const communities: Community[] = [
  { title: "Registered Data Scientist", issuer: "Data Science Nigeria (DSN/AIPlus/2025/44220)" },
  { title: "Registered Data Analyst", issuer: "Nigerian Society of Data Analysts & BI Experts (NSDABIE)" },
  { title: "Registered Teacher", issuer: "Teachers' Registration Council of Nigeria (TRCN; OS/R/07203)" },
  { title: "Masakhane", issuer: "Grassroots African NLP research community", url: "https://github.com/masakhane-io/masakhane-community" },
  { title: "ML Collective", issuer: "Open, global machine-learning research community", url: "https://mlcollective.org/" },
  { title: "Deep Learning Indaba", issuer: "Africa's annual machine-learning & AI community gathering", url: "https://deeplearningindaba.com/" },
];

export const kaggleBadges = [
  "Completed 5-Day Gen AI Intensive (Kaggle × Google)",
  "Python Coder",
  "Kaggle Community Member",
  "2 Years on Kaggle",
];

export const awards = [
  "2024 OAU Star Award of Excellence — exceptional academic performance",
  "2024 Best Debater, MTG NYSC Rivers State Inter-Platoon Debate Competition",
  "2023 Best Graduating Student (Summa Cum Laude), Faculty of Education, Obafemi Awolowo University",
  "2023 Chief Dr (Mrs) Oluremi Tinubu Prize — Best Graduating Student in STE Biology, OAU",
  "2023 Babs Fafunwa Educational Foundation Award",
  "2023 Departmental Association Award of Leadership and Academic Excellence",
  "2021 & 2022 Two-time Awardee, Aliu Abdul Kabir (AAF) Merit Scholarship",
  "2021 UNIFEMGA Undergraduates' Merit Scholarship",
];

export type VolunteeringItem = {
  period: string;
  role: string;
  org: string;
  points: string[];
};

export const volunteering: VolunteeringItem[] = [
  {
    period: "Jul 2024 — Present",
    role: "Data Analyst & Cohort Secretary",
    org: "HAVEK Leadership Academy",
    points: [
      "Built an assessment framework for scholars' graduation criteria and mentor performance.",
      "Led a full organisational capacity analysis using USAID's assessment guide.",
    ],
  },
  {
    period: "May 2024 — Present",
    role: "Research Lead & Interim Secretary",
    org: "Instride Pathways Youth Foundation",
    points: [
      "Part of the leadership team on Voice Africa, the foundation's flagship initiative.",
      "Led a team comparing Logistic Regression, SVM and XGBoost on health datasets.",
      "Coordinated data gathering across private secondary schools for the CIAY sensitisation programme.",
    ],
  },
  {
    period: "Oct 2024 — Present",
    role: "Active Member",
    org: "Humanity First Foundation",
    points: [
      "Planning committee member and keynote speaker for \"Pad-Up-A-Girl\" — reached 1,000+ students across two schools with sanitary pads and menstrual health education.",
    ],
  },
  {
    period: "Present",
    role: "Data Analysis Tutor",
    org: "The Ireti Foundation",
    points: ["Teaching data analysis fundamentals as part of the foundation's digital literacy programme."],
  },
];

export type ResearchInterest = {
  title: string;
  description: string;
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Graph & Network Models for African Trade and Economic Systems",
    description:
      "How relational, network-based machine learning — beyond flat tabular models — can capture the way African commodity and trade systems actually move together, especially under climate and macroeconomic shocks. Early-stage, ongoing work.",
  },
  {
    title: "Machine Learning for Financial Risk & Decision-Making",
    description:
      "Applying predictive modelling and econometrics to banking and fintech risk problems — bridging his Financial Engineering training with production ML practice in a live banking environment.",
  },
  {
    title: "Learning Science & the Protégé Effect",
    description:
      "Peer-reviewed research on interactivity and the Protégé Effect (teaching-to-learn) as retention factors in biology education — the original research thread his academic career started from.",
  },
  {
    title: "AI for Public Sector & Social Impact",
    description:
      "Applying geospatial analysis, forecasting and NLP to public-interest problems — election-integrity detection, flood prediction, and poverty-index modelling among them.",
  },
];

export const domainFocus = ["Banking & Fintech", "Financial Engineering", "Economics", "Biology & Health", "Public Sector"];

export type Dataset = {
  title: string;
  description: string;
  url?: string;
};

// Public datasets he's published for open use — empty until the first one ships.
export const datasets: Dataset[] = [];

export type OpenSourceContribution = {
  project: string;
  description: string;
  url?: string;
};

// Contributions to others' open-source projects — coming soon.
export const openSourceContributions: OpenSourceContribution[] = [];

export type CarouselIcon = "film" | "book" | "mic" | "shield" | "star" | "footprints";

export type CarouselItem = {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: CarouselIcon;
  url?: string;
};

export const hobbies = {
  intro:
    "Outside the notebooks and dashboards — the things that actually run in the background.",
  movies: [
    { title: "Foundation", subtitle: "Apple TV+ series" },
    { title: "The 100", subtitle: "TV series" },
    { title: "The Imitation Game", subtitle: "Film" },
    { title: "Good Will Hunting", subtitle: "Film" },
    { title: "The Theory of Everything", subtitle: "Film" },
    { title: "The Boy Who Harnessed the Wind", subtitle: "Film" },
    { title: "Green Lantern", subtitle: "Film" },
    { title: "Doctor Strange", subtitle: "Film" },
    { title: "Avengers: Endgame", subtitle: "Film" },
  ] as CarouselItem[],
  relax: [
    { title: "Max Amini", subtitle: "Stand-up comedy", icon: "mic" },
    { title: "Manchester City", subtitle: "Football club", icon: "shield" },
    { title: "Lionel Messi", subtitle: "The GOAT", icon: "star" },
    { title: "Taking Walks", subtitle: "Thinking time", icon: "footprints" },
    { title: "Writing Poems", subtitle: "Putting thoughts to page", icon: "book" },
  ] as CarouselItem[],
  books: [
    { title: "Ikigai", subtitle: "Héctor García & Francesc Miralles" },
    { title: "Atomic Habits", subtitle: "James Clear" },
    { title: "Discipline Is Destiny", subtitle: "Ryan Holiday" },
    { title: "Zero to One", subtitle: "Peter Thiel" },
    { title: "The Hundred-Page Machine Learning Book", subtitle: "Andriy Burkov" },
    { title: "Deep Learning", subtitle: "Goodfellow, Bengio & Courville" },
  ] as CarouselItem[],
};
