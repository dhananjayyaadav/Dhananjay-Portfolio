import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Dhananjay Yadav',
  title: "Hi all, I'm Dhananjay",
  description:
    "I'm passionate Data Science and Full Stack web development having an experience of web applications with JavaScript,Python, Django, React.js, Next.js, and Blockchain development on Ethereum, Solidity, Web3.js.",
  resumeLink:
    'https://drive.google.com/file/d/1RT8fFtAQdXa8eelode8rH6rgIFXWD4b5/view',
};

export const openSource = {
  githubUserName: 'dhananjayyaadav',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/dhananjayyaadav/',
  github: 'https://github.com/dhananjayyaadav',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/dhananjayyadav06',
  twitter: 'https://twitter.com/dhananjayyaadav',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'INSTITUTE OF ENGINEERING AND TECHNOLOGY Ayodhya',
    subHeader: 'B.Tech in Computer Engineering',
    duration: 'Aug 2020 - Jul 2023'
    percentage: '71.13',
    location: 'Ayodhya UP - India'
    descBullets: [
      'Data Structure and Algorithm, Programming Methodology',
      'Machine Learning, Deep Learning, Artificial Intelligence, NLP',
      
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Self Employed',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
 
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [

  {
    name: 'MyMeta Wallet',
    desc: '• Build a MyMeta Wallet Blockchain Project It is a Crypto Wallet that provides Easy Access to store and share Crypto Coins or Digital Assets.',
    github: 'https://github.com/dhananjayyaadav/My-Meta-Wallet',
  },
  {
    name: 'MateBook Application',
    desc: '• Build a Matebook App using React, CSS, Express, and TypeScript.',
    '• A Social Media web Application used for users to Post Photos along with description. Users can Send/Accept/Cancel Friend requests. Users can View/Like/Comment Friend’s Posts.',
    github: 'https://github.com/dhananjayyaadav/MateBook',
  },
  {
    name: 'CLIMATE CHANGE PREDICTION | Data Science',
    desc: '• Create a project on Climate Change Prediction using Machine Learning, Data Science, ARIMA and (Tree-based) Model. Which will help in Analyzing and Predicting Earth’s Climate and Environmental change.',
    '• This project also includes Analysis of the Effect of Greenhouse gases on Rising Pollution levels and Temperature changes, and predicts the Safest and Most Polluted cities.',
    github: 'https://github.com/dhananjayyaadav/Climate-Change-Prediction',
  },
  {
    name: 'Dhananjay-Profile',
    desc: '• Build a Dynamic Website Using React-js and JavaScript This web page is fully customizable Portfolio Website that lets showcase my works and provide every detail about me as a Software Engineer',
    github: 'https://github.com/dhananjayyaadav/Dhananjay-Profile',
    link: 'https://dhananjay-profile.vercel.app/',
  },
  {
    name: 'Netflix Clone',
    desc: '• Netflix clone is created in android with MVVM architecture. It uses APIs from TMDB - The Movie Database. It contains Features like Trailer playback, Home feed, Movies, Search / View for movie, tv shows.',
    github: 'https://github.com/dhananjayyaadav/Netflix-Clone',
    link: 'https://dhananjay-profile.vercel.app/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Amit Kumar',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Dhananjay Yadav',
  description: 'A passionate Full Stack Developer and Blockchain Developer.',
  author: 'Dhananjay Yadav',
  image:
    'https://drive.google.com/file/d/1W66rigahONwyRVnJt8ssNtp7C0_jyXMM/view?usp=drivesdk',
  url: 'https://dhananjay-profile.vercel.app/',
  keywords: [
    'Dhananjay',
    'Dhananjay Yadav',
    '@dhananjayyaadav',
    'dhananjayyaadav',
    'Portfolio',
    'Dhananjay Portfolio ',
    'Dhananjay Portfolio',
  ],
};
