import Work1 from "../../assests/flavorFiesta.gif";
import Work2 from "../../assests/work2.jpg";
import Work3 from "../../assests/quizAdda.gif";
import Work4 from "../../assests/work4.jpg";
import Work5 from "../../assests/work5.jpg";

/**
 * To add a new project, just add a new object to projectsData.
 * Fields:
 *   id        - unique number
 *   image     - imported image or URL string
 *   title     - project name
 *   description - short blurb (1-2 sentences)
 *   category  - "fullstack" | "frontend" | "backend" | "mobile"
 *   tags      - array of tech labels (strings)
 *   link      - live demo URL
 *   gitHubLink - GitHub repo URL
 */
export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "FlavorFiesta",
    description: "A full-stack food ordering web app with cart, auth, and real-time order tracking.",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://flavor-fiesta-frontend.vercel.app/",
    gitHubLink: "https://github.com/satishgupta07/FlavorFiestaFrontend",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/satish07/image/upload/v1704819862/j6l70vvnucne6i1iexmn.png",
    title: "Explorer",
    description: "A social media platform with posts, likes, follows, and real-time notifications.",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://explorer-frontend-one.vercel.app/",
    gitHubLink: "https://github.com/satishgupta07/Explorer",
  },
  {
    id: 3,
    image: Work3,
    title: "QuizAdda",
    description: "An interactive quiz platform with categories, timers, and leaderboard.",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://quiz-adda-frontend.vercel.app/login",
    gitHubLink: "https://github.com/satishgupta07/QuizAdda",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/satish07/image/upload/v1704820188/kwztcfmq1ma0gfjrktv9.png",
    title: "ByteCanvas",
    description: "A blogging platform with rich text editing, tags, and user profiles.",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://byte-canvas.vercel.app/",
    gitHubLink: "https://github.com/satishgupta07/ByteCanvas",
  },
  {
    id: 5,
    image: Work2,
    title: "WeatherApp",
    description: "A weather dashboard with real-time data, 5-day forecast, and location search.",
    category: "frontend",
    tags: ["React", "OpenWeather API", "CSS"],
    link: "https://satish-weather-app.netlify.app/",
    gitHubLink: "https://github.com/satishgupta07/WeatherApp",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/satish07/image/upload/v1704819862/vy3thblpx8grn3ore7v3.png",
    title: "UnifiedMall",
    description: "A Flipkart-inspired e-commerce clone with product listing, cart, and payments.",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://unified-mall-frontend.vercel.app/",
    gitHubLink: "https://github.com/satishgupta07/UnifiedMall",
  },
  {
    id: 7,
    image: Work4,
    title: "Bookshelf",
    description: "A book discovery and reading tracker app with Google Books API integration.",
    category: "frontend",
    tags: ["React", "Google Books API"],
    link: "https://bookshelf07.netlify.app/",
    gitHubLink: "https://github.com/satishgupta07/Bookshelf",
  },
  {
    id: 8,
    image: Work5,
    title: "Blogging API",
    description: "A RESTful blogging backend with JWT auth, CRUD posts, and comment system.",
    category: "backend",
    tags: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    link: null,
    gitHubLink: "https://github.com/satishgupta07/Blogging_Application",
  },
  {
    id: 9,
    image: Work4,          // TODO: replace with actual screenshot
    title: "NotesApp",
    description: "A React Native notes app.",  // TODO: update description
    category: "mobile",
    tags: ["React Native", "Expo"],            // TODO: update tags
    link: null,
    gitHubLink: "https://github.com/satishgupta07/NotesApp.git",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "fullstack" },
  { name: "frontend" },
  { name: "backend" },
  { name: "mobile" },
];
