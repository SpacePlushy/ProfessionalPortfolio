import { Experience, Project, Education, Skill, SkillCategory, ContactInfo } from '../types/types';

export const experiences: Experience[] = [
  {
    title: "Software Engineer I - II",
    company: "Honeywell Aerospace",
    location: "Phoenix, Arizona",
    period: "May 2018 - June 2024",
    description: "Aerospace, Defense, and Space engineering firm.",
    responsibilities: [
      "Developed for NASA Orion Space Capsule Program using Wind River Simics to simulate the capsule's RTOS Display unit and its operating system.",
      "Provided C/C++ embedded code and cross support for test and design engineers with sole ownership of the Orion Display unit Simics code.",
      "Conducted and hosted training sessions for internal teams on Simics simulation, command line, and Simics device modeling language.",
      "Led software engineering and systems engineering for CMG wheel programs using LabVIEW and hardware interface.",
      "Maintained software for NASA ISS PMTE for MDM program, collaborating with Electronic Solutions team on software production and releases.",
      "Implemented new hardware and software solutions to handle obsolescence within the ISS group."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Performance Software Corporation",
    location: "Phoenix, Arizona",
    period: "Jul 2016 - Oct 2016",
    description: "Aerospace and defense safety critical software engineering firm.",
    responsibilities: [
      "Developed and maintained Python scripts for Northrop Grumman's Blackhawk Helicopter project.",
      "Developed a Python tool that increased team's script creation cycle time by 38%.",
      "Suggested innovative ideas that were implemented into the project's process for increased team efficiency.",
      "Tested software using real-time operating systems and real-time testing suites."
    ]
  },
  {
    title: "Co-founder and Chief Technology Officer",
    company: "Life Jewel Technologies",
    location: "Tempe, Arizona",
    period: "Dec 2016 - Jun 2017",
    description: "Award-winning startup teaching language to children through object-recognizing stuffed animals.",
    responsibilities: [
      "Developed Objective C and Swift software to recognize objects using Bluetooth iBeacon technology.",
      "Served as sole engineer in the development of all software for the product and copyrighted the work.",
      "Developed cross-platform software to work on various forms of hardware such as Android and Windows Phone OS."
    ]
  },
  {
    title: "Advisor",
    company: "Apple Inc.",
    location: "Tempe, Arizona",
    period: "Jun 2014 - Dec 2014",
    description: "Multinational technology company that designs, develops, and sells consumer electronics and software.",
    responsibilities: [
      "Understood customer needs so well that I obtained awards and leadership recognition.",
      "Became the go-to person for coworker collaboration since my performance exceeded peers.",
      "Awarded numerous awards for customer service and average call solution time."
    ]
  }
];

export const education: Education = {
  school: "Arizona State University",
  department: "Ira A. Fulton Schools of Engineering",
  degree: "B.S., Computer Science",
  gpa: "3.60",
  location: "Tempe, Arizona",
  graduationDate: "May 2018",
  achievements: [
    "Member of the National Society of Collegiate Scholars.",
    "Led Capstone Project team to develop an entire enterprise level web application in 10 months.",
    "Fulton Ultimate Engineering Leadership program, achieved first place in entrepreneurship program."
  ]
};

export const technicalSkills: Skill[] = [
  { name: "C/C++", percentage: 95 },
  { name: "Python", percentage: 85 },
  { name: "Java", percentage: 80 },
  { name: "Swift", percentage: 75 },
  { name: "LabVIEW", percentage: 85 },
  { name: "Angular/Node.js", percentage: 70 }
];

export const softwareTools: string[] = [
  "Visual Studio", "Simics", "SCADE Suite", "ClearCase", "Linux/Unix", 
  "Eclipse", "IntelliJ", "Clion"
];

export const professionalSkills: SkillCategory[] = [
  {
    title: "Software Development",
    items: [
      "Test software development",
      "RTOS development",
      "Object Oriented Programming",
      "Data Structures",
      "Debugging and Testing"
    ]
  },
  {
    title: "Project Management",
    items: [
      "Software obsolescence management",
      "Waterfall development lifecycle",
      "Agile development lifecycle",
      "Distributed Development"
    ]
  },
  {
    title: "Additional Competencies",
    items: [
      "Problem Solving",
      "Team Leadership",
      "Assistive Technologies for the disabled",
      "UML"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Math Services Website",
    description: "Led a team to develop an array of SOAP and REST web services to deploy online for use by anyone on the ASU server. Services included a PI calculation to the nth decimal service.",
    technologies: ["SOAP", "REST", "Web Services", "Team Leadership"],
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "3-in-a-Row Game Solver",
    description: "Developed a Windows application GUI in C# using Visual Studio for solving the grid game of \"3-in-a-Row\". Interfaced with a brand-new Logic Language called MVSM to compute game solution.",
    technologies: ["C#", "Visual Studio", "GUI", "Distributed Computing", "SSH"],
    imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Currency Converter App",
    description: "Developed an iOS application that gathered real-time exchange rates for any country and related the rates to a user selected country. Application utilized online web services to collect exchange rate data.",
    technologies: ["iOS", "Swift", "Web Services", "Multithreading"],
    imageUrl: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const contactInfo: ContactInfo = {
  email: "fmp21994@gmail.com",
  phone: "(623) 300-5532",
  location: "Phoenix, Arizona",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "#",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "#",
      icon: "github"
    },
    {
      platform: "Twitter",
      url: "#",
      icon: "twitter"
    }
  ]
};

export const aboutMe: string[] = [
  "I'm a Software Engineer with extensive experience in aerospace and space applications. My career has been dedicated to developing reliable, high-performance software for mission-critical systems, including work on NASA's International Space Station and the Orion Space Capsule Program.",
  "I graduated from Arizona State University with a B.S. in Computer Science, where I was a member of the National Society of Collegiate Scholars and led my Capstone Project team to develop an enterprise-level web application in just 10 months.",
  "My technical expertise includes C/C++, Java, Python, Swift, Angular, Node.js, and LabVIEW, along with proficiency in RTOS, Object-Oriented Programming, and various development methodologies such as Waterfall and Agile."
];

export const personalTraits: string[] = [
  "Problem Solving", "Software Development", "Leadership", "Innovation"
];
