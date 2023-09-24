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
  title: "Hi, I'm Dhananjay Yadav",
  description:
    "I'm passionate with Full Stack and Blockchain development having an expertise of full-stack web applications with TypeScript, React.js, JavaScript, Node.js, Next.js, Python, MongoDB and Blockchain development on Ethereum, Solidity, Web3.js.",
  resumeLink:
   'https://drive.google.com/file/d/1NVEb6uwTAu6rcW8iTDW-dZk9TACFubEd/view',
};

export const openSource = {
  githubUserName: 'dhananjayyaadav',
};

export const contact = {};
export const socialLinks: SocialLinksType = {
  url: 'https://dhananjay-profile.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/dhananjayyaadav/',
  github: 'https://github.com/dhananjayyaadav',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/dhananjayyadav06',
  twitter: 'https://twitter.com/dhananjayyaadav',
  youtube: 'https://www.youtube.com/@DhananjayYadav',
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
          skillName: 'HTML',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS',
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
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Working on multiple cloud platforms'),
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
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
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
    schoolName: 'Institute of Engineering And Technology Ayodhya',
    subHeader: 'B.Tech in Computer Engineering',
    duration: 'Aug 2020 - Jul 2023',
    desc: 'Participated in the research and published papers.',
    grade: 'Percentage- 78.13',
    descBullets: [
      'Data Science, Artificiel Inteligence- Computer vision, Data compression and generative modeling, Machine learning fundamentals, Optimization and reinforcement learning.',
    ],
},
  {
    schoolName: 'Shri Ramswaroop Memorial University Lucknow',
    subHeader: 'Diploma in Computer Science',
    duration: 'Aug 2018 - Jun 2020',
    desc: 'Participated in the research and published papers.',
    grade: 'Grade A',
    descBullets: [
      'First-authored a Research article, analyzing Bootstrapping and Cross-compiling for designing compilers for New architectures.',
    ],
  },
];
export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Development',
    company: 'Self Employed',
    companyLogo: '/img/icons/common/Self_employed_Copy.png',
    date: 'Nov 2022 - Mar 2023',
    desc: ' Build a Matebook App using React, CSS, Express, and TypeScript. A Social Media web Application used for users to Post Photos along with description. Users can Send/Accept/Cancel Friend requests. Users can View/Like/Comment Friend’s Posts.',
},
  {
    role: 'Frontend Development',
    company: 'Self Employed',
    companyLogo: '/img/icons/common/Self_employed_img.png',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
},
  {
    role: 'API Design',
    company: 'Self Employed',
    companyLogo: '/img/icons/common/Self_employed.png',
    date: 'Dec 2022 – Jan 2023',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
];
export const projects: ProjectType[] = [
  {
    name: 'Personal-Portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/dhananjayyaadav/Dhananjay-Profile',
    link: 'https://dhananjay-profile.vercel.app/',
  },
  {
    name: 'MateBook ',
    desc: 'Build a Matebook App using React, CSS, Express, and TypeScript. A Social Media web Application Users can Send/Accept/Cancel Friend requests.and Users can View/Like/Comment Friend’s Posts.',
    github: 'https://github.com/dhananjayyaadav/MateBook',
    link: 'https://facebook-clone-dev.vercel.app/',
  },
  {
    name: 'Apna Wallet',
    desc: 'Build a MyMeta Wallet Blockchain Project It is a Crypto Wallet that provides Easy Access to store and share Crypto Coins or Digital Assets.',
    github: 'https://github.com/dhananjayyaadav/apna-wallet',
    link: 'https://apna-wallet.vercel.app/',
  },
  {
    name: 'Climate Change Prediction',
    desc: 'Create a project on Climate Change Prediction using Machine Learning, Data Science, ARIMA and (Tree-based) Model. Which will help in Analyzing and Predicting Earth’s Climate and Environmental change.',
    github: 'https://github.com/dhananjayyaadav/Climate-Change-Prediction',
  },
  {
    name: 'Netflix Clone ',
    desc: 'Netflix clone is created in android with MVVM architecture. It uses APIs from TMDB - The Movie Database. It contains Features like Trailer playback, Home feed, Movies, Search / View for movie, tv shows.',
    github: 'https://github.com/dhananjayyaadav/Netflix',
  },

 {
    name: 'Disney+Star-game',
    desc: 'Create a dynamic web page using JavaScript which will allow the user to play a game to randomly select.',
    github: 'https://github.com/dhananjayyaadav/DisneyPlus-Star-Game',
  },
];
export const feedbacks: FeedbackType[] = [
  {
    name: 'Amit Kumar',
    feedback:
      'Really great work and I wanted to take a moment to express my sincere appreciation for your exceptional work and outstanding contribution to our team.',
  },
  {
    name: 'Rohit',
    feedback:
      'I am impressed by your ability to collaborate effectively with colleagues, both within our team and across departments, I look forward to witnessing your continued growth and success.',
  },
];
// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Dhananjay Yadav',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Dhananjay Yadav',
  image: 'https://github.com/dhananjayyaadav/Dhananjay-Profile/',
  url: 'https://dhananjay-profile.vercel.app/',
  keywords: [
    'Dhananjay',
    'Dhananjay Yadav',
    '@dhananjayyaadav',
    'dhananjayyadav',
    'portfolio',
    'Dhananjay Portfolio',
    'Dhananjay Yadav Portfolio',
  ],
};
