/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Babitha Reddy Vakiti",
  title: "Hi all, I'm Babitha",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Java / SpringBoot / Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1ia8eWUGvqW_UQO13paDEQHPj_6__33IIrnWzCf18LoY/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "babitha@careerwenmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  github: "https://github.com/BabithaVakiti/Babitha_Portfolio",
  linkedin: "https://www.linkedin.com/in/vakiti3012/",
  gmail: "babitha@careerwenmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Marist College",
      logo: require("./assets/images/Marist_College.png"),
      subHeader: "Master in Compunter Science and Information Systems",
      duration: "August 2021 - December 2022",
      desc: "Took courses about DataScience and Advanced Algorithms",
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
      schoolName: "Sreyas College of Engineering",
      logo: require("./assets/images/Sreyas Logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2015 - May 2019",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, and Software Management",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Java Developer",
      company: "Mercury Insurance",
      companylogo: require("./assets/images/Mercury.Insurance.png"),
      date: "November 2023 – Till date",
      /*desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
      role: "Full Stack Java Developer",
      company: "American Frist Credit union",
      companylogo: require("./assets/images/AFCU.png"),
      date: "January 2023 – Octomber 2023",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer",
      company: "Accellor",
      companylogo: require("./assets/images/Accellor.png"),
      date: "April 2019 – August 2021",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "PROJECTS",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Mercury.Insurance.png"),
      projectName: "Capture Integration Services",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mercuryinsurance.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AFCU.png"),
      projectName: "Credit Dispute Systems",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.americafirst.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Intel.png"),
      projectName: "Intel",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.intel.com/content/www/us/en/homepage.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Work.com"),
      projectName: "Work.com",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.salesforce.com/service/employee-engagement/?sfdc-redirect=219"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AdTalem.png"),
      projectName: "Adtalem",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.adtalem.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/TaylorCommunications.png"),
      projectName: "Taylor Communications",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ordertest.taylorcommunications.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Salesforce Adminstrator",
      //subtitle:
      //  "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/SFAdmin.png"),
      imageAlt: "Salesforce Admin",
      footerLink: [
        {
          name: "Certification",
          url: "https://tbid.digital.salesforce.com/oauth2/aus5v9466wdqLdY0O697/v1/authorize?response_type=code&response_mode=query&client_id=0oa5v93ebgAGqkFSn697&redirect_uri=https%3A%2F%2Fiis.digital.salesforce.com%2Fservices%2Fauth%2Fcallback&state=eyJyZWZlcnJlciI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJyZWRpcmVjdFVyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8_aGFzTG9nZ2VkSW49dHJ1ZSIsImNvcnJlbGF0aW9uSWQiOiJhYWNjYzEzMS04NTAxLTQ1ZTItODA3Zi1iNGNhNDdmMTQzNDMiLCJzdGFydFRpbWUiOjE3MjQ3MDU1MDY3MDQsImNsaWVudElkIjoiSUlTX0F1dGhyZWxheSIsImlkcHMiOlsiSWRQIC0gR29vZ2xlIiwiSWRQIC0gU2FsZXNmb3JjZSIsIklkUCAtIE11bGVzb2Z0LVVTIiwiSWRQIC0gTXVsZXNvZnQtRVUiLCJJZFAgLSBUYWJsZWF1IiwiSWRQIC0gTGlua2VkaW4iLCJJZFAgLSBBcHBsZSIsIm90cCJdLCJsb2dnZWRJbiI6ZmFsc2V9&scope=openid+profile+email&intent=login"
        }
      ]
    },
    {
      title: "Salesforce Associate",
      //subtitle:
       // "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/SFAssociate.png"),
      imageAlt: "Salesforce Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://tbid.digital.salesforce.com/oauth2/aus5v9466wdqLdY0O697/v1/authorize?response_type=code&response_mode=query&client_id=0oa5v93ebgAGqkFSn697&redirect_uri=https%3A%2F%2Fiis.digital.salesforce.com%2Fservices%2Fauth%2Fcallback&state=eyJyZWZlcnJlciI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJyZWRpcmVjdFVyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8_aGFzTG9nZ2VkSW49dHJ1ZSIsImNvcnJlbGF0aW9uSWQiOiJhYWNjYzEzMS04NTAxLTQ1ZTItODA3Zi1iNGNhNDdmMTQzNDMiLCJzdGFydFRpbWUiOjE3MjQ3MDU1MDY3MDQsImNsaWVudElkIjoiSUlTX0F1dGhyZWxheSIsImlkcHMiOlsiSWRQIC0gR29vZ2xlIiwiSWRQIC0gU2FsZXNmb3JjZSIsIklkUCAtIE11bGVzb2Z0LVVTIiwiSWRQIC0gTXVsZXNvZnQtRVUiLCJJZFAgLSBUYWJsZWF1IiwiSWRQIC0gTGlua2VkaW4iLCJJZFAgLSBBcHBsZSIsIm90cCJdLCJsb2dnZWRJbiI6ZmFsc2V9&scope=openid+profile+email&intent=login"
        }
      ]
    },

    {
      title: "Salesforce Platform Developer 1",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/SFPd1.png"),
      imageAlt: "Salesforce PD1",
      footerLink: [
        {
          name: "Certification",
          url: "https://tbid.digital.salesforce.com/oauth2/aus5v9466wdqLdY0O697/v1/authorize?response_type=code&response_mode=query&client_id=0oa5v93ebgAGqkFSn697&redirect_uri=https%3A%2F%2Fiis.digital.salesforce.com%2Fservices%2Fauth%2Fcallback&state=eyJyZWZlcnJlciI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJyZWRpcmVjdFVyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8_aGFzTG9nZ2VkSW49dHJ1ZSIsImNvcnJlbGF0aW9uSWQiOiJhYWNjYzEzMS04NTAxLTQ1ZTItODA3Zi1iNGNhNDdmMTQzNDMiLCJzdGFydFRpbWUiOjE3MjQ3MDU1MDY3MDQsImNsaWVudElkIjoiSUlTX0F1dGhyZWxheSIsImlkcHMiOlsiSWRQIC0gR29vZ2xlIiwiSWRQIC0gU2FsZXNmb3JjZSIsIklkUCAtIE11bGVzb2Z0LVVTIiwiSWRQIC0gTXVsZXNvZnQtRVUiLCJJZFAgLSBUYWJsZWF1IiwiSWRQIC0gTGlua2VkaW4iLCJJZFAgLSBBcHBsZSIsIm90cCJdLCJsb2dnZWRJbiI6ZmFsc2V9&scope=openid+profile+email&intent=login"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "View my resume",
  resumeLink:
    "https://docs.google.com/document/d/1ia8eWUGvqW_UQO13paDEQHPj_6__33IIrnWzCf18LoY/edit?usp=sharing", // Set to empty to hide the button
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),

  subtitle:
    "Just want to say hi? My Inbox is open for all.",
  number: "+1 (845)-546-5289",

 // subtitle:
  //  "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-8455465289",

  email_address: "babitha@careerwebmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
