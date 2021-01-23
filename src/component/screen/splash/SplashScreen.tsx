import React, {useEffect, useState} from 'react';
import {User_Profile_Data} from "../../../data";
import './splash_screen.scss'

export const useSplashScreen = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // let the splash_screen available for 4.5sec
        const interval = setInterval(() => {
            setLoading(false)
        }, 4_500)

        // clear the timeout when it's over to reduce memory leak
        return () => clearInterval(interval)
    }, [])

    const {name, job} = User_Profile_Data

    const SplashScreen =
        <div className="splash-screen-wrapper">
            <div className="splash-screen-box">
                <div className="splash-screen-box-title">
                    <div className="splash-screen-box-block"/>
                    <h1 className="splash-screen-box-block-name">{name}<span></span></h1>
                </div>
                <div className="splash-screen-box-role">
                    <div className="splash-screen-box-block"/>
                    <p className="splash-screen-box-block-job" >{job}</p>
                </div>
            </div>
        </div>

    return [loading, SplashScreen]
}