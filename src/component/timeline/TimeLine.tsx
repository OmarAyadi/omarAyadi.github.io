import React from 'react';
import './timeline.scss'
import {User_Work} from "../../data";

function TimeLine() {

    const getYears = () => {
        const yearsLi = []
        for (let year = 2017; year < 2022; year++) {
            yearsLi.push(<li key={year} className="timeline-year">{year}</li>)
        }
        return yearsLi
    }

    return (
        <div className="timeline-wrapper">
            <ul className="timeline-years">
                {getYears()}
            </ul>
            <ul className="timeline-works">
                {
                    User_Work.map(
                        ({company: {name, website}, period, jobTitle}, index) => (
                            <li key={index} className={`timeline-work timeline-work-${index + 1}`}>
                                <span className={`timeline-work-duration timeline-work-duration-${index + 1}`}></span>
                                <span className="timeline-work-year">{period}</span>
                                <span className={`timeline-work-job timeline-work-job-${index + 1}`}>{jobTitle}</span>
                                <a href={website} className="timeline-work-company">({name})</a>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default TimeLine;