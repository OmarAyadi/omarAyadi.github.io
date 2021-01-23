import React from 'react';
import './about.scss'
import {About_Me} from "../../data";
import {MovingPlanet} from "../animation";
import {IconContext} from "react-icons";
import {FaAward} from "react-icons/all";
import {Layout} from "../screen";

function About() {
    const {award, description} = About_Me

    return (
        <Layout useSplash={true}>
            <div className="about-content about-content-active">
                <div className="about-wrapper">
                    <div className="about-title">BIO</div>
                    <div className="about-description">
                        <span></span>
                        {description}</div>
                    <div className="about-award">
                        <IconContext.Provider value={{className: "about-award-icon"}}>
                            <FaAward/>
                        </IconContext.Provider>
                        <div className="about-award-info">
                            <span className="about-award-year">{award.date}</span>
                            <p className="about-award-name">{award.name}</p>
                        </div>
                    </div>
                </div>

                <div className="about-animation">
                    <MovingPlanet/>
                </div>
            </div>
        </Layout>
    );
}

export default About;