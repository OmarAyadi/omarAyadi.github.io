import React from 'react';
import {User_Profile_Data} from "../../data";
import {TypedText} from "../text";
import {HoverButton} from "../button";
import {MovingBoat} from "../animation";

import './profile.scss'


function Profile() {

    const {name, job} = User_Profile_Data
    return (
            <div className="profile">
                <div className="profile_content">
                    <div className="profile_content_info">
                        <p className="profile_name">
                            {name}
                        </p>
                        <p className="profile_job">
                            <TypedText text={job + ", Back-end, Front-end."}/>
                        </p>
                    </div>
                    <div className="profile_about">
                        <HoverButton
                            link="/"
                            text="About Me"
                        />
                    </div>
                </div>

                <div className="profile_animation">
                    <MovingBoat/>
                </div>
            </div>
    );
}

export default Profile;