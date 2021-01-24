import React from 'react';
import {Whale} from "../animation";

import './skills.scss'
import {User_Skills} from "../../data";
import {Layout} from "../screen";

function Skills() {
    return (
        <Layout>
            <div className="skills-container">
                <div className="skills-wrapper">
                    {
                        User_Skills.map(
                            ({name, skills}, index) => (
                                <div key={index} className="skills-category">
                                    <div className="skills-category-title">{name}</div>
                                    <ul className="skills-items">
                                        {skills.map(
                                            (skill, ind) => (
                                                <li key={ind}
                                                    className="skills-item">{skill}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )
                        )
                    }
                </div>

                <div className="skills-animation">
                    <Whale/>
                </div>
            </div>
        </Layout>
    );
}

export default Skills;