import {
  nodeLogo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  saaCo3,
  vueReactLogo,
  SDC1,
  SDC2,
  Goodwill,
  Palomar,
  privateSnsProject,
  mca_project,
  sdc_project,
  cinemania_project,
  github,
  Laravel,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Engineer',
    icon: vueReactLogo,
  },
  {
    title: 'Node.js Engineer',
    icon: nodeLogo,
  },
  {
    title: 'AWS Certified Solutions Architect',
    icon: saaCo3,
  },
  {
    title: 'Docker Apprentice',
    icon: docker,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Larvel',
    icon: Laravel,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Senior Software Engineer II/Team Lead',
    company_name: 'SmileDirectClub',
    icon: SDC2,
    iconBg: '#383E56',
    date: 'January 2023 - Present',
    points: [
      `Work as part of a fully remote front end team in the development of a global marketing site and micro-services using Node,  Vue, Docker, and AWS services, prioritizing user-friendliness, slick UI's, and seamless integration with Contentful CMS.`,
      `Contribute to creating a reusable component library to ensure code cleanliness and maximum reusablity.`,
      `Spearhead new initiatives for implementing new technologies for continual team improvement.`,
      'Collaborate with cross-functional technology teams including designers, product managers, and other developers to create high-quality products.',
      `Facilitate grooming, planning, and retrospective meetings for the team in
        conjunction with a business analyst, ensuring meticulous sprint planning and alignment with business objectives.`,
      'Participate in thorough code reviews and providing constructive feedback to other developers.',
      'Offer big picture ideas and architectures to make our applications more performant, highly available and fault tolerant',
    ],
  },
  {
    title: 'Senior Software Engineer I',
    company_name: 'SmileDirectClub',
    icon: SDC1,
    iconBg: '#E6DEDD',
    date: 'May 2022 - January 2023',
    points: [
      `Develop, test, and maintain a production scale Node.js/Express
        Microservice BFF (Backend for Frontend) system which seamlessly integrates with various internal microservices, serving as a reliable API for our front-end applications. It is deployed to a private vpc using Docker, Terraform, and runs in ECS. Has automated jest/nock unit testing that runs via GitHub actions.`,
      `Collaborate daily with UI/UX designers, QA testing teams (UAT), and the
        Marketing team to ensure successful feature planning and releases.
        Facilitate grooming, planning, and retrospective meetings for the team in
        conjunction with a business analyst, ensuring meticulous sprint planning and
        alignment with business objectives.`,
      'Implementing responsive design and ensuring cross-browser compatibility.',
      `Implement application security with HashiCorp’s Vault and JWT’s and API
best practices including but not limited to encryption in transit and at rest.`,
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Goodwill Industries',
    icon: Goodwill,
    iconBg: '#383E56',
    date: 'Jan 2019 - May 2022',
    points: [
      `Built a national-facing web application centered on improving people's lives by helping them become job ready with upskilling, online digital trainings, resource findings and resume building all through the applicaiton. This app was build using Laravel, PHP, MySQL DB, modern JavaScript, Vue and React.`,
      'Implemented a new CI/CD pipeline to reduce deployment time by 10%.',
      'Used Cypress integration testing and jest for unit testing to establish code testing and create  deployment confidence.',
      'Participated in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Computer Science Studies',
    company_name: 'Palomar College',
    icon: Palomar,
    iconBg: '#E6DEDD',
    date: 'November 2017 - May 2019',
    points: [
      'Learned the fundamentals of computer science and understanding the deeper workings of the web.',
      'Built multiple projects from scratch using JavaScript and other front end tools.',
      'Hands on experience building applications with Java and Eclipse as well as working with asynchronous code and fetching data via APIs',
    ],
  },
];

const projects = [
  {
    name: 'Smile Direct Club',
    description: `SmileDirectClub's web app is a one-stop shop for aligner treatment management. It allows users to book appointments, get insurance verification, assess their smile, track progress, and get support. Built with Vue and Node.js, the app is fast, reliable, and scalable and serves millions of users annually. It also utilizes microservice integrations, Jest and Vue Test Utils for testing, and Contentful CMS.`,
    tags: [
      {
        name: 'nuxt.js',
        color: 'green-text-gradient',
      },

      {
        name: 'bulma',
        color: 'pink-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
    ],
    image: sdc_project,
    source_code_link: 'https://smiledirectclub.com/',
    icon: SDC2,
  },
  {
    name: 'Goodwill Industries',
    description: `
      MyCareerAdvisor is a national multi-tenant web application built in Laravel, PHP, React, MySQL and Deployed to AWS. It is a non-profit organization dedicated to helping the unemployed and underemployed upskill, have experience, offer resume and cv help and overall help them improve their lives by providing connections to resources and assets to help the jobseeker improve their lives and end poverty through the power of work.

      MyCareerAdvisor provides a variety of services to help the unemployed and underemployed find and keep good jobs. These services include:

      Upskilling: MyCareerAdvisor provides users with access to a variety of resources to help them upskill and learn new skills. This includes online courses, tutorials, and articles.
      Experience: MyCareerAdvisor provides users with opportunities to gain experience through volunteer work, internships, and apprenticeships.
      Resume and CV help: MyCareerAdvisor provides users with help writing their resumes and CVs. This includes help with formatting, content, and keyword optimization.
    Connections to resources and assets: MyCareerAdvisor provides users with connections to resources and assets that can help them improve their lives. This includes job boards, financial assistance programs, and government services.
      MyCareerAdvisor is a valuable resource for the unemployed and underemployed. It is helping people to upskill, gain experience, find jobs, and improve their lives. By providing people with the tools and resources they need to succeed, MyCareerAdvisor is helping to end poverty through the power of work.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Laravel',
        color: 'orange-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: mca_project,
    source_code_link: 'https://mycareeradvisor.com/',
    icon: Goodwill,
  },
  {
    name: 'Cinemania',
    description: `Cinemania: A React Application for True Movie Fans
          Cinemania is a React application that works with the TMDB movie REST API to bring in movies and create a movie directory. It allows users to filter and sort movies by their rating, date, and other criteria. Cinemania is meant to serve as a place for true movie fans to browse the latest and most popular and upcoming movies.

          Features of Cinemania

          Movie directory: Cinemania's movie directory includes information about thousands of movies, including title, release date, genre, cast, crew, and rating.
          Filtering and sorting: Users can filter and sort movies by rating, date, genre, and other criteria. This makes it easy to find movies that match their interests.
          Movie details: Cinemania provides detailed information about each movie, including a synopsis, trailer, and reviews.
          User ratings: Users can rate movies on a scale of 1 to 5 stars. This helps other users to find movies that they are likely to enjoy.
        `,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: cinemania_project,
    source_code_link: 'https://github.com/torressam333/cinemania',
    icon: github,
  },
  {
    name: 'SNS-Plugin-Service',
    description: `
    A Model-Controller architecture application in Node.js using the AWS SDK can be a valuable tool for developers looking to create scalable and reliable apps by integrating with SNS and SQS queues in an AWS event-driven architecture. This approach separates business logic from presentation, making apps more modular and easier to maintain. Node.js is ideal for event-driven apps, and the AWS SDK simplifies interaction with AWS services like SNS and SQS. These services enable asynchronous communication and efficient message processing. Benefits include scalability, reliability, ease of use, and thorough unit testing, making it a powerful and flexible solution for building robust applications.
        `,
    tags: [
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'SNS|SQS',
        color: 'green-text-gradient',
      },
      {
        name: 'Serverless',
        color: 'orange-text-gradient',
      },
    ],
    image: privateSnsProject,
    source_code_link: 'https://github.com/',
    icon: github,
  },
];

export { services, technologies, experiences, projects };
