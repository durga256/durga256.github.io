import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    Budweiser,
    PreludeSys,
    Keyvrix,
    SymboleoWeb,
    TradeSocial,
    ExpenseTracker,
    GaneshABI,
    KarmKeyvrix,
    Shan
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-stack Developer",
      icon: web,
    },
    {
      title: "Web 3.0",
      icon: mobile,
    },
    {
      title: "Data Analytics",
      icon: backend,
    },
    {
      title: "Machine Learning",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
  
  const experiences = [
    {
      title: "Full-stack Developer(Blockchain and AI analytics)",
      company_name: "Keyvrix Inc.,",
      icon: Keyvrix,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Present",
      points: [
        "Established an Azure Data Factory configuration for daily crypto data logging.",
        "Implemented data cleaning to supply machine learning models with blockchain data input",
        "Orchestrated machine learning models(Tensorflow) to execute predictive analysis on blockchain data.",
        "Developed a end-to-end website to showcase the outcomes of blockchain data analytics.",
        "Implemented version control systems to enhance productivity among developers."
      ],
    },
    {
      title: "Senior Analyst - Fullstack",
      company_name: "Anheuser-Busch InBev(Budweiser)",
      icon: Budweiser,
      iconBg: "#E6DEDD",
      date: "Jul 2020 - Feb 2022",
      points: [
        "Built a Progressive Web App(Full-stack) to collate all order approvals to a single website for the North America Zone, automating 2 FTE.",
        "Deployed Microsoft Geolocation APIs to monitor Cargo Movement",
        "Trained Interns to take on End-to-End ownership of Products enabling automation of 2 FTE.",
        "Participated in Intern Reviews contributing to hiring decisions",
        "Provided Virtual training on Automation tools to Africa zone and the GCC."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "PreludeSys Inc.,",
      icon: PreludeSys,
      iconBg: "#E6DEDD",
      date: "Jun 2018 - Jul 2019",
      points: [
        "Developed decentralized applications (dApps) using Solidity, Truffle Suite, Remix, and Web3.js.",
        "Worked with Rinkeby to deploy smart contracts and test dApps",
        "Developed web-based interfaces for dApps using JavaScript, React to enable user interaction",
        "Contributed to the development of blockchain-based solutions and proof of concepts",
        "Communicated project status, and challenges to stakeholders, and project managers",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Very Quick Learner who understands Financial impact. She also never gives up. It was very difficult to build our platform catering to complex and varying needs but she did an excellent job.",
      name: "Ganesh Thankur",
      designation: "Associate Manager-OTC",
      company: "Anheuser-Busch InBev",
      image: GaneshABI,
    },
    {
      testimonial:
        "Durga's ability to navigate complex challenges and come up with innovative solutions is truly impressive. Durga played a crucial role in creating Machine Learning models with significant impact.",
      name: "Karmugil Kalaiyarasan",
      designation: "Full-stack Developer",
      company: "Keyvrix Inc.,",
      image: KarmKeyvrix,
    },
    {
      testimonial:
        "Durga is an excellent person to have on a team. She writes elegant code ensuring the right balance between readability of code and performance of the product.",
      name: "Shanmugam Ganesan",
      designation: "QA Engineer",
      company: "Bluwave-ai",
      image: Shan,
    },
  ];
  
  const projects = [
    {
      name: "Symboleo Web IDE",
      description:
        "Web-based IDE that helps developers develop using the Symboleo Language , providing a convenient and efficient solution for Smart Contract Development needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "monaco-languageclient",
          color: "green-text-gradient",
        },
        {
          name: "Xtext",
          color: "pink-text-gradient",
        },
      ],
      image: SymboleoWeb,
      source_code_link: "https://symboleo-web.vercel.app/",
    },
    {
      name: "TradeSocial",
      description:
        "TradeSocial is a social media platform which makes Crypto investing easy for users. This was made for ETHGlobal Waterloo Hackathon 2023",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GraphAPIs",
          color: "green-text-gradient",
        },
        {
          name: "Blockchain",
          color: "pink-text-gradient",
        },
      ],
      image: TradeSocial,
      source_code_link: "https://ethglobal.com/showcase/trade-social-2rcvr",
    },
    {
      name: "Expense Tracker",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ExpenseTracker,
      source_code_link: "https://github.com/durga256/Expense-Tracker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };