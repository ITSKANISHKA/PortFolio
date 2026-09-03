export const portfolioData = {
  personal: {
    name: "KANISHKA",
    title: "AI/ML • Backend Development • GenAI • RAG",
    tagline: "Final-year Computer Science student building intelligent systems, scalable backend applications, and AI-powered products.",
    location: "Mathura, India",
    email: "itskanishka.06@gmail.com",
    secondaryEmail: "kanishka.code06@gmail.com",
    github: "https://github.com/ITSKANISHKA",
    linkedin: "https://www.linkedin.com/in/itskanishka06/",
    leetcode: "https://leetcode.com/u/n7VPPMuNJj/",
    codeforces: "https://codeforces.com/profile/kanishka__",
    resumeUrl: "/Kanishka_Resume.html",
  },

  about: {
    greeting: "Hello, I'm Kanishka",
    roleFocus: "Final-Year B.Tech CSE Student",
    university: "GLA University, Mathura",
    cgpa: "8.35",
    gradYear: "2027",
    summary: `I am a Computer Science Engineering student specializing in AI/ML, Backend Systems, and RAG architectures. Experienced in building autonomous AI agents, enterprise RAG workspaces, and scalable full-stack applications with strong computer science fundamentals.`,
    highlights: [
      "B.Tech in Computer Science Engineering at GLA University, Mathura (CPI: 8.35/10)",
      "Elite New Generation International School — Class XII (93%) & Class X (95.2%)",
      "Built Agentic Workflow Automation Builder & Autonomous CI/CD Debugging Agent (HealPipe)",
      "Strong DSA mastery: 500+ solved (Trees, DP, Graphs, Greedy), LeetCode 1500+, Codeforces 1100+"
    ],
    targetRoles: [
      "Software Development Engineer (SDE)",
      "Backend Engineer",
      "AI/ML Engineer",
      "Data Engineer"
    ]
  },

  training: [
    {
      title: "Job-Oriented Value Added Course – Python",
      organization: "GLA University, Mathura",
      duration: "Jun 2025 – Jul 2025",
      subtitle: "Machine Learning & Automation Training",
      details: [
        "Learned Machine Learning concepts including regression, classification, clustering, and preprocessing techniques across multiple algorithms.",
        "Built an Agentic Workflow Automation Builder using Python, automating repetitive workflows and reducing manual effort by 30%."
      ]
    }
  ],

  skills: [
    {
      category: "Languages",
      icon: "Code2",
      description: "Core programming and scripting languages for algorithm design and systems development.",
      items: ["Java", "Python", "SQL", "JavaScript"]
    },
    {
      category: "Frameworks & Backend",
      icon: "Server",
      description: "High-performance backend frameworks, API design, and web development.",
      items: ["React.js", "Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "AI / ML & GenAI",
      icon: "BrainCircuit",
      description: "Neural models, natural language processing, LLMs, and hierarchy-aware RAG.",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "LLMs", "RAG"]
    },
    {
      category: "Databases",
      icon: "Database",
      description: "Relational and document storage systems.",
      items: ["MongoDB", "PostgreSQL"]
    },
    {
      category: "Cloud & Tools",
      icon: "Cloud",
      description: "Containerization, cloud infrastructure, version control, and CI/CD automation.",
      items: ["Docker", "AWS", "Git", "GitHub Actions", "Power BI"]
    }
  ],

  nonTechSkills: [
    {
      title: "Leadership & Event Coordination",
      description: "Coordinated GLA University Tech Fest (Tech-Navya 2025), steering event logistics, schedule planning, and managing 50+ participants.",
      icon: "Users"
    },
    {
      title: "Hackathon Evaluation & Management",
      description: "Supervised Internal Smart India Hackathon 2024, evaluating technical projects, managing judging workflows, and mentoring participant teams.",
      icon: "Trophy"
    },
    {
      title: "Cross-Functional Collaboration",
      description: "Effective communication and teamwork across multidisciplinary engineering teams, technical writing, and public presentation.",
      icon: "MessageSquare"
    },
    {
      title: "Strategic Problem Solving",
      description: "Analytical decision-making under high-pressure buildathons, rapid prototyping, and methodical task execution.",
      icon: "Lightbulb"
    }
  ],

  music: {
    title: "Those Eyes",
    artist: "New West",
    badge: "CURRENTLY LISTENING TO",
    audioSrc: "https://archive.org/download/kehlani-nights-like-this-lyrics-ft.-ty-dolla-mp-3-160-k/New%20West%20-%20Those%20Eyes%28MP3_128K%29%28MP3_128K%29.mp3"
  },

  exploring: [
    {
      title: "LLMs, RAG & Autonomous AI Agents",
      domain: "Computer Science & AI Domain",
      description: "Deep diving into LLM architectures, agentic workflows, multi-agent orchestration, vector RAG pipelines, and building self-healing AI software engineering agents.",
      icon: "BrainCircuit",
      badge: "Tech Domain Research"
    },
    {
      title: "Geopolitics & Policy Dynamics",
      domain: "Global & Policy Side",
      description: "Fascinated by international relations, statecraft, global policy dynamics, and understanding political structures shaping technological & economic trends worldwide.",
      icon: "Globe",
      badge: "Geopolitics & Policy"
    }
  ],

  interests: [
    {
      name: "Traveling & Exploring Places",
      tagline: "Exploring new cultures, landscapes, and road trips across different regions.",
      icon: "Plane"
    },
    {
      name: "Culinary & Cooking Experiments",
      tagline: "Crafting fusion recipes, cooking comfort foods, and experimenting in the kitchen.",
      icon: "Utensils"
    },
    {
      name: "Rapid Buildathons & Prototyping",
      tagline: "Building autonomous agents & innovative AI prototypes under time constraints.",
      icon: "Zap"
    }
  ],

  projects: [
    {
      id: "healpipe-asea",
      title: "Autonomous Software Engineering Agent (HealPipe)",
      subtitle: "Autonomous AI Agent for Repository Analysis & Debugging",
      badge: "Autonomous AI Agent",
      tech: ["Python", "LLMs", "Docker", "CI/CD", "GitHub APIs"],
      shortDescription: "An autonomous software engineering agent that analyzes repositories, detects bugs, generates fixes and unit tests, and monitors CI/CD failure logs.",
      problemSolved: "Automates repository parsing, pull request generation, and Docker-based CI/CD log analysis for automated debugging and validation workflows.",
      highlights: [
        "Automated repository parsing & issues detection",
        "AI-assisted code fixes and unit test generation using GitHub APIs & LLMs",
        "Integrated Docker-based execution with CI/CD log analysis",
        "Autonomous debugging and validation workflow execution"
      ],
      github: "https://github.com/ITSKANISHKA",
      demo: "https://healpipe.vercel.app/",
      gradient: "from-blue-600/10 via-cyan-500/10 to-slate-900/10",
      accentColor: "#2563EB"
    },
    {
      id: "ostrich-rangam-ai",
      title: "Ostrich – AI-Native Knowledge Workspace",
      subtitle: "Hierarchy-Aware Enterprise RAG Workspace",
      badge: "Enterprise RAG & GenAI",
      tech: ["React", "Azure OpenAI", "Supabase", "Docker", "JWT", "Razorpay"],
      shortDescription: "An AI-powered knowledge workspace supporting hierarchy-aware RAG, semantic search, real-time AI chat, and persistent memory for document management.",
      problemSolved: "Organizing enterprise documentation with contextual responses, persistent memory, role-based access control, and subscription payments.",
      highlights: [
        "Hierarchy-aware RAG with semantic search",
        "Persistent AI memory & real-time chat for contextual responses",
        "JWT authentication & Role-Based Access Control (RBAC)",
        "Dockerized deployment with Razorpay subscription integration"
      ],
      github: "https://github.com/ITSKANISHKA",
      demo: "https://github.com/ITSKANISHKA",
      gradient: "from-cyan-500/10 via-blue-600/10 to-indigo-600/10",
      accentColor: "#0284C7"
    },
    {
      id: "nova-ecommerce",
      title: "Nova – Full-Stack E-Commerce Platform",
      subtitle: "Multi-User E-Commerce Architecture",
      badge: "Scalable Backend Architecture",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      shortDescription: "A full-stack multi-user e-commerce application supporting product management, reviews, authentication, and core marketplace workflows.",
      problemSolved: "Engineered scalable multi-user architecture supporting 1,000+ users with product search, filtering, sorting, and pagination across 500+ records.",
      highlights: [
        "10+ core modules (Authentication, Cart, Wishlist, Orders, Product management)",
        "Multi-user architecture designed to scale to 1,000+ active users",
        "Product search, filtering, sorting, and pagination for 500+ product records"
      ],
      github: "https://github.com/ITSKANISHKA",
      demo: "https://nova-kappa-ebon.vercel.app/",
      gradient: "from-slate-900/10 via-blue-700/10 to-sky-500/10",
      accentColor: "#0F172A"
    }
  ],

  achievements: [
    {
      metric: "500+",
      title: "DSA Problems Solved",
      description: "Mastery across Trees, Graphs, Dynamic Programming, Greedy Algorithms, and Hashing.",
      icon: "Code"
    },
    {
      metric: "1500+",
      title: "LeetCode Rating",
      description: "Consistent competitive programming performance on LeetCode.",
      icon: "Trophy"
    },
    {
      metric: "1100+",
      title: "Codeforces Rating",
      description: "Active participant in contest problem solving on Codeforces platform.",
      icon: "Code"
    },
    {
      metric: "8.35",
      title: "Academic CPI",
      description: "B.Tech Computer Science Engineering at GLA University, Mathura.",
      icon: "GraduationCap"
    }
  ],

  coCurricular: [
    "Coordinated Tech-Navya, GLA University Tech Fest 2025, managing 50+ participants.",
    "Supervised Internal Smart India Hackathon 2024, contributing to evaluation and event execution."
  ],

  education: [
    {
      institution: "GLA University, Mathura",
      degree: "B.Tech in Computer Science Engineering",
      score: "CPI: 8.35 / 10",
      duration: "May 2023 – May 2027",
      status: "Final Year",
      details: "Core subjects: Data Structures, Algorithms, OOP, DBMS, Operating Systems, Computer Networks.",
      highlight: true
    },
    {
      institution: "Elite New Generation International School",
      degree: "Intermediate (Class XII)",
      score: "93.0%",
      duration: "March 2022 – April 2023",
      details: "Mathura, UP — Physics, Chemistry, Mathematics, Computer Science.",
      highlight: false
    },
    {
      institution: "Elite New Generation International School",
      degree: "Secondary School (Class X)",
      score: "95.2%",
      duration: "March 2020 – May 2021",
      details: "Mathura, UP — Distinction across Science, Mathematics, and English.",
      highlight: false
    }
  ]
};
