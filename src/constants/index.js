import {
  nodeLogo,
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
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
    name: 'Three JS',
    icon: threejs,
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
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Senior Software Engineer I',
    company_name: 'SmileDirectClub',
    icon: SDC1,
    iconBg: '#E6DEDD',
    date: 'May 2022 - January 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Goodwill Industries',
    icon: Goodwill,
    iconBg: '#383E56',
    date: 'Jan 2019 - May 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Computer Science Studies',
    company_name: 'Palomar College',
    icon: Palomar,
    iconBg: '#E6DEDD',
    date: 'November 2017 - May 2019',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
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

export { services, technologies, experiences, testimonials, projects };
