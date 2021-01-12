import React from 'react';
import "./about-me.css"

type AppProps = {
    description: string,
    email : string,
    phone : string
}

function AboutMe({description, email, phone}: AppProps) {
    return (
        <div>
            <div>{description}</div>
            <div>{email}</div>
            <div>{phone}</div>
        </div>
    );
}

export default AboutMe;