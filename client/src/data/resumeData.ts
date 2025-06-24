import { ResumeData, SocialLink } from "../types/types";

const sweExperience = [
  {
    company: "Honeywell Aerospace",
    title: "Embedded Software Engineer I - II",
    dates: "May 2018 - Jun 2024",
    location: "Phoenix, Arizona",
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
    company: "Performance Software Corp.",
    title: "Software Development Engineer Intern",
    dates: "Jul 2016 - Oct 2016",
    location: "Phoenix, Arizona",
    description: "Aerospace and defense safety critical software engineering firm.",
    responsibilities: [
      "Developed and implemented automated Python-based scripting solutions for avionics software testing on Northrop Grumman's Blackhawk Helicopter project, increasing test execution speed by 45%, significantly reducing manual coding errors, and facilitating project completion two weeks ahead of the original schedule, ensuring early client delivery."
    ]
  },
  {
    company: "Life Jewel Technologies",
    title: "Co-founder and Chief Technology Officer",
    dates: "Dec 2015 - Jul 2016",
    location: "Tempe, Arizona",
    description: "Award-winning startup focused on innovative educational technology.",
    responsibilities: [
      "Engineered and implemented an innovative Bluetooth Low Energy (BLE) based object recognition software solution using Objective-C and Swift with iBeacon technology. Achieved substantial improvements in mobile device battery consumption efficiency, earning the project a prestigious 'Best in Class' award and securing a $10,000 development grant from Arizona State University to further product development."
    ]
  }
];

const csrExperience = [
    {
    company: "Amazon",
    title: "Delivery Partner",
    dates: "February 2023 - Present",
    location: "Phoenix, Arizona",
    description: "Completed 1,600+ deliveries with a 4.97-star rating and 99% on-time rate, resolving real-time customer issues via in-app chat/voice and maintaining <1% complaint rate.",
    responsibilities: [
      "Educate customers on in-app self-service steps (e.g., photo proof, delivery instructions) to prevent repeat contacts.",
      "Demonstrates empathy and clear communication with diverse seniors and caregivers receiving time-sensitive packages (Rx, medical supplies).",
    ],
  },
  {
    company: "Apple",
    title: "Customer Service Advisor",
    dates: "June 2014 - December 2016",
    location: "(Remote) Phoenix, Arizona",
    description: "Handled 75-90 daily contacts via phone and chat (omnichannel outreach), sustaining a 99% CSAT; ranked in Apple's top 4% nationally and earned 16 Outstanding Customer Service Awards.",
    responsibilities: [
      "Guided customers through AppleCare coverage, educated on self-service options, and documented all interactions in Apple CRM; met or beat AHT targets for nine consecutive months.",
      "Authored 30+ knowledge-base articles that cut average handle time 12% and boosted first-contact resolution.",
    ],
  },
  {
    company: "Honeywell",
    title: "Software Engineer II/Technical Liaison",
    dates: "May 2018 - June 2024",
    location: "Phoenix, Arizona",
    description: "Primary point of contact to NASA Orion program engineers; reduced issue-turnaround 44% by synthesizing data from claims, supply-chain and engineering systems and following through to resolution.",
    responsibilities: [
        "Led 14 remote training sessions (Zoom) that improved team accuracy and reduced follow-up questions 35%.",
        "Logged, tracked and reported all client interactions in Jira/Confluence, ensuring compliance with program metrics."
    ]
  }
];

const education = [
  {
    degree: "B.S., Computer Science",
    university: "Arizona State University",
    year: "May 2018",
  },
  {
    degree: "HIPAA for Customer Support Personnel",
    university: "LinkedIn Learning",
    year: "2025",
  },
  {
    degree: "Salesforce Service Cloud & Zendesk Refresher",
    university: "N/A",
    year: "2025",
  },
];

const projects = [
    {
      title: "NASA Orion Spacecraft Display Virtualization",
      description: "Spearheaded virtualization of NASA's Orion spacecraft display unit, reducing issue resolution time by 64% and saving $2.4 million in development costs.",
      imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C/C++", "Wind River Simics", "RTOS", "Embedded Systems"],
    },
    {
      title: "ISS MDM Test Equipment Virtualization",
      description: "Developed virtualized software for International Space Station Multiplexor/Demultiplexer test equipment, reducing testing cycles by 75% and protecting expensive flight hardware.",
      imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C", "Unix/Linux", "Virtualization", "ClearCase"],
    },
    {
      title: "Bluetooth Object Recognition System",
      description: "Engineered an innovative BLE-based object recognition system using iBeacon technology, securing a $10,000 development grant and a 'Best in Class' award.",
      imageUrl: "https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Objective-C", "Swift", "Bluetooth Low Energy", "iBeacon"],
    },
  ];

const socialLinks: SocialLink[] = [];

export const portfolioViews: { [key: string]: ResumeData } = {
  swe: {
    name: "Frank Palmisano",
    title: "Software Engineer",
    email: "frank@palmisano.io",
    phone: "(623) 300-5532",
    location: "Phoenix, AZ",
    contactMessage: "I'm currently seeking new opportunities in software engineering. Whether you have a specific role in mind or just want to connect, I'd love to hear from you.",
    professionalSummary: [
      `Innovative Embedded Software Engineer with 6+ years spearheading virtualization and automated testing solutions for NASA and ISS projects, consistently delivering multimillion-dollar savings. Specialized in designing robust, reliable software for mission-critical aerospace applications, with a proven record of optimizing performance, efficiency, and system reliability.`,
    ],
    personalTraits: ["Detail-Oriented", "Problem-Solver", "Continuous Learner", "Collaborative", "Innovative"],
    experience: sweExperience,
    education,
    skills: [
      {
        category: "Languages & Frameworks",
        items: ["C/C++", "Python", "JavaScript/TypeScript", "React", "Node.js", "Objective-C", "Swift"],
      },
      {
        category: "Development Tools & Platforms",
        items: ["Git & Bitbucket", "Wind River Simics", "LabVIEW", "JIRA", "ClearCase", "Unix/Linux"],
      },
      {
        category: "Core Competencies",
        items: ["Embedded Systems", "Software Virtualization", "Automated Testing", "Agile Methodologies", "System Architecture"],
      },
    ],
    projects,
    socialLinks,
  },
  csr: {
    name: "Frank Palmisano",
    title: "Customer Service Representative",
    email: "frank@palmisano.io",
    phone: "(623) 300-5532",
    location: "Phoenix, AZ",
    contactMessage: "I'm passionate about helping others and am looking for a customer-centric role. If you have a question or an opportunity, please don't hesitate to reach out.",
    professionalSummary: [
      `Empathy-driven service pro with 99% CSAT (Apple) and 4.97-star delivery rating (Amazon Flex/Uber). Skilled at omnichannel outreach (phone, video, SMS, chat) and thriving in metric-based environments. Six years as a liaison with NASA engineers sharpened my talent for explaining complex information clearly and closing service gaps. HIPAA-trained, fluent in Salesforce Service Cloud and Windows applications, and eager to guide Medicare Advantage members through benefits, claims and preventive-care campaigns.`,
    ],
    personalTraits: ["Empathetic", "Patient", "Clear Communicator", "Resilient", "Proactive"],
    experience: csrExperience,
    education,
    skills: [
      {
        category: "Core Competencies",
        items: [
          "Omnichannel outreach (Phone, Video, SMS, Chat)",
          "First-Contact Resolution (FCR)",
          "De-escalation & Conflict Resolution",
          "Empathy & Active Listening",
          "HIPAA & PHI Compliance",
        ],
      },
      {
        category: "CRM & Systems",
        items: ["Salesforce Service Cloud", "Zendesk", "Microsoft Office Suite (Outlook, Teams, Excel)"],
      },
    ],
    projects: [], // CSR view might not show projects
    socialLinks,
  },
  default: {
    name: "Frank Palmisano",
    title: "Customer Service Representative",
    email: "frank@palmisano.io",
    phone: "(623) 300-5532",
    location: "Phoenix, AZ",
    contactMessage: "I'm passionate about helping others and am looking for a customer-centric role. If you have a question or an opportunity, please don't hesitate to reach out.",
    professionalSummary: [
      `Empathy-driven service pro with 99% CSAT (Apple) and 4.97-star delivery rating (Amazon Flex/Uber). Skilled at omnichannel outreach (phone, video, SMS, chat) and thriving in metric-based environments. Six years as a liaison with NASA engineers sharpened my talent for explaining complex information clearly and closing service gaps. HIPAA-trained, fluent in Salesforce Service Cloud and Windows applications, and eager to guide Medicare Advantage members through benefits, claims and preventive-care campaigns.`,
    ],
    personalTraits: ["Empathetic", "Patient", "Clear Communicator", "Resilient", "Proactive"],
    experience: csrExperience,
    education,
    skills: [
      {
        category: "Customer Service Skills",
        items: ["Phone/Chat/Email Support", "CRM Software", "Conflict Resolution", "De-escalation", "Active Listening", "Problem Solving"],
      },
      {
        category: "Technical Skills",
        items: ["Salesforce Service Cloud", "Zendesk", "Microsoft Office", "Windows OS", "HIPAA Compliance"],
      },
    ],
    projects: [], // CSR view might not show projects
    socialLinks,
  },
};