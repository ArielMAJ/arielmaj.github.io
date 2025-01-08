import {AcademicCapIcon, BuildingOffice2Icon, FlagIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImageFinancesManager from '../images/portfolio/finances-manager.png';
import porfolioImageGitHubVisualization from '../images/portfolio/github-visualization.png';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Ariel's Portfolio",
  description: 'Learn more about my skills, experience, and projects.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ariel Menezes.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Software Engineer</strong> at Solfácil, the first solar fintech in
        Latin America and the largest ecosystem of solar solutions in Brazil, where I specialize in designing and
        building scalable solutions that drive innovation and efficiency. With a strong foundation in full stack web
        engineering, I leverage modern technologies to create robust applications, APIs and platform integrations.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I love challenges, learning new things and working in team projects. I'm always looking for opportunities to grow and improve my skills and network!`,
  aboutItems: [
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Web Engineering, A.I., building impactful software solutions.', Icon: SparklesIcon},
    {label: 'Study', text: 'Federal University of Bahia (UFBA)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Solfácil', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English (Fluent)',
      },
      {
        name: 'Brazilian Portuguese (Native)',
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React (JS/TS)',
      },
      {
        name: 'Vue (JS/TS)',
      },
      {
        name: 'Angular',
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node (JS/TS)',
      },
      {
        name: 'Python (FastAPI, Flask)',
      },
      {
        name: 'Java (Springboot)',
      },
      {
        name: 'SQL / NoSQL / PostgreSQL / MongoDB',
      },
      {
        name: 'Postman / Insomnia / Swagger',
      },
    ],
  },
  {
    name: 'Machine Learning (Python)',
    skills: [
      {
        name: 'Tensorflow, Keras & OpenCV',
      },
      {
        name: 'Pre-trained models & transfer-learning',
      },
      {
        name: 'Object / Face Detection & Classification / Recognition',
      },
      {
        name: 'Naive Bayes, KNN, Decision Trees, DL / CNN, etc.',
      },
    ],
  },
  {
    name: 'Package management',
    skills: [
      {
        name: '[Node]: npm, yarn, pnpm, bun',
      },
      {
        name: '[Python]: poetry',
      },
      {
        name: '[Java]: Maven, Gradle',
      },
      {
        name: '[OS]: choco, apt, brew',
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Algorithms and Data Structures (C/C++)',
      },
      {
        name: 'Docker / Docker compose',
      },
      {
        name: 'Github Actions (eg. deployment automation)',
      },
      {
        name: 'CI/CD, Jenkins, ArgoCD, Rancher, etc',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Finances Manager',
    description:
      'A finance manager web app to help you keep track of your expenses. Built with Angular + Java (Springboot) + PostgreSQL.',
    url: 'https://github.com/ArielMAJ/finances-frontend',
    image: porfolioImageFinancesManager,
  },
  {
    title: 'GitHub User Data Visualization',
    description:
      'Search and see information about GitHub accounts, such as "what\'s the rate of template repositories does a given person have?". Built with Vue (TS) and FastAPI.',
    url: 'https://github.com/ArielMAJ/github-user-data-visualization',
    image: porfolioImageGitHubVisualization,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2024 - 2028',
    location: 'Federal University of Bahia (UFBA)',
    title: 'Ph.D. in Computer Science',
    content: (
      <p>
        TL;DR: research is fun; federated learning, edge computing and privacy in our algorithms sounds like interesting
        and important topics; so this is the next step in my long term personal development plan.
      </p>
    ),
  },
  {
    date: '2021 - 2024',
    location: 'Federal University of Bahia (UFBA)',
    title: "Master's in Computer Science",
    content: (
      <p>
        This is where I delved deeper into the world of programming. I engaged in a variety of Machine Learning projects
        and publications, covering diverse topics such as classification, <strong>object detection, recognition</strong>
        , and beyond. Additionally, during my free time, I dedicated myself to studying and enrolling in various courses
        across multiple domains.
      </p>
    ),
  },
  {
    date: '2016 - 2020',
    location: 'Salvador University (UNIFACS)',
    title: "Bachelor's in Electrical Engineering",
    content: (
      <p>
        This was where I started my programming journey. I learned a little bit of <strong>C and Portugol</strong> in
        the first and second semester, then a little bit of <strong>MATLAB, robotics, and microcontrollers</strong>. I
        also learned about electronics, power systems, and more. At some point in the middle of the course, I started
        learning <strong>Python</strong> and doing little projects with it: from web scraping to desktop applications,
        and even Machine Learning. During my final two semesters I worked on my Bachelor's Degree Final Project: I
        developed a <strong>Machine Learning</strong> project using a custom dataset of panoramic dental radiographies.
        I worked on this project from data collection to training and testing a{' '}
        <strong>Convolutional Neural Network</strong> for classification, from zero. That's when I realized my true
        passion for software development.
      </p>
    ),
  },
  {
    date: '2013 - 2015',
    location: 'CSAJ',
    title: 'High School',
    content: (
      <p>
        Just a simple high school. I played a lot of guitar and even pondered becoming a guitarrist at some point haha.
        Back then the only thing I was sure was that I liked maths and that I wanted to study something I found
        challenging.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'Solfácil - São Paulo, Brazil (Remote)',
    title: 'Software Engineer',
    content: (
      <div>
        As a Software Engineer at Solfácil, the first solar fintech in Latin America and the largest ecosystem of solar
        solutions in Brazil, I focus on building impactful, scalable solutions that enhance efficiency and drive
        innovation. I’m passionate about developing automation tools that streamline complex processes, often
        integrating AI-driven approaches to boost productivity. With a strong focus on collaboration and
        problem-solving, I thrive in Agile environments, where I work closely with cross-functional teams to deliver
        high-quality results.
        <br />
        <br />
        <p>Technologies I've work with include: </p>
        <br />
        <b>Web Engineering (Back-end)</b>
        <p>
          - <strong>Microservices architecture</strong> for scalable systems; <br /> - Diverse{' '}
          <strong>Web Frameworks</strong>: Python (FastAPI, Flask), Elixir, Node.js;
          <br />- <strong>Database design</strong>: PostgreSQL; <br />- Docker, Kafka, AWS, ArgoCD, Rancher, etc;
        </p>
        <br />
        <b>Web Engineering (Front-end)</b>
        <p>
          - Vue.js (TypeScript) for <strong>dynamic and interactive user interfaces</strong>;
          <br />- Expertise in designing responsive, high-performance web applications;
        </p>
      </div>
    ),
  },
  {
    date: '2021 - 2023',
    location: 'Federal University of Bahia (UFBA) - Bahia, Brazil',
    title: "Full-time (paid scholarship) Master's Student/Researcher",
    content: (
      <p>
        Projects and publications in <strong>Machine Learning</strong>, spanning classification,{' '}
        <strong>object detection, recognition</strong>, and more. Teaching assistant in{' '}
        <strong>Data Structures and Algorithms</strong>.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: '',
    //   text: '',
    //   image: '',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch!',
  description:
    'If you have any questions or would like to work together on something interesting, feel free to send me a message.',
  items: [
    {
      type: ContactType.Email,
      text: 'almeidajr.ariel@gmail.com',
      href: 'mailto:almeidajr.ariel@gmail.com',
    },
    {
      type: ContactType.Instagram,
      text: '@ariel.menezes.aj',
      href: 'https://www.instagram.com/ariel.menezes.aj/',
    },
    {
      type: ContactType.Github,
      text: 'Ariel Menezes',
      href: 'https://github.com/ArielMAJ',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ArielMAJ'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/arielalmeida/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ariel.menezes.aj/'},
];
