import React from "react";

import {
    AiFillGithub,
    AiFillGitlab,
    BsMusicNoteList,
    CgDesignmodo,
    CgGames,
    FaBasketballBall,
    FaCameraRetro,
    GrFacebookOption,
    FaLinkedinIn,
    FaMediumM,
    IoIosAirplane
} from 'react-icons/all'

export const Social_Media_Info = [
    {
        title: "Github",
        path: "https://github.com/omarAyadi",
        icon: <AiFillGithub/>,
        cName: 'github'
    },
    {
        title: "Gitlab",
        path: "https://gitlab.com/omarAyadi",
        icon: <AiFillGitlab/>,
        cName: 'gitlab'
    },
    {
        title: "LinkedIn",
        path: "https://www.linkedin.com/in/mohamedomarayadi",
        icon: <FaLinkedinIn/>,
        cName: 'linked-in'
    },
    {
        title: "Medium",
        path: "https://omarayadi.medium.com/",
        icon: <FaMediumM/>,
        cName: 'medium'
    },
    {
        title: "Facebook",
        path: "https://www.facebook.com/miroutch",
        icon: <GrFacebookOption/>,
        cName: 'facebook'
    },
]

export const User_Profile_Data = {
    name: "Mohamed Omar Ayadi",
    job: "Web Engineer",
    subJob: "Back-end, Front-end.",
    email: "m.omar.ayadi@gmail.com",
    quota: "Look inside to know a person, everything out is just an illusion",
}

export const About_Me = {
    award:
        {
            name: "Presidential Award In Engineering",
            date: "2018",
        },
    description:
        "I am engineer from Tunisia. I have a clear, logical mind with a practical approach to problem solving and " +
        "a drive to see things through to completion. I have a great eye for detail. I am " +
        "eager to learn, I enjoy overcoming challenges, and i have a genuine interest in " +
        "turning great ideas into great software.",
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

export const User_Work = [
    {
        period: {
            start: "09/2018",
            end: "08/2019"
        },
        company: {
            name: "Target Energy Solutions",
            website: "https://www.target-energysolutions.com/"
        },
        jobTitle: "Junior Back-End Engineer",
        tasks: [
            "Ensure continuous development, improvements and updates with test driven development from early until end of project",
            "Hands-on coding",
            "Perform technical analysis for development of new features"
        ]
    },
    {
        period: {
            start: "09/2019",
            end: "Present"
        },
        company: {
            name: "Target Energy Solutions",
            website: "https://www.target-energysolutions.com/"
        },
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

export const Skills_Data = {
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


