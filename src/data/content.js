export const profile = {
  name: "Etienne Tuyihamye",
  roles: [
    "Software Engineer",
    "AI Engineer",
    "Backend Developer",
    "IoT Builder",
    "Tech Entrepreneur",
  ],
  tagline:
    "I design and build scalable, production-ready systems from distributed backends and AI services to embedded IoT devices with a vision of creating globally competitive technology from Africa.",
  location: "Kigali, Rwanda",
  email: "etiennetuyihamye@gmail.com",
  phones: [
    { label: "+250 782 556 011", whatsapp: "https://wa.me/250782556011" },
    { label: "+250 724 007 524", whatsapp: "https://wa.me/250724007524" },
  ],
  github: "https://github.com/etienne0114",
  linkedin: "https://www.linkedin.com/in/etienne-tuyihamye-864565417",
  resumeUrl: "/resume.html",
};

export const about = {
  paragraphs: [
    "I hold a Bachelor's degree in Information Systems from the University of Rwanda, School of ICT, and I am a Software Engineer, AI Engineer and Technology Entrepreneur. I believe technology should improve people's lives, empower businesses and create opportunities particularly across Africa.",
    "I am driven by curiosity. Rather than learning only how to use frameworks, I study the principles underneath them: how HTTP really works, how databases store and index data, how distributed systems stay consistent, how authentication protocols protect users, how compilers and runtimes execute code. Starting from fundamentals is how I move from tutorials to production-ready engineering.",
    "I believe great products begin with strong system design, not with writing code immediately. I enjoy understanding how modules communicate, how APIs interact, and how simple architectures evolve into enterprise-grade platforms. That systems-thinking mindset shapes every project I build from social platforms and translation APIs to GPU runtimes and embedded controllers.",
  ],
  education: [
    {
      school: "University of Rwanda — School of ICT",
      credential: "Bachelor of Science in Information Systems",
      period: "Graduated",
      detail:
        "Software Engineering, Systems Analysis & Design, Database Systems, Computer Networks, Artificial Intelligence, Operating Systems, Web Technologies, IS Management, Software Project Management.",
    },
    {
      school: "GS Muhura",
      credential: "A-Level: Mathematics, Computer Science & Economics (MCE)",
      period: "Completed",
      detail:
        "Built the analytical foundation and passion for technology that led me into software engineering.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    icon: "{ }",
    items: ["Python", "JavaScript", "TypeScript", "Dart", "C++", "PHP", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "⚙",
    items: ["FastAPI", "Flask", "Django", "Node.js", "Express.js", "REST API design", "Authentication & RBAC", "WebSockets"],
  },
  {
    title: "Frontend & Mobile",
    icon: "▢",
    items: ["Flutter", "React", "Responsive UI", "Cross-platform apps"],
  },
  {
    title: "Databases & Caching",
    icon: "▤",
    items: ["PostgreSQL", "SQLite", "DuckDB", "Prisma ORM", "Supabase", "Redis"],
  },
  {
    title: "AI & Machine Learning",
    icon: "✦",
    items: ["LLMs & AI agents", "RAG pipelines", "NLLB translation", "PyTorch", "Model quantization (int4/int8)", "Transformer internals"],
  },
  {
    title: "Systems & DevOps",
    icon: "⌁",
    items: ["Docker", "Git & GitHub", "Linux", "CI/CD", "Distributed systems", "TCP/UDP networking", "CMake & build systems"],
  },
  {
    title: "IoT & Embedded",
    icon: "⚡",
    items: ["Arduino", "ESP32 / ESP8266", "GSM & GPS modules", "Sensors & relays", "LCD interfaces", "Embedded C/C++"],
  },
];

export const projects = [
  {
    name: "VGRE — Virtual GPU Runtime Engine",
    tag: "Systems / HPC",
    status: "Flagship · In active development",
    summary:
      "A C++ platform that democratizes access to GPU computing: it executes CUDA/PTX workloads on ordinary CPU clusters, so students, researchers and startups can run GPU-intensive work without expensive hardware.",
    objectives: [
      "Make GPU-class computing accessible without owning a GPU",
      "Run real ML frameworks (PyTorch, JAX, TensorFlow) unmodified on virtual GPUs",
      "Scale a single workload across a network of commodity machines",
    ],
    stack: ["C++", "LLVM JIT", "PTX interpreter", "TCP/UDP clustering", "Flutter dashboard", "Python bindings"],
    architecture:
      "A PTX/SASS execution engine with an LLVM-based JIT backend, a master–worker cluster layer over TCP/UDP with HMAC-authenticated and post-quantum (ML-KEM-768) secure channels, StableHLO ingestion for JAX/TensorFlow, GGUF/int4/int8 quantized LLM inference, and a Flutter operations dashboard for cluster monitoring.",
    challenges: [
      "Debugging distributed race conditions (handshake storms, reconnect loops, teardown races)",
      "SIMD-optimized GEMM kernels reaching 82× speedup over the naive baseline",
      "Backward-compatible binary protocols as cluster features evolved",
      "A 300-test suite kept green across every subsystem",
    ],
    outcomes:
      "Runs quantized 8B-parameter LLMs on CPU clusters, executes PyTorch/JAX/TensorFlow graphs end-to-end, and includes enterprise features: audit logging, OIDC/JWT auth, RBAC, backups and fuzz testing.",
  },
  {
    name: "VibeOn",
    tag: "Product / Social Platform",
    status: "In development",
    summary:
      "A next-generation African-built super app combining communication, education, AI, entertainment and digital commerce in one ecosystem — designed to compete on the global stage.",
    objectives: [
      "Unify messaging, video, education, marketplaces and creator monetization",
      "Embed AI assistants and AI media generation directly into the social experience",
      "Prove that world-class consumer platforms can be built from Africa",
    ],
    stack: ["Flutter", "Node.js", "Express.js", "PostgreSQL", "Redis", "Supabase", "Prisma ORM", "Docker"],
    architecture:
      "Modular service architecture: secure authentication, real-time messaging and calls, short/long-form video, recommendation systems, business pages, digital marketplace, notifications and an admin dashboard designed for horizontal scaling from day one.",
    challenges: [
      "Designing a schema and service boundaries that survive feature growth",
      "Real-time messaging and presence at scale",
      "Balancing an ambitious feature set against production-ready quality",
    ],
    outcomes:
      "Core architecture and authentication designed; development ongoing with a scalability-first, production-ready mindset rather than a quick prototype.",
  },
  {
    name: "VibeOn Translator API",
    tag: "AI / Backend",
    status: "Live · Hugging Face Spaces",
    live: "https://etienne0114-vibeon-translator.hf.space",
    summary:
      "An offline multilingual translation REST API powered by Meta's NLLB model automatic language detection and translation across hundreds of languages with no dependency on online services.",
    objectives: [
      "Reliable translation for low-connectivity environments",
      "Automatic source-language detection",
      "A clean, scalable REST interface any product can consume",
    ],
    stack: ["Python", "FastAPI", "NLLB (Meta)", "PostgreSQL", "Language detection"],
    architecture:
      "FastAPI service wrapping the NLLB model with a detection layer, request validation, PostgreSQL-backed usage tracking, and an API design built for horizontal scaling.",
    challenges: [
      "Serving a large translation model efficiently on modest hardware",
      "Accurate language detection for short, informal text",
    ],
    outcomes:
      "Deployed and publicly accessible on Hugging Face Spaces; provides the multilingual backbone for VibeOn and any service needing translation across African and global languages.",
  },
  {
    name: "Urungano",
    tag: "EdTech / Health",
    status: "Live · Firebase",
    live: "https://urungano-60a69.web.app/",
    summary:
      "An immersive, multilingual sexual and reproductive health education platform for young people in Rwanda and beyond — making sensitive, essential health knowledge accessible, private and engaging.",
    objectives: [
      "Deliver accurate reproductive-health education in a format young people actually engage with",
      "Support multiple languages so content reaches beyond English speakers",
      "Provide a private, judgment-free learning space",
    ],
    stack: ["Web", "Firebase Hosting", "Multilingual content"],
    architecture:
      "A web platform hosted on Firebase with an immersive, mobile-friendly learning experience and multilingual content delivery.",
    challenges: [
      "Presenting sensitive health topics respectfully and accurately",
      "Designing engaging, immersive learning for low-bandwidth users",
    ],
    outcomes:
      "Live and publicly accessible a working example of technology addressing a real public-health education gap for Rwandan youth.",
  },
  {
    name: "AI Recruitment Screening Platform",
    tag: "AI / Web",
    status: "Live · Vercel",
    live: "https://umurava-hackthon.vercel.app/",
    summary:
      "An intelligent recruitment screening platform built for the Umurava hackathon AI-assisted candidate screening that helps employers evaluate applicants faster and more fairly.",
    objectives: [
      "Automate first-pass candidate screening with AI",
      "Give employers structured, comparable applicant insights",
      "Ship a polished, deployed product under hackathon time pressure",
    ],
    stack: ["Next.js", "React", "TypeScript", "AI screening", "Vercel"],
    architecture:
      "A Next.js application with job listing and application flows, AI-powered screening of candidate submissions, and employer-facing review dashboards deployed on Vercel.",
    challenges: [
      "Designing AI evaluation that is useful without being a black box",
      "Building and deploying a complete product within a hackathon timeline",
    ],
    outcomes:
      "Deployed and publicly accessible on Vercel; demonstrates rapid end-to-end product delivery — from data model to AI integration to production deploy.",
  },
  {
    name: "IoT Smart Phase Load Balancer",
    tag: "IoT / Embedded",
    status: "Completed · Industrial attachment",
    summary:
      "An automatic three-phase electrical load balancer built during my industrial attachment at STEM Power (UR  College of Science and Technology): it monitors loads across power phases and redistributes them when imbalance occurs.",
    objectives: [
      "Continuously monitor current across three power phases",
      "Automatically redistribute loads to prevent overload",
      "Protect equipment and improve energy efficiency",
    ],
    stack: ["Microcontrollers", "Current sensors", "Relay control", "LCD display", "Embedded C/C++"],
    architecture:
      "Sensor array feeding a microcontroller control loop that computes phase imbalance and switches relay banks to rebalance loads, with live status on an LCD panel.",
    challenges: [
      "Safe switching logic never disconnect a load without a destination phase",
      "Calibrating sensors against real electrical noise",
      "Testing against genuine imbalance scenarios",
    ],
    outcomes:
      "Working system demonstrated at STEM Power; hands-on experience in embedded programming, hardware integration, system testing and technical documentation.",
  },
  {
    name: "Imboni",
    tag: "Civic Tech",
    status: "In development",
    summary:
      "A civic reporting platform that improves communication between citizens and public institutions — report local issues, track their resolution, and hold services accountable.",
    objectives: [
      "Give citizens a direct, structured channel to public institutions",
      "Make issue status transparent and trackable",
    ],
    stack: ["Flutter", "REST API", "PostgreSQL"],
    architecture:
      "Mobile-first reporting client with a categorized issue pipeline, institutional dashboards and status tracking.",
    challenges: [
      "Designing trust and accountability into the reporting flow",
      "Serving users with intermittent connectivity",
    ],
    outcomes:
      "Backed by my research into digital transformation challenges faced by small businesses and public services.",
  },
];

export const concepts = [
  {
    name: "Smart Accident Reporting System",
    detail:
      "Detects vehicle accidents automatically and notifies hospitals and emergency responders with live GPS location over GSM.",
  },
  {
    name: "Smart Fire Detection & Auto-Extinguisher",
    detail:
      "Detects fire hazards with environmental sensors and triggers automatic suppression plus emergency alerts.",
  },
  {
    name: "Wire Temperature Monitoring System",
    detail:
      "Prevents electrical fires by continuously monitoring wire temperature and raising IoT-based alerts before failure.",
  },
];

export const experience = [
  {
    role: "Industrial Attachment — IoT Engineer",
    org: "STEM Power · UR College of Science and Technology",
    period: "Industrial attachment",
    points: [
      "Designed and built the IoT-Based Automatic Smart Phase Load Balancer end to end.",
      "Combined embedded programming, sensors, relay control and LCD interfaces into one working system.",
      "Practiced real engineering discipline: requirements, testing, documentation and demos.",
    ],
  },
  {
    role: "Independent Builder — Systems & AI",
    org: "VGRE · VibeOn · Imboni",
    period: "Ongoing",
    points: [
      "Building a distributed virtual-GPU runtime in C++ with secure clustering and ML framework support.",
      "Architecting a social super app and an offline AI translation API with production-ready patterns.",
      "Maintaining large test suites, CI pipelines and technical documentation across projects.",
    ],
  },
];

export const research = [
  { title: "Distributed Systems", detail: "Consensus, clustering, fault tolerance and secure node communication." },
  { title: "High-Performance Computing", detail: "GPU virtualization, SIMD optimization, JIT compilation and runtime design." },
  { title: "Applied AI", detail: "RAG, AI agents, LLM inference optimization and multilingual NLP." },
  { title: "Cloud & DevOps", detail: "Cloud-native architecture, containerization and scalable infrastructure." },
  { title: "Cybersecurity", detail: "Authentication protocols, post-quantum cryptography and secure channel design." },
  { title: "Digital Transformation", detail: "How small businesses and public institutions in Africa adopt technology." },
];

export const blogPosts = [
  {
    title: "Running CUDA without a GPU: lessons from building VGRE",
    excerpt:
      "What I learned implementing a PTX interpreter and LLVM JIT to execute GPU workloads on plain CPUs and why fundamentals beat frameworks.",
    tag: "Systems",
    date: "Coming soon",
  },
  {
    title: "Designing offline AI translation for low-connectivity Africa",
    excerpt:
      "How the VibeOn Translator API serves hundreds of languages with NLLB, FastAPI and zero dependence on online services.",
    tag: "AI",
    date: "Coming soon",
  },
  {
    title: "From imbalanced phases to balanced loads: my first real IoT system",
    excerpt:
      "Building an automatic three-phase load balancer at STEM Power sensors, relays and the safety logic in between.",
    tag: "IoT",
    date: "Coming soon",
  },
];
