import React from "react";

import {
    Hero,
    Profile_Logo,
} from '../static';

import {FaLinkedinIn, FaFacebookF, FaInstagram, FaMediumM, FaCameraRetro, FaBasketballBall} from 'react-icons/fa'
import {AiFillGithub, AiFillGitlab} from 'react-icons/ai'
import {IoIosCodeWorking, IoIosAirplane} from 'react-icons/io'
import {BsMusicNoteList} from 'react-icons/bs'
import {CgGames, CgDesignmodo} from 'react-icons/cg'
import {SiAboutDotMe} from 'react-icons/si'


export const Side_Bar_Data = [
    {
        title: "About Me",
        path: "/about",
        icon: <SiAboutDotMe/>,
        cName: 'nav-text'
    },
    {
        title: "Work",
        path: "/work",
        icon: <IoIosCodeWorking/>,
        cName: 'nav-text'
    }
]

export const Social_Media_Info = [
    {
        title: "Github",
        path: "https://github.com/omarAyadi",
        icon: <AiFillGithub/>,
        cName: 'nav-media-icon'
    },
    {
        title: "Gitlab",
        path: "https://gitlab.com/omarAyadi",
        icon: <AiFillGitlab/>,
        cName: 'nav-media-icon'
    },
    {
        title: "LinkedIn",
        path: "https://www.linkedin.com/in/mohamedomarayadi",
        icon: <FaLinkedinIn/>,
        cName: 'nav-media-icon'
    },
    {
        title: "Facebook",
        path: "https://www.facebook.com/miroutch",
        icon: <FaFacebookF/>,
        cName: 'nav-media-icon'
    },
    {
        title: "Instagram",
        path: "https://www.instagram.com/ayadiomar93",
        icon: <FaInstagram/>,
        cName: 'nav-media-icon'
    },
    {
        title: "Medium",
        path: "https://omarayadi.medium.com/",
        icon: <FaMediumM/>,
        cName: 'nav-media-icon'
    },
]

export const User_Profile_Data = {
    name: "Mohamed Omar Ayadi",
    work: "Software Engineer",
    email: "m.omar.ayadi@gmail.com",
    profileLogo: Profile_Logo,
    additionalPicture: Hero,
    quota: "Look inside to know a person, everything out is just an illusion",
}

export const About_Me = {
    awards: [
        {
            name: "Presidential Award (Best Grade In Engineering)",
            date: "2018",
        }
    ],
    description:
        "I have a clear, logical mind with a practical approach to problem solving and " +
        "a drive to see things through to completion. I have a great eye for detail. I am " +
        "eager to learn, I enjoy overcoming challenges, and i have a genuine interest in " +
        "Programing, Networking and new technologies.",
    education: [
        {
            major: "Applied License in embedded electronics",
            period: "2011-2014",
            university: "National School of Electronics and Telecommunication Sfax (Tunisia)"
        },
        {
            major: "Master’s degree in information and communication science",
            period: "2014-2015",
            university: "National School of Electronics and Telecommunication Sfax (Tunisia)"
        },
        {
            major: "Telecommunication engineering",
            period: "2015-2018",
            university: "National School of Electronics and Telecommunication Sfax (Tunisia)"
        }
    ],
    interests: [
        {
            name: "Photography",
            logo: <FaCameraRetro/>,
        },
        {
            name: "Design",
            logo: <CgDesignmodo/>,
        },
        {
            name: "Sport",
            logo: <FaBasketballBall/>,
        },
        {
            name: "Gaming",
            logo: <CgGames/>,
        },
        {
            name: "Music",
            logo: <BsMusicNoteList/>,
        },
        {
            name: "Travel",
            logo: <IoIosAirplane/>,
        },
    ]
}

export const Work = [
    {
        period: "09/2018 - 08/2019",
        company: "Target Energy Solutions (Tunisia)",
        jobTitle: "Junior Back-End Engineer",
        tasks: [
            "Ensure continuous development, improvements and updates with test driven development from early until end of project",
            "Hands-on coding",
            "Perform technical analysis for development of new features"
        ]
    },
    {
        period: "09/2019 - Present",
        company: "Target Energy Solutions (Tunisia)",
        jobTitle: "Senior Back-End Engineer",
        tasks: [
            "Create and maintain scalable back-end projects",
            "Contribute as part of the team by leveraging continuous delivery methods",
            "Maintain up-to-date knowledge of technology standards, industry trends, emerging technologies and software development best practice",
            "Support developers within the team by providing constructive guidance (review code, sharing experience, monitoring and supervising interns)",
            "Proactively look for ways to improve performance, simplify interactions, test driven development and optimization"
        ],
    }
]

export const Skills = {
    technical: [
        "Java",
        "Kotlin",
        "Spring Boot",
        "Python",
        "Golang",
        "C",
        "JavaScript",
        "TypeScript",
        "React",
        "Rest",
        "Grpc",
        "Git",
        "Docker",
        "kubernetes",
        "Sql",
        "Nosql",
        "Windows",
        "Ubuntu",
        "Photoshop",
        "Illustrator"
    ],
    soft: [
        "Leadership",
        "Creativity",
        "Problem Solving",
        "Collaboration and Communication",
        "Decision Making",
        "Management"
    ]
}


