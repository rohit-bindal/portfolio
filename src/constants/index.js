import {
  codechef,
  infosys,
  mettl,
  newton_school,
  chatgpt,
  netflix,
  portfolio,
  aashish,
  sumukh,
  sudhir,
  kiran,
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
  { name: "Ocean Breeze", primaryColor: "#00709C", secondaryColor: "#2243AA" },
  {
    name: "Chocolate Symphony",
    primaryColor: "#C24949",
    secondaryColor: "#75503A",
  },
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
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Spring",
  "THREE",
  "Flutter",
  "SQL",
  "GIT",
];

const experiences = [
  {
    title: "Specialist Programmer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#FFFAFA",
    date: "June 2022 - Present",
    points: [
      "Developing a React app for managing watchers through a web interface, replacing manual YAML file management.",
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
  {
    testimonial:
      "Rohit is a deadline-driven, solution-oriented professional who is consistently enhancing our team's success.",
    name: "Sudhir Nune",
    designation: "Manager",
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
        name: "gpt-api",
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
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
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
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    demo_link: "#",
    target_blank: false,
    icon: portfolio,
  },
];

export { experiences, testimonials, projects };
