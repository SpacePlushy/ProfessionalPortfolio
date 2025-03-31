import { Experience, Project, Education, Skill, SkillCategory, ContactInfo } from '../types/types';

export const experiences: Experience[] = [
  {
    title: "Embedded Software Engineer I - II",
    company: "Honeywell Aerospace",
    location: "Phoenix, Arizona",
    period: "May 2018 - Jun 2024",
    description: "Aerospace, Defense, and Space engineering firm specializing in mission-critical systems.",
    responsibilities: [
      "Spearheaded the creation of embedded software in C/C++ utilizing Wind River Simics to fully virtualize NASA's Orion spacecraft display unit, significantly reducing issue resolution turnaround by 64% from weeks down to days. This initiative achieved cost savings exceeding $2.4 million for NASA and Honeywell, substantially improving software maintainability, reliability, and efficiency.",
      "Initiated the virtualization of ISS Multiplexor/Demultiplexer (MDM) test equipment using Unix and Linux operating systems.",
      "Created virtualized software driver code and test cases, version controlled with bitbucket and ClearCase. This reduced testing cycles by approximately 75%, decreasing from days to hours, substantially cutting operational costs and mitigating risk to expensive flight hardware.",
      "Created and optimized automated test software solutions using LabVIEW, C, and Python, directly reducing product testing time from 8 hours per unit to 3 hours per unit, resulting in a 62.5% improvement in production efficiency and throughput.",
      "Designed and conducted comprehensive training courses on Simics Fundamentals and Model Design across 14 sessions, educating engineers ranging from entry-level to Technical Fellows. Managed training teams effectively while concurrently executing core engineering responsibilities, enhancing overall team proficiency and reducing onboarding time."
    ]
  },
  {
    title: "Software Development Engineer Intern",
    company: "Performance Software Corp.",
    location: "Phoenix, Arizona",
    period: "Jul 2016 - Oct 2016",
    description: "Aerospace and defense safety critical software engineering firm.",
    responsibilities: [
      "Developed and implemented automated Python-based scripting solutions for avionics software testing on Northrop Grumman's Blackhawk Helicopter project, increasing test execution speed by 45%, significantly reducing manual coding errors, and facilitating project completion two weeks ahead of the original schedule, ensuring early client delivery."
    ]
  },
  {
    title: "Co-founder and Chief Technology Officer",
    company: "Life Jewel Technologies",
    location: "Tempe, Arizona",
    period: "Dec 2015 - Jul 2016",
    description: "Award-winning startup focused on innovative educational technology.",
    responsibilities: [
      "Engineered and implemented an innovative Bluetooth Low Energy (BLE) based object recognition software solution using Objective-C and Swift with iBeacon technology. Achieved substantial improvements in mobile device battery consumption efficiency, earning the project a prestigious 'Best in Class' award and securing a $10,000 development grant from Arizona State University to further product development."
    ]
  },
  {
    title: "Customer Service Advisor",
    company: "Apple Inc.",
    location: "Tempe, Arizona",
    period: "Jun 2014 - Dec 2014",
    description: "Multinational technology company that designs, develops, and sells consumer electronics and software.",
    responsibilities: [
      "Delivered superior technical customer support services, consistently achieving a customer satisfaction rating of 99%, ranking in the top 4% nationally. Recognized with 16 Outstanding Customer Service Awards for rapid and effective resolution of complex technical issues, substantially improving customer experience, retention, and brand loyalty."
    ]
  }
];

export const education: Education = {
  school: "Arizona State University",
  department: "Ira A. Fulton Schools of Engineering",
  degree: "B.S., Computer Science",
  gpa: "",
  location: "Tempe, Arizona",
  graduationDate: "May 2018",
  achievements: []
};

export const technicalSkills: Skill[] = [
  { name: "C/C++", percentage: 95 },
  { name: "Python", percentage: 90 },
  { name: "Java", percentage: 85 },
  { name: "C#", percentage: 80 },
  { name: "JavaScript/TypeScript", percentage: 75 },
  { name: "React", percentage: 70 },
  { name: "Assembly", percentage: 65 }
];

export const softwareTools: string[] = [
  "Simics", "LabVIEW", "Git", "Unix/Linux", "Visual Studio"
];

export const professionalSkills: SkillCategory[] = [
  {
    title: "Embedded Development",
    items: [
      "Embedded Programming",
      "RTOS",
      "Microprocessors",
      "Unit Testing",
      "Virtualization"
    ]
  },
  {
    title: "System Engineering",
    items: [
      "Unix/Linux",
      "Asynchronous Programming",
      "Version Control",
      "Automated Testing",
      "System Optimization"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "NASA Orion Spacecraft Display Virtualization",
    description: "Spearheaded virtualization of NASA's Orion spacecraft display unit, reducing issue resolution time by 64% and saving $2.4 million in development costs.",
    technologies: ["C/C++", "Wind River Simics", "RTOS", "Embedded Systems"],
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ISS MDM Test Equipment Virtualization",
    description: "Developed virtualized software for International Space Station Multiplexor/Demultiplexer test equipment, reducing testing cycles by 75% and protecting expensive flight hardware.",
    technologies: ["C", "Unix/Linux", "Virtualization", "ClearCase"],
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bluetooth Object Recognition System",
    description: "Engineered an innovative BLE-based object recognition system using iBeacon technology, securing a $10,000 development grant and a 'Best in Class' award.",
    technologies: ["Objective-C", "Swift", "Bluetooth Low Energy", "iBeacon"],
    imageUrl: "https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    }
  ]
};

export const aboutMe: string[] = [
  "I'm an Innovative Embedded Software Engineer with 6+ years spearheading virtualization and automated testing solutions for NASA and ISS projects, consistently delivering multimillion-dollar savings. Specialized in designing robust, reliable software for mission-critical aerospace applications, with a proven record of optimizing performance, efficiency, and system reliability.",
  "My expertise includes embedded systems programming, RTOS development, and virtualization technologies that have significantly improved software testing and development processes for space flight systems. I've successfully led teams and training sessions while maintaining a focus on technical excellence and innovation."
];

export const personalTraits: string[] = [
  "Virtualization Expert", "Embedded Systems", "Process Optimization", "Technical Leadership"
];