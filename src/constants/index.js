import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shubhyagami',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shubh-kumar-733773187',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Cloud Console',
        description: 'Cloud Console is a database storage system for online gamers, built using MySQL for database management and a full-stack Java framework for robust application development.',
        link: 'https://github.com/shubhyagami/Cloud-console',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Cloud Storage',
        description: 'Cloud Storage is developed using a full-stack Java framework, providing scalable and reliable data management solutions with both backend and frontend technologies.',
        link: 'https://github.com/shubhyagami/cloud-storage',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Chatting app',
        description: 'A chat app built with full-stack Java combines a robust backend using Java for server-side logic with a dynamic frontend, offering real-time messaging and seamless user interactions.',
        link: 'https://github.com/shubhyagami/chat-app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Gemini Chatbot',
        description: 'A Gemini chatbot built with HTML, CSS, and JavaScript provides an interactive user interface and seamless integration, delivering responsive and engaging conversational experiences.',
        link: 'https://github.com/shubhyagami/geminibot',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Weather Forecast',
        description: 'A weather forecast application using frontend technologies and APIs provides real-time weather data and forecasts, delivering an interactive and user-friendly experience..',
        link: 'https://github.com/shubhyagami/Weather-Forecast',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'IP Scanner',
        description: 'An IP scanner built with JavaScript, HTML, and CSS allows users to scan and display IP addresses within a network, offering a user-friendly interface for network analysis.',
        link: 'https://github.com/shubhyagami/ip-scanner',
    }
];