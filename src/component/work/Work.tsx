import React from 'react';
import './work.scss'
import {User_Work} from "../../data";
import {PacMan} from "../animation";
import {Layout} from "../screen";

function Work() {

    return (
        <Layout useSplash={false}>
            <div className="work_container">
                <ul className="work_elements">
                    {User_Work.map(
                        ({jobTitle, period, company}, index) => (
                            <li key={index} className="work_element">
                                <span className="work_element_circle"></span>
                                <div className="work_element_title">{jobTitle}</div>

                                <div className="work_element_company"
                                     onClick={() => window.open(company.website)}>
                                    {company.name}
                                </div>
                                <div className="work_element_time">
                                    <span className="work_element_time_start">{period.start}</span>
                                    <span className="work_element_time_end">{period.end}</span>
                                </div>
                            </li>
                        )
                    )}

                </ul>
                <div className="work_animation">
                    <PacMan/>
                </div>
            </div>
        </Layout>
    );
}

export default Work;