
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sajid Nawaz",
  title: "Hi all, I'm Sajid Nawaz",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building iOS and Android Mobile applications with Swift / Objective-C / Java / Kotlin and Flutter."),
  resumeLink: "https://drive.google.com/file/d/1wDXIrs0H76fWYEBM2y1XFo_oSXgRA0WW/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/SajidNawaz993",
  linkedin: "https://www.linkedin.com/in/sajid-nawaz-744578121/",
  gmail: "sajidnawaz993@gmail.com",
  gitlab: "https://gitlab.com/sajidnawaz",
  facebook: "https://web.facebook.com/sajid.nawaz.1048"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK MOBILE APPS DEVELOPER WHO WANTS TO EXPLORE MOBILE TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive User Interfaces for your mobile applications"),
    emoji("⚡ Amazing Mobile App Products with Clean and maintainable code"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Objective-C",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "SQlite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-modx"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Interface Layout and Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Restful API and 3rd Party Data Integration",
      progressPercentage: "90%"
    },
    {
      Stack: "Mobile Apps Architecture",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (iOS/Android Developer)",
      company: "Moftak Solution (PVT)",
      companylogo: require("./assets/images/moftal-sol.png"),
      date: "Sep 2016 – June 2017",
      desc: "",
      descBullets: [
        "Implement enhancement in existing projects (Objective c, Swift)",
        "Develop apps for iPhone, iPad, iWatch in swift 2 & 3.",
        "Error and problem solving",
        "Explore new ideas ▫ Upload app on app store"
      ]
    },
    {
      role: "Software Engineer (iOS/Android Developer)",
      company: "LeadConcept Solution (PVT)",
      companylogo: require("./assets/images/leadconcept.jpg"),
      date: "July 2017 – August 2019",
      desc: "",
      descBullets: [
        "Implement enhancement in existing projects (Objective c, Swift)",
        "Develop apps for iPhone, iPad, iWatch in swift 2 & 3.",
        "Error and problem solving",
        "Explore new ideas ▫ Upload app on app store"
      ]
    },
    {
      role: "Lead Software Engineer (iOS/Android Developer)",
      company: "Gtek.Solutions",
      companylogo: require("./assets/images/gtek-logo.c8024a2d.png"),
      date: "September 2019 – Present",
      desc: "",
      descBullets: [
        "Implement enhancement in existing projects (Objective c, Swift)",
        "Develop apps for iPhone, iPad, iWatch in swift 2 & 3.",
        "Error and problem solving",
        "Explore new ideas ▫ Upload app on app store"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sajidNawaz993", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/e4/f2/fa/e4f2fa14-6cdf-0219-d32c-1498b8f1d568/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/homeschool-panda/id1470263093"
    },
    {
      image: "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/27/19/05/27190515-9d22-c869-a63d-c5b55e3ba7be/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
      link: "https://apps.apple.com/gb/app/humble-beauty-artists-app/id1364063314"
    },
    {
      image: "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/b6/0f/15/b60f1540-80fa-fa8a-a51b-3cb87b2ed40c/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.jpeg/230x0w.webp",
      link: "https://apps.apple.com/pk/app/vheelz/id1184862876"
    },
    {
      image: "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/ea/a3/fd/eaa3fdbc-8523-dcd0-8082-7587d140a422/pr_source.jpg/230x0w.webp",
      link: "https://apps.apple.com/pk/app/ecg-analyser/id903362799"
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple117/v4/0a/c1/84/0ac1844e-7904-3549-9b66-c98017225911/mzl.uwpkmfxz.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/jumpstart-pakistan/id878142359"
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/5d/2c/6c/5d2c6c91-c9a2-c026-328c-76b08d996ec9/AppIcon-0-1x_U007emarketing-0-0-85-220-0-10.png/230x0w.webp",
      link: "https://apps.apple.com/at/app/smatterling/id1434864797?l=en"
    },
    {
      image: "https://lh3.googleusercontent.com/jmbxTFo6ZMkabSqUxEthpkAYNj63CLaseycEJE9330tRhlqGJc5RrlMGPkbZ5q3amA=s180-rw",
      link: "https://play.google.com/store/apps/details?id=com.hsppro.app"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Education 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Bachelor of Science (Software Engineering) – 2012-2016",
      subtitle: "International Islamic University, Islamabad",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/IIUI-logo.png/220px-IIUI-logo.png",
      footerLink: [
        { name: "", url: "" },

      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@sajidnawaz/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/sajidnawaz-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3003377180",
  email_address: "sajidnawaz993@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
