import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  reactNative,
  expo,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  bootstrap,
  cpp,
  ethersjs,
  expressjs,
  firebase,
  framer,
  nextjs,
  postgres,
  python,
  solidity,
  smartbrain,
  nextgen,
  gpt,
  jfhome,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive User Interfaces",
    icon: web,
  },
  {
    title: "Scalable Backend Solutions",
    icon: backend,
  },
  {
    title: "iOS/Android Mobile App Development",
    icon: mobile,
  },
  
  {
    title: "React/React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Expo",
    icon: expo,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Ethers JS",
    icon: ethersjs,
  }, 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: '"SmartBrain" Face Detection App',
    description:
      "SmartBrain is a web application that takes a user submitted image URL and analyzes and detects if the image contains any faces and displays boxes around any detected faces. The application also manages user login credentials and statistics in a back end database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "orange-text-gradient",
      },
    ],
    image: smartbrain,
    source_code_link: "https://github.com/0xXerkan/smartbrain",
    live_demo_link: "https://0xxerkan.github.io/smartbrain/"
  },
  {
    name: "NextGen Audio",
    description:
      "A full e-commerce platform for an audio company complete with dynamically rendered product detail pages, full functioning shopping cart, and seamlessly integrated with Stripe payment processsing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react_context",
        color: "green-text-gradient",
      },      
      {
        name: "sanity_io",
        color: "green-text-gradient",
      },
    ],
    image: nextgen,
    source_code_link: "https://github.com/0xXerkan/next-ecommerce",
    live_demo_link: "https://next-ecommerce-0xxerkan.vercel.app/"
  },
  {
    name: "Job Finder App",
    description:
      "A job finder app built for iOS and Android using React Native that searches job postings on platforms like Linkedin and Indeed and displays them to the user with the job descriptions, qualifications, and gives the user the option to apply directly to the job posting. ",
    tags: [
      {
        name: "react_native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "iOS",
        color: "orange-text-gradient",
      },      
      {
        name: "Android",
        color: "orange-text-gradient",
      },
    ],
    image: jfhome,
    source_code_link: "https://github.com/0xXerkan/react-native-job-finder",
    live_demo_link: "/react-native-job-finder"
  },
  {
    name: "Figma Design Development",
    description:
      "A fully responsive landing page developed from a Figma design file. This project demonstrates the development of a website after the designer to developer handoff process, and all assets and styles were imported from the design file",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/0xXerkan/gpt3",
    live_demo_link: "https://0xxerkan.github.io/gpt3/"
  },
];

export { services, technologies, projects };