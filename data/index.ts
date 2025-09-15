export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export type Testimonial = {
  id: number;
  quote: string;
  author: string;
};

export const gridItems = [
  {
    id: 1,
    title: "Client Collaboration, Fostering Open Communication and Partnership",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible Communication, Adapting to Diverse Time Zones and Needs",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack, Building Robust and Scalable Solutions",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Web Development Mastery Crafting Seamless User Experiences",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Digital Architecture; Designing the Future of the Web",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title:
      "Project Initiation? Transforming Ideas into Tangible Outcomes, Connect with me",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "University Management System",
    des: "Built with Express.js & MongoDB using a modular, service-based architecture for scalable operations.",
    img: "/p1.svg",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ],
    link: "https://github.com/mihad-khadem/university-management-project-server.git",
  },
  {
    id: 2,
    title: "POS Inventory Management App (Ongoing)",
    des: "Real-time analytics, Stripe payments, and full inventory tracking for efficient retail management.",
    img: "/p2.svg",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
    ],
    link: "https://github.com/mihad-khadem/pos_inventory_management_app",
  },
  {
    id: 3,
    title: "Task Management App",
    des: "Developed with NestJS, PostgreSQL, Prisma & Docker to handle tasks at scale with robust backend performance.",
    img: "/p3.svg",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    ],
    link: "https://github.com/mihad-khadem/task_management_app",
  },
  {
    id: 4,
    title: "Restaurant Landing Page (frontend)",
    des: "Full-stack restaurant management system with real-time orders, payments, and dashboard analytics.",
    img: "/restaurant.png",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ],
    link: "https://github.com/mihad-khadem/Restaurant-RMS-project",
  },
  {
    id: 5,
    title: "React Glasses App",
    des: "Interactive glasses try-on app built with React.js and modern UI libraries for smooth user experience.",
    img: "/react-ecom.png",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    ],
    link: "https://github.com/mihad-khadem/react_glasses",
  },
  {
    id: 6,
    title: "Car Medix",
    des: "A dynamic platform to discover and save your dream supercar, with personalized features and secure data handling.",
    img: "/car-medix.png",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    ],
    link: "https://github.com/mihad-khadem/car-medix",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "“The only constant in the technology industry is change.”",
    author: "Marc Benioff",
  },
  {
    id: 2,
    quote: "“Innovation distinguishes between a leader and a follower.”",
    author: "Steve Jobs",
  },
  {
    id: 3,
    quote: "“The best way to predict the future is to invent it.”",
    author: "Alan Kay",
  },
  {
    id: 4,
    quote:
      "“It's fine to celebrate success but it is more important to heed the lessons of failure.”",
    author: "Bill Gates",
  },
  {
    id: 5,
    quote: "“The biggest risk is not taking any risk.”",
    author: "Mark Zuckerberg",
  },
  {
    id: 6,
    quote:
      "“If you don't innovate fast, disrupt your industry, disrupt yourself, you'll be left behind.”",
    author: "John Chambers",
  },
  {
    id: 7,
    quote:
      "“We want to build technology that everybody loves using, and that affects everyone.”",
    author: "Larry Page",
  },
  {
    id: 8,
    quote: "“Technology is best when it brings people together.”",
    author: "Matt Mullenweg",
  },
  {
    id: 9,
    quote:
      "“The technology you use impresses no one. The experience you create with it is everything.”",
    author: "Sean Gerety",
  },
  {
    id: 10,
    quote: "“Simplicity is the ultimate sophistication.”",
    author: "Leonardo da Vinci",
  },
  {
    id: 11,
    quote:
      "“The only way to make sense out of change is to plunge into it, move with it, and join the dance.”",
    author: "Alan Watts",
  },
  {
    id: 12,
    quote: "“Technology is a useful servant but a dangerous master.”",
    author: "Christian Lous Lange",
  },
  {
    id: 13,
    quote:
      "“The real problem is not whether machines think but whether men do.”",
    author: "B.F. Skinner",
  },
  {
    id: 14,
    quote: "“Technology should improve your life… not become your life.”",
    author: "Billy Cox",
  },
  {
    id: 15,
    quote:
      "“Our business is about technology, yes. But it’s also about operations and customer relationships.”",
    author: "Michael Dell",
  },
  {
    id: 16,
    quote: "“The only way to do great work is to love what you do.”",
    author: "Steve Jobs",
  },
  {
    id: 17,
    quote:
      "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    author: "Winston Churchill",
  },
  {
    id: 18,
    quote:
      "“Success usually comes to those who are too busy to be looking for it.”",
    author: "Henry David Thoreau",
  },
  {
    id: 19,
    quote: "“Don’t watch the clock; do what it does. Keep going.”",
    author: "Sam Levenson",
  },
  {
    id: 20,
    quote:
      "“The future belongs to those who believe in the beauty of their dreams.”",
    author: "Eleanor Roosevelt",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer ( Frontend )",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    company: "Bulipe Tech LTD",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "M E R N Stack Developer Intern",
    company: "Diz IT LTD",
    desc: "Designed and developed a web-based application  using React.js, Node.js, MongoDB & Express.js",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance Web Developer",

  //   desc: "Led the dev of a web app for a client, from initial concept to deployment.",
  //   company: "Freelance",
  //   className: "md:col-span-2 lg:col-start-1 lg:col-end-3", // change to md:col-span-2
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
