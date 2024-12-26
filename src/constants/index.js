import {
  codechef,
  mettl,
  newton_school,
  insightxr,
  infosys,
  chatgpt,
  netflix,
  portfolio,
  aashish,
  sumukh,
  sudhir,
  kiran,
  akshat
} from "../assets";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const themes = [
  {
    name: "Chocolate Symphony (Default)",
    primaryColor: "#C24949",
    secondaryColor: "#75503A",
  },
  { name: "Ocean Breeze", primaryColor: "#00709C", secondaryColor: "#2243AA" },
  {
    name: "Forest Reverie",
    primaryColor: "#00FF00",
    secondaryColor: "#556B2F",
  },
  { name: "Simple Purple", primaryColor: "#7E117C", secondaryColor: "#7311B0" },
  { name: "Mango Tango", primaryColor: "#F7CD00", secondaryColor: "#EC5800" },
  { name: "Cherry Rose", primaryColor: "#F40000", secondaryColor: "#EC2C3D" },
];

export const skills = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Three.js",
  "Flutter",
  "SQL",
  "GIT",
  "TERRAFORM"
];

const experiences = [
  {
    title: "Founding Engineer",
    company_name: "Insight XR",
    icon: insightxr,
    iconBg: "#FFFAFA",
    date: "Jun 2024 - Present",
    points: [
      "Designed and developed a Unity SDK to track object properties (position, rotation, scale) in scenes, stream session data to a Node.js backend, and enable session replay, heatmap generation, and multi-view playback via a Three.js-powered dashboard.",
      "Deployed scalable server infrastructure on Google Cloud VM, utilizing AWS DynamoDB and S3 for secure and efficient user data and model storage.",
      "Implemented AI features for session insights, actionable feedback, and interactive chat, with ongoing exploration of advanced AI capabilities to enhance platform functionality.",
      "Automated cloud deployments and resource provisioning using Terraform with remote state management on Terraform Cloud.",
    ],
  },
  {
    title: "Specialist Programmer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#FFFAFA",
    date: "Jun 2022 - Jun 2024",
    points: [
      "Built a full-stack solution with a React interface for managing watchers (replacing YAML files) and a Node.js non-blocking API for concurrent Snowflake table cloning.",
      "Created custom ETL handlers, managed data sources (PowerBI, Snowflake, Azure DevOps, Google Cloud), and conducted unit testing.",
      "Orchestrated end-to-end data pipelines, extracting data from diverse APIs, implementing DBT transformations, and deploying Snowflake table loading jobs, all efficiently managed through scheduled Dagster jobs.",
      "Ensured synchronization by utilizing sensor-based triggers in DBT jobs, closely tied to the extraction jobs, streamlining the data pipeline.",
    ],
  },
  {
    title: "Frontend Specialist",
    company_name: "CodeChef",
    icon: codechef,
    iconBg: " #F5F5DC",
    date: "April 2023 - July 2023",
    points: [
      "Developed a frontend project as part of the CodeChef-learn Frontend course curriculum.",
      "Conducted thorough reviews of all frontend projects and JavaScript courses offered by CodeChef-learn, ensuring quality and effectiveness of the content.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Newton School",
    icon: newton_school,
    iconBg: "#F5F5DC",
    date: "Jan 2023 - March 2023",
    points: [
      "Contributed educational content to the Fly with Coding by Newton School YouTube channel, offering solutions to standard DSA problems.",
      "Published videos on the same channel, providing step-by-step solutions for Codeforces and LeetCode contest challenges.",
    ],
  },
  {
    title: "Problem Setter & Reviewer",
    company_name: "Mettl",
    icon: mettl,
    iconBg: "#E6DEDD",
    date: "March 2022 - June 2022",
    points: [
      "Designed original DSA problems, contributing to the creation of diverse programming challenges.",
      "Conducted plagiarism checks and comprehensive problem reviews for content created by other problem setters, offering detailed reports that include my solutions and assessed difficulty levels.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "Rohit is a deadline-driven, solution-oriented professional who is consistently enhancing our team's success.",
  //   name: "Akshat Khare",
  //   designation: "Founder",
  //   company: "Insight XR",
  //   image: akshat,
  // },
  {
    testimonial:
      "Rohit is a deadline-driven, solution-oriented professional who is consistently enhancing our team's success.",
    name: "Sudhir Nune",
    designation: "Sr. Technology Architect",
    company: "Infosys",
    image: sudhir,
  },
  {
    testimonial:
      "Rohit consistently showed dedication, gave thorough reviews, delivered tasks early, and was a valuable team member.",
    name: "Kiran S",
    designation: "Program Manager",
    company: "CodeChef",
    image: kiran,
  },
  {
    testimonial:
      "Rohit consistently delivered videos and, during editor unavailability, self-edited to ensure content consistency.",
    name: "Sumukh S V",
    designation: "Category Manager",
    company: "Newton School",
    image: sumukh,
  },
  {
    testimonial:
      "Rohit's challenging algorithmic problems and impactful reviews consistently elevated our content quality.",
    name: "Aashish Soni",
    designation: "Technology Consultant",
    company: "Mercer | Mettl",
    image: aashish,
  },
];

const projects = [
  {
    name: "Talking ChatGPT",
    description:
      "Talking ChatGPT is a cross-platform app that enhances ChatGPT interactions with voice input, speech output, and image generation. It offers user-friendly signup, login, and conversation management for a seamless experience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "gpt & dall-e api",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/rohit-bindal/Talking-ChatGPT",
    demo_link: "https://www.youtube.com/watch?v=yzdJslToeOU&t=6s",
    target_blank: true,
    icon: chatgpt,
  },
  {
    name: "Netflix Clone",
    description:
      "Developed a responsive Netflix clone with user authentication, Firebase error handling, and payment integration. Utilized the TMDB database for categorized content display and Redux for efficient state management, complemented by a backend activity loader.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "stripe & TMDB API",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/rohit-bindal/Netflix-Clone",
    demo_link: "https://netflix-clone-7864d.web.app/",
    target_blank: true,
    icon: netflix,
  },
  {
    name: "Portfolio",
    description:
      "I crafted my portfolio website as a canvas to elegantly showcase my skills, projects, and experience. Utilizing Three.js, I breathed life into it, while Tailwind CSS and Framer Motion added captivating design and animations to create a visually engaging experience.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/rohit-bindal/portfolio",
    demo_link: "#",
    target_blank: false,
    icon: portfolio,
  },
];

export { experiences, testimonials, projects };
