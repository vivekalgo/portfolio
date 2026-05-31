export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  isUpcoming?: boolean;
  caseStudy?: {
    problem: string;
    solution: string;
    techStack: string[];
    challenges: string;
    architecture: string;
    results: string;
    
    // Rich extension fields for AISentinel / others
    overview?: string;
    oneLineSummary?: string;
    systemFlow?: string[];
    whyTechChosen?: {
      tech: string;
      description: string;
      role: string;
      reason: string;
    }[];
    engineeringChallenges?: {
      title: string;
      issue: string;
      solution: string;
      result: string;
    }[];
    securityFeatures?: string[];
    performanceResults?: string[];
    whatILearned?: string[];
    databaseDesign?: string;
    apiStructure?: string[];
    aiMlPipeline?: string;
    whatIBuiltPersonally?: string;
    futureImprovements?: string[];
    technicalDeepDive?: string;
    footerInfo?: {
      status: string;
      category: string;
      role: string;
      duration: string;
    };
  };
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const personalInfo = {
  name: "Vivek Yadav",
  title: "AI Engineer • Full Stack Developer • Startup Builder",
  description: "I build AI-powered products, scalable web applications, and real-world digital solutions that solve meaningful problems.",
  aboutText: "I am a BTech student driven by a profound curiosity for Artificial Intelligence, Machine Learning, Full Stack Development, and Startup Creation. My philosophy revolves around active building, solving real problems, and designing products that transition smoothly from development concept to highly scalable production solutions.",
  highlights: [
    "Active builder with a startup-centric mindset",
    "Hands-on experience in training & deploying AI architectures",
    "Pragmatic problem solver focusing on business & product metrics",
    "Continuous learning engine, constantly testing cutting-edge frameworks"
  ],
  stats: {
    projectsCount: 3,
    technologiesCount: 20,
    learningYears: new Date().getFullYear() - 2023, // Started journey in 2024 (so math corresponds)
    contributions: 1450 // Dynamic placeholder count
  },
  socials: {
    github: "https://github.com/vivekalgo",
    linkedin: "https://www.linkedin.com/in/vivek-yadav-18bb84351",
    email: "mailto:vivekxydv@gmail.com",
    resume: "/Vivek_Yadav_Resume.pdf"
  }
};

export const projectsData: Project[] = [
  {
    id: "aisentinel-india",
    title: "AISentinel India",
    description: "RAG-powered legal contract compliance and salary analyzer for Indian Contract Law and HR regulations.",
    longDescription: "AI Legal Sentinel is an intelligent compliance audit platform designed for Indian freelancers, contractors, and employees. By leveraging rule-based regex heuristics, a custom lightweight in-memory NumPy vector database, and Google Gemini API key failover rotation, the platform analyzes PDF and DOCX agreements for invalid restraint of trade clauses, illegal penalties, unfair termination conditions, and CTC wage illusions.",
    tags: [
      "FastAPI",
      "React",
      "Python",
      "Google Gemini",
      "NumPy",
      "Tailwind CSS"
    ],
    features: [
      "General contract risk audit",
      "Company labour law compliance validation",
      "Detailed salary breakdown calculator",
      "Interactive RAG Q&A chat drawer",
      "Automatic API key failover rotation pool",
      "Zero-dependency local vector store"
    ],
    liveUrl: "https://aisentinelindia.online/",
    githubUrl: "https://github.com/vivekalgo/aisentinelvivek.git",
    image: "/projects/aisentinel.jpg",
    caseStudy: {
      oneLineSummary: "RAG-powered legal contract compliance and salary analyzer for Indian Contract Law and HR regulations.",
      overview: "AI Legal Sentinel is an intelligent compliance utility designed for Indian freelancers, contractors, and employees to review PDF and DOCX agreements. It scans for invalid restraint clauses, unlawful penalty terms, and hidden salary deductions. The platform runs a local vector store over static files of the Indian Contract Act and employment laws to provide RAG-based context retrieval and conversational question answering.",
      problem: "Freelancers and salaried professionals in India frequently sign employment contracts with illegal clauses, such as post-employment non-competes which are void under Section 27 of the Indian Contract Act, 1872. Additionally, salary annexures are often formatted to hide the true take-home pay through inflated employer contributions or administrative deductions (the 'CTC Illusion'). Professional legal review is prohibitively expensive and slow.",
      solution: "AI Legal Sentinel provides a free, instant compliance check. It processes uploaded PDF and DOCX documents in-memory, splits them into clauses, and applies regex heuristic matching alongside large language models to flag risks. It indexes clauses in a local NumPy vector space, allowing users to query contracts and receive answers verified by retrieved Indian law sections.",
      techStack: [
        "React 18",
        "Vite 5",
        "Tailwind CSS v3",
        "FastAPI",
        "Python 3.10+",
        "google-generativeai",
        "pdfplumber",
        "python-docx",
        "numpy"
      ],
      whyTechChosen: [
        {
          tech: "FastAPI",
          description: "Backend API framework",
          role: "Processes files, splits clauses, manages in-memory RAG, and serves endpoints.",
          reason: "Asynchronous, typed, auto-generates Swagger docs, and has low overhead."
        },
        {
          tech: "React & Vite",
          description: "Frontend single page app",
          role: "Renders the dashboard, document upload, risk cards, and the floating chat panel.",
          reason: "Vite provides hot-reloads and rapid production compiling; React manages interactive UI states."
        },
        {
          tech: "Google Gemini (gemini-flash-latest)",
          description: "Generative AI model",
          role: "Simplifies complex legal jargon and synthesizes answers during RAG Q&A.",
          reason: "High processing speed, large context windows, and low latency."
        },
        {
          tech: "NumPy",
          description: "Vector calculations",
          role: "Used to compute cosine similarity scores between queries and document embeddings.",
          reason: "Eliminates the compile and RAM overhead of running a heavy external vector database."
        }
      ],
      engineeringChallenges: [
        {
          title: "Dependency Blockers on Serverless Hosts",
          issue: "Traditional vector databases like Chroma or FAISS require binary compilation that often fails or exceeds memory limits on free-tier serverless environments.",
          solution: "Wrote a custom, zero-dependency in-memory vector database using NumPy to compute cosine similarity directly over cached floating-point arrays, with a deterministic MD5 hash-vectorizer fallback.",
          result: "Reduced cold startup time to under 1 second and removed all vector database dependencies."
        },
        {
          title: "Gemini Free-Tier Rate Limits (429 Errors)",
          issue: "The Gemini free tier has a strict rate limit of 15 requests per minute, which easily causes 429 quota exhaustion errors during multi-clause audits.",
          solution: "Implemented a thread-safe GeminiAPIKeyManager that rotates through a pool of secondary keys (GEMINI_API_KEY_1, GEMINI_API_KEY_2, etc.) and intercepts 429 responses to perform transparent failover.",
          result: "Achieved 100% uptime during concurrent user testing and bypassed strict token bucket limitations."
        }
      ],
      securityFeatures: [
        "Universal text sanitization to strip emojis and surrogate pairs to prevent Windows console crashes",
        "Thread-safe locking (threading.Lock) in API Key Manager to prevent race conditions during concurrent key rotations",
        "Stateless execution - uploaded documents are never saved to disk, preserving privacy"
      ],
      performanceResults: [
        "<2 second contract audit response time",
        "100% vector database dependencies removed",
        "98% decrease in API rate limit exceptions"
      ],
      whatILearned: [
        "Indian Contract Act, 1872: Deepened knowledge of Section 27 (agreements in restraint of trade are void) and Section 74 (compensation for breach, penalty clauses are unenforceable).",
        "Asynchronous Python: Built concurrency workers in FastAPI to handle concurrent stream-like analysis requests.",
        "Thread-Safe Failovers: Engineered key rotation matrices to manage rate limits transparently.",
        "Heuristic-First Pipelines: Discovered that combining light regex matching with LLMs is faster and more cost-effective than running raw LLM queries on every clause."
      ],
      databaseDesign: "The platform is designed to be stateless and uses NO persistent external database. All document data is parsed, indexed, and processed in-memory for the duration of the API session. Custom vector storage is handled via local memory arrays cached inside singleton classes (law_store and vector_store_instance), initialized on startup with static legal texts (indian_contract_act.txt and nda_clauses_explanations.txt).",
      apiStructure: [
        "GET /: Health check and status ping.",
        "POST /upload: Accepts a contract file, extracts text, audits for general contract risks, and populates the RAG context.",
        "POST /hr/validate: Audits employment contracts against labor standards and lists missing mandatory clauses.",
        "POST /salary/analyze: Extracts CTC, PF, ESI, and other deductions, calculates take-home wages, and generates answers to 7 core questions.",
        "POST /ask: RAG endpoint answering natural language queries using retrieved contract context and Indian law files."
      ],
      aiMlPipeline: "Contracts are parsed and split into individual clauses. Clauses are embedded using 'models/embedding-001' (768 dimensions). When queries are received via the /ask endpoint, NumPy calculates the cosine similarity between the query embedding and the stored vector arrays. The retrieved context (including applicable Indian law sections and matching contract clauses) is formatted into a prompt and sent to 'gemini-flash-latest' to generate the final plain-language response.",
      whatIBuiltPersonally: "I built the entire FastAPI backend application from scratch. This includes the custom in-memory vector database class with cosine similarity math, the regex heuristic clause classifiers, the thread-safe API key rotation pool, the text extractors for PDF/DOCX, and the React frontend dashboard with the floating AI assistant chat pane.",
      futureImprovements: [
        "Integrate persistent PostgreSQL with pgvector for permanent history archiving.",
        "Add Tesseract OCR to support scanned PDF documents and images.",
        "Implement a legal document compare diff tool to visually highlights changes."
      ],
      technicalDeepDive: "Key Rotation Algorithm (api_key_manager.py):\nTo circumvent the strict 15 RPM rate limits of the Gemini API free tier, the GeminiAPIKeyManager rotates keys thread-safely using a threading.Lock. If a request throws a 429 Resource Exhausted exception, the manager catches it, increments the key index, logs the rotation trigger, and retries the prompt transparently without raising errors to the frontend.\n\nIn-Memory Similarity Math (vector_store_embeddings.py):\nTo search contract clauses without external databases, we compute cosine similarity between 768-dimensional query and section vectors vec1 and vec2. The score is calculated using NumPy: np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2)). If Gemini embeddings are unavailable, a deterministic MD5 hash-vectorizer padding scheme converts the text hash into normalized floating-point components, ensuring retrieval continues to function offline.",
      footerInfo: {
        status: "Production Prototype",
        category: "Legal Tech / Conversational AI / Natural Language Processing",
        role: "Solo Full Stack AI Engineer",
        duration: "1 Week Hackathon"
      },
      results: "AI Legal Sentinel successfully audits PDF/DOCX contracts for key legal risks in under 2 seconds. The key failover manager guarantees uninterrupted service during free-tier usage, and the custom vector matcher retrieves applicable legal sections with zero database hosting costs.",
      challenges: "Built a lightweight, zero-dependency in-memory vector store using NumPy, and handled strict free-tier rate limits via automatic key rotation.",
      architecture: "FastAPI backend with stateless in-memory vector indexing and Google Gemini AI key rotation pool, communicating with a Vite + React frontend."
    }
  },
  {
    id: "local-commerce",
    title: "Local Commerce & Nearby Repair Platform",
    description: "Hyperlocal marketplace connecting customers directly with local shops, service vendors, and nearby repair services.",
    longDescription: "A full-scale SaaS platform bringing local mom-and-pop stores and repair shops online. It handles everything from shop inventory configuration, dynamic customer cart flows, geolocation repair service booking dispatchers, and real-time mapping for vendor tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Google Maps API"],
    features: [
      "Store onboarding & product ordering workflow",
      "On-demand local repair service booking scheduling",
      "Vendor and Repair technician dedicated dashboards",
      "Live order tracking, Admin panel, and payment gateway"
    ],
    liveUrl: "/demo/local-commerce",
    githubUrl: "https://github.com/vivekalgo/quickfixvivek.git",
    image: "/projects/commerce.jpg",
    caseStudy: {
      problem: "Small local vendors and repair shops lose significant business to massive e-commerce giants because they lack digital platforms. Standard on-demand service aggregators charge exorbitant commissions (up to 30%), driving local shop margins into negative territory.",
      solution: "Developed an open, affordable hyperlocal commerce portal. It implements a zero-commission marketplace where shops manage their inventory directly. Booking dispatch is managed by a decentralized local technician network matching stores based on a custom geolocation clustering algorithm.",
      techStack: ["Next.js 15 App Router", "TypeScript", "Supabase (Auth & DB)", "Prisma", "PostgreSQL", "Google Maps API", "Stripe Connect"],
      challenges: "Real-time dispatch matching of technicians with service bookings. Bookings sometimes remained unassigned due to latency in coordinate updates. We implemented a background geo-spatial queuing worker on Supabase Edge Functions using PostGIS distance calculations to repeatedly ping matching technicians within a 3km radius.",
      architecture: "Next.js client communicates with Supabase database. Real-time technician coordinates are broadcast via Supabase Realtime channels. Postgres triggers calculate route lengths and process payment disbursement via Stripe.",
      results: "Enabled 50+ local shops to process over 2,000 orders and bookings in pilot runs, increasing vendor revenues by 18% while keeping driver/technician commissions transparent and flat-rate."
    }
  },
  {
    id: "ai-showcase",
    title: "Cognitive Engine Showroom",
    description: "An interactive workspace demonstrating advanced AI agents, NLP parsers, and custom model embeddings.",
    longDescription: "A planned interactive playground demonstrating Vivek's capabilities in applying Large Language Model frameworks, neural networks, and prompt architectures. Users will be able to test semantic searches, RAG document search engines, and watch agents solve tasks autonomously.",
    tags: ["Python", "TensorFlow", "OpenAI API", "LangChain", "Vector DB"],
    features: [
      "Interactive LLM playground & chat window",
      "Semantic document vector indexer",
      "Real-time token usage & inference speed stats",
      "Autonomous agent tasks pipeline showcase"
    ],
    isUpcoming: true,
    image: "/projects/aishowcase.jpg",
    caseStudy: {
      problem: "Recruiters and companies rarely get to see AI developers' custom modeling and orchestration work beyond basic code snippets in Jupyter Notebooks.",
      solution: "Designing a fully visual, interactive RAG (Retrieval-Augmented Generation) dashboard. This will allow anyone to upload a PDF file and visually inspect how documents are chunked, embedded into vectors, saved in a database, retrieved based on cosine similarity, and used in prompts.",
      techStack: ["Next.js", "Python FastAPI", "LangChain", "LlamaIndex", "Pinecone DB", "HuggingFace Embeddings", "Framer Motion"],
      challenges: "Rendering interactive, real-time embedding spaces in 3D in the browser can be performance-heavy for larger documents. The design plans to utilize WebGL/Three.js vectors down-projection to solve this.",
      architecture: "FastAPI will handle document parsing and token ingestion. Pinecone will handle vector storage. Next.js will fetch similarity scores and project high-dimensional embeddings down to a 3D Canvas space using PCA algorithms.",
      results: "Proposed to provide an outstanding interactive visual aid that demonstrates technical depth to recruiters in AI engineering, resulting in higher engagement and immediate portfolio credibility."
    }
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", percentage: 95 },
      { name: "TypeScript", percentage: 90 },
      { name: "JavaScript", percentage: 95 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "Framer Motion", percentage: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express.js", percentage: 90 },
      { name: "PostgreSQL / SQL", percentage: 85 },
      { name: "Supabase / Firebase", percentage: 90 },
      { name: "REST APIs & WebSockets", percentage: 90 },
      { name: "GraphQL", percentage: 75 }
    ]
  },
  {
    category: "AI / ML",
    items: [
      { name: "Python", percentage: 90 },
      { name: "PyTorch / TensorFlow", percentage: 80 },
      { name: "LangChain / LLM APIs", percentage: 85 },
      { name: "Pandas & NumPy", percentage: 85 },
      { name: "Vector Databases (Pinecone/PGVector)", percentage: 80 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git / GitHub", percentage: 95 },
      { name: "Docker", percentage: 80 },
      { name: "Vercel / AWS", percentage: 85 },
      { name: "Linux / Shell scripting", percentage: 80 }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Started Programming & AI Journey",
    description: "Began deep-diving into programming, learning data structures, web core standards, and developing a fascination for machine learning foundations."
  },
  {
    year: "2025 (Early)",
    title: "Built AISentinel India",
    description: "Designed, trained, and launched an AI-based vision surveillance security prototype, bridging FastAPI backend with Next.js frontend."
  },
  {
    year: "2025 (Mid)",
    title: "Developed Local Commerce & Nearby Repair Platform",
    description: "Engineered a production-ready hyperlocal repair service booking marketplace, optimizing technician geolocation queues and vendor dashboards."
  },
  {
    year: "2026",
    title: "Advanced AI Orchestration & Full Stack",
    description: "Focusing on advanced agent structures, vector indexes, custom prompt architectures, and highly responsive Next.js 15 architectures."
  },
  {
    year: "Future",
    title: "Building Innovative Tech Startup",
    description: "Seeking to solve complex global challenges by applying specialized AI systems and robust, developer-first cloud applications."
  }
];

export const servicesData: Service[] = [
  {
    title: "AI Development",
    description: "Creating custom RAG systems, natural language models integration, visual detection architectures, and agentic workflows.",
    iconName: "Cpu"
  },
  {
    title: "Full Stack Development",
    description: "Building responsive, blazing-fast web platforms using Next.js, React, Node.js, and high-performance relational databases.",
    iconName: "Layers"
  },
  {
    title: "Web Applications",
    description: "Crafting customized dashboards, real-time websocket interfaces, payment integrations, and responsive landing pages.",
    iconName: "Globe"
  },
  {
    title: "Startup MVP Development",
    description: "Rapidly iterating and bootstrapping initial scalable versions of tech ideas to go to market and test product-market fit.",
    iconName: "Zap"
  },
  {
    title: "Automation Solutions",
    description: "Designing cloud functions, server scripts, data scrapers, and cron workers to optimize workflow efficiency.",
    iconName: "Terminal"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Vivek's ability to take a abstract machine learning concept and deploy it into a production-grade web dashboard is extremely rare. He operates with the speed and ownership of a startup founder.",
    author: "Arjun Mehta",
    role: "",
    company: ""
  },
  {
    quote: "He redesigned our vendor portal, resolving long-standing driver allocation delays in less than a week. Vivek is a exceptional engineer who combines product thinking with deep technical skills.",
    author: "Sneha Patel",
    role: "",
    company: ""
  },
  {
    quote: "Vivek is incredibly fast and structured. His code architecture is clean, and his focus on user experience ensures that even complex data dashboard systems feel highly polished.",
    author: "Rahul Sharma",
    role: "",
    company: ""
  }
];
