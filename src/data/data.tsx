import {AcademicCapIcon, BuildingOffice2Icon, FlagIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
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
  title: 'Ariel Menezes',
  description: 'Learn more about my previous experiences, academic background, skills, and projects.',
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
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> at IBM, where I specialize in
        developing and maintaining enterprise-grade applications using Java, Spring Boot, React, and Node.js. My role
        involves creating scalable and efficient solutions that meet complex business needs. I am passionate about
        leveraging modern technologies and Agile practices to deliver high-quality software while fostering
        collaboration in cross-functional teams.{' '}
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
    {label: 'Employment', text: 'IBM', Icon: BuildingOffice2Icon},
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
        name: 'Java (Springboot)',
      },
      {
        name: 'Node (JS/TS)',
      },
      {
        name: 'Python (FastAPI, Flask)',
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
        name: '[OS]: brew, apt, choco',
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
        name: 'Docker / Podman & compose',
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
    date: '2024 - 2027',
    location: 'Federal University of Bahia (UFBA)',
    title: 'Ph.D. in Computer Science',
    content: (
      <p>
        I find research to be an engaging and meaningful pursuit. Topics such as federated learning, edge computing, and
        privacy in algorithm design align well with my interests and goals. I’m especially motivated by being able to
        contribute to areas that intersect technical innovation with real-world impact.
      </p>
    ),
  },
  {
    date: '2021 - 2024',
    location: 'Federal University of Bahia (UFBA)',
    title: "Master's in Computer Science",
    content: (
      <p>
        During my master’s program, I deepened my knowledge of programming and became more involved in applied research.
        I participated in a range of Machine Learning projects and publications, exploring areas such as{' '}
        <strong>classification, object detection, and recognition</strong>. Beyond academic work, I consistently
        invested time in self-study, enrolling in courses across different domains to broaden my understanding and skill
        set.
      </p>
    ),
  },
  {
    date: '2016 - 2020',
    location: 'Salvador University (UNIFACS)',
    title: "Bachelor's in Electrical Engineering",
    content: (
      <p>
        This was the starting point of my journey through Software Engineering. During the first semesters, I was
        introduced to programming through C and Portugol, followed by exposure to MATLAB, robotics, microcontrollers,
        electronics, and power systems. Midway through the course, I began learning Python and developed small projects
        ranging from web scraping to desktop applications and early experiments with Machine Learning. In my final two
        semesters, I dedicated myself to my Bachelor's Degree Final Project, which involved developing a{' '}
        <strong>Machine Learning</strong> solution for classifying panoramic dental radiographs. I managed the entire
        pipeline—from data collection and preprocessing to training and evaluating a{' '}
        <strong>Convolutional Neural Network</strong> built from scratch. This experience solidified my interest in
        software development and guided my path forward in the field.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025 - Present',
    location: 'IBM - São Paulo, Brazil (Remote)',
    title: 'MidLevel Software Engineer',
    content: (
      <p>
        As a Software Engineer at IBM, I specialize in developing and maintaining enterprise-grade applications using
        Java, Spring Boot, Angular, and Node.js. My role involves creating scalable and efficient solutions that meet
        complex business needs.
      </p>
    ),
  },
  {
    date: '2023 - 2025',
    location: 'Solfácil - São Paulo, Brazil (Remote)',
    title: 'Software Engineer',
    content: (
      <div>
        As a Software Engineer at Solfácil, the first solar fintech in Latin America and the largest ecosystem of solar
        solutions in Brazil, I focused on building impactful, scalable solutions that enhance efficiency and drive
        innovation. I’m passionate about developing automation tools that streamline complex processes, often
        integrating AI-driven approaches to boost productivity. With a strong focus on collaboration and
        problem-solving, I thrive in Agile environments, where I work closely with cross-functional teams to deliver
        high-quality results.
        <br />
        <br />
        <p>Technologies I've worked with include: </p>
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ariel-menezes/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ariel.menezes.aj/'},
];
