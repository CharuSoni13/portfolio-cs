export const profile = {
  name: 'Charu Soni',
  role: 'Full Stack Developer • UI/UX Designer',
  tagline: 'Bridging the gap between AI backend logic and pixel-perfect frontends.',
  summary:
    "Passionate Full Stack Developer and UI/UX Designer with experience in building responsive and user-centric web applications. Currently pursuing a B.Tech in Artificial Intelligence and Machine Learning, I combine technical and creative skills to create intuitive digital experiences. I continuously enhance my skills through internships, real-world projects, and DSA practice, with a strong focus on problem-solving and innovation.",
  phone: '+91 8700203741',
  email: 'sonicharu2004@gmail.com',
  location: 'New Delhi, India',
}

export const skills = {
  frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'REST APIs'],
  backend: ['Node.js', 'Express.js'],
  core: ['Python (Basics)', 'SQL (Basics)', 'UI/UX (Figma)', 'DSA (Learning)', 'OOP', 'DBMS (Basics)'],
  tools: ['MongoDB', 'Postman', 'Git', 'GitHub', 'Canva', 'Wireframing', 'Prototyping', 'User Flow Design'],
  soft: [
    'Leadership',
    'Problem-Solving',
    'Analytical Thinking',
    'Team Collaboration',
    'Communication Skills',
    'Adaptability',
    'User-Centric Thinking',
    'Time Management',
  ],
}

export const experience = [
  {
    id: 'ternovate',
    title: 'Full Stack Developer Intern',
    org: 'Ternovate Labs',
    place: 'New Delhi, India',
    duration: 'Feb 2026 – Mar 2026',
    points: [
      'Developed responsive and interactive full-stack web applications using core web technologies.',
      'Built and integrated front-end interfaces with back-end functionality for seamless user experience.',
      'Worked on three web-based projects using vanilla tools, handling both UI development and server-side logic.',
      'Strengthened skills in front-end, back-end, and overall full-stack development through real-world project implementation.',
    ],
  },
  {
    id: 'codingblocks',
    title: 'Full Stack Website Developer Trainee',
    org: 'Coding Blocks',
    place: 'New Delhi, India',
    duration: 'Jun 2025 – Aug 2025',
    points: [
      'Completed Summer Training in Full Stack Web Development from Coding Blocks.',
      'Gained hands-on experience with the MERN stack — MongoDB, Express.js, React.js, and Node.js.',
      'Developed dynamic and scalable web applications with front-end, back-end, API, and database integration.',
      'Worked on real-world projects, strengthening full-stack development and problem-solving skills.',
    ],
  },
]

export const projects = [
  {
    id: 'verde-depths',
    name: 'Verde Depths',
    tag: 'Scrollytelling • Canvas API',
    description:
      'A 3D scrollytelling website featuring a 240-frame scroll-driven canvas animation for an immersive user experience. Smooth interactive components, ambient audio integration, and dynamic visual effects, finished with a glassmorphism UI and gradient typography.',
    tech: ['React', 'Vite', 'JavaScript', 'Canvas API', 'CSS', 'Web Audio API'],
    links: { live: 'https://verde-depths.netlify.app/', github: 'https://github.com/CharuSoni13/watch' },
  },
  {
    id: 'ncap-portal',
    name: 'NCAP Portal',
    tag: 'Admission Prediction Platform',
    description:
      'An intelligent, data-driven admission prediction platform using JoSAA, NEET, and CUET trend analysis. A custom weighted algorithm classifies colleges into Safe, Target, and Reach categories, backed by a scalable multi-year seat matrix database.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    links: { github: 'https://github.com/CharuSoni13/ncap-portal' },
  },
  {
    id: 'aegistalent',
    name: 'AegisTalent',
    tag: 'Corporate Website',
    description:
      'A fully responsive corporate website for a global talent mobility firm, built with pure HTML, CSS, and JavaScript — no frameworks. Includes a custom SPA-style client-side router, scroll-triggered animations, and interactive blog category filtering.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: { github: 'https://github.com/CharuSoni13/AegisTalent' },
  },
  {
    id: 'rakshak',
    name: 'Rakshak Dashboard',
    tag: 'Women Safety Monitoring',
    description:
      'A Women Safety Monitoring Platform with a responsive and interactive dashboard, live location tracking and real-time monitoring via map integration, plus a user-friendly interface for safety tracking and alerts.',
    tech: ['React', 'Tailwind CSS', 'Leaflet API', 'Node.js'],
    links: { github: 'https://github.com/CharuSoni13/rakshak-guardian-hub' },
  },
  {
    id: 'green-roots',
    name: 'Green Roots',
    tag: 'Sustainable E-commerce',
    description:
      'GreenRoots, a sustainable e-commerce platform promoting eco-friendly and plant-based products, with product listings, detailed product pages, RESTful API integration, and a responsive, sustainability-focused UI.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Firebase'],
    links: { github: 'https://github.com/CharuSoni13/Plant-Web' },
  },
]

export const education = [
  {
    id: 'vips',
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    school: 'Vivekananda Institute Of Professional Studies',
    score: '9.6 CGPA',
    duration: 'Aug 2023 – Present',
  },
  {
    id: 'mec-hs',
    degree: 'Higher Secondary Education',
    school: 'Modern Era Convent',
    score: '85%',
    duration: 'Mar 2021 – Dec 2022',
  },
  {
    id: 'mec-ss',
    degree: 'Senior Secondary Education',
    school: 'Modern Era Convent',
    score: '84%',
    duration: 'Feb 2020 – Jan 2021',
  },
]

export const certifications = [
  { id: 'cb', name: 'Full Stack Web Development – MERN', org: 'Coding Blocks', date: 'Aug 2025' },
  { id: 'google', name: 'Startup School – Prompt to Prototype', org: 'Google for Startups', date: 'Dec 2025' },
  { id: 'guvi', name: 'Face Recognition App Using Python', org: 'GUVI Geek Networks & IITM Research Park', date: 'Apr 2021' },
  { id: 'letsupgrade', name: 'JavaScript Bootcamp', org: 'LetsUpgrade', date: 'Jan 2025' },
]

export const links = {
  github: 'https://github.com/CharuSoni13',
  linkedin: 'https://www.linkedin.com/in/charusoni1306/',
  resume: 'https://drive.google.com/drive/folders/19ND3BA-oAUKkVB0q5RQALv-W6n7n8U2x?usp=sharing',
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phone.replace(/\s/g, '')}`,
}
