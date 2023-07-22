import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  name: `I'm Ariel Almeida.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">
          <a href="https://landing.solfacil.com.br/">Solfácil</a>
        </strong>{' '}
        helping build a modern, scalable, and secure platform for financing solar energy equipment.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me studying{' '}
        <strong className="text-stone-100">online Coursera courses</strong>, plucking my{' '}
        <strong className="text-stone-100">guitar</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">tourist spots</strong> where I live.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
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
    {label: 'Location', text: 'Salvador, Bahia, Brazil', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Jiu Jitsu, Guitar, Learning new skills', Icon: SparklesIcon},
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
        name: 'SQL / NoSQL / Postgre / SQLite3',
      },
      {
        name: 'Postman / Insomnia / Swagger',
      },
    ],
  },
  {
    name: 'Desktop Development',
    skills: [
      {
        name: 'Python (Customtkinter)',
      },
      {
        name: 'C# (Windows Forms)',
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
        name: 'npm, yarn (Node)',
      },
      {
        name: 'pip, poetry (Python)',
      },
      {
        name: 'choco, apt, brew (OS)',
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
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'TBA.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'TBA.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'TBA.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'TBA.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'TBA.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'TBA.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'TBA.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'TBA.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'TBA.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'TBA.',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'TBA.',
    url: '',
    image: porfolioImage11,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2021 - 2023',
    location: 'Federal University of Bahia (UFBA)',
    title: "Master's in Computer Science",
    content: <p>TBA.</p>,
  },
  {
    date: '2016 - 2020',
    location: 'Salvador University (UNIFACS)',
    title: "Bachelor's in Electrical Engineering",
    content: <p>TBA.</p>,
  },
  {
    date: '2013 - 2015',
    location: 'CSAJ',
    title: 'High School',
    content: <p>TBA.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'Solfácil - São Paulo, Brazil (Remote)',
    title: 'Software Engineer',
    content: <p>TBA</p>,
  },
  {
    date: '2021 - 2023',
    location: 'Federal University of Bahia (UFBA) - Bahia, Brazil',
    title: "Full-time (paid scholarship) Master's Student/Researcher",
    content: <p>TBA</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Test.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch!',
  description:
    'If you have any questions or would like to work together on something interesting, feel free to drop me a line.',
  items: [
    {
      type: ContactType.Email,
      text: 'almeidajr.ariel@gmail.com',
      href: 'mailto:almeidajr.ariel@gmail.com',
    },
    {
      type: ContactType.Instagram,
      text: '@ariel_almeida_jr',
      href: 'https://www.instagram.com/ariel_almeida_jr/',
    },
    {
      type: ContactType.Github,
      text: 'Ariel Almeida',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ariel_almeida_jr/'},
];
