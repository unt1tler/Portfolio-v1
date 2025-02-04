export const siteConfig = {
  name: "John Doe",
  role: "Full Stack Developer",
  bio: "Passionate about building beautiful and functional web applications",
  email: "john@example.com",
  location: "San Francisco, CA",
  profileImage: "/images/profile.jpg",
  about: {
    story: "I started my journey as a developer 5 years ago...",
    background: "Computer Science graduate with a passion for web development",
    journey: "Worked with various startups and enterprises...",
    footerBio: "Building the future of web development",
    longBio: "Full stack developer with expertise in React, Node.js, and cloud technologies"
  },
  expertise: {
    frontend: "Specializing in React and modern JavaScript frameworks",
    backend: "Building scalable APIs with Node.js and TypeScript",
    design: "Creating beautiful and intuitive user interfaces"
  },
  community: {
    members: 500,
    contributions: 200,
    discussions: 1000,
    description: "Active contributor to open source projects and tech communities",
    initiatives: ["Open Source", "Mentoring", "Tech Talks"]
  },
  theme: {
    colors: {
      light: {
        primary: "#5865F2",
        secondary: "#57F287",
        background: "#FFFFFF",
        surface: "#F8F9FA",
        text: "#2E3338",
        muted: "#747F8D"
      },
      dark: {
        primary: "#7289DA",
        secondary: "#57F287",
        background: "#1A1B26",
        surface: "#24283B",
        text: "#A9B1D6",
        muted: "#565F89"
      }
    }
  },
  branding: {
    copyright: {
      startYear: 2024,
      text: "John Doe",
      link: "https://example.com"
    }
  },
  social: {
    github: {
      username: "johndoe",
      icon: "/icons/github.svg",
      color: "#333"
    },
    discord: {
      serverUrl: "https://discord.gg/example",
      icon: "/icons/discord.svg",
      color: "#5865F2"
    },
    email: {
      address: "john@example.com",
      icon: "/icons/email.svg",
      color: "#EA4335"
    }
  },
  github: {
    stats: {
      enabled: true,
      showStars: true,
      showRepos: true,
      showCommits: true,
      stars: 150,
      repos: 45,
      commits: 1200
    }
  },
  analytics: {
    enabled: true
  },
  skills: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 65 }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      image: "/images/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      links: {
        github: "https://github.com/johndoe/ecommerce",
        live: "https://ecommerce-example.com"
      }
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with collaborative features",
      image: "/images/projects/taskapp.jpg",
      tags: ["React", "Firebase", "Material-UI", "TypeScript"],
      links: {
        github: "https://github.com/johndoe/taskapp",
        live: "https://taskapp-example.com"
      }
    }
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      date: "2022 - Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Led the frontend development team of 5 engineers",
        "Implemented new features and optimized performance",
        "Reduced load time by 40% through code optimization"
      ],
      technologies: ["React", "TypeScript", "Next.js", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      date: "2020 - 2022",
      location: "New York, NY",
      responsibilities: [
        "Developed full-stack applications using React and Node.js",
        "Implemented CI/CD pipelines",
        "Mentored junior developers"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
    }
  ]
};