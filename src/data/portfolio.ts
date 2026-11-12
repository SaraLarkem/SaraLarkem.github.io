/** Returns true when a link is real and safe to show (hides placeholders). */
export function isConfiguredLink(href?: string | null): boolean {
  if (!href) return false
  if (href === '#' || href.trim() === '') return false
  const lower = href.toLowerCase()
  const placeholders = [
    'your-username',
    'your-profile',
    'your-domain.com',
    'example.com',
    'placeholder',
  ]
  return !placeholders.some((token) => lower.includes(token))
}

export const siteConfig = {
  name: 'Sara Larkem',
  title: 'Software Developer | AI & Cloud Computing Student',
  tagline:
    'Final-year Software Design with AI and Cloud Computing student with a strong interest in backend development, full-stack development and machine learning. Seeking graduate roles in software engineering, backend, full-stack and AI.',
  university:
    'Final-year BSc Software Design with AI and Cloud Computing student at Technological University of the Shannon, Ireland.',
  email: 'saralarkem7@gmail.com',
  links: {
    github: 'https://github.com/SaraLarkem',
    linkedin: 'https://www.linkedin.com/in/slarkem/',
    cv: '/cv/sara-larkem-cv.pdf',
  },
  og: {
    title: 'Sara Larkem — Software Developer Portfolio',
    description:
      'Final-year Software Design with AI and Cloud Computing student. Portfolio showcasing internship work, AI projects, backend systems and full-stack development.',
    // og:url / og:image omitted until a deployed site URL and preview image are available
  },
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Beyond Code', href: '#beyond-code' },
  { label: 'Career Goals', href: '#career-goals' },
  { label: 'Contact', href: '#contact' },
] as const

export const aboutLead =
  'I am Sara Larkem, a final-year BSc Software Design with AI and Cloud Computing student at Technological University of the Shannon. I am especially interested in backend development, full-stack development and machine learning, and I have built software across all three, including work inside an existing production codebase.'

export const aboutApproach =
  'I enjoy making sense of complex systems and learning new methodologies. I prefer to understand an existing system before changing it: during my internship I learned to identify reusable components, existing utilities and established patterns before introducing new functionality.'

export const aboutFocusAreas = [
  'Backend Development',
  'Full-Stack Development',
  'Machine Learning',
] as const

export type EducationEntry = {
  qualification: string
  institution: string
  dates: string
  note?: string
  modules?: readonly string[]
}

/** Qualifications, most recent first (source: CV). */
export const education: readonly EducationEntry[] = [
  {
    qualification: 'BSc (Hons) Software Design with AI and Cloud Computing',
    institution: 'Technological University of the Shannon, Athlone',
    dates: '2023 – present',
    note: 'Final year',
    modules: ['Software Design', 'Web Development', 'Databases'],
  },
  {
    qualification: 'Computer Networks with Software',
    institution: 'Laois & Offaly ETB (LOETB)',
    dates: '2022 – 2023',
    note: 'Full Distinction Award',
  },
  {
    qualification: 'Leaving Certificate',
    institution: 'Killina Secondary School',
    dates: '2016 – 2020',
  },
]

export const experience = {
  company: 'Causalix',
  role: 'Software Development Intern',
  summary:
    'Contributed to an existing AI and causal-modelling platform across Python backend services, React and TypeScript frontend components, database design and AI-assisted functionality. Worked within a production codebase, investigated unfamiliar systems before implementing changes, and delivered tested updates through feature branches and pull requests.',
  duties:
    'My day-to-day work covered debugging, testing, and designing and implementing new features across both frontend and backend applications. Working with new and unfamiliar systems taught me to apply what I learned in my degree in a real-world setting.',
  highlights: [
    'Built and tested a standalone causal-model auditing tool.',
    'Implemented objective graph-quality analysis and an optional AI narrative layer.',
    'Improved the presentation of Research Plan artefacts in the React frontend.',
    'Delivered authentication fixes and system health monitoring across the platform.',
    'Designed a prompt-versioning and provenance approach for tracing how historical causal models were generated.',
    'Investigated existing platform functionality before extending components or introducing new abstractions.',
    'Used Git, Docker, Jira, automated testing and pull-request workflows throughout the internship.',
  ],
} as const

export type ProjectVisualKind =
  | 'architecture'
  | 'api'
  | 'evidence'
  | 'database'
  | 'code'

export type Project = {
  id: string
  name: string
  summary?: string
  featured?: boolean
  status?: 'in progress'
  /** Where the work was done; drives the grouping on the Projects section. */
  context: 'internship' | 'university'
  role?: string
  access?: 'public' | 'private'
  problem: string
  built: string
  highlights: readonly string[]
  evidence?: readonly string[]
  technologies: readonly string[]
  learning: string
  githubUrl?: string
  screenshot?: string
  /** Decorative stand-in panel when no UI screenshot exists */
  visualPlaceholder?: {
    kind: ProjectVisualKind
  }
}

export const projects: readonly Project[] = [
  {
    id: 'rag-pipeline',
    context: 'internship',
    name: 'RAG Pipeline (Retrieval-Augmented Generation)',
    summary:
      'Built during my Causalix internship: a pipeline that processes documents, converts them into embeddings, retrieves the most relevant content with FAISS and uses that context to generate grounded answers.',
    featured: true,
    role: 'Software Development Intern at Causalix',
    access: 'private',
    problem:
      'Language model responses can be unsupported or unhelpful when they are not grounded in relevant source material.',
    built:
      'Implemented a retrieval-augmented generation workflow that connects document processing, FAISS similarity search and prompt construction, so answers are generated from retrieved source material.',
    highlights: [
      'Processed documents and split text into manageable chunks.',
      'Converted each chunk into an embedding and indexed the embeddings with FAISS.',
      'Retrieved the most relevant content for a query using FAISS similarity search.',
      'Added the retrieved context to the prompt before generating an answer.',
      'Produced answers grounded in the selected source material.',
    ],
    technologies: ['Python', 'FAISS', 'Embeddings', 'Vector retrieval', 'Large Language Models'],
    learning:
      'Retrieval quality is as important as generation quality. Poorly selected context can weaken an answer even when the language model itself is capable.',
    visualPlaceholder: {
      kind: 'architecture',
    },
  },
  {
    id: 'causal-model-auditor',
    context: 'internship',
    name: 'Causal Model Auditor',
    summary:
      'A standalone Python tool that analyses the structural and evidence quality of causal models before producing an optional AI-assisted explanation.',
    featured: true,
    role: 'Software Development Intern — sole developer for this tool',
    access: 'private',
    problem:
      'Causal models need more than a generated summary. Their structure, evidence and feedback relationships must be evaluated using transparent and repeatable checks.',
    built:
      'Developed an auditing pipeline where objective metrics remain the source of truth and the AI narrative explains the results rather than replacing them.',
    highlights: [
      'Loaded causal graph data from structured JSON-style inputs and existing fixtures.',
      'Detected feedback loops and recorded the nodes and edges involved.',
      'Flagged missing citations, confidence information and incomplete evidence.',
      'Calculated an explainable composite quality score with visible deductions.',
      'Added an optional OpenAI-powered narrative with a fallback when no API key is available.',
      'Exposed the workflow through a command-line interface with setup and usage documentation.',
    ],
    evidence: [
      '13 automated tests passed after the AI narrative phase.',
      'Separate feature branches were used for the objective auditor and AI narrative work.',
      'Existing graph fixtures and repository functionality were reused instead of recreated.',
    ],
    technologies: [
      'Python',
      'Structured JSON',
      'OpenAI API',
      'Pytest',
      'Environment variables',
      'Command-line interfaces',
      'Graph analysis',
    ],
    learning:
      'Objective metrics should remain the source of truth. The AI narrative explains results rather than replacing them.',
    visualPlaceholder: {
      kind: 'evidence',
    },
  },
  {
    id: 'research-plan-artefacts',
    context: 'internship',
    name: 'Research Plan Artefact Hierarchy',
    summary:
      'Improved the visual hierarchy of the Planner chat interface by making Research Plan artefacts distinct from ordinary assistant messages.',
    role: 'Software Development Intern — frontend contribution',
    access: 'private',
    problem:
      'Research Plan artefacts were visually indistinguishable from normal assistant follow-up messages in the Planner chat interface.',
    built:
      'Extended the existing chat message component with a generic artefact variant so Research Plans stand out without duplicating UI logic.',
    highlights: [
      'Reused the existing ChatBubble component.',
      'Added a generic artefact variant instead of introducing a duplicate component.',
      'Preserved existing user and assistant message styling.',
      'Preserved metadata chips, markdown, action buttons, scrolling and expand/collapse behaviour.',
      'Verified the result in desktop, mobile, light and dark layouts.',
    ],
    evidence: [
      'Focused component tests passed.',
      'Full frontend test suite passed.',
      'Focused lint checks passed.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Component testing',
      'Responsive UI',
      'Git',
      'Pull-request workflow',
    ],
    learning:
      'Good implementation in an established codebase often means extending the correct abstraction rather than building a new component from scratch.',
    visualPlaceholder: {
      kind: 'evidence',
    },
  },
  {
    id: 'prompt-versioning',
    context: 'internship',
    name: 'Prompt Versioning and Provenance',
    status: 'in progress',
    role: 'Software Development Intern — design and early implementation',
    access: 'private',
    summary:
      'Designed and began implementing a database model for centrally managed, versioned prompts with historical generation traceability.',
    problem:
      'The platform needs to move prompts out of hard-coded application logic while retaining a permanent record of which prompt versions were used to generate each causal model.',
    built:
      'Proposed a data model that separates stable prompt identity from immutable prompt versions and links each generation event to the exact versions used.',
    highlights: [
      'Separated stable prompt identity from immutable prompt versions.',
      'Designed storage for prompt content, version numbers and creation metadata.',
      'Designed provenance records linking generation activity to the exact prompt versions used.',
      'Included the user, generation timestamp and prompt role or workflow step.',
      'Ensured historical records reference immutable prompt versions rather than the currently active version.',
      'Planned database migrations and automated tests according to the current implementation state.',
    ],
    technologies: [
      'Python',
      'SQLAlchemy',
      'Alembic',
      'Relational database modelling',
      'Automated testing',
      'Prompt engineering',
    ],
    learning:
      'Traceability depends on immutable version records, not on whichever prompt happens to be active at read time.',
    visualPlaceholder: {
      kind: 'database',
    },
  },
  {
    id: 'landing-safety',
    context: 'university',
    name: 'Spacecraft Landing Safety Predictor',
    summary:
      'A machine-learning application that predicts whether an environment is safe for a spacecraft to land, using a decision tree classifier trained on features such as atmosphere quality, gravity, radiation, temperature and terrain.',
    featured: true,
    role: 'University project — sole developer',
    access: 'public',
    problem:
      'Landing safety depends on multiple environmental signals that are easier to assess with a structured classification workflow.',
    built:
      'Trained a decision tree classifier on environmental feature data and built a Python desktop application around it that predicts landing safety.',
    highlights: [
      'Prepared feature data for model training and evaluation.',
      'Trained a decision tree classifier with scikit-learn.',
      'Evaluated model performance using a confusion matrix and accuracy metrics.',
      'Provided an interactive PyQt5 interface for entering environmental conditions.',
    ],
    evidence: [
      'Working PyQt5 and scikit-learn desktop application.',
      'Public repository with source code and documentation.',
    ],
    technologies: [
      'Python',
      'Machine learning',
      'Scikit-learn',
      'Decision tree classifier',
      'PyQt5',
      'Confusion matrix',
      'Model accuracy evaluation',
    ],
    learning:
      'Applied supervised learning to a multi-feature classification problem with clear evaluation criteria.',
    screenshot: '/images/projects/landing-safety.png',
    githubUrl: 'https://github.com/SaraLarkem/Astro-landing-guardian',
  },
  {
    id: 'java-manga',
    context: 'university',
    name: 'Java Manga Web Application',
    summary:
      'Built a Java web application for browsing, searching and managing manga entries using Servlets, JSP, DAO patterns and a relational database.',
    featured: true,
    role: 'University project — sole developer',
    access: 'public',
    problem:
      'Manga catalogue data needed a database-backed web interface with search and management features.',
    built:
      'Built a Java web application for browsing, searching and managing manga entries.',
    highlights: [
      'Supported browsing, searching and managing manga entries.',
      'Separated data access logic using DAO patterns.',
      'Implemented session-based authentication and a personal reading list.',
    ],
    evidence: [
      'Public GitHub repository with source, README and screenshots.',
      'Deployable Maven WAR for Apache Tomcat.',
    ],
    technologies: ['Java', 'Servlets', 'JSP', 'SQL', 'DAO pattern', 'Apache Tomcat'],
    learning:
      'Practised server-side web development with clear separation between views, controllers and data access.',
    screenshot: '/images/projects/java-manga.png',
    githubUrl: 'https://github.com/SaraLarkem/java-manga-web-app',
  },
  {
    id: 'music-rest-api',
    context: 'university',
    name: 'Music REST API',
    summary:
      'Developed a REST API for managing song data, including database-backed endpoints tested through Postman.',
    role: 'University project — sole developer',
    problem:
      'Song data needed structured HTTP endpoints with reliable database persistence and testable request handling.',
    built:
      'Created REST endpoints for managing song records and validated the API through Postman testing.',
    highlights: [
      'Implemented database-backed endpoints for song data.',
      'Tested request and response behaviour using Postman.',
    ],
    technologies: ['PHP', 'Slim', 'PDO', 'MySQL', 'REST APIs', 'Postman'],
    learning:
      'Designed API endpoints around clear resource operations and verified them with practical request testing.',
    visualPlaceholder: {
      kind: 'api',
    },
  },
  {
    id: 'inventory-system',
    context: 'university',
    name: 'Python Inventory Management System',
    summary:
      'Contributed to a team-built command-line inventory system with account management, stock updates, sales records and transaction reporting.',
    role: 'University team project — contributor',
    problem:
      'A small inventory workflow needed reliable stock tracking, sales recording and reporting in a shared codebase.',
    built:
      'Worked on a command-line inventory system with account management, stock updates, sales records and transaction reporting.',
    highlights: [
      'Implemented stock updates, sales records and transaction reporting.',
      'Applied input validation and team-based development practices.',
    ],
    technologies: [
      'Python',
      'SQLite',
      'GitHub',
      'Jira',
      'Team development',
      'Input validation',
    ],
    learning:
      'Practised collaborative development with shared requirements, version control and task tracking.',
    visualPlaceholder: {
      kind: 'code',
    },
  },
]

export const internshipProjects = projects.filter((project) => project.context === 'internship')
export const universityProjects = projects.filter((project) => project.context === 'university')

/** How the skills were gained, shown above the skills grid. */
export const skillSources = [
  {
    title: 'Through my degree',
    text: 'University projects built my foundations in Python, Java, JavaScript and SQL, along with machine-learning classification, REST APIs and database-backed web applications.',
  },
  {
    title: 'Through my Causalix internship',
    text: 'Working in a production codebase, I gained practical experience in machine learning and automated testing, and used Git, Docker and React with TypeScript day to day.',
  },
] as const

export const strengths = [
  'Curious',
  'Enthusiastic',
  'Highly adaptable',
  'Enjoy co-operating and working with others',
] as const

export const hobbies = [
  'Works of fiction in their various forms: books, films and shows',
  'Playing video games',
  'Going to the gym',
] as const

export const skillCategories = [
  {
    name: 'Software development',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'Responsive design',
      'Component-based development',
      'Frontend testing',
      'Accessibility fundamentals',
    ],
  },
  {
    name: 'Backend and data',
    skills: [
      'REST APIs',
      'Relational database design',
      'SQLite',
      'MySQL',
      'PostgreSQL',
      'SQLAlchemy',
      'Database migrations',
      'Structured JSON interfaces',
    ],
  },
  {
    name: 'AI and machine learning',
    skills: [
      'Machine learning',
      'Retrieval-Augmented Generation',
      'Large Language Models',
      'Prompt engineering',
      'Embeddings',
      'Vector retrieval (FAISS)',
      'Scikit-learn',
      'Structured AI outputs',
      'AI evaluation and grounding',
    ],
  },
  {
    name: 'Engineering tools and practices',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Jira',
      'Pull requests',
      'Feature branches',
      'Pytest',
      'Vitest',
      'Repository investigation',
      'Technical documentation',
      'Automated testing',
    ],
  },
] as const

export const careerGoals = {
  lead: 'I am looking for a software engineering opportunity where I can create and contribute to real products while continuing to improve my skills.',
  roles: ['Backend', 'Full-Stack', 'AI-related roles'],
  text: 'I bring strong problem-solving skills and an eagerness to learn, whether that means picking up a new methodology or getting to grips with an unfamiliar codebase.',
  goal: 'My goal is to become a software engineer who brings light and positivity to the work environments I am part of.',
} as const

/** Non-coding experience and the skills it built (Beyond Code section). */
export const beyondCode = [
  {
    title: 'Health Assistant',
    place: 'Connected Health · over a year',
    text: 'I worked as a care giver with Connected Health for over a year. Care work depends on being reliable, staying calm and communicating clearly with the people you support.',
    skills: [
      'Working independently',
      'Being responsible',
      'Communicating clearly',
      'Handling challenges calmly',
    ],
  },
  {
    title: 'College',
    place: 'Technological University of the Shannon',
    text: 'Team projects at college regularly put me alongside new people, with deadlines that every member had to meet.',
    skills: ['Working with new people', 'Meeting project demands on time', 'Time management'],
  },
] as const
